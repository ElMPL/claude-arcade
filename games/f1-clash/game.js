var cf=0,th=1,hf=2;var oa=1,$o=2,js=3,Xi=0,en=1,He=2,bi=0,qi=1,fs=2,eh=3,nh=4,uf=5;var ds=100,ff=101,df=102,pf=103,mf=104,gf=200,xf=201,_f=202,vf=203,ih=204,sh=205,yf=206,Mf=207,Sf=208,bf=209,Ef=210,wf=211,Tf=212,Af=213,Rf=214,fo=0,po=1,mo=2,Gs=3,go=4,xo=5,_o=6,vo=7,rh=0,Cf=1,Pf=2,ti=0,la=1,ca=2,ha=3,ps=4,ua=5,fa=6,da=7;var ah=300,ms=301,tr=302,Jo=303,Ko=304,zi=1e3,Dn=1001,yo=1002,je=1003,If=1004;var pa=1005;var xn=1006,Qo=1007;var Ei=1008;var bn=1009,oh=1010,lh=1011,er=1012,jo=1013,Wn=1014,Fn=1015,nn=1016,tl=1017,el=1018,gs=1020,ch=35902,hh=35899,uh=1021,fh=1022,Xn=1023,xi=1026,wi=1027,nl=1028,il=1029,Yi=1030,sl=1031;var rl=1033,ma=33776,ga=33777,xa=33778,_a=33779,al=35840,ol=35841,ll=35842,cl=35843,hl=36196,ul=37492,fl=37496,dl=37488,pl=37489,va=37490,ml=37491,gl=37808,xl=37809,_l=37810,vl=37811,yl=37812,Ml=37813,Sl=37814,bl=37815,El=37816,wl=37817,Tl=37818,Al=37819,Rl=37820,Cl=37821,Pl=36492,Il=36494,Ll=36495,Dl=36283,Nl=36284,ya=36285,Ul=36286;var Er=2300,Mo=2301,ho=2302,Gc=2303,Vc=2400,Wc=2401,Xc=2402;var Lf=3200;var Fl=0,Df=1,Ti="",ke="srgb",wr="srgb-linear",Tr="linear",ve="srgb";var uo=7680;var Nf=519,Uf=512,Ff=513,Of=514,dh=515,Bf=516,zf=517,ph=518,mh=519,gh=35044;var xh="300 es",Nn=2e3,Vs=2001;function zp(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function kp(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Ar(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function kf(){let n=Ar("canvas");return n.style.display="block",n}var Tu={},Ws=null;function Rr(...n){let t="THREE."+n.shift();Ws?Ws("log",t,...n):console.log(t,...n)}function Hf(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Zt(...n){n=Hf(n);let t="THREE."+n.shift();if(Ws)Ws("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Jt(...n){n=Hf(n);let t="THREE."+n.shift();if(Ws)Ws("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function os(...n){let t=n.join(" ");t in Tu||(Tu[t]=!0,Zt(...n))}function Gf(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var Vf={[fo]:fo,[mo]:_o,[go]:go,[Gs]:xo,[po]:po,[_o]:mo,[vo]:vo,[xo]:Gs},Jn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var gc=Math.PI/180,So=180/Math.PI;function Zi(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(on[n&255]+on[n>>8&255]+on[n>>16&255]+on[n>>24&255]+"-"+on[t&255]+on[t>>8&255]+"-"+on[t>>16&15|64]+on[t>>24&255]+"-"+on[e&63|128]+on[e>>8&255]+"-"+on[e>>16&255]+on[e>>24&255]+on[i&255]+on[i>>8&255]+on[i>>16&255]+on[i>>24&255]).toLowerCase()}function ce(n,t,e){return Math.max(t,Math.min(e,n))}function Hp(n,t){return(n%t+t)%t}function xc(n,t,e){return(1-e)*n+e*t}function Wf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ol(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Xf(n,t){if(t.constructor===Float32Array)return n;let e=Ol(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/e,-1)}function qf(n,t){if(t.constructor===Float32Array)return n;let e=Ol(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*e)}var pt=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ce(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ce(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Kn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3],f=r[a+0],d=r[a+1],m=r[a+2],v=r[a+3];if(u!==v||c!==f||l!==d||h!==m){let p=c*f+l*d+h*m+u*v;p<0&&(f=-f,d=-d,m=-m,v=-v,p=-p);let g=1-o;if(p<.9995){let y=Math.acos(p),S=Math.sin(y);g=Math.sin(g*y)/S,o=Math.sin(o*y)/S,c=c*g+f*o,l=l*g+d*o,h=h*g+m*o,u=u*g+v*o}else{c=c*g+f*o,l=l*g+d*o,h=h*g+m*o,u=u*g+v*o;let y=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=y,l*=y,h*=y,u*=y}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,a){let o=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[a],f=r[a+1],d=r[a+2],m=r[a+3];return t[e]=o*m+h*u+c*d-l*f,t[e+1]=c*m+h*f+l*u-o*d,t[e+2]=l*m+h*d+o*f-c*u,t[e+3]=h*m-o*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(s/2),u=o(r/2),f=c(i/2),d=c(s/2),m=c(r/2);switch(a){case"XYZ":this._x=f*h*u+l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u-f*d*m;break;case"YXZ":this._x=f*h*u+l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u+f*d*m;break;case"ZXY":this._x=f*h*u-l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u-f*d*m;break;case"ZYX":this._x=f*h*u-l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u+f*d*m;break;case"YZX":this._x=f*h*u+l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u-f*d*m;break;case"XZY":this._x=f*h*u-l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u+f*d*m;break;default:Zt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=i+o+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(a-s)*d}else if(i>o&&i>u){let d=2*Math.sqrt(1+i-o-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+l)/d}else if(o>u){let d=2*Math.sqrt(1+o-i-u);this._w=(r-l)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-i-o);this._w=(a-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ce(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-i*l,this._z=r*h+a*l+i*c-s*o,this._w=a*h-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Au.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Au.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*i),h=2*(o*e-r*s),u=2*(r*i-a*e);return this.x=e+c*l+a*u-o*h,this.y=i+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ce(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return _c.copy(this).projectOnVector(t),this.sub(_c)}reflect(t){return this.sub(_c.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ce(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},_c=new O,Au=new Kn,Qt=class{static{this.prototype.isMatrix3=!0}constructor(t,e,i,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,c,l)}set(t,e,i,s,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],u=i[7],f=i[2],d=i[5],m=i[8],v=s[0],p=s[3],g=s[6],y=s[1],S=s[4],M=s[7],A=s[2],T=s[5],x=s[8];return r[0]=a*v+o*y+c*A,r[3]=a*p+o*S+c*T,r[6]=a*g+o*M+c*x,r[1]=l*v+h*y+u*A,r[4]=l*p+h*S+u*T,r[7]=l*g+h*M+u*x,r[2]=f*v+d*y+m*A,r[5]=f*p+d*S+m*T,r[8]=f*g+d*M+m*x,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-i*r*h+i*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,f=o*c-h*r,d=l*r-a*c,m=e*u+i*f+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/m;return t[0]=u*v,t[1]=(s*l-h*i)*v,t[2]=(o*i-s*a)*v,t[3]=f*v,t[4]=(h*e-s*c)*v,t[5]=(s*r-o*e)*v,t[6]=d*v,t[7]=(i*c-l*e)*v,t[8]=(a*e-i*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return os("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(vc.makeScale(t,e)),this}rotate(t){return os("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(vc.makeRotation(-t)),this}translate(t,e){return os("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(vc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},vc=new Qt,Ru=new Qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cu=new Qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Gp(){let n={enabled:!0,workingColorSpace:wr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ve&&(s.r=gi(s.r),s.g=gi(s.g),s.b=gi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ve&&(s.r=Hs(s.r),s.g=Hs(s.g),s.b=Hs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ti?Tr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[wr]:{primaries:t,whitePoint:i,transfer:Tr,toXYZ:Ru,fromXYZ:Cu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ke},outputColorSpaceConfig:{drawingBufferColorSpace:ke}},[ke]:{primaries:t,whitePoint:i,transfer:ve,toXYZ:Ru,fromXYZ:Cu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ke}}}),n}var ue=Gp();function gi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Hs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var bs,bo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{bs===void 0&&(bs=Ar("canvas")),bs.width=t.width,bs.height=t.height;let s=bs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=bs}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ar("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=gi(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(gi(e[i]/255)*255):e[i]=gi(e[i]);return{data:e,width:t.width,height:t.height}}else return Zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Vp=0,Xs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Vp++}),this.uuid=Zi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(yc(s[a].image)):r.push(yc(s[a]))}else r=yc(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function yc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?bo.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Zt("Texture: Unable to serialize Texture."),{})}var Wp=0,Mc=new O,_n=class n extends Jn{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Dn,s=Dn,r=xn,a=Ei,o=Xn,c=bn,l=n.DEFAULT_ANISOTROPY,h=Ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wp++}),this.uuid=Zi(),this.name="",this.source=new Xs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Mc).x}get height(){return this.source.getSize(Mc).y}get depth(){return this.source.getSize(Mc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Zt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ah)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case zi:t.x=t.x-Math.floor(t.x);break;case Dn:t.x=t.x<0?0:1;break;case yo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case zi:t.y=t.y-Math.floor(t.y);break;case Dn:t.y=t.y<0?0:1;break;case yo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=ah;_n.DEFAULT_ANISOTROPY=1;var Le=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],m=c[9],v=c[2],p=c[6],g=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(m+p)<.1&&Math.abs(l+d+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(l+1)/2,M=(d+1)/2,A=(g+1)/2,T=(h+f)/4,x=(u+v)/4,E=(m+p)/4;return S>M&&S>A?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=T/i,r=x/i):M>A?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=T/s,r=E/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=x/r,s=E/r),this.set(i,s,r,e),this}let y=Math.sqrt((p-m)*(p-m)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(p-m)/y,this.y=(u-v)/y,this.z=(f-h)/y,this.w=Math.acos((l+d+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this.w=ce(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this.w=ce(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ce(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Eo=class extends Jn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Le(0,0,t,e),this.scissorTest=!1,this.viewport=new Le(0,0,t,e),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new _n({width:t,height:e,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:xn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Xs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ye=class extends Eo{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Cr=class extends _n{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=je,this.minFilter=je,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var wo=class extends _n{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=je,this.minFilter=je,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ge=class n{static{this.prototype.isMatrix4=!0}constructor(t,e,i,s,r,a,o,c,l,h,u,f,d,m,v,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,c,l,h,u,f,d,m,v,p)}set(t,e,i,s,r,a,o,c,l,h,u,f,d,m,v,p){let g=this.elements;return g[0]=t,g[4]=e,g[8]=i,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=c,g[2]=l,g[6]=h,g[10]=u,g[14]=f,g[3]=d,g[7]=m,g[11]=v,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/Es.setFromMatrixColumn(t,0).length(),r=1/Es.setFromMatrixColumn(t,1).length(),a=1/Es.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=a*h,d=a*u,m=o*h,v=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+m*l,e[5]=f-v*l,e[9]=-o*c,e[2]=v-f*l,e[6]=m+d*l,e[10]=a*c}else if(t.order==="YXZ"){let f=c*h,d=c*u,m=l*h,v=l*u;e[0]=f+v*o,e[4]=m*o-d,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=d*o-m,e[6]=v+f*o,e[10]=a*c}else if(t.order==="ZXY"){let f=c*h,d=c*u,m=l*h,v=l*u;e[0]=f-v*o,e[4]=-a*u,e[8]=m+d*o,e[1]=d+m*o,e[5]=a*h,e[9]=v-f*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let f=a*h,d=a*u,m=o*h,v=o*u;e[0]=c*h,e[4]=m*l-d,e[8]=f*l+v,e[1]=c*u,e[5]=v*l+f,e[9]=d*l-m,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let f=a*c,d=a*l,m=o*c,v=o*l;e[0]=c*h,e[4]=v-f*u,e[8]=m*u+d,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=d*u+m,e[10]=f-v*u}else if(t.order==="XZY"){let f=a*c,d=a*l,m=o*c,v=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+v,e[5]=a*h,e[9]=d*u-m,e[2]=m*u-d,e[6]=o*h,e[10]=v*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Xp,t,qp)}lookAt(t,e,i){let s=this.elements;return wn.subVectors(t,e),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),Ni.crossVectors(i,wn),Ni.lengthSq()===0&&(Math.abs(i.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),Ni.crossVectors(i,wn)),Ni.normalize(),Fa.crossVectors(wn,Ni),s[0]=Ni.x,s[4]=Fa.x,s[8]=wn.x,s[1]=Ni.y,s[5]=Fa.y,s[9]=wn.y,s[2]=Ni.z,s[6]=Fa.z,s[10]=wn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],u=i[5],f=i[9],d=i[13],m=i[2],v=i[6],p=i[10],g=i[14],y=i[3],S=i[7],M=i[11],A=i[15],T=s[0],x=s[4],E=s[8],D=s[12],C=s[1],U=s[5],B=s[9],W=s[13],L=s[2],F=s[6],$=s[10],G=s[14],ut=s[3],et=s[7],at=s[11],P=s[15];return r[0]=a*T+o*C+c*L+l*ut,r[4]=a*x+o*U+c*F+l*et,r[8]=a*E+o*B+c*$+l*at,r[12]=a*D+o*W+c*G+l*P,r[1]=h*T+u*C+f*L+d*ut,r[5]=h*x+u*U+f*F+d*et,r[9]=h*E+u*B+f*$+d*at,r[13]=h*D+u*W+f*G+d*P,r[2]=m*T+v*C+p*L+g*ut,r[6]=m*x+v*U+p*F+g*et,r[10]=m*E+v*B+p*$+g*at,r[14]=m*D+v*W+p*G+g*P,r[3]=y*T+S*C+M*L+A*ut,r[7]=y*x+S*U+M*F+A*et,r[11]=y*E+S*B+M*$+A*at,r[15]=y*D+S*W+M*G+A*P,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],m=t[3],v=t[7],p=t[11],g=t[15],y=c*d-l*f,S=o*d-l*u,M=o*f-c*u,A=a*d-l*h,T=a*f-c*h,x=a*u-o*h;return e*(v*y-p*S+g*M)-i*(m*y-p*A+g*T)+s*(m*S-v*A+g*x)-r*(m*M-v*T+p*x)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],h=t[10];return e*(a*h-o*l)-i*(r*h-o*c)+s*(r*l-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],m=t[12],v=t[13],p=t[14],g=t[15],y=e*o-i*a,S=e*c-s*a,M=e*l-r*a,A=i*c-s*o,T=i*l-r*o,x=s*l-r*c,E=h*v-u*m,D=h*p-f*m,C=h*g-d*m,U=u*p-f*v,B=u*g-d*v,W=f*g-d*p,L=y*W-S*B+M*U+A*C-T*D+x*E;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/L;return t[0]=(o*W-c*B+l*U)*F,t[1]=(s*B-i*W-r*U)*F,t[2]=(v*x-p*T+g*A)*F,t[3]=(f*T-u*x-d*A)*F,t[4]=(c*C-a*W-l*D)*F,t[5]=(e*W-s*C+r*D)*F,t[6]=(p*M-m*x-g*S)*F,t[7]=(h*x-f*M+d*S)*F,t[8]=(a*B-o*C+l*E)*F,t[9]=(i*C-e*B-r*E)*F,t[10]=(m*T-v*M+g*y)*F,t[11]=(u*M-h*T-d*y)*F,t[12]=(o*D-a*U-c*E)*F,t[13]=(e*U-i*D+s*E)*F,t[14]=(v*S-m*A-p*y)*F,t[15]=(h*A-u*S+f*y)*F,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+i,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,u=o+o,f=r*l,d=r*h,m=r*u,v=a*h,p=a*u,g=o*u,y=c*l,S=c*h,M=c*u,A=i.x,T=i.y,x=i.z;return s[0]=(1-(v+g))*A,s[1]=(d+M)*A,s[2]=(m-S)*A,s[3]=0,s[4]=(d-M)*T,s[5]=(1-(f+g))*T,s[6]=(p+y)*T,s[7]=0,s[8]=(m+S)*x,s[9]=(p-y)*x,s[10]=(1-(f+v))*x,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=Es.set(s[0],s[1],s[2]).length(),o=Es.set(s[4],s[5],s[6]).length(),c=Es.set(s[8],s[9],s[10]).length();r<0&&(a=-a),zn.copy(this);let l=1/a,h=1/o,u=1/c;return zn.elements[0]*=l,zn.elements[1]*=l,zn.elements[2]*=l,zn.elements[4]*=h,zn.elements[5]*=h,zn.elements[6]*=h,zn.elements[8]*=u,zn.elements[9]*=u,zn.elements[10]*=u,e.setFromRotationMatrix(zn),i.x=a,i.y=o,i.z=c,this}makePerspective(t,e,i,s,r,a,o=Nn,c=!1){let l=this.elements,h=2*r/(e-t),u=2*r/(i-s),f=(e+t)/(e-t),d=(i+s)/(i-s),m,v;if(c)m=r/(a-r),v=a*r/(a-r);else if(o===Nn)m=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Vs)m=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=Nn,c=!1){let l=this.elements,h=2/(e-t),u=2/(i-s),f=-(e+t)/(e-t),d=-(i+s)/(i-s),m,v;if(c)m=1/(a-r),v=a/(a-r);else if(o===Nn)m=-2/(a-r),v=-(a+r)/(a-r);else if(o===Vs)m=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Es=new O,zn=new ge,Xp=new O(0,0,0),qp=new O(1,1,1),Ni=new O,Fa=new O,wn=new O,Pu=new ge,Iu=new Kn,_i=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ce(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ce(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ce(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ce(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Pu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Pu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Iu.setFromEuler(this),this.setFromQuaternion(Iu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};_i.DEFAULT_ORDER="XYZ";var Pr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Yp=0,Lu=new O,ws=new Kn,hi=new ge,Oa=new O,fr=new O,Zp=new O,$p=new Kn,Du=new O(1,0,0),Nu=new O(0,1,0),Uu=new O(0,0,1),Fu={type:"added"},Jp={type:"removed"},Ts={type:"childadded",child:null},Sc={type:"childremoved",child:null},Be=class n extends Jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yp++}),this.uuid=Zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new O,e=new _i,i=new Kn,s=new O(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ge},normalMatrix:{value:new Qt}}),this.matrix=new ge,this.matrixWorld=new ge,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ws.setFromAxisAngle(t,e),this.quaternion.multiply(ws),this}rotateOnWorldAxis(t,e){return ws.setFromAxisAngle(t,e),this.quaternion.premultiply(ws),this}rotateX(t){return this.rotateOnAxis(Du,t)}rotateY(t){return this.rotateOnAxis(Nu,t)}rotateZ(t){return this.rotateOnAxis(Uu,t)}translateOnAxis(t,e){return Lu.copy(t).applyQuaternion(this.quaternion),this.position.add(Lu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Du,t)}translateY(t){return this.translateOnAxis(Nu,t)}translateZ(t){return this.translateOnAxis(Uu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Oa.copy(t):Oa.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(fr,Oa,this.up):hi.lookAt(Oa,fr,this.up),this.quaternion.setFromRotationMatrix(hi),s&&(hi.extractRotation(s.matrixWorld),ws.setFromRotationMatrix(hi),this.quaternion.premultiply(ws.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Jt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Fu),Ts.child=t,this.dispatchEvent(Ts),Ts.child=null):Jt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Jp),Sc.child=t,this.dispatchEvent(Sc),Sc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),hi.multiply(t.parent.matrixWorld)),t.applyMatrix4(hi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Fu),Ts.child=t,this.dispatchEvent(Ts),Ts.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,t,Zp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,$p,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),d=a(t.animations),m=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),m.length>0&&(i.nodes=m)}return i.object=s,i;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Be.DEFAULT_UP=new O(0,1,0);Be.DEFAULT_MATRIX_AUTO_UPDATE=!0;Be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ee=class extends Be{constructor(){super(),this.isGroup=!0,this.type="Group"}},Kp={type:"move"},qs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ee,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ee,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ee,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let v of t.hand.values()){let p=e.getJointPose(v,i),g=this._getHandJoint(l,v);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,m=.005;l.inputState.pinching&&f>d+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Kp)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Ee;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Yf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ui={h:0,s:0,l:0},Ba={h:0,s:0,l:0};function bc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var kt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ue.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=ue.workingColorSpace){return this.r=t,this.g=e,this.b=i,ue.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=ue.workingColorSpace){if(t=Hp(t,1),e=ce(e,0,1),i=ce(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=bc(a,r,t+1/3),this.g=bc(a,r,t),this.b=bc(a,r,t-1/3)}return ue.colorSpaceToWorking(this,s),this}setStyle(t,e=ke){function i(r){r!==void 0&&parseFloat(r)<1&&Zt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Zt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ke){let i=Yf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=gi(t.r),this.g=gi(t.g),this.b=gi(t.b),this}copyLinearToSRGB(t){return this.r=Hs(t.r),this.g=Hs(t.g),this.b=Hs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ke){return ue.workingToColorSpace(ln.copy(this),t),Math.round(ce(ln.r*255,0,255))*65536+Math.round(ce(ln.g*255,0,255))*256+Math.round(ce(ln.b*255,0,255))}getHexString(t=ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ue.workingColorSpace){ue.workingToColorSpace(ln.copy(this),e);let i=ln.r,s=ln.g,r=ln.b,a=Math.max(i,s,r),o=Math.min(i,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ue.workingColorSpace){return ue.workingToColorSpace(ln.copy(this),e),t.r=ln.r,t.g=ln.g,t.b=ln.b,t}getStyle(t=ke){ue.workingToColorSpace(ln.copy(this),t);let e=ln.r,i=ln.g,s=ln.b;return t!==ke?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Ui),this.setHSL(Ui.h+t,Ui.s+e,Ui.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ui),t.getHSL(Ba);let i=xc(Ui.h,Ba.h,e),s=xc(Ui.s,Ba.s,e),r=xc(Ui.l,Ba.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ln=new kt;kt.NAMES=Yf;var Ir=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new kt(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ki=class extends Be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _i,this.environmentIntensity=1,this.environmentRotation=new _i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},kn=new O,ui=new O,Ec=new O,fi=new O,As=new O,Rs=new O,Ou=new O,wc=new O,Tc=new O,Ac=new O,Rc=new Le,Cc=new Le,Pc=new Le,mi=class n{constructor(t=new O,e=new O,i=new O){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),kn.subVectors(t,e),s.cross(kn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){kn.subVectors(s,e),ui.subVectors(i,e),Ec.subVectors(t,e);let a=kn.dot(kn),o=kn.dot(ui),c=kn.dot(Ec),l=ui.dot(ui),h=ui.dot(Ec),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(l*c-o*h)*f,m=(a*h-o*c)*f;return r.set(1-d-m,m,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(t,e,i,s,r,a,o,c){return this.getBarycoord(t,e,i,s,fi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,fi.x),c.addScaledVector(a,fi.y),c.addScaledVector(o,fi.z),c)}static getInterpolatedAttribute(t,e,i,s,r,a){return Rc.setScalar(0),Cc.setScalar(0),Pc.setScalar(0),Rc.fromBufferAttribute(t,e),Cc.fromBufferAttribute(t,i),Pc.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Rc,r.x),a.addScaledVector(Cc,r.y),a.addScaledVector(Pc,r.z),a}static isFrontFacing(t,e,i,s){return kn.subVectors(i,e),ui.subVectors(t,e),kn.cross(ui).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return kn.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),kn.cross(ui).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,o;As.subVectors(s,i),Rs.subVectors(r,i),wc.subVectors(t,i);let c=As.dot(wc),l=Rs.dot(wc);if(c<=0&&l<=0)return e.copy(i);Tc.subVectors(t,s);let h=As.dot(Tc),u=Rs.dot(Tc);if(h>=0&&u<=h)return e.copy(s);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),e.copy(i).addScaledVector(As,a);Ac.subVectors(t,r);let d=As.dot(Ac),m=Rs.dot(Ac);if(m>=0&&d<=m)return e.copy(r);let v=d*l-c*m;if(v<=0&&l>=0&&m<=0)return o=l/(l-m),e.copy(i).addScaledVector(Rs,o);let p=h*m-d*u;if(p<=0&&u-h>=0&&d-m>=0)return Ou.subVectors(r,s),o=(u-h)/(u-h+(d-m)),e.copy(s).addScaledVector(Ou,o);let g=1/(p+v+f);return a=v*g,o=f*g,e.copy(i).addScaledVector(As,a).addScaledVector(Rs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Un=class{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Hn):Hn.fromBufferAttribute(r,a),Hn.applyMatrix4(t.matrixWorld),this.expandByPoint(Hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),za.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),za.copy(i.boundingBox)),za.applyMatrix4(t.matrixWorld),this.union(za)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Hn),Hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(dr),ka.subVectors(this.max,dr),Cs.subVectors(t.a,dr),Ps.subVectors(t.b,dr),Is.subVectors(t.c,dr),Fi.subVectors(Ps,Cs),Oi.subVectors(Is,Ps),ns.subVectors(Cs,Is);let e=[0,-Fi.z,Fi.y,0,-Oi.z,Oi.y,0,-ns.z,ns.y,Fi.z,0,-Fi.x,Oi.z,0,-Oi.x,ns.z,0,-ns.x,-Fi.y,Fi.x,0,-Oi.y,Oi.x,0,-ns.y,ns.x,0];return!Ic(e,Cs,Ps,Is,ka)||(e=[1,0,0,0,1,0,0,0,1],!Ic(e,Cs,Ps,Is,ka))?!1:(Ha.crossVectors(Fi,Oi),e=[Ha.x,Ha.y,Ha.z],Ic(e,Cs,Ps,Is,ka))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(di),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},di=[new O,new O,new O,new O,new O,new O,new O,new O],Hn=new O,za=new Un,Cs=new O,Ps=new O,Is=new O,Fi=new O,Oi=new O,ns=new O,dr=new O,ka=new O,Ha=new O,is=new O;function Ic(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){is.fromArray(n,r);let o=s.x*Math.abs(is.x)+s.y*Math.abs(is.y)+s.z*Math.abs(is.z),c=t.dot(is),l=e.dot(is),h=i.dot(is);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Ve=new O,Ga=new pt,Qp=0,qe=class extends Jn{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Qp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=gh,this.updateRanges=[],this.gpuType=Fn,this.version=0,this._normalizationScale=t!==void 0?Ol(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ga.fromBufferAttribute(this,e),Ga.applyMatrix3(t),this.setXY(e,Ga.x,Ga.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix3(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix4(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ve.fromBufferAttribute(this,e),Ve.applyNormalMatrix(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ve.fromBufferAttribute(this,e),Ve.transformDirection(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Xf(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):qf(t,this.array)}};var Lr=class extends qe{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Dr=class extends qe{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var $t=class extends qe{constructor(t,e,i){super(new Float32Array(t),e,i)}},jp=new Un,pr=new O,Lc=new O,vi=class{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):jp.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;pr.subVectors(t,this.center);let e=pr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(pr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Lc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(pr.copy(t.center).add(Lc)),this.expandByPoint(pr.copy(t.center).sub(Lc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},tm=0,Ln=new ge,Dc=new Be,Ls=new O,Tn=new Un,mr=new Un,Qe=new O,we=class n extends Jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tm++}),this.uuid=Zi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(zp(t)?Dr:Lr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Qt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ln.makeRotationFromQuaternion(t),this.applyMatrix4(Ln),this}rotateX(t){return Ln.makeRotationX(t),this.applyMatrix4(Ln),this}rotateY(t){return Ln.makeRotationY(t),this.applyMatrix4(Ln),this}rotateZ(t){return Ln.makeRotationZ(t),this.applyMatrix4(Ln),this}translate(t,e,i){return Ln.makeTranslation(t,e,i),this.applyMatrix4(Ln),this}scale(t,e,i){return Ln.makeScale(t,e,i),this.applyMatrix4(Ln),this}lookAt(t){return Dc.lookAt(t),Dc.updateMatrix(),this.applyMatrix4(Dc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ls).negate(),this.translate(Ls.x,Ls.y,Ls.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new $t(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Un);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Jt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Tn.setFromBufferAttribute(r),this.morphTargetsRelative?(Qe.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(Qe),Qe.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(Qe)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Jt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Jt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){let i=this.boundingSphere.center;if(Tn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];mr.setFromBufferAttribute(o),this.morphTargetsRelative?(Qe.addVectors(Tn.min,mr.min),Tn.expandByPoint(Qe),Qe.addVectors(Tn.max,mr.max),Tn.expandByPoint(Qe)):(Tn.expandByPoint(mr.min),Tn.expandByPoint(mr.max))}Tn.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Qe.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Qe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Qe.fromBufferAttribute(o,l),c&&(Ls.fromBufferAttribute(t,l),Qe.add(Ls)),s=Math.max(s,i.distanceToSquared(Qe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Jt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Jt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new qe(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],c=[],l=new Uint8Array(i.count);for(let D=0;D<i.count;D++)o[D]=new O,c[D]=new O;let h=new O,u=new O,f=new O,d=new pt,m=new pt,v=new pt,p=new O,g=new O;function y(D,C,U){l[D]=l[C]=l[U]=1,h.fromBufferAttribute(i,D),u.fromBufferAttribute(i,C),f.fromBufferAttribute(i,U),d.fromBufferAttribute(r,D),m.fromBufferAttribute(r,C),v.fromBufferAttribute(r,U),u.sub(h),f.sub(h),m.sub(d),v.sub(d);let B=1/(m.x*v.y-v.x*m.y);isFinite(B)&&(p.copy(u).multiplyScalar(v.y).addScaledVector(f,-m.y).multiplyScalar(B),g.copy(f).multiplyScalar(m.x).addScaledVector(u,-v.x).multiplyScalar(B),o[D].add(p),o[C].add(p),o[U].add(p),c[D].add(g),c[C].add(g),c[U].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let D=0,C=S.length;D<C;++D){let U=S[D],B=U.start,W=U.count;for(let L=B,F=B+W;L<F;L+=3)y(t.getX(L+0),t.getX(L+1),t.getX(L+2))}let M=new O,A=new O,T=new O,x=new O;function E(D){T.fromBufferAttribute(s,D),x.copy(T);let C=o[D];M.copy(C),M.sub(T.multiplyScalar(T.dot(C))).normalize(),A.crossVectors(x,C);let B=A.dot(c[D])<0?-1:1;a.setXYZW(D,M.x,M.y,M.z,B)}for(let D=0,C=i.count;D<C;++D)l[D]&&E(D);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new qe(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let s=new O,r=new O,a=new O,o=new O,c=new O,l=new O,h=new O,u=new O;if(t)for(let f=0,d=t.count;f<d;f+=3){let m=t.getX(f+0),v=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,p),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,m),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,p),o.add(h),c.add(h),l.add(h),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Qe.fromBufferAttribute(t,e),Qe.normalize(),t.setXYZ(e,Qe.x,Qe.y,Qe.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,u=o.normalized,f=new l.constructor(c.length*h),d=0,m=0;for(let v=0,p=c.length;v<p;v++){o.isInterleavedBufferAttribute?d=c[v]*o.data.stride+o.offset:d=c[v]*h;for(let g=0;g<h;g++)f[m++]=l[d++]}return new qe(f,h,u)}if(this.index===null)return Zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,i);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=t(f,i);c.push(d)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let c in i){let l=i[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},To=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=gh,this.updateRanges=[],this.version=0,this.uuid=Zi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=Bu(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let i=new this.array.constructor(t.arrayBuffers[e]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=Bu(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function Bu(n){return n.buffer._uuid===void 0&&(n.buffer._uuid=Zi()),n.byteOffset===0&&n.byteLength===n.buffer.byteLength?n.buffer._uuid:n.buffer._uuid+":"+n.byteOffset+":"+n.byteLength}var mn=new O,Nr=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s,this._normalizationScale=t!==void 0?Ol(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)mn.fromBufferAttribute(this,e),mn.applyMatrix4(t),this.setXYZ(e,mn.x,mn.y,mn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)mn.fromBufferAttribute(this,e),mn.applyNormalMatrix(t),this.setXYZ(e,mn.x,mn.y,mn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)mn.fromBufferAttribute(this,e),mn.transformDirection(t),this.setXYZ(e,mn.x,mn.y,mn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Rr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new qe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Rr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Xf(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):qf(t,this.data.array)}},Nc=new O,em=new O,nm=new Qt,Gn=class{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Nc.subVectors(i,e).cross(em.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(Nc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||nm.getNormalMatrix(t),s=this.coplanarPoint(Nc).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},im=0,Qn=class extends Jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:im++}),this.uuid=Zi(),this.name="",this.type="Material",this.blending=qi,this.side=Xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ih,this.blendDst=sh,this.blendEquation=ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=Gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=uo,this.stencilZFail=uo,this.stencilZPass=uo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Zt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new kt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Gn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new pt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new pt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Ys=class extends Qn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ds,gr=new O,Ns=new O,Us=new O,Fs=new pt,xr=new pt,Zf=new ge,Va=new O,_r=new O,Wa=new O,zu=new pt,Uc=new pt,ku=new pt,Ur=class extends Be{constructor(t=new Ys){if(super(),this.isSprite=!0,this.type="Sprite",Ds===void 0){Ds=new we;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new To(e,5);Ds.setIndex([0,1,2,0,2,3]),Ds.setAttribute("position",new Nr(i,3,0,!1)),Ds.setAttribute("uv",new Nr(i,2,3,!1))}this.geometry=Ds,this.material=t,this.center=new pt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Jt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ns.setFromMatrixScale(this.matrixWorld),Zf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Us.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ns.multiplyScalar(-Us.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;Xa(Va.set(-.5,-.5,0),Us,a,Ns,s,r),Xa(_r.set(.5,-.5,0),Us,a,Ns,s,r),Xa(Wa.set(.5,.5,0),Us,a,Ns,s,r),zu.set(0,0),Uc.set(1,0),ku.set(1,1);let o=t.ray.intersectTriangle(Va,_r,Wa,!1,gr);if(o===null&&(Xa(_r.set(-.5,.5,0),Us,a,Ns,s,r),Uc.set(0,1),o=t.ray.intersectTriangle(Va,Wa,_r,!1,gr),o===null))return;let c=t.ray.origin.distanceTo(gr);c<t.near||c>t.far||e.push({distance:c,point:gr.clone(),uv:mi.getInterpolation(gr,Va,_r,Wa,zu,Uc,ku,new pt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};function Xa(n,t,e,i,s,r){Fs.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(xr.x=r*Fs.x-s*Fs.y,xr.y=s*Fs.x+r*Fs.y):xr.copy(Fs),n.copy(t),n.x+=xr.x,n.y+=xr.y,n.applyMatrix4(Zf)}var pi=new O,Fc=new O,qa=new O,Ya=new O,Fr=class{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=pi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(pi.copy(this.origin).addScaledVector(this.direction,e),pi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Fc.copy(t).add(e).multiplyScalar(.5),qa.copy(e).sub(t).normalize(),Ya.copy(this.origin).sub(Fc);let r=t.distanceTo(e)*.5,a=-this.direction.dot(qa),o=Ya.dot(this.direction),c=-Ya.dot(qa),l=Ya.lengthSq(),h=Math.abs(1-a*a),u,f,d,m;if(h>0)if(u=a*c-o,f=a*o-c,m=r*h,u>=0)if(f>=-m)if(f<=m){let v=1/h;u*=v,f*=v,d=u*(u+a*f+2*o)+f*(a*u+f+2*c)+l}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f<=-m?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=m?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Fc).addScaledVector(qa,f),d}intersectSphere(t,e){if(t.radius<0)return null;pi.subVectors(t.center,this.origin);let i=pi.dot(this.direction),s=pi.dot(pi)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(i=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(i=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,pi)!==null}intersectTriangle(t,e,i,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,u=t.x-a.x,f=t.y-a.y,d=t.z-a.z,m=e.x-a.x,v=e.y-a.y,p=e.z-a.z,g=i.x-a.x,y=i.y-a.y,S=i.z-a.z,M=Math.abs(c),A=Math.abs(l),T=Math.abs(h),x,E,D,C,U,B,W,L,F,$,G,ut;if(M>=A&&M>=T?(D=c,B=u,F=m,ut=g,c>=0?(x=l,E=h,C=f,U=d,W=v,L=p,$=y,G=S):(x=h,E=l,C=d,U=f,W=p,L=v,$=S,G=y)):A>=T?(D=l,B=f,F=v,ut=y,l>=0?(x=h,E=c,C=d,U=u,W=p,L=m,$=S,G=g):(x=c,E=h,C=u,U=d,W=m,L=p,$=g,G=S)):(D=h,B=d,F=p,ut=S,h>=0?(x=c,E=l,C=u,U=f,W=m,L=v,$=g,G=y):(x=l,E=c,C=f,U=u,W=v,L=m,$=y,G=g)),D===0)return null;let et=x/D,at=E/D,P=1/D,nt=C-et*B,ct=U-at*B,X=W-et*F,rt=L-at*F,mt=$-et*ut,Nt=G-at*ut,At=mt*rt-Nt*X,Vt=nt*Nt-ct*mt,_e=X*ct-rt*nt;if(s){if(At<0||Vt<0||_e<0)return null}else if((At<0||Vt<0||_e<0)&&(At>0||Vt>0||_e>0))return null;let Wt=At+Vt+_e;if(Wt===0)return null;let se=P*(At*B+Vt*F+_e*ut);return(Wt>0?se<0:se>0)?null:this.at(se/Wt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ze=class extends Qn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.combine=rh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Hu=new ge,ss=new Fr,Za=new vi,Gu=new O,$a=new O,Ja=new O,Ka=new O,Oc=new O,Qa=new O,Vu=new O,ja=new O,Ht=class extends Be{constructor(t=new we,e=new ze){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Qa.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(Oc.fromBufferAttribute(u,t),a?Qa.addScaledVector(Oc,h):Qa.addScaledVector(Oc.sub(e),h))}e.add(Qa)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Za.copy(i.boundingSphere),Za.applyMatrix4(r),ss.copy(t.ray).recast(t.near),!(Za.containsPoint(ss.origin)===!1&&(ss.intersectSphere(Za,Gu)===null||ss.origin.distanceToSquared(Gu)>(t.far-t.near)**2))&&(Hu.copy(r).invert(),ss.copy(t.ray).applyMatrix4(Hu),!(i.boundingBox!==null&&ss.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ss)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,v=f.length;m<v;m++){let p=f[m],g=a[p.materialIndex],y=Math.max(p.start,d.start),S=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let M=y,A=S;M<A;M+=3){let T=o.getX(M),x=o.getX(M+1),E=o.getX(M+2);s=to(this,g,t,i,l,h,u,T,x,E),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let m=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let p=m,g=v;p<g;p+=3){let y=o.getX(p),S=o.getX(p+1),M=o.getX(p+2);s=to(this,a,t,i,l,h,u,y,S,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,v=f.length;m<v;m++){let p=f[m],g=a[p.materialIndex],y=Math.max(p.start,d.start),S=Math.min(c.count,Math.min(p.start+p.count,d.start+d.count));for(let M=y,A=S;M<A;M+=3){let T=M,x=M+1,E=M+2;s=to(this,g,t,i,l,h,u,T,x,E),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let m=Math.max(0,d.start),v=Math.min(c.count,d.start+d.count);for(let p=m,g=v;p<g;p+=3){let y=p,S=p+1,M=p+2;s=to(this,a,t,i,l,h,u,y,S,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function sm(n,t,e,i,s,r,a,o){let c;if(t.side===en?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,t.side===Xi,o),c===null)return null;ja.copy(o),ja.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(ja);return l<e.near||l>e.far?null:{distance:l,point:ja.clone(),object:n}}function to(n,t,e,i,s,r,a,o,c,l){n.getVertexPosition(o,$a),n.getVertexPosition(c,Ja),n.getVertexPosition(l,Ka);let h=sm(n,t,e,i,$a,Ja,Ka,Vu);if(h){let u=new O;mi.getBarycoord(Vu,$a,Ja,Ka,u),s&&(h.uv=mi.getInterpolatedAttribute(s,o,c,l,u,new pt)),r&&(h.uv1=mi.getInterpolatedAttribute(r,o,c,l,u,new pt)),a&&(h.normal=mi.getInterpolatedAttribute(a,o,c,l,u,new O),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:c,c:l,normal:new O,materialIndex:0};mi.getNormal($a,Ja,Ka,f.normal),h.face=f,h.barycoord=u}return h}var Or=class extends _n{constructor(t=null,e=1,i=1,s,r,a,o,c,l=je,h=je,u,f){super(null,a,o,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Br=class extends qe{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Os=new ge,Wu=new ge,eo=[],Xu=new Un,rm=new ge,vr=new Ht,yr=new vi,Sn=class extends Ht{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Br(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,rm)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Un),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Os),Xu.copy(t.boundingBox).applyMatrix4(Os),this.boundingBox.union(Xu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new vi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Os),yr.copy(t.boundingSphere).applyMatrix4(Os),this.boundingSphere.union(yr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(vr.geometry=this.geometry,vr.material=this.material,vr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),yr.copy(this.boundingSphere),yr.applyMatrix4(i),t.ray.intersectsSphere(yr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Os),Wu.multiplyMatrices(i,Os),vr.matrixWorld=Wu,vr.raycast(t,eo);for(let a=0,o=eo.length;a<o;a++){let c=eo[a];c.instanceId=r,c.object=this,e.push(c)}eo.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Br(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Or(new Float32Array(s*this.count),s,this.count,nl,Fn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<i.length;l++)a+=i[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;return r[c]=o,r.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},rs=new vi,am=new pt(.5,.5),no=new O,Hi=class{constructor(t=new Gn,e=new Gn,i=new Gn,s=new Gn,r=new Gn,a=new Gn){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Nn,i=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],u=r[5],f=r[6],d=r[7],m=r[8],v=r[9],p=r[10],g=r[11],y=r[12],S=r[13],M=r[14],A=r[15];if(s[0].setComponents(l-a,d-h,g-m,A-y).normalize(),s[1].setComponents(l+a,d+h,g+m,A+y).normalize(),s[2].setComponents(l+o,d+u,g+v,A+S).normalize(),s[3].setComponents(l-o,d-u,g-v,A-S).normalize(),i)s[4].setComponents(c,f,p,M).normalize(),s[5].setComponents(l-c,d-f,g-p,A-M).normalize();else if(s[4].setComponents(l-c,d-f,g-p,A-M).normalize(),e===Nn)s[5].setComponents(l+c,d+f,g+p,A+M).normalize();else if(e===Vs)s[5].setComponents(c,f,p,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),rs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),rs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(rs)}intersectsSprite(t){rs.center.set(0,0,0);let e=am.distanceTo(t.center);return rs.radius=.7071067811865476+e,rs.applyMatrix4(t.matrixWorld),this.intersectsSphere(rs)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(no.x=s.normal.x>0?t.max.x:t.min.x,no.y=s.normal.y>0?t.max.y:t.min.y,no.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(no)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},qu=new ge,Ao=class n{constructor(){this.coordinateSystem=Nn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,i=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];qu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new Hi),i[s].setFromProjectionMatrix(qu,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,i=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Hi),e[s].copy(i[s]);return this._count=t._count,this}clone(){return new n().copy(this)}};var Ro=class extends Qn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Yu=new ge,qc=new Fr,io=new vi,so=new O,zr=class extends Be{constructor(t=new we,e=new Ro){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),io.copy(i.boundingSphere),io.applyMatrix4(s),io.radius+=r,t.ray.intersectsSphere(io)===!1)return;Yu.copy(s).invert(),qc.copy(t.ray).applyMatrix4(Yu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,u=i.attributes.position;if(l!==null){let f=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let m=f,v=d;m<v;m++){let p=l.getX(m);so.fromBufferAttribute(u,p),Zu(so,p,c,s,t,e,this)}}else{let f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let m=f,v=d;m<v;m++)so.fromBufferAttribute(u,m),Zu(so,m,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Zu(n,t,e,i,s,r,a){let o=qc.distanceSqToPoint(n);if(o<e){let c=new O;qc.closestPointToPoint(n,c),c.applyMatrix4(i);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var kr=class extends _n{constructor(t=[],e=ms,i,s,r,a,o,c,l,h){super(t,e,i,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Vn=class extends _n{constructor(t,e,i,s,r,a,o,c,l){super(t,e,i,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var yi=class extends _n{constructor(t,e,i=Wn,s,r,a,o=je,c=je,l,h=xi,u=1){if(h!==xi&&h!==wi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,s,r,a,o,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Xs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Hr=class extends yi{constructor(t,e=Wn,i=ms,s,r,a=je,o=je,c,l=xi){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,i,s,r,a,o,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Gr=class extends _n{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},We=class n extends we{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],f=0,d=0;m("z","y","x",-1,-1,i,e,t,a,r,0),m("z","y","x",1,-1,i,e,-t,a,r,1),m("x","z","y",1,1,t,i,e,s,a,2),m("x","z","y",1,-1,t,i,-e,s,a,3),m("x","y","z",1,-1,t,e,i,s,r,4),m("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new $t(l,3)),this.setAttribute("normal",new $t(h,3)),this.setAttribute("uv",new $t(u,2));function m(v,p,g,y,S,M,A,T,x,E,D){let C=M/x,U=A/E,B=M/2,W=A/2,L=T/2,F=x+1,$=E+1,G=0,ut=0,et=new O;for(let at=0;at<$;at++){let P=at*U-W;for(let nt=0;nt<F;nt++){let ct=nt*C-B;et[v]=ct*y,et[p]=P*S,et[g]=L,l.push(et.x,et.y,et.z),et[v]=0,et[p]=0,et[g]=T>0?1:-1,h.push(et.x,et.y,et.z),u.push(nt/x),u.push(1-at/E),G+=1}}for(let at=0;at<E;at++)for(let P=0;P<x;P++){let nt=f+P+F*at,ct=f+P+F*(at+1),X=f+(P+1)+F*(at+1),rt=f+(P+1)+F*at;c.push(nt,ct,rt),c.push(ct,X,rt),ut+=6}o.addGroup(d,ut,D),d+=ut,f+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Vr=class n extends we{constructor(t=1,e=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:s,heightSegments:r},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],c=[],l=[],h=e/2,u=Math.PI/2*t,f=e,d=2*u+f,m=i*2+r,v=s+1,p=new O,g=new O;for(let y=0;y<=m;y++){let S=0,M=0,A=0,T=0;if(y<=i){let D=y/i,C=D*Math.PI/2;M=-h-t*Math.cos(C),A=t*Math.sin(C),T=-t*Math.cos(C),S=D*u}else if(y<=i+r){let D=(y-i)/r;M=-h+D*e,A=t,T=0,S=u+D*f}else{let D=(y-i-r)/i,C=D*Math.PI/2;M=h+t*Math.sin(C),A=t*Math.cos(C),T=t*Math.sin(C),S=u+f+D*u}let x=Math.max(0,Math.min(1,S/d)),E=0;y===0?E=.5/s:y===m&&(E=-.5/s);for(let D=0;D<=s;D++){let C=D/s,U=C*Math.PI*2,B=Math.sin(U),W=Math.cos(U);g.x=-A*W,g.y=M,g.z=A*B,o.push(g.x,g.y,g.z),p.set(-A*W,T,A*B),p.normalize(),c.push(p.x,p.y,p.z),l.push(C+E,x)}if(y>0){let D=(y-1)*v;for(let C=0;C<s;C++){let U=D+C,B=D+C+1,W=y*v+C,L=y*v+C+1;a.push(U,B,W),a.push(B,L,W)}}}this.setIndex(a),this.setAttribute("position",new $t(o,3)),this.setAttribute("normal",new $t(c,3)),this.setAttribute("uv",new $t(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},ls=class n extends we{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],c=[],l=new O,h=new pt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=i+u/e*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new $t(a,3)),this.setAttribute("normal",new $t(o,3)),this.setAttribute("uv",new $t(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},An=class n extends we{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],m=0,v=[],p=i/2,g=0;y(),a===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new $t(u,3)),this.setAttribute("normal",new $t(f,3)),this.setAttribute("uv",new $t(d,2));function y(){let M=new O,A=new O,T=0,x=(e-t)/i;for(let E=0;E<=r;E++){let D=[],C=E/r,U=C*(e-t)+t;for(let B=0;B<=s;B++){let W=B/s,L=W*c+o,F=Math.sin(L),$=Math.cos(L);A.x=U*F,A.y=-C*i+p,A.z=U*$,u.push(A.x,A.y,A.z),M.set(F,x,$).normalize(),f.push(M.x,M.y,M.z),d.push(W,1-C),D.push(m++)}v.push(D)}for(let E=0;E<s;E++)for(let D=0;D<r;D++){let C=v[D][E],U=v[D+1][E],B=v[D+1][E+1],W=v[D][E+1];(t>0||D!==0)&&(h.push(C,U,W),T+=3),(e>0||D!==r-1)&&(h.push(U,B,W),T+=3)}l.addGroup(g,T,0),g+=T}function S(M){let A=m,T=new pt,x=new O,E=0,D=M===!0?t:e,C=M===!0?1:-1;for(let B=1;B<=s;B++)u.push(0,p*C,0),f.push(0,C,0),d.push(.5,.5),m++;let U=m;for(let B=0;B<=s;B++){let L=B/s*c+o,F=Math.cos(L),$=Math.sin(L);x.x=D*$,x.y=p*C,x.z=D*F,u.push(x.x,x.y,x.z),f.push(0,C,0),T.x=F*.5+.5,T.y=$*.5*C+.5,d.push(T.x,T.y),m++}for(let B=0;B<s;B++){let W=A+B,L=U+B;M===!0?h.push(L,L+1,W):h.push(L+1,L,W),E+=3}l.addGroup(g,E,M===!0?1:2),g+=E}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Mi=class n extends An{constructor(t=1,e=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Rn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Zt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),s=0,r=i.length,a;e?a=e:a=t*i[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=i[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===a)return s/(r-1);let h=i[s],f=i[s+1]-h,d=(a-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new pt:new O);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new O,s=[],r=[],a=[],o=new O,c=new ge;for(let d=0;d<=t;d++){let m=d/t;s[d]=this.getTangentAt(m,new O)}r[0]=new O,a[0]=new O;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),f<=l&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(ce(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(o,m))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(ce(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let m=1;m<=t;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],d*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},Zs=class extends Rn{constructor(t=0,e=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new pt){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Co=class extends Zs{constructor(t,e,i,s,r,a){super(t,e,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function _h(){let n=0,t=0,e=0,i=0;function s(r,a,o,c){n=r,t=o,e=-3*r+3*a-2*o-c,i=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let f=(a-r)/l-(o-r)/(l+h)+(o-a)/h,d=(o-a)/h-(c-a)/(h+u)+(c-o)/u;f*=h,d*=h,s(a,o,f,d)},calc:function(r){let a=r*r,o=a*r;return n+t*r+e*a+i*o}}}var $u=new O,Ju=new O,Bc=new _h,zc=new _h,kc=new _h,Po=class extends Rn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new O){let i=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(Ju.subVectors(s[0],s[1]).add(s[0]),l=Ju);let u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:($u.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=$u),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(u),d),v=Math.pow(u.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(h),d);v<1e-4&&(v=1),m<1e-4&&(m=v),p<1e-4&&(p=v),Bc.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,m,v,p),zc.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,m,v,p),kc.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,m,v,p)}else this.curveType==="catmullrom"&&(Bc.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),zc.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),kc.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return i.set(Bc.calc(c),zc.calc(c),kc.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new O().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Ku(n,t,e,i,s){let r=(i-t)*.5,a=(s-e)*.5,o=n*n,c=n*o;return(2*e-2*i+r+a)*c+(-3*e+3*i-2*r-a)*o+r*n+e}function om(n,t){let e=1-n;return e*e*t}function lm(n,t){return 2*(1-n)*n*t}function cm(n,t){return n*n*t}function Sr(n,t,e,i){return om(n,t)+lm(n,e)+cm(n,i)}function hm(n,t){let e=1-n;return e*e*e*t}function um(n,t){let e=1-n;return 3*e*e*n*t}function fm(n,t){return 3*(1-n)*n*n*t}function dm(n,t){return n*n*n*t}function br(n,t,e,i,s){return hm(n,t)+um(n,e)+fm(n,i)+dm(n,s)}var Wr=class extends Rn{constructor(t=new pt,e=new pt,i=new pt,s=new pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new pt){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(br(t,s.x,r.x,a.x,o.x),br(t,s.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Io=class extends Rn{constructor(t=new O,e=new O,i=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new O){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(br(t,s.x,r.x,a.x,o.x),br(t,s.y,r.y,a.y,o.y),br(t,s.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Xr=class extends Rn{constructor(t=new pt,e=new pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new pt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Lo=class extends Rn{constructor(t=new O,e=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new O){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new O){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},qr=class extends Rn{constructor(t=new pt,e=new pt,i=new pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new pt){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(Sr(t,s.x,r.x,a.x),Sr(t,s.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Do=class extends Rn{constructor(t=new O,e=new O,i=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new O){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(Sr(t,s.x,r.x,a.x),Sr(t,s.y,r.y,a.y),Sr(t,s.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Yr=class extends Rn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new pt){let i=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return i.set(Ku(o,c.x,l.x,h.x,u.x),Ku(o,c.y,l.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new pt().fromArray(s))}return this}},Yc=Object.freeze({__proto__:null,ArcCurve:Co,CatmullRomCurve3:Po,CubicBezierCurve:Wr,CubicBezierCurve3:Io,EllipseCurve:Zs,LineCurve:Xr,LineCurve3:Lo,QuadraticBezierCurve:qr,QuadraticBezierCurve3:Do,SplineCurve:Yr}),No=class extends Rn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Yc[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new Yc[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Zr=class extends No{constructor(t){super(),this.type="Path",this.currentPoint=new pt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Xr(this.currentPoint.clone(),new pt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new qr(this.currentPoint.clone(),new pt(t,e),new pt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,a){let o=new Wr(this.currentPoint.clone(),new pt(t,e),new pt(i,s),new pt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Yr(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,i,s,r,a),this}absarc(t,e,i,s,r,a){return this.absellipse(t,e,i,i,s,r,a),this}ellipse(t,e,i,s,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,i,s,r,a,o,c),this}absellipse(t,e,i,s,r,a,o,c){let l=new Zs(t,e,i,s,r,a,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},cs=class extends Zr{constructor(t){super(t),this.uuid=Zi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new Zr().fromJSON(s))}return this}};function pm(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=$f(n,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(i&&(r=vm(n,t,r,e)),n.length>80*e){o=n[0],c=n[1];let h=o,u=c;for(let f=e;f<s;f+=e){let d=n[f],m=n[f+1];d<o&&(o=d),m<c&&(c=m),d>h&&(h=d),m>u&&(u=m)}l=Math.max(h-o,u-c),l=l!==0?32767/l:0}return $r(r,a,e,o,c,l,0),a}function $f(n,t,e,i,s){let r;if(s===Pm(n,t,e,i)>0)for(let a=t;a<e;a+=i)r=Qu(a/i|0,n[a],n[a+1],r);else for(let a=e-i;a>=t;a-=i)r=Qu(a/i|0,n[a],n[a+1],r);return r&&$s(r,r.next)&&(Kr(r),r=r.next),r}function hs(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&($s(e,e.next)||Ue(e.prev,e,e.next)===0)){if(Kr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function $r(n,t,e,i,s,r,a){if(!n)return;!a&&r&&Em(n,i,s,r);let o=n;for(;n.prev!==n.next;){let c=n.prev,l=n.next;if(r?gm(n,i,s,r):mm(n)){t.push(c.i,n.i,l.i),Kr(n),n=l.next,o=l.next;continue}if(n=l,n===o){a?a===1?(n=xm(hs(n),t),$r(n,t,e,i,s,r,2)):a===2&&_m(n,t,e,i,s,r):$r(hs(n),t,e,i,s,r,1);break}}}function mm(n){let t=n.prev,e=n,i=n.next;if(Ue(t,e,i)>=0)return!1;let s=t.x,r=e.x,a=i.x,o=t.y,c=e.y,l=i.y,h=Math.min(s,r,a),u=Math.min(o,c,l),f=Math.max(s,r,a),d=Math.max(o,c,l),m=i.next;for(;m!==t;){if(m.x>=h&&m.x<=f&&m.y>=u&&m.y<=d&&Mr(s,o,r,c,a,l,m.x,m.y)&&Ue(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function gm(n,t,e,i){let s=n.prev,r=n,a=n.next;if(Ue(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,h=s.y,u=r.y,f=a.y,d=Math.min(o,c,l),m=Math.min(h,u,f),v=Math.max(o,c,l),p=Math.max(h,u,f),g=Zc(d,m,t,e,i),y=Zc(v,p,t,e,i),S=n.prevZ,M=n.nextZ;for(;S&&S.z>=g&&M&&M.z<=y;){if(S.x>=d&&S.x<=v&&S.y>=m&&S.y<=p&&S!==s&&S!==a&&Mr(o,h,c,u,l,f,S.x,S.y)&&Ue(S.prev,S,S.next)>=0||(S=S.prevZ,M.x>=d&&M.x<=v&&M.y>=m&&M.y<=p&&M!==s&&M!==a&&Mr(o,h,c,u,l,f,M.x,M.y)&&Ue(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;S&&S.z>=g;){if(S.x>=d&&S.x<=v&&S.y>=m&&S.y<=p&&S!==s&&S!==a&&Mr(o,h,c,u,l,f,S.x,S.y)&&Ue(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;M&&M.z<=y;){if(M.x>=d&&M.x<=v&&M.y>=m&&M.y<=p&&M!==s&&M!==a&&Mr(o,h,c,u,l,f,M.x,M.y)&&Ue(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function xm(n,t){let e=n;do{let i=e.prev,s=e.next.next;!$s(i,s)&&Kf(i,e,e.next,s)&&Jr(i,s)&&Jr(s,i)&&(t.push(i.i,e.i,s.i),Kr(e),Kr(e.next),e=n=s),e=e.next}while(e!==n);return hs(e)}function _m(n,t,e,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Am(a,o)){let c=Qf(a,o);a=hs(a,a.next),c=hs(c,c.next),$r(a,t,e,i,s,r,0),$r(c,t,e,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function vm(n,t,e,i){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*i,c=r<a-1?t[r+1]*i:n.length,l=$f(n,o,c,i,!1);l===l.next&&(l.steiner=!0),s.push(Tm(l))}s.sort(ym);for(let r=0;r<s.length;r++)e=Mm(s[r],e);return e}function ym(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function Mm(n,t){let e=Sm(n,t);if(!e)return t;let i=Qf(e,n);return hs(i,i.next),hs(e,e.next)}function Sm(n,t){let e=t,i=n.x,s=n.y,r=-1/0,a;if($s(n,e))return e;do{if($s(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=i&&u>r&&(r=u,a=e.x<e.next.x?e:e.next,u===i))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,c=a.x,l=a.y,h=1/0;e=a;do{if(i>=e.x&&e.x>=c&&i!==e.x&&Jf(s<l?i:r,s,c,l,s<l?r:i,s,e.x,e.y)){let u=Math.abs(s-e.y)/(i-e.x);Jr(e,n)&&(u<h||u===h&&(e.x>a.x||e.x===a.x&&bm(a,e)))&&(a=e,h=u)}e=e.next}while(e!==o);return a}function bm(n,t){return Ue(n.prev,n,t.prev)<0&&Ue(t.next,n,n.next)<0}function Em(n,t,e,i){let s=n;do s.z===0&&(s.z=Zc(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,wm(s)}function wm(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let a=i,o=0;for(let l=0;l<e&&(o++,a=a.nextZ,!!a);l++);let c=e;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,e*=2}while(t>1);return n}function Zc(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Tm(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Jf(n,t,e,i,s,r,a,o){return(s-a)*(t-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(i-o)}function Mr(n,t,e,i,s,r,a,o){return!(n===a&&t===o)&&Jf(n,t,e,i,s,r,a,o)}function Am(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Rm(n,t)&&(Jr(n,t)&&Jr(t,n)&&Cm(n,t)&&(Ue(n.prev,n,t.prev)||Ue(n,t.prev,t))||$s(n,t)&&Ue(n.prev,n,n.next)>0&&Ue(t.prev,t,t.next)>0)}function Ue(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function $s(n,t){return n.x===t.x&&n.y===t.y}function Kf(n,t,e,i){let s=ao(Ue(n,t,e)),r=ao(Ue(n,t,i)),a=ao(Ue(e,i,n)),o=ao(Ue(e,i,t));return!!(s!==r&&a!==o||s===0&&ro(n,e,t)||r===0&&ro(n,i,t)||a===0&&ro(e,n,i)||o===0&&ro(e,t,i))}function ro(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function ao(n){return n>0?1:n<0?-1:0}function Rm(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Kf(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Jr(n,t){return Ue(n.prev,n,n.next)<0?Ue(n,t,n.next)>=0&&Ue(n,n.prev,t)>=0:Ue(n,t,n.prev)<0||Ue(n,n.next,t)<0}function Cm(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Qf(n,t){let e=$c(n.i,n.x,n.y),i=$c(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Qu(n,t,e,i){let s=$c(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Kr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function $c(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Pm(n,t,e,i){let s=0;for(let r=t,a=e-i;r<e;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}var Jc=class{static triangulate(t,e,i=2){return pm(t,e,i)}},as=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];ju(t),tf(i,t);let a=t.length;e.forEach(ju);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,tf(i,e[c]);let o=Jc.triangulate(i,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function ju(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function tf(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var Js=class n extends we{constructor(t=new cs([new pt(.5,.5),new pt(-.5,.5),new pt(-.5,-.5),new pt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let o=0,c=t.length;o<c;o++){let l=t[o];a(l)}this.setAttribute("position",new $t(s,3)),this.setAttribute("uv",new $t(r,2)),this.computeVertexNormals();function a(o){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:d-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:Im,S,M=!1,A,T,x,E;if(g){S=g.getSpacedPoints(h),M=!0,f=!1;let lt=g.isCatmullRomCurve3?g.closed:!1;A=g.computeFrenetFrames(h,lt),T=new O,x=new O,E=new O}f||(p=0,d=0,m=0,v=0);let D=o.extractPoints(l),C=D.shape,U=D.holes;if(!as.isClockWise(C)){C=C.reverse();for(let lt=0,Et=U.length;lt<Et;lt++){let yt=U[lt];as.isClockWise(yt)&&(U[lt]=yt.reverse())}}function W(lt){let yt=10000000000000001e-36,dt=lt[0];for(let Mt=1;Mt<=lt.length;Mt++){let Yt=Mt%lt.length,Ot=lt[Yt],jt=Ot.x-dt.x,Kt=Ot.y-dt.y,ee=jt*jt+Kt*Kt,z=Math.max(Math.abs(Ot.x),Math.abs(Ot.y),Math.abs(dt.x),Math.abs(dt.y)),Re=yt*z*z;if(ee<=Re){lt.splice(Yt,1),Mt--;continue}dt=Ot}}W(C),U.forEach(W);let L=U.length,F=C;for(let lt=0;lt<L;lt++){let Et=U[lt];C=C.concat(Et)}function $(lt,Et,yt){return Et||Jt("ExtrudeGeometry: vec does not exist"),lt.clone().addScaledVector(Et,yt)}let G=C.length;function ut(lt,Et,yt){let dt,Mt,Yt,Ot=lt.x-Et.x,jt=lt.y-Et.y,Kt=yt.x-lt.x,ee=yt.y-lt.y,z=Ot*Ot+jt*jt,Re=Ot*ee-jt*Kt;if(Math.abs(Re)>Number.EPSILON){let Pt=Math.sqrt(z),ne=Math.sqrt(Kt*Kt+ee*ee),St=Et.x-jt/Pt,I=Et.y+Ot/Pt,q=yt.x-ee/ne,j=yt.y+Kt/ne,b=((q-St)*ee-(j-I)*Kt)/(Ot*ee-jt*Kt);dt=St+Ot*b-lt.x,Mt=I+jt*b-lt.y;let _=dt*dt+Mt*Mt;if(_<=2)return new pt(dt,Mt);Yt=Math.sqrt(_/2)}else{let Pt=!1;Ot>Number.EPSILON?Kt>Number.EPSILON&&(Pt=!0):Ot<-Number.EPSILON?Kt<-Number.EPSILON&&(Pt=!0):Math.sign(jt)===Math.sign(ee)&&(Pt=!0),Pt?(dt=-jt,Mt=Ot,Yt=Math.sqrt(z)):(dt=Ot,Mt=jt,Yt=Math.sqrt(z/2))}return new pt(dt/Yt,Mt/Yt)}let et=[];for(let lt=0,Et=F.length,yt=Et-1,dt=lt+1;lt<Et;lt++,yt++,dt++)yt===Et&&(yt=0),dt===Et&&(dt=0),et[lt]=ut(F[lt],F[yt],F[dt]);let at=[],P,nt=et.concat();for(let lt=0,Et=L;lt<Et;lt++){let yt=U[lt];P=[];for(let dt=0,Mt=yt.length,Yt=Mt-1,Ot=dt+1;dt<Mt;dt++,Yt++,Ot++)Yt===Mt&&(Yt=0),Ot===Mt&&(Ot=0),P[dt]=ut(yt[dt],yt[Yt],yt[Ot]);at.push(P),nt=nt.concat(P)}let ct;if(p===0)ct=as.triangulateShape(F,U);else{let lt=[],Et=[];for(let yt=0;yt<p;yt++){let dt=yt/p,Mt=d*Math.cos(dt*Math.PI/2),Yt=m*Math.sin(dt*Math.PI/2)+v;for(let Ot=0,jt=F.length;Ot<jt;Ot++){let Kt=$(F[Ot],et[Ot],Yt);Vt(Kt.x,Kt.y,-Mt),dt===0&&lt.push(Kt)}for(let Ot=0,jt=L;Ot<jt;Ot++){let Kt=U[Ot];P=at[Ot];let ee=[];for(let z=0,Re=Kt.length;z<Re;z++){let Pt=$(Kt[z],P[z],Yt);Vt(Pt.x,Pt.y,-Mt),dt===0&&ee.push(Pt)}dt===0&&Et.push(ee)}}ct=as.triangulateShape(lt,Et)}let X=ct.length,rt=m+v;for(let lt=0;lt<G;lt++){let Et=f?$(C[lt],nt[lt],rt):C[lt];M?(x.copy(A.normals[0]).multiplyScalar(Et.x),T.copy(A.binormals[0]).multiplyScalar(Et.y),E.copy(S[0]).add(x).add(T),Vt(E.x,E.y,E.z)):Vt(Et.x,Et.y,0)}for(let lt=1;lt<=h;lt++)for(let Et=0;Et<G;Et++){let yt=f?$(C[Et],nt[Et],rt):C[Et];M?(x.copy(A.normals[lt]).multiplyScalar(yt.x),T.copy(A.binormals[lt]).multiplyScalar(yt.y),E.copy(S[lt]).add(x).add(T),Vt(E.x,E.y,E.z)):Vt(yt.x,yt.y,u/h*lt)}for(let lt=p-1;lt>=0;lt--){let Et=lt/p,yt=d*Math.cos(Et*Math.PI/2),dt=m*Math.sin(Et*Math.PI/2)+v;for(let Mt=0,Yt=F.length;Mt<Yt;Mt++){let Ot=$(F[Mt],et[Mt],dt);Vt(Ot.x,Ot.y,u+yt)}for(let Mt=0,Yt=U.length;Mt<Yt;Mt++){let Ot=U[Mt];P=at[Mt];for(let jt=0,Kt=Ot.length;jt<Kt;jt++){let ee=$(Ot[jt],P[jt],dt);M?Vt(ee.x,ee.y+S[h-1].y,S[h-1].x+yt):Vt(ee.x,ee.y,u+yt)}}}mt(),Nt();function mt(){let lt=s.length/3;if(f){let Et=0,yt=G*Et;for(let dt=0;dt<X;dt++){let Mt=ct[dt];_e(Mt[2]+yt,Mt[1]+yt,Mt[0]+yt)}Et=h+p*2,yt=G*Et;for(let dt=0;dt<X;dt++){let Mt=ct[dt];_e(Mt[0]+yt,Mt[1]+yt,Mt[2]+yt)}}else{for(let Et=0;Et<X;Et++){let yt=ct[Et];_e(yt[2],yt[1],yt[0])}for(let Et=0;Et<X;Et++){let yt=ct[Et];_e(yt[0]+G*h,yt[1]+G*h,yt[2]+G*h)}}i.addGroup(lt,s.length/3-lt,0)}function Nt(){let lt=s.length/3,Et=0;At(F,Et),Et+=F.length;for(let yt=0,dt=U.length;yt<dt;yt++){let Mt=U[yt];At(Mt,Et),Et+=Mt.length}i.addGroup(lt,s.length/3-lt,1)}function At(lt,Et){let yt=lt.length;for(;--yt>=0;){let dt=yt,Mt=yt-1;Mt<0&&(Mt=lt.length-1);for(let Yt=0,Ot=h+p*2;Yt<Ot;Yt++){let jt=G*Yt,Kt=G*(Yt+1),ee=Et+dt+jt,z=Et+Mt+jt,Re=Et+Mt+Kt,Pt=Et+dt+Kt;Wt(ee,z,Re,Pt)}}}function Vt(lt,Et,yt){c.push(lt),c.push(Et),c.push(yt)}function _e(lt,Et,yt){se(lt),se(Et),se(yt);let dt=s.length/3,Mt=y.generateTopUV(i,s,dt-3,dt-2,dt-1);re(Mt[0]),re(Mt[1]),re(Mt[2])}function Wt(lt,Et,yt,dt){se(lt),se(Et),se(dt),se(Et),se(yt),se(dt);let Mt=s.length/3,Yt=y.generateSideWallUV(i,s,Mt-6,Mt-3,Mt-2,Mt-1);re(Yt[0]),re(Yt[1]),re(Yt[3]),re(Yt[1]),re(Yt[2]),re(Yt[3])}function se(lt){s.push(c[lt*3+0]),s.push(c[lt*3+1]),s.push(c[lt*3+2])}function re(lt){r.push(lt.x),r.push(lt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Lm(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];i.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Yc[s.type]().fromJSON(s)),new n(i,t.options)}},Im={generateTopUV:function(n,t,e,i,s){let r=t[e*3],a=t[e*3+1],o=t[i*3],c=t[i*3+1],l=t[s*3],h=t[s*3+1];return[new pt(r,a),new pt(o,c),new pt(l,h)]},generateSideWallUV:function(n,t,e,i,s,r){let a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[i*3],h=t[i*3+1],u=t[i*3+2],f=t[s*3],d=t[s*3+1],m=t[s*3+2],v=t[r*3],p=t[r*3+1],g=t[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new pt(a,1-c),new pt(l,1-u),new pt(f,1-m),new pt(v,1-g)]:[new pt(o,1-c),new pt(h,1-u),new pt(d,1-m),new pt(p,1-g)]}};function Lm(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Qr=class n extends we{constructor(t=[new pt(0,-.5),new pt(.5,0),new pt(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=ce(s,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],h=1/e,u=new O,f=new pt,d=new O,m=new O,v=new O,p=0,g=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:p=t[y+1].x-t[y].x,g=t[y+1].y-t[y].y,d.x=g*1,d.y=-p,d.z=g*0,v.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:v.normalize(),c.push(v.x,v.y,v.z);break;default:p=t[y+1].x-t[y].x,g=t[y+1].y-t[y].y,d.x=g*1,d.y=-p,d.z=g*0,m.copy(d),d.x+=v.x,d.y+=v.y,d.z+=v.z,d.normalize(),c.push(d.x,d.y,d.z),v.copy(m)}for(let y=0;y<=e;y++){let S=i+y*h*s,M=Math.sin(S),A=Math.cos(S);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*M,u.y=t[T].y,u.z=t[T].x*A,a.push(u.x,u.y,u.z),f.x=y/e,f.y=T/(t.length-1),o.push(f.x,f.y);let x=c[3*T+0]*M,E=c[3*T+1],D=c[3*T+0]*A;l.push(x,E,D)}}for(let y=0;y<e;y++)for(let S=0;S<t.length-1;S++){let M=S+y*t.length,A=M,T=M+t.length,x=M+t.length+1,E=M+1;r.push(A,T,E),r.push(x,E,T)}this.setIndex(r),this.setAttribute("position",new $t(a,3)),this.setAttribute("uv",new $t(o,2)),this.setAttribute("normal",new $t(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.points,t.segments,t.phiStart,t.phiLength)}};var Fe=class n extends we{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(i),c=Math.floor(s),l=o+1,h=c+1,u=t/o,f=e/c,d=[],m=[],v=[],p=[];for(let g=0;g<h;g++){let y=g*f-a;for(let S=0;S<l;S++){let M=S*u-r;m.push(M,-y,0),v.push(0,0,1),p.push(S/o),p.push(1-g/c)}}for(let g=0;g<c;g++)for(let y=0;y<o;y++){let S=y+l*g,M=y+l*(g+1),A=y+1+l*(g+1),T=y+1+l*g;d.push(S,M,T),d.push(M,A,T)}this.setIndex(d),this.setAttribute("position",new $t(m,3)),this.setAttribute("normal",new $t(v,3)),this.setAttribute("uv",new $t(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},jr=class n extends we{constructor(t=.5,e=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);let o=[],c=[],l=[],h=[],u=t,f=(e-t)/s,d=new O,m=new pt;for(let v=0;v<=s;v++){for(let p=0;p<=i;p++){let g=r+p/i*a;d.x=u*Math.cos(g),d.y=u*Math.sin(g),c.push(d.x,d.y,d.z),l.push(0,0,1),m.x=(d.x/e+1)/2,m.y=(d.y/e+1)/2,h.push(m.x,m.y)}u+=f}for(let v=0;v<s;v++){let p=v*(i+1);for(let g=0;g<i;g++){let y=g+p,S=y,M=y+i+1,A=y+i+2,T=y+1;o.push(S,M,T),o.push(M,A,T)}}this.setIndex(o),this.setAttribute("position",new $t(c,3)),this.setAttribute("normal",new $t(l,3)),this.setAttribute("uv",new $t(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var jn=class n extends we{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new O,f=new O,d=[],m=[],v=[],p=[];for(let g=0;g<=i;g++){let y=[],S=g/i,M=a+S*o,A=t*Math.cos(M),T=Math.sqrt(t*t-A*A),x=0;g===0&&a===0?x=.5/e:g===i&&c===Math.PI&&(x=-.5/e);for(let E=0;E<=e;E++){let D=E/e,C=s+D*r;u.x=-T*Math.cos(C),u.y=A,u.z=T*Math.sin(C),m.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),p.push(D+x,1-S),y.push(l++)}h.push(y)}for(let g=0;g<i;g++)for(let y=0;y<e;y++){let S=h[g][y+1],M=h[g][y],A=h[g+1][y],T=h[g+1][y+1];(g!==0||a>0)&&d.push(S,M,T),(g!==i-1||c<Math.PI)&&d.push(M,A,T)}this.setIndex(d),this.setAttribute("position",new $t(m,3)),this.setAttribute("normal",new $t(v,3)),this.setAttribute("uv",new $t(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ta=class n extends we{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let c=[],l=[],h=[],u=[],f=new O,d=new O,m=new O;for(let v=0;v<=i;v++){let p=a+v/i*o;for(let g=0;g<=s;g++){let y=g/s*r;d.x=(t+e*Math.cos(p))*Math.cos(y),d.y=(t+e*Math.cos(p))*Math.sin(y),d.z=e*Math.sin(p),l.push(d.x,d.y,d.z),f.x=t*Math.cos(y),f.y=t*Math.sin(y),m.subVectors(d,f).normalize(),h.push(m.x,m.y,m.z),u.push(g/s),u.push(v/i)}}for(let v=1;v<=i;v++)for(let p=1;p<=s;p++){let g=(s+1)*v+p-1,y=(s+1)*(v-1)+p-1,S=(s+1)*(v-1)+p,M=(s+1)*v+p;c.push(g,y,M),c.push(y,S,M)}this.setIndex(c),this.setAttribute("position",new $t(l,3)),this.setAttribute("normal",new $t(h,3)),this.setAttribute("uv",new $t(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function xs(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(ef(s))s.isRenderTargetTexture?(Zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(ef(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function cn(n){let t={};for(let e=0;e<n.length;e++){let i=xs(n[e]);for(let s in i)t[s]=i[s]}return t}function ef(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Dm(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function vh(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ue.workingColorSpace}var Ai={clone:xs,merge:cn},Nm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Um=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Oe=class extends Qn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nm,this.fragmentShader=Um,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=xs(t.uniforms),this.uniformsGroups=Dm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new kt().setHex(s.value);break;case"v2":this.uniforms[i].value=new pt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new O().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Le().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Qt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ge().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ks=class extends Oe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ie=class extends Qn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fl,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Si=class extends ie{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new pt(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ce(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new kt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new kt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new kt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return os('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){os('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Uo=class extends Qn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Fo=class extends Qn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Bs(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function oo(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Gi=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break n}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Oo=class extends Gi{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vc,endingEnd:Vc}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Wc:r=t,o=2*e-i;break;case Xc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Wc:a=t,c=2*i-e;break;case Xc:a=1,c=i+s[1]-s[0];break;default:a=t-1,c=e}let l=(i-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(i-e)/(s-e),v=m*m,p=v*m,g=-f*p+2*f*v-f*m,y=(1+f)*p+(-1.5-2*f)*v+(-.5+f)*m+1,S=(-1-d)*p+(1.5+d)*v+.5*m,M=d*p-d*v;for(let A=0;A!==o;++A)r[A]=g*a[h+A]+y*a[l+A]+S*a[c+A]+M*a[u+A];return r}},Bo=class extends Gi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(i-e)/(s-e),u=1-h;for(let f=0;f!==o;++f)r[f]=a[l+f]*u+a[c+f]*h;return r}},zo=class extends Gi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ko=class extends Gi{interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let m=(i-e)/(s-e),v=1-m;for(let p=0;p!==o;++p)r[p]=a[l+p]*v+a[c+p]*m;return r}let f=o*2,d=t-1;for(let m=0;m!==o;++m){let v=a[l+m],p=a[c+m],g=d*f+m*2,y=u[g],S=u[g+1],M=t*f+m*2,A=h[M],T=h[M+1],x=Om(i,e,y,A,s);r[m]=jf(x,v,S,T,p)}return r}};function jf(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function Fm(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function Om(n,t,e,i,s){let r=(n-t)/(s-t);for(let a=0;a<8;a++){let o=jf(r,t,e,i,s)-n;if(Math.abs(o)<1e-10)break;let c=Fm(r,t,e,i,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var Cn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Bs(e,this.TimeBufferType),this.values=Bs(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Bs(t.times,Array),values:Bs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),oo(t.settings)&&(i.settings={inTangents:Bs(t.settings.inTangents,Array),outTangents:Bs(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new zo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Bo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Oo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ko(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Er:e=this.InterpolantFactoryMethodDiscrete;break;case Mo:e=this.InterpolantFactoryMethodLinear;break;case ho:e=this.InterpolantFactoryMethodSmooth;break;case Gc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Zt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Er;case this.InterpolantFactoryMethodLinear:return Mo;case this.InterpolantFactoryMethodSmooth:return ho;case this.InterpolantFactoryMethodBezier:return Gc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t;oo(this.settings)&&(nf(this.settings.inTangents,t),nf(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;oo(this.settings)&&(sf(this.settings.inTangents,t),sf(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Jt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Jt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){Jt("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){Jt("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&kp(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){Jt("KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===ho,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(s)c=!0;else{let u=o*i,f=u-i,d=u+i;for(let m=0;m!==i;++m){let v=e[u+m];if(v!==e[f+m]||v!==e[d+m]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let u=o*i,f=a*i;for(let d=0;d!==i;++d)e[f+d]=e[u+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,c=a*i,l=0;l!==i;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,oo(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function nf(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]+=t}function sf(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}Cn.prototype.ValueTypeName="";Cn.prototype.TimeBufferType=Float32Array;Cn.prototype.ValueBufferType=Float32Array;Cn.prototype.DefaultInterpolation=Mo;var Vi=class extends Cn{constructor(t,e,i){super(t,e,i)}};Vi.prototype.ValueTypeName="bool";Vi.prototype.ValueBufferType=Array;Vi.prototype.DefaultInterpolation=Er;Vi.prototype.InterpolantFactoryMethodLinear=void 0;Vi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ho=class extends Cn{constructor(t,e,i,s){super(t,e,i,s)}};Ho.prototype.ValueTypeName="color";var Go=class extends Cn{constructor(t,e,i,s){super(t,e,i,s)}};Go.prototype.ValueTypeName="number";var Vo=class extends Gi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-e)/(s-e),l=t*o;for(let h=l+o;l!==h;l+=4)Kn.slerpFlat(r,0,a,l-o,a,l,c);return r}},ea=class extends Cn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new Vo(this.times,this.values,this.getValueSize(),t)}};ea.prototype.ValueTypeName="quaternion";ea.prototype.InterpolantFactoryMethodSmooth=void 0;var Wi=class extends Cn{constructor(t,e,i){super(t,e,i)}};Wi.prototype.ValueTypeName="string";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=Er;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;var Wo=class extends Cn{constructor(t,e,i,s){super(t,e,i,s)}};Wo.prototype.ValueTypeName="vector";var Xo=class{constructor(t,e,i){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],m=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},td=new Xo,qo=class{constructor(t){this.manager=t!==void 0?t:td,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};qo.DEFAULT_MATERIAL_NAME="__DEFAULT";var na=class extends Be{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},ia=class extends na{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Hc=new ge,rf=new O,af=new O,Yo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.mapType=bn,this.map=null,this.mapPass=null,this.matrix=new ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hi,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new Le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;rf.setFromMatrixPosition(t.matrixWorld),e.position.copy(rf),af.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(af),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){Hc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Hc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===Vs||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(Hc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},lo=new O,co=new Kn,$n=new O,sa=class extends Be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ge,this.projectionMatrix=new ge,this.projectionMatrixInverse=new ge,this.coordinateSystem=Nn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(lo,co,$n),$n.x===1&&$n.y===1&&$n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(lo,co,$n.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(lo,co,$n),$n.x===1&&$n.y===1&&$n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(lo,co,$n.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Bi=new O,of=new pt,lf=new pt,gn=class extends sa{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=So*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(gc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return So*2*Math.atan(Math.tan(gc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Bi.x,Bi.y).multiplyScalar(-t/Bi.z),Bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Bi.x,Bi.y).multiplyScalar(-t/Bi.z)}getViewSize(t,e){return this.getViewBounds(t,of,lf),e.subVectors(lf,of)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(gc*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var us=class extends sa{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Kc=class extends Yo{constructor(){super(new us(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ra=class extends na{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.target=new Be,this.shadow=new Kc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var zs=-90,ks=1,Qs=class extends Be{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new gn(zs,ks,t,e);s.layers=this.layers,this.add(s);let r=new gn(zs,ks,t,e);r.layers=this.layers,this.add(r);let a=new gn(zs,ks,t,e);a.layers=this.layers,this.add(a);let o=new gn(zs,ks,t,e);o.layers=this.layers,this.add(o);let c=new gn(zs,ks,t,e);c.layers=this.layers,this.add(c);let l=new gn(zs,ks,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===Nn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Vs)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let v=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),i.texture.mipmapsAutoUpdate=v,t.setRenderTarget(i,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},Zo=class extends gn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}},aa=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Bm.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Bm(){this._document.hidden===!1&&this.reset()}var yh="\\[\\]\\.:\\/",zm=new RegExp("["+yh+"]","g"),Mh="[^"+yh+"]",km="[^"+yh.replace("\\.","")+"]",Hm=/((?:WC+[\/:])*)/.source.replace("WC",Mh),Gm=/(WCOD+)?/.source.replace("WCOD",km),Vm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Mh),Wm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Mh),Xm=new RegExp("^"+Hm+Gm+Vm+Wm+"$"),qm=["material","materials","bones","map"],Qc=class{constructor(t,e,i){let s=i||Ie.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Ie=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(zm,"")}static parseTrackName(t){let e=Xm.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);qm.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=i(o.children);if(c)return c}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Zt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=e.objectIndex;switch(i){case"materials":if(!t.material){Jt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Jt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Jt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Jt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Jt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Jt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){Jt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;Jt("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Jt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Jt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ie.Composite=Qc;Ie.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ie.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ie.prototype.GetterByBindingType=[Ie.prototype._getValue_direct,Ie.prototype._getValue_array,Ie.prototype._getValue_arrayElement,Ie.prototype._getValue_toArray];Ie.prototype.SetterByBindingTypeAndVersioning=[[Ie.prototype._setValue_direct,Ie.prototype._setValue_direct_setNeedsUpdate,Ie.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_array,Ie.prototype._setValue_array_setNeedsUpdate,Ie.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_arrayElement,Ie.prototype._setValue_arrayElement_setNeedsUpdate,Ie.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_fromArray,Ie.prototype._setValue_fromArray_setNeedsUpdate,Ie.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Iy=new Float32Array(1);var jc=class{static{this.prototype.isMatrix2=!0}constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};function Sh(n,t,e,i){let s=Ym(i);switch(e){case uh:return n*t;case nl:return n*t/s.components*s.byteLength;case il:return n*t/s.components*s.byteLength;case Yi:return n*t*2/s.components*s.byteLength;case sl:return n*t*2/s.components*s.byteLength;case fh:return n*t*3/s.components*s.byteLength;case Xn:return n*t*4/s.components*s.byteLength;case rl:return n*t*4/s.components*s.byteLength;case ma:case ga:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case xa:case _a:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ol:case cl:return Math.max(n,16)*Math.max(t,8)/4;case al:case ll:return Math.max(n,8)*Math.max(t,8)/2;case hl:case ul:case dl:case pl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case fl:case va:case ml:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case gl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case xl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case _l:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case vl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case yl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Ml:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Sl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case bl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case El:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case wl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Tl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Al:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Rl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Cl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Pl:case Il:case Ll:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Dl:case Nl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case ya:case Ul:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ym(n){switch(n){case bn:case oh:return{byteLength:1,components:1};case er:case lh:case nn:return{byteLength:2,components:1};case tl:case el:return{byteLength:2,components:4};case Wn:case jo:case Fn:return{byteLength:4,components:1};case ch:case hh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Sd(){let n=null,t=!1,e=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function $m(n){let t=new WeakMap;function e(o,c){let l=o.array,h=o.usage,u=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,h),o.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,c,l){let h=c.array,u=c.updateRanges;if(n.bindBuffer(l,o),u.length===0)n.bufferSubData(l,0,h);else{u.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<u.length;d++){let m=u[f],v=u[d];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++f,u[f]=v)}u.length=f+1;for(let d=0,m=u.length;d<m;d++){let v=u[d];n.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(n.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Jm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Km=`#ifdef USE_ALPHAHASH
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
#endif`,Qm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,t0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,e0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,n0=`#ifdef USE_AOMAP
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
#endif`,i0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,s0=`#ifdef USE_BATCHING
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
#endif`,r0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,a0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,o0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,l0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,c0=`#ifdef USE_IRIDESCENCE
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
#endif`,h0=`#ifdef USE_BUMPMAP
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
#endif`,u0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,f0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,d0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,p0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,m0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,g0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,x0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,_0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,v0=`#define PI 3.141592653589793
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
} // validated`,y0=`vec3 transformedNormal = objectNormal;
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
#endif`,M0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,S0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,b0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,E0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,w0="gl_FragColor = linearToOutputTexel( gl_FragColor );",T0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,A0=`#ifdef USE_ENVMAP
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
#endif`,R0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,C0=`#ifdef USE_ENVMAP
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
#endif`,P0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,I0=`#ifdef USE_ENVMAP
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
#endif`,L0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,D0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,N0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,U0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,F0=`#ifdef USE_GRADIENTMAP
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
}`,O0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,B0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,z0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,k0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,H0=`#ifdef USE_ENVMAP
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
#endif`,G0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,V0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,W0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,X0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,q0=`PhysicalMaterial material;
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
#endif`,Y0=`uniform sampler2D dfgLUT;
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
}`,Z0=`
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
#endif`,$0=`#if defined( RE_IndirectDiffuse )
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
#endif`,J0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,K0=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Q0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,j0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ng=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ig=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,rg=`#if defined( USE_POINTS_UV )
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
#endif`,ag=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,og=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cg=`#if defined( USE_MORPHCOLORS )
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
#endif`,hg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ug=`#ifdef USE_MORPHTARGETS
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
#endif`,fg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,pg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,mg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,_g=`#ifdef USE_NORMALMAP
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
#endif`,vg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Eg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ag=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ig=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ng=`float getShadowMask() {
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
}`,Ug=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fg=`#ifdef USE_SKINNING
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
#endif`,Og=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bg=`#ifdef USE_SKINNING
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
#endif`,zg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vg=`#ifdef USE_TRANSMISSION
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
#endif`,Wg=`#ifdef USE_TRANSMISSION
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
#endif`,Xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,$g=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jg=`uniform sampler2D t2D;
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
}`,Kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qg=`uniform float backgroundBlurriness;
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
}`,jg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ex=`#include <common>
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
}`,nx=`#if DEPTH_PACKING == 3200
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
}`,ix=`#define DISTANCE
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
}`,sx=`#define DISTANCE
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
}`,rx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ax=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ox=`uniform float scale;
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
}`,lx=`uniform vec3 diffuse;
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
}`,cx=`#include <common>
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
}`,hx=`uniform vec3 diffuse;
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
}`,ux=`#define LAMBERT
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
}`,fx=`#define LAMBERT
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
}`,dx=`#define MATCAP
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
}`,px=`#define MATCAP
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
}`,mx=`#define NORMAL
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
}`,gx=`#define NORMAL
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
}`,xx=`#define PHONG
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
}`,_x=`#define PHONG
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
}`,vx=`#define STANDARD
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
}`,yx=`#define STANDARD
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
}`,Mx=`#define TOON
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
}`,Sx=`#define TOON
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
}`,bx=`uniform float size;
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
}`,Ex=`uniform vec3 diffuse;
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
}`,wx=`#include <common>
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
}`,Tx=`uniform vec3 color;
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
}`,Ax=`uniform float rotation;
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
}`,Rx=`uniform vec3 diffuse;
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
}`,le={alphahash_fragment:Jm,alphahash_pars_fragment:Km,alphamap_fragment:Qm,alphamap_pars_fragment:jm,alphatest_fragment:t0,alphatest_pars_fragment:e0,aomap_fragment:n0,aomap_pars_fragment:i0,batching_pars_vertex:s0,batching_vertex:r0,begin_vertex:a0,beginnormal_vertex:o0,bsdfs:l0,iridescence_fragment:c0,bumpmap_pars_fragment:h0,clipping_planes_fragment:u0,clipping_planes_pars_fragment:f0,clipping_planes_pars_vertex:d0,clipping_planes_vertex:p0,color_fragment:m0,color_pars_fragment:g0,color_pars_vertex:x0,color_vertex:_0,common:v0,defaultnormal_vertex:y0,displacementmap_pars_vertex:M0,displacementmap_vertex:S0,emissivemap_fragment:b0,emissivemap_pars_fragment:E0,colorspace_fragment:w0,colorspace_pars_fragment:T0,envmap_fragment:A0,envmap_common_pars_fragment:R0,envmap_pars_fragment:C0,envmap_pars_vertex:P0,envmap_physical_pars_fragment:H0,envmap_vertex:I0,fog_vertex:L0,fog_pars_vertex:D0,fog_fragment:N0,fog_pars_fragment:U0,gradientmap_pars_fragment:F0,lightmap_pars_fragment:O0,lights_lambert_fragment:B0,lights_lambert_pars_fragment:z0,lights_pars_begin:k0,lights_toon_fragment:G0,lights_toon_pars_fragment:V0,lights_phong_fragment:W0,lights_phong_pars_fragment:X0,lights_physical_fragment:q0,lights_physical_pars_fragment:Y0,lights_fragment_begin:Z0,lights_fragment_maps:$0,lights_fragment_end:J0,lightprobes_pars_fragment:K0,logdepthbuf_fragment:Q0,logdepthbuf_pars_fragment:j0,logdepthbuf_pars_vertex:tg,logdepthbuf_vertex:eg,map_fragment:ng,map_pars_fragment:ig,map_particle_fragment:sg,map_particle_pars_fragment:rg,metalnessmap_fragment:ag,metalnessmap_pars_fragment:og,morphinstance_vertex:lg,morphcolor_vertex:cg,morphnormal_vertex:hg,morphtarget_pars_vertex:ug,morphtarget_vertex:fg,normal_fragment_begin:dg,normal_fragment_maps:pg,normal_pars_fragment:mg,normal_pars_vertex:gg,normal_vertex:xg,normalmap_pars_fragment:_g,clearcoat_normal_fragment_begin:vg,clearcoat_normal_fragment_maps:yg,clearcoat_pars_fragment:Mg,iridescence_pars_fragment:Sg,opaque_fragment:bg,packing:Eg,premultiplied_alpha_fragment:wg,project_vertex:Tg,dithering_fragment:Ag,dithering_pars_fragment:Rg,roughnessmap_fragment:Cg,roughnessmap_pars_fragment:Pg,shadowmap_pars_fragment:Ig,shadowmap_pars_vertex:Lg,shadowmap_vertex:Dg,shadowmask_pars_fragment:Ng,skinbase_vertex:Ug,skinning_pars_vertex:Fg,skinning_vertex:Og,skinnormal_vertex:Bg,specularmap_fragment:zg,specularmap_pars_fragment:kg,tonemapping_fragment:Hg,tonemapping_pars_fragment:Gg,transmission_fragment:Vg,transmission_pars_fragment:Wg,uv_pars_fragment:Xg,uv_pars_vertex:qg,uv_vertex:Yg,worldpos_vertex:Zg,background_vert:$g,background_frag:Jg,backgroundCube_vert:Kg,backgroundCube_frag:Qg,cube_vert:jg,cube_frag:tx,depth_vert:ex,depth_frag:nx,distance_vert:ix,distance_frag:sx,equirect_vert:rx,equirect_frag:ax,linedashed_vert:ox,linedashed_frag:lx,meshbasic_vert:cx,meshbasic_frag:hx,meshlambert_vert:ux,meshlambert_frag:fx,meshmatcap_vert:dx,meshmatcap_frag:px,meshnormal_vert:mx,meshnormal_frag:gx,meshphong_vert:xx,meshphong_frag:_x,meshphysical_vert:vx,meshphysical_frag:yx,meshtoon_vert:Mx,meshtoon_frag:Sx,points_vert:bx,points_frag:Ex,shadow_vert:wx,shadow_frag:Tx,sprite_vert:Ax,sprite_frag:Rx},Lt={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},envMapRotation:{value:new Qt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},ni={basic:{uniforms:cn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:le.meshbasic_vert,fragmentShader:le.meshbasic_frag},lambert:{uniforms:cn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new kt(0)},envMapIntensity:{value:1}}]),vertexShader:le.meshlambert_vert,fragmentShader:le.meshlambert_frag},phong:{uniforms:cn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:le.meshphong_vert,fragmentShader:le.meshphong_frag},standard:{uniforms:cn([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag},toon:{uniforms:cn([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new kt(0)}}]),vertexShader:le.meshtoon_vert,fragmentShader:le.meshtoon_frag},matcap:{uniforms:cn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:le.meshmatcap_vert,fragmentShader:le.meshmatcap_frag},points:{uniforms:cn([Lt.points,Lt.fog]),vertexShader:le.points_vert,fragmentShader:le.points_frag},dashed:{uniforms:cn([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:le.linedashed_vert,fragmentShader:le.linedashed_frag},depth:{uniforms:cn([Lt.common,Lt.displacementmap]),vertexShader:le.depth_vert,fragmentShader:le.depth_frag},normal:{uniforms:cn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:le.meshnormal_vert,fragmentShader:le.meshnormal_frag},sprite:{uniforms:cn([Lt.sprite,Lt.fog]),vertexShader:le.sprite_vert,fragmentShader:le.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:le.background_vert,fragmentShader:le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qt}},vertexShader:le.backgroundCube_vert,fragmentShader:le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:le.cube_vert,fragmentShader:le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:le.equirect_vert,fragmentShader:le.equirect_frag},distance:{uniforms:cn([Lt.common,Lt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:le.distance_vert,fragmentShader:le.distance_frag},shadow:{uniforms:cn([Lt.lights,Lt.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:le.shadow_vert,fragmentShader:le.shadow_frag}};ni.physical={uniforms:cn([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Qt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag};var Bl={r:0,b:0,g:0},Cx=new ge,bd=new Qt;bd.set(-1,0,0,0,1,0,0,0,1);function Px(n,t,e,i,s,r){let a=new kt(0),o=s===!0?0:1,c,l,h=null,u=0,f=null;function d(y){let S=y.isScene===!0?y.background:null;if(S&&S.isTexture){let M=y.backgroundBlurriness>0;S=t.get(S,M)}return S}function m(y){let S=!1,M=d(y);M===null?p(a,o):M&&M.isColor&&(p(M,1),S=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||S)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(y,S){let M=d(S);M&&M.isCubeTexture?(l===void 0&&(l=new Ht(new We(1,1,1),new Oe({name:"BackgroundCubeMaterial",uniforms:xs(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(A,T,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=M,l.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Cx.makeRotationFromEuler(S.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(bd),l.material.toneMapped=ue.getTransfer(M.colorSpace)!==ve,(h!==M||u!==M.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,h=M,u=M.version,f=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Ht(new Fe(2,2),new Oe({name:"BackgroundMaterial",uniforms:xs(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:Xi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=ue.getTransfer(M.colorSpace)!==ve,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||u!==M.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,h=M,u=M.version,f=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,S){y.getRGB(Bl,vh(n)),e.buffers.color.setClear(Bl.r,Bl.g,Bl.b,S,r)}function g(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,S=1){a.set(y),o=S,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,p(a,o)},render:m,addToRenderList:v,dispose:g}}function Ix(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,a=!1;function o(U,B,W,L,F){let $=!1,G=u(U,L,W,B);r!==G&&(r=G,l(r.object)),$=d(U,L,W,F),$&&m(U,L,W,F),F!==null&&t.update(F,n.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,M(U,B,W,L),F!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function c(){return n.createVertexArray()}function l(U){return n.bindVertexArray(U)}function h(U){return n.deleteVertexArray(U)}function u(U,B,W,L){let F=L.wireframe===!0,$=i[B.id];$===void 0&&($={},i[B.id]=$);let G=U.isInstancedMesh===!0?U.id:0,ut=$[G];ut===void 0&&(ut={},$[G]=ut);let et=ut[W.id];et===void 0&&(et={},ut[W.id]=et);let at=et[F];return at===void 0&&(at=f(c()),et[F]=at),at}function f(U){let B=[],W=[],L=[];for(let F=0;F<e;F++)B[F]=0,W[F]=0,L[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:W,attributeDivisors:L,object:U,attributes:{},index:null}}function d(U,B,W,L){let F=r.attributes,$=B.attributes,G=0,ut=W.getAttributes();for(let et in ut)if(ut[et].location>=0){let P=F[et],nt=$[et];if(nt===void 0&&(et==="instanceMatrix"&&U.instanceMatrix&&(nt=U.instanceMatrix),et==="instanceColor"&&U.instanceColor&&(nt=U.instanceColor)),P===void 0||P.attribute!==nt||nt&&P.data!==nt.data)return!0;G++}return r.attributesNum!==G||r.index!==L}function m(U,B,W,L){let F={},$=B.attributes,G=0,ut=W.getAttributes();for(let et in ut)if(ut[et].location>=0){let P=$[et];P===void 0&&(et==="instanceMatrix"&&U.instanceMatrix&&(P=U.instanceMatrix),et==="instanceColor"&&U.instanceColor&&(P=U.instanceColor));let nt={};nt.attribute=P,P&&P.data&&(nt.data=P.data),F[et]=nt,G++}r.attributes=F,r.attributesNum=G,r.index=L}function v(){let U=r.newAttributes;for(let B=0,W=U.length;B<W;B++)U[B]=0}function p(U){g(U,0)}function g(U,B){let W=r.newAttributes,L=r.enabledAttributes,F=r.attributeDivisors;W[U]=1,L[U]===0&&(n.enableVertexAttribArray(U),L[U]=1),F[U]!==B&&(n.vertexAttribDivisor(U,B),F[U]=B)}function y(){let U=r.newAttributes,B=r.enabledAttributes;for(let W=0,L=B.length;W<L;W++)B[W]!==U[W]&&(n.disableVertexAttribArray(W),B[W]=0)}function S(U,B,W,L,F,$,G){G===!0?n.vertexAttribIPointer(U,B,W,F,$):n.vertexAttribPointer(U,B,W,L,F,$)}function M(U,B,W,L){v();let F=L.attributes,$=W.getAttributes(),G=B.defaultAttributeValues;for(let ut in $){let et=$[ut];if(et.location>=0){let at=F[ut];if(at===void 0&&(ut==="instanceMatrix"&&U.instanceMatrix&&(at=U.instanceMatrix),ut==="instanceColor"&&U.instanceColor&&(at=U.instanceColor)),at!==void 0){let P=at.normalized,nt=at.itemSize,ct=t.get(at);if(ct===void 0)continue;let X=ct.buffer,rt=ct.type,mt=ct.bytesPerElement,Nt=rt===n.INT||rt===n.UNSIGNED_INT||at.gpuType===jo;if(at.isInterleavedBufferAttribute){let At=at.data,Vt=At.isInterleavedBuffer===!0?At.stride:At.itemSize,_e=at.offset;if(At.isInstancedInterleavedBuffer||At.isInstancedBufferAttribute){for(let Wt=0;Wt<et.locationSize;Wt++)g(et.location+Wt,At.meshPerAttribute);U.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=At.meshPerAttribute*At.count)}else for(let Wt=0;Wt<et.locationSize;Wt++)p(et.location+Wt);n.bindBuffer(n.ARRAY_BUFFER,X);for(let Wt=0;Wt<et.locationSize;Wt++)S(et.location+Wt,nt/et.locationSize,rt,P,Vt*mt,(_e+nt/et.locationSize*Wt)*mt,Nt)}else{if(at.isInstancedBufferAttribute){for(let At=0;At<et.locationSize;At++)g(et.location+At,at.meshPerAttribute);U.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let At=0;At<et.locationSize;At++)p(et.location+At);n.bindBuffer(n.ARRAY_BUFFER,X);for(let At=0;At<et.locationSize;At++)S(et.location+At,nt/et.locationSize,rt,P,nt*mt,nt/et.locationSize*At*mt,Nt)}}else if(G!==void 0){let P=G[ut];if(P!==void 0)switch(P.length){case 2:n.vertexAttrib2fv(et.location,P);break;case 3:n.vertexAttrib3fv(et.location,P);break;case 4:n.vertexAttrib4fv(et.location,P);break;default:n.vertexAttrib1fv(et.location,P)}}}}y()}function A(){D();for(let U in i){let B=i[U];for(let W in B){let L=B[W];for(let F in L){let $=L[F];for(let G in $)h($[G].object),delete $[G];delete L[F]}}delete i[U]}}function T(U){if(i[U.id]===void 0)return;let B=i[U.id];for(let W in B){let L=B[W];for(let F in L){let $=L[F];for(let G in $)h($[G].object),delete $[G];delete L[F]}}delete i[U.id]}function x(U){for(let B in i){let W=i[B];for(let L in W){let F=W[L];if(F[U.id]===void 0)continue;let $=F[U.id];for(let G in $)h($[G].object),delete $[G];delete F[U.id]}}}function E(U){for(let B in i){let W=i[B],L=U.isInstancedMesh===!0?U.id:0,F=W[L];if(F!==void 0){for(let $ in F){let G=F[$];for(let ut in G)h(G[ut].object),delete G[ut];delete F[$]}delete W[L],Object.keys(W).length===0&&delete i[B]}}}function D(){C(),a=!0,r!==s&&(r=s,l(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:C,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfObject:E,releaseStatesOfProgram:x,initAttributes:v,enableAttribute:p,disableUnusedAttributes:y}}function Lx(n,t,e){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),e.update(l,i,1)}function a(c,l,h){h!==0&&(n.drawArraysInstanced(i,c,l,h),e.update(l,i,h))}function o(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,h);let f=0;for(let d=0;d<h;d++)f+=l[d];e.update(f,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Dx(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let x=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(x){return!(x!==Xn&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let E=x===nn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==bn&&x!==Fn&&!E&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(x){if(x==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(Zt("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.logarithmicDepthBuffer===!0&&u===!1;e.reversedDepthBuffer===!0&&u===!1&&Zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&u===!0&&Zt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:M,maxSamples:A,samples:T}}function Nx(n){let t=this,e=null,i=0,s=!1,r=!1,a=new Gn,o=new Qt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||i!==0||s;return s=f,i=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let m=u.clippingPlanes,v=u.clipIntersection,p=u.clipShadows,g=n.get(u);if(!s||m===null||m.length===0||r&&!p)r?h(null):l();else{let y=r?0:i,S=y*4,M=g.clippingState||null;c.value=M,M=h(m,f,S,d);for(let A=0;A!==S;++A)M[A]=e[A];g.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,f,d,m){let v=u!==null?u.length:0,p=null;if(v!==0){if(p=c.value,m!==!0||p===null){let g=d+v*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<g)&&(p=new Float32Array(g));for(let S=0,M=d;S!==v;++S,M+=4)a.copy(u[S]).applyMatrix4(y,o),a.normal.toArray(p,M),p[M+3]=a.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}var ba=class extends Ye{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new kr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new We(5,5,5),r=new Oe({name:"CubemapFromEquirect",uniforms:xs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:en,blending:bi});r.uniforms.tEquirect.value=e;let a=new Ht(s,r),o=e.minFilter;return e.minFilter===Ei&&(e.minFilter=xn),new Qs(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}},ed=256,Ux=3,Fx=20,Ed=256,wd=16,Ox=3,Bx=new O,zx=new kt,ir=class n{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Qs(1,10,null),this._boxMesh=new Ht(new We(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:a=256,position:o=Bx}=r,c=this._renderer;this._setSize(a);let l=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let u=c.autoClear,f=c.autoClearColor,d=c.autoClearDepth,m=c.autoClearStencil,v=t.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,v===null&&(t.background=c.getClearColor(zx));let p=new Qs(i,s,h);return p.position.copy(o),p.update(c,t),c.autoClear=u,c.autoClearColor=f,c.autoClearDepth=d,c.autoClearStencil=m,t.background=v,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,e)),this._applyPMREM(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=id(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(ed,Wf(t))}_fromTexture(t,e){t.mapping===ms||t.mapping===tr?this._setSize(t.image.length===0?ed:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,e=nd(t,!1,!1),i=Math.log2(t)-Ux;for(let s=0;s<=i;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=nd(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===ms||t.mapping===tr?(this._cubemapMaterial===null&&(this._cubemapMaterial=sd()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=id()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=kx(),this._integrationMaterial=Hx());let e=this._cubeSize,i=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/wd);for(let a=0;a<=i;a++){let o=n.lodToRoughness(a,i);if(a>i-Ox)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let c=o>0?Math.log2(e)+.5*Math.log2(6/(Ed*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=c,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Gx());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,i),s.envMap.value=t.texture,this._renderCube(r,0,i)}};function nd(n,t,e){return new ba(n,{minFilter:Ei,generateMipmaps:t,type:nn,colorSpace:wr,depthBuffer:e})}function Ea(n,t,e){return new Oe({name:n,uniforms:t,vertexShader:le.cube_vert,fragmentShader:e,side:en,blending:bi,depthTest:!1,depthWrite:!1})}function kx(){return Ea("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Ed}u

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
	`)}function Hx(){return Ea("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:wd}},`

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
	`)}function Gx(){return Ea("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Fx}
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
	`)}function id(){return Ea("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function sd(){return Ea("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Vx(n){let t=new WeakMap,e=new WeakMap,i=null;function s(f,d=!1){return f==null?null:d?a(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===Jo||d===Ko)if(t.has(f)){let m=t.get(f).texture;return o(m,f.mapping)}else{let m=f.image;if(m&&m.height>0){let v=new ba(m.height);return v.fromEquirectangularTexture(n,f),t.set(f,v),f.addEventListener("dispose",l),o(v.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let d=f.mapping,m=d===Jo||d===Ko,v=d===ms||d===tr;if(m||v){let p=e.get(f),g=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return i===null&&(i=new ir(n)),p=m?i.fromEquirectangular(f,p):i.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),p.texture;if(p!==void 0)return p.texture;{let y=f.image;return m&&y&&y.height>0||v&&y&&c(y)?(i===null&&(i=new ir(n)),p=m?i.fromEquirectangular(f):i.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),f.addEventListener("dispose",h),p.texture):null}}}return f}function o(f,d){return d===Jo?f.mapping=ms:d===Ko&&(f.mapping=tr),f}function c(f){let d=0,m=6;for(let v=0;v<m;v++)f[v]!==void 0&&d++;return d===m}function l(f){let d=f.target;d.removeEventListener("dispose",l);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function Wx(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&os("WebGLRenderer: "+i+" extension not supported."),s}}}function Xx(n,t,e,i){let s={},r=new WeakMap,a=new FinalizationRegistry(m=>delete s[m]);function o(m){c(m.target)}function c(m){m.index!==null&&t.remove(m.index);for(let p in m.attributes)t.remove(m.attributes[p]);m.removeEventListener("dispose",o),delete s[m.id],a.unregister(m);let v=r.get(m);v&&(t.remove(v),r.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function l(m,v){return s[v.id]!==void 0||(v.addEventListener("dispose",o),s[v.id]=new WeakRef(v),a.register(v,v.id,v),e.memory.geometries++),v}function h(m){let v=m.attributes;for(let p in v)t.update(v[p],n.ARRAY_BUFFER)}function u(m){let v=m.index,p=m.attributes.position,g=0;if(p===void 0)return;let y=v!==null?v.array.length:p.array.length/3-1,S=p.count>=65535?Dr:Lr,M=new S(Math.ceil(y/3)*6,1),A=M.array;if(v!==null){let x=v.array;g=v.version;for(let E=0,D=0;E<y;E+=3){let C=x[E+0],U=x[E+1],B=x[E+2];A[D++]=C,A[D++]=U,A[D++]=U,A[D++]=B,A[D++]=B,A[D++]=C}}else{g=p.version;for(let x=0,E=0;x<y;x+=3){let D=x+0,C=x+1,U=x+2;A[E++]=D,A[E++]=C,A[E++]=C,A[E++]=U,A[E++]=U,A[E++]=D}}M.version=g;let T=r.get(m);T&&t.remove(T),r.set(m,M)}function f(m){let v=r.get(m);if(v){let p=m.index;p!==null&&v.version<p.version&&u(m)}else u(m);return r.get(m)}function d(){for(let m in s){let v=s[m].deref();v!==void 0&&c(v)}}return{get:l,update:h,getWireframeAttribute:f,dispose:d}}function qx(n,t,e){let i;function s(u){i=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function c(u,f){n.drawElements(i,f,r,u*a),e.update(f,i,1)}function l(u,f,d){d!==0&&(n.drawElementsInstanced(i,f,r,u*a,d),e.update(f,i,d))}function h(u,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,u,0,d);let v=0;for(let p=0;p<d;p++)v+=f[p];e.update(v,i,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Yx(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:Jt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Zx(n,t,e){let i=new WeakMap,s=new Le;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=i.get(o);if(f===void 0||f.count!==u){let D=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",D)};f!==void 0&&f.texture.dispose();let d=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],S=0;d===!0&&(S=1),m===!0&&(S=2),v===!0&&(S=3);let M=o.attributes.position.count*S,A=1;M>t.maxTextureSize&&(A=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let T=new Float32Array(M*A*4*u),x=new Cr(T,M,A,u);x.type=Fn,x.needsUpdate=!0;let E=S*4;for(let C=0;C<u;C++){let U=p[C],B=g[C],W=y[C],L=M*A*4*C;for(let F=0;F<U.count;F++){let $=F*E;d===!0&&(s.fromBufferAttribute(U,F),T[L+$+0]=s.x,T[L+$+1]=s.y,T[L+$+2]=s.z,T[L+$+3]=0),m===!0&&(s.fromBufferAttribute(B,F),T[L+$+4]=s.x,T[L+$+5]=s.y,T[L+$+6]=s.z,T[L+$+7]=0),v===!0&&(s.fromBufferAttribute(W,F),T[L+$+8]=s.x,T[L+$+9]=s.y,T[L+$+10]=s.z,T[L+$+11]=W.itemSize===4?s.w:1)}}f={count:u,texture:x,size:new pt(M,A)},i.set(o,f),o.addEventListener("dispose",D)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let d=0;for(let v=0;v<l.length;v++)d+=l[v];let m=o.morphTargetsRelative?1:1-d;c.getUniforms().setValue(n,"morphTargetBaseInfluence",m),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function $x(n,t,e,i,s){let r=new WeakMap;function a(l){let h=s.render.frame,u=l.geometry,f=t.get(l,u);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var Jx={[la]:"LINEAR_TONE_MAPPING",[ca]:"REINHARD_TONE_MAPPING",[ha]:"CINEON_TONE_MAPPING",[ps]:"ACES_FILMIC_TONE_MAPPING",[fa]:"AGX_TONE_MAPPING",[da]:"NEUTRAL_TONE_MAPPING",[ua]:"CUSTOM_TONE_MAPPING"};function Kx(n,t,e,i,s,r){let a=new Ye(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=null,h=new we;h.setAttribute("position",new $t([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new $t([0,2,0,0,2,0],2));let u=new Ks({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Ht(h,u),d=new us(-1,1,1,-1,0,1),m=null,v=null,p=!1,g,y=null,S=[],M=!1;this.setSize=function(A,T){a.setSize(A,T),o!==null&&o.setSize(A,T),c!==null&&c.setSize(A,T);for(let x=0;x<S.length;x++){let E=S[x];E.setSize&&E.setSize(A,T)}},this.setEffects=function(A){S=A,M=S.length>0&&S[0].isRenderPass===!0;let T=a.width,x=a.height;S.length>0&&o===null&&(o=new Ye(T,x,{type:nn,depthBuffer:!1,stencilBuffer:!1}),c=new Ye(T,x,{type:nn,depthBuffer:!1,stencilBuffer:!1}));let E=s===!0&&S.some(D=>D.needsDepthTexture===!0);E!==(a.depthTexture!==null)&&(E===!0&&l===null&&(l=new yi(T,x),r===!0&&(l.format=wi,l.type=gs)),a.dispose(),a.depthTexture=E?l:null,a.resolveDepthBuffer=E,a.storeMultisampledDepthBuffer=E);for(let D=0;D<S.length;D++){let C=S[D];C.setSize&&C.setSize(T,x),E&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(l)}},this.begin=function(A,T){if(p||A.toneMapping===ti&&S.length===0)return!1;if(y=T,T!==null){let x=T.width,E=T.height;(a.width!==x||a.height!==E)&&this.setSize(x,E)}return M===!1&&A.setRenderTarget(a),g=A.toneMapping,A.toneMapping=ti,!0},this.hasRenderPass=function(){return M},this.end=function(A,T){A.toneMapping=g,p=!0;let x=a,E=o;for(let D=0;D<S.length;D++){let C=S[D];C.enabled!==!1&&(C.render(A,E,x,T),C.needsSwap!==!1&&(x=E,E=E===o?c:o))}if(m!==A.outputColorSpace||v!==A.toneMapping){m=A.outputColorSpace,v=A.toneMapping,u.defines={},ue.getTransfer(m)===ve&&(u.defines.SRGB_TRANSFER="");let D=Jx[v];D&&(u.defines[D]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=x.texture,A.setRenderTarget(y),A.render(f,d),y=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),u.dispose()}}var Td=new _n,Ad=new yi(1,1),Rd=new Hr(1),Cd=new Cr,Pd=new wo,Id=new kr,rd=[],ad=[],od=new Float32Array(16),ld=new Float32Array(9),cd=new Float32Array(4);function sr(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=rd[s];if(r===void 0&&(r=new Float32Array(s),rd[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function Ze(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function $e(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Hl(n,t){let e=ad[t];e===void 0&&(e=new Int32Array(t),ad[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Qx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function jx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;n.uniform2fv(this.addr,t),$e(e,t)}}function t_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ze(e,t))return;n.uniform3fv(this.addr,t),$e(e,t)}}function e_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;n.uniform4fv(this.addr,t),$e(e,t)}}function n_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ze(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),$e(e,t)}else{if(Ze(e,i))return;cd.set(i),n.uniformMatrix2fv(this.addr,!1,cd),$e(e,i)}}function i_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ze(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),$e(e,t)}else{if(Ze(e,i))return;ld.set(i),n.uniformMatrix3fv(this.addr,!1,ld),$e(e,i)}}function s_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ze(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),$e(e,t)}else{if(Ze(e,i))return;od.set(i),n.uniformMatrix4fv(this.addr,!1,od),$e(e,i)}}function r_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function a_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;n.uniform2iv(this.addr,t),$e(e,t)}}function o_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;n.uniform3iv(this.addr,t),$e(e,t)}}function l_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;n.uniform4iv(this.addr,t),$e(e,t)}}function c_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function h_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;n.uniform2uiv(this.addr,t),$e(e,t)}}function u_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;n.uniform3uiv(this.addr,t),$e(e,t)}}function f_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;n.uniform4uiv(this.addr,t),$e(e,t)}}function Gl(n){return n.version===0&&(n.compareFunction=mh,n.needsUpdate=!0),n}function d_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=Gl(Ad):r=Td,e.setTexture2D(t||r,s)}function p_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Pd,s)}function m_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=Gl(Rd):r=Id,e.setTextureCube(t||r,s)}function g_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Cd,s)}function x_(n){switch(n){case 5126:return Qx;case 35664:return jx;case 35665:return t_;case 35666:return e_;case 35674:return n_;case 35675:return i_;case 35676:return s_;case 5124:case 35670:return r_;case 35667:case 35671:return a_;case 35668:case 35672:return o_;case 35669:case 35673:return l_;case 5125:return c_;case 36294:return h_;case 36295:return u_;case 36296:return f_;case 35678:case 36198:case 36298:case 36306:case 35682:return d_;case 35679:case 36299:case 36307:return p_;case 35680:case 36300:case 36308:case 36293:return m_;case 36289:case 36303:case 36311:case 36292:return g_}}function __(n,t){n.uniform1fv(this.addr,t)}function v_(n,t){let e=sr(t,this.size,2);n.uniform2fv(this.addr,e)}function y_(n,t){let e=sr(t,this.size,3);n.uniform3fv(this.addr,e)}function M_(n,t){let e=sr(t,this.size,4);n.uniform4fv(this.addr,e)}function S_(n,t){let e=sr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function b_(n,t){let e=sr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function E_(n,t){let e=sr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function w_(n,t){n.uniform1iv(this.addr,t)}function T_(n,t){n.uniform2iv(this.addr,t)}function A_(n,t){n.uniform3iv(this.addr,t)}function R_(n,t){n.uniform4iv(this.addr,t)}function C_(n,t){n.uniform1uiv(this.addr,t)}function P_(n,t){n.uniform2uiv(this.addr,t)}function I_(n,t){n.uniform3uiv(this.addr,t)}function L_(n,t){n.uniform4uiv(this.addr,t)}function D_(n,t,e){let i=this.cache,s=t.length,r=Hl(e,s);Ze(i,r)||(n.uniform1iv(this.addr,r),$e(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Gl(Ad):a=Td;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function N_(n,t,e){let i=this.cache,s=t.length,r=Hl(e,s);Ze(i,r)||(n.uniform1iv(this.addr,r),$e(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Pd,r[a])}function U_(n,t,e){let i=this.cache,s=t.length,r=Hl(e,s);Ze(i,r)||(n.uniform1iv(this.addr,r),$e(i,r));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=Gl(Rd):a=Id;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function F_(n,t,e){let i=this.cache,s=t.length,r=Hl(e,s);Ze(i,r)||(n.uniform1iv(this.addr,r),$e(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Cd,r[a])}function O_(n){switch(n){case 5126:return __;case 35664:return v_;case 35665:return y_;case 35666:return M_;case 35674:return S_;case 35675:return b_;case 35676:return E_;case 5124:case 35670:return w_;case 35667:case 35671:return T_;case 35668:case 35672:return A_;case 35669:case 35673:return R_;case 5125:return C_;case 36294:return P_;case 36295:return I_;case 36296:return L_;case 35678:case 36198:case 36298:case 36306:case 35682:return D_;case 35679:case 36299:case 36307:return N_;case 35680:case 36300:case 36308:case 36293:return U_;case 36289:case 36303:case 36311:case 36292:return F_}}var wh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=x_(e.type)}},Th=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=O_(e.type)}},Ah=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],i)}}},bh=/(\w+)(\])?(\[|\.)?/g;function hd(n,t){n.seq.push(t),n.map[t.id]=t}function B_(n,t,e){let i=n.name,s=i.length;for(bh.lastIndex=0;;){let r=bh.exec(i),a=bh.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){hd(e,l===void 0?new wh(o,n,t):new Th(o,n,t));break}else{let u=e.map[o];u===void 0&&(u=new Ah(o),hd(e,u)),e=u}}}var nr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);B_(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};function ud(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var z_=37297,k_=0;function H_(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var fd=new Qt;function G_(n){ue._getMatrix(fd,ue.workingColorSpace,n);let t=`mat3( ${fd.elements.map(e=>e.toFixed(4))} )`;switch(ue.getTransfer(n)){case Tr:return[t,"LinearTransferOETF"];case ve:return[t,"sRGBTransferOETF"];default:return Zt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function dd(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+H_(n.getShaderSource(t),o)}else return r}function V_(n,t){let e=G_(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var W_={[la]:"Linear",[ca]:"Reinhard",[ha]:"Cineon",[ps]:"ACESFilmic",[fa]:"AgX",[da]:"Neutral",[ua]:"Custom"};function X_(n,t){let e=W_[t];return e===void 0?(Zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var zl=new O;function q_(){ue.getLuminanceCoefficients(zl);let n=zl.x.toFixed(4),t=zl.y.toFixed(4),e=zl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Y_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sa).join(`
`)}function Z_(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function $_(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Sa(n){return n!==""}function pd(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function md(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var J_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rh(n){return n.replace(J_,K_)}function K_(n,t){let e=le[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Rh(e)}var Q_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gd(n){return n.replace(Q_,j_)}function j_(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function xd(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}var tv={[oa]:"SHADOWMAP_TYPE_PCF",[js]:"SHADOWMAP_TYPE_VSM"};function ev(n){return tv[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var nv={[tr]:"ENVMAP_MODE_REFRACTION"};function iv(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":nv[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var sv={[rh]:"ENVMAP_BLENDING_MULTIPLY",[Cf]:"ENVMAP_BLENDING_MIX",[Pf]:"ENVMAP_BLENDING_ADD"};function rv(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":sv[n.combine]||"ENVMAP_BLENDING_NONE"}function av(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=ev(e),l=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=iv(e),u=rv(e),f=Y_(e),d=Z_(r),m=s.createProgram(),v,p,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(Sa).join(`
`),v.length>0&&(v+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(Sa).join(`
`),p.length>0&&(p+=`
`)):(v=[xd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sa).join(`
`),p=[xd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ti?"#define TONE_MAPPING":"",e.toneMapping!==ti?le.tonemapping_pars_fragment:"",e.toneMapping!==ti?X_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",le.colorspace_pars_fragment,V_("linearToOutputTexel",e.outputColorSpace),q_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Sa).join(`
`)),a=Rh(a),a=pd(a,e),a=md(a,e),o=Rh(o),o=pd(o,e),o=md(o,e),a=gd(a),o=gd(o),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,v=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,p=["#define varying in",e.glslVersion===xh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===xh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=g+v+a,S=g+p+o,M=ud(s,s.VERTEX_SHADER,y),A=ud(s,s.FRAGMENT_SHADER,S);s.attachShader(m,M),s.attachShader(m,A),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function T(C){if(n.debug.checkShaderErrors){let U=s.getProgramInfoLog(m)||"",B=s.getShaderInfoLog(M)||"",W=s.getShaderInfoLog(A)||"",L=U.trim(),F=B.trim(),$=W.trim(),G=!0,ut=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,M,A);else{let et=dd(s,M,"vertex"),at=dd(s,A,"fragment");Jt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+L+`
`+et+`
`+at)}else L!==""?Zt("WebGLProgram: Program Info Log:",L):(F===""||$==="")&&(ut=!1);ut&&(C.diagnostics={runnable:G,programLog:L,vertexShader:{log:F,prefix:v},fragmentShader:{log:$,prefix:p}})}s.deleteShader(M),s.deleteShader(A),x=new nr(s,m),E=$_(s,m)}let x;this.getUniforms=function(){return x===void 0&&T(this),x};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(m,z_)),D},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=k_++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=M,this.fragmentShader=A,this}var ov=0,Ch=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Ph(t),e.set(t,i)),i}},Ph=class{constructor(t){this.id=ov++,this.code=t,this.usedTimes=0}};function lv(n){return n===Yi||n===va||n===ya}function cv(n,t,e,i,s,r){let a=new Pr,o=new Ch,c=new Set,l=[],h=new Map,u=i.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,E,D,C,U,B){let W=C.fog,L=U.geometry,F=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,$=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,G=t.get(x.envMap||F,$),ut=f[x.type],et=i.precision;x.precision!==null&&(et=i.getMaxPrecision(x.precision),et!==x.precision&&Zt("WebGLProgram.getParameters:",x.precision,"not supported, using",et,"instead."));let at=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,P=at!==void 0?at.length:0,nt=0;L.morphAttributes.position!==void 0&&(nt=1),L.morphAttributes.normal!==void 0&&(nt=2),L.morphAttributes.color!==void 0&&(nt=3);let ct,X,rt,mt;if(ut){let It=ni[ut];ct=It.vertexShader,X=It.fragmentShader}else{ct=x.vertexShader,X=x.fragmentShader;let It=o.getVertexShaderStage(x),be=o.getFragmentShaderStage(x);o.update(x,It,be),rt=It.id,mt=be.id}let Nt=n.getRenderTarget(),At=n.state.buffers.depth.getReversed(),Vt=U.isInstancedMesh===!0,_e=U.isBatchedMesh===!0,Wt=!!x.map,se=!!x.matcap,re=!!G,lt=re&&G.isPMREMTexture===!0,Et=!!x.aoMap,yt=!!x.lightMap,dt=!!x.bumpMap&&x.wireframe===!1,Mt=!!x.normalMap,Yt=!!x.displacementMap,Ot=!!x.emissiveMap,jt=!!x.metalnessMap,Kt=!!x.roughnessMap,ee=x.anisotropy>0,z=x.clearcoat>0,Re=x.diffuseRoughness>0,Pt=x.dispersion>0,ne=x.retroreflectivity>0,St=x.iridescence>0,I=x.sheen>0,q=x.transmission>0,j=ee&&!!x.anisotropyMap,b=z&&!!x.clearcoatMap,_=z&&!!x.clearcoatNormalMap,N=z&&!!x.clearcoatRoughnessMap,Y=Re&&!!x.diffuseRoughnessMap,H=St&&!!x.iridescenceMap,it=St&&!!x.iridescenceThicknessMap,ot=I&&!!x.sheenColorMap,V=I&&!!x.sheenRoughnessMap,J=!!x.specularMap,ht=!!x.specularColorMap,R=!!x.specularIntensityMap,tt=q&&!!x.transmissionMap,Q=q&&!!x.thicknessMap,gt=!!x.gradientMap,vt=!!x.alphaMap,wt=x.alphaTest>0,Xt=!!x.alphaHash,oe=!!x.extensions,_t=ti;x.toneMapped&&(Nt===null||Nt.isXRRenderTarget===!0)&&(_t=n.toneMapping);let qt=lt?G.isCompressedCubeTexture?G.image[0].mipmaps:G.mipmaps:null,ae={shaderID:ut,shaderType:x.type,shaderName:x.name,vertexShader:ct,fragmentShader:X,defines:x.defines,customVertexShaderID:rt,customFragmentShaderID:mt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:et,batching:_e,batchingColor:_e&&U._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&U.instanceColor!==null,instancingMorph:Vt&&U.morphTexture!==null,outputColorSpace:Nt===null?n.outputColorSpace:Nt.isXRRenderTarget===!0?Nt.texture.colorSpace:ue.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Wt,matcap:se,envMap:re,envMapMode:re&&G.mapping,envMapPMREM:lt,envMapMaxLod:lt?qt.length-1:null,envMapSize:lt?qt[0].width:null,aoMap:Et,lightMap:yt,bumpMap:dt,normalMap:Mt,displacementMap:Yt,emissiveMap:Ot,normalMapObjectSpace:Mt&&x.normalMapType===Df,normalMapTangentSpace:Mt&&x.normalMapType===Fl,packedNormalMap:Mt&&x.normalMapType===Fl&&lv(x.normalMap.format),metalnessMap:jt,roughnessMap:Kt,anisotropy:ee,anisotropyMap:j,clearcoat:z,clearcoatMap:b,clearcoatNormalMap:_,clearcoatRoughnessMap:N,diffuseRoughness:Re,diffuseRoughnessMap:Y,dispersion:Pt,retroreflection:ne,iridescence:St,iridescenceMap:H,iridescenceThicknessMap:it,sheen:I,sheenColorMap:ot,sheenRoughnessMap:V,specularMap:J,specularColorMap:ht,specularIntensityMap:R,transmission:q,transmissionMap:tt,thicknessMap:Q,gradientMap:gt,opaque:x.transparent===!1&&x.blending===qi&&x.alphaToCoverage===!1,alphaMap:vt,alphaTest:wt,alphaHash:Xt,combine:x.combine,mapUv:Wt&&d(x.map.channel),aoMapUv:Et&&d(x.aoMap.channel),lightMapUv:yt&&d(x.lightMap.channel),bumpMapUv:dt&&d(x.bumpMap.channel),normalMapUv:Mt&&d(x.normalMap.channel),displacementMapUv:Yt&&d(x.displacementMap.channel),emissiveMapUv:Ot&&d(x.emissiveMap.channel),metalnessMapUv:jt&&d(x.metalnessMap.channel),roughnessMapUv:Kt&&d(x.roughnessMap.channel),anisotropyMapUv:j&&d(x.anisotropyMap.channel),clearcoatMapUv:b&&d(x.clearcoatMap.channel),clearcoatNormalMapUv:_&&d(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:N&&d(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Y&&d(x.diffuseRoughnessMap.channel),iridescenceMapUv:H&&d(x.iridescenceMap.channel),iridescenceThicknessMapUv:it&&d(x.iridescenceThicknessMap.channel),sheenColorMapUv:ot&&d(x.sheenColorMap.channel),sheenRoughnessMapUv:V&&d(x.sheenRoughnessMap.channel),specularMapUv:J&&d(x.specularMap.channel),specularColorMapUv:ht&&d(x.specularColorMap.channel),specularIntensityMapUv:R&&d(x.specularIntensityMap.channel),transmissionMapUv:tt&&d(x.transmissionMap.channel),thicknessMapUv:Q&&d(x.thicknessMap.channel),alphaMapUv:vt&&d(x.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(Mt||ee),vertexNormals:!!L.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!L.attributes.uv&&(Wt||vt),fog:!!W,useFog:x.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||L.attributes.normal===void 0&&Mt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:At,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:nt,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:B.filter(It=>It.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:_t,decodeVideoTexture:Wt&&x.map.isVideoTexture===!0&&ue.getTransfer(x.map.colorSpace)===ve,decodeVideoTextureEmissive:Ot&&x.emissiveMap.isVideoTexture===!0&&ue.getTransfer(x.emissiveMap.colorSpace)===ve,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===He,flipSided:x.side===en,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:oe&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oe&&x.extensions.multiDraw===!0||_e)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ae.vertexUv1s=c.has(1),ae.vertexUv2s=c.has(2),ae.vertexUv3s=c.has(3),c.clear(),ae}function v(x){let E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(let D in x.defines)E.push(D),E.push(x.defines[D]);return x.isRawShaderMaterial===!1&&(p(E,x),g(E,x),E.push(n.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function p(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapPMREM),x.push(E.envMapMaxLod),x.push(E.envMapSize),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.diffuseRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.numSunLights),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numSunLightShadows),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.numLightProbeGrids),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function g(x,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.diffuseRoughness&&a.enable(25),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function y(x){let E=f[x.type],D;if(E){let C=ni[E];D=Ai.clone(C.uniforms)}else D=x.uniforms;return D}function S(x,E){let D=h.get(E);return D!==void 0?++D.usedTimes:(D=new av(n,E,x,s),l.push(D),h.set(E,D)),D}function M(x){if(--x.usedTimes===0){let E=l.indexOf(x);l[E]=l[l.length-1],l.pop(),h.delete(x.cacheKey),x.destroy()}}function A(x){o.remove(x)}function T(){o.dispose()}return{getParameters:m,getProgramCacheKey:v,getUniforms:y,acquireProgram:S,releaseProgram:M,releaseShaderCache:A,programs:l,dispose:T}}function hv(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,c){n.get(a)[o]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function uv(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function _d(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function vd(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function o(f,d,m,v,p,g){let y=n[t];return y===void 0?(y={id:f.id,object:f,geometry:d,material:m,materialVariant:a(f),groupOrder:v,renderOrder:f.renderOrder,z:p,group:g},n[t]=y):(y.id=f.id,y.object=f,y.geometry=d,y.material=m,y.materialVariant=a(f),y.groupOrder=v,y.renderOrder=f.renderOrder,y.z=p,y.group=g),t++,y}function c(f,d,m,v,p,g,y){y.reversedDepth===!0&&(p=-p);let S=o(f,d,m,v,p,g);m.transmission>0?i.push(S):m.transparent===!0?s.push(S):e.push(S)}function l(f,d,m,v,p,g){let y=o(f,d,m,v,p,g);m.transmission>0?i.unshift(y):m.transparent===!0?s.unshift(y):e.unshift(y)}function h(f,d){e.length>1&&e.sort(f||uv),i.length>1&&i.sort(d||_d),s.length>1&&s.sort(d||_d)}function u(){for(let f=t,d=n.length;f<d;f++){let m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:u,sort:h}}function fv(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new vd,n.set(i,[a])):s>=r.length?(a=new vd,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function dv(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new O,color:new kt};break;case"SpotLight":e={position:new O,direction:new O,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new O,halfWidth:new O,halfHeight:new O};break}return n[t.id]=e,e}}}function pv(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var mv=0;function gv(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function xv(n){let t=new dv,e=pv(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new O);let s=new O,r=new ge,a=new ge;function o(l){let h=0,u=0,f=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let d=0,m=0,v=0,p=0,g=0,y=0,S=0,M=0,A=0,T=0,x=0,E=0,D=0,C=0;l.sort(gv);for(let B=0,W=l.length;B<W;B++){let L=l[B],F=L.color,$=L.intensity,G=L.distance,ut=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Yi?ut=L.shadow.map.texture:ut=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=F.r*$,u+=F.g*$,f+=F.b*$;else if(L.isLightProbe){for(let et=0;et<9;et++)i.probe[et].addScaledVector(L.sh.coefficients[et],$);C++}else if(L.isSunLight){let et=t.get(L);if(et.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let at=L.shadow,P=e.get(L);P.shadowIntensity=at.intensity,P.shadowBias=at.bias,P.shadowNormalBias=at.normalBias,P.shadowRadius=at.radius,P.shadowMapSize.copy(at.mapSize).multiply(at.getFrameExtents()),i.sunShadow[m]=P,i.sunShadowMap[m]=ut;let nt=at.getViewportCount();for(let ct=0;ct<nt;ct++)i.sunShadowMatrix[v+ct]=at.getMatrix(ct),i.sunShadowCascade[v+ct]=at._cascadeData[ct];v+=nt,m++}i.sun[d]=et,d++}else if(L.isDirectionalLight){let et=t.get(L);if(et.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let at=L.shadow,P=e.get(L);P.shadowIntensity=at.intensity,P.shadowBias=at.bias,P.shadowNormalBias=at.normalBias,P.shadowRadius=at.radius,P.shadowMapSize=at.mapSize,i.directionalShadow[p]=P,i.directionalShadowMap[p]=ut,i.directionalShadowMatrix[p]=L.shadow.matrix,A++}i.directional[p]=et,p++}else if(L.isSpotLight){let et=t.get(L);et.position.setFromMatrixPosition(L.matrixWorld),et.color.copy(F).multiplyScalar($),et.distance=G,et.coneCos=Math.cos(L.angle),et.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),et.decay=L.decay,i.spot[y]=et;let at=L.shadow;if(L.map&&(i.spotLightMap[E]=L.map,E++,at.updateMatrices(L),L.castShadow&&D++),i.spotLightMatrix[y]=at.matrix,L.castShadow){let P=e.get(L);P.shadowIntensity=at.intensity,P.shadowBias=at.bias,P.shadowNormalBias=at.normalBias,P.shadowRadius=at.radius,P.shadowMapSize=at.mapSize,i.spotShadow[y]=P,i.spotShadowMap[y]=ut,x++}y++}else if(L.isRectAreaLight){let et=t.get(L);et.color.copy(F).multiplyScalar($),et.halfWidth.set(L.width*.5,0,0),et.halfHeight.set(0,L.height*.5,0),i.rectArea[S]=et,S++}else if(L.isPointLight){let et=t.get(L);if(et.color.copy(L.color).multiplyScalar(L.intensity),et.distance=L.distance,et.decay=L.decay,L.castShadow){let at=L.shadow,P=e.get(L);P.shadowIntensity=at.intensity,P.shadowBias=at.bias,P.shadowNormalBias=at.normalBias,P.shadowRadius=at.radius,P.shadowMapSize=at.mapSize,P.shadowCameraNear=at.camera.near,P.shadowCameraFar=at.camera.far,i.pointShadow[g]=P,i.pointShadowMap[g]=ut,i.pointShadowMatrix[g]=L.shadow.matrix,T++}i.point[g]=et,g++}else if(L.isHemisphereLight){let et=t.get(L);et.skyColor.copy(L.color).multiplyScalar($),et.groundColor.copy(L.groundColor).multiplyScalar($),i.hemi[M]=et,M++}}S>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Lt.LTC_FLOAT_1,i.rectAreaLTC2=Lt.LTC_FLOAT_2):(i.rectAreaLTC1=Lt.LTC_HALF_1,i.rectAreaLTC2=Lt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;let U=i.hash;(U.sunLength!==d||U.directionalLength!==p||U.pointLength!==g||U.spotLength!==y||U.rectAreaLength!==S||U.hemiLength!==M||U.numSunShadows!==m||U.numDirectionalShadows!==A||U.numPointShadows!==T||U.numSpotShadows!==x||U.numSpotMaps!==E||U.numLightProbes!==C)&&(i.sun.length=d,i.directional.length=p,i.spot.length=y,i.rectArea.length=S,i.point.length=g,i.hemi.length=M,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.directionalShadowMatrix.length=A,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=x,i.spotShadowMap.length=x,i.spotLightMatrix.length=x+E-D,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=C,U.sunLength=d,U.directionalLength=p,U.pointLength=g,U.spotLength=y,U.rectAreaLength=S,U.hemiLength=M,U.numSunShadows=m,U.numDirectionalShadows=A,U.numPointShadows=T,U.numSpotShadows=x,U.numSpotMaps=E,U.numLightProbes=C,i.version=mv++)}function c(l,h){let u=0,f=0,d=0,m=0,v=0,p=0,g=h.matrixWorldInverse;for(let y=0,S=l.length;y<S;y++){let M=l[y];if(M.isSunLight){let A=i.sun[u];A.direction.setFromMatrixPosition(M.matrixWorld),A.direction.transformDirection(g),u++}else if(M.isDirectionalLight){let A=i.directional[f];A.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(g),f++}else if(M.isSpotLight){let A=i.spot[m];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(g),A.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(g),m++}else if(M.isRectAreaLight){let A=i.rectArea[v];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(g),a.identity(),r.copy(M.matrixWorld),r.premultiply(g),a.extractRotation(r),A.halfWidth.set(M.width*.5,0,0),A.halfHeight.set(0,M.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),v++}else if(M.isPointLight){let A=i.point[d];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(g),d++}else if(M.isHemisphereLight){let A=i.hemi[p];A.direction.setFromMatrixPosition(M.matrixWorld),A.direction.transformDirection(g),p++}}}return{setup:o,setupView:c,state:i}}function yd(n){let t=new xv(n),e=[],i=[],s=[];function r(u){h.camera=u,e.length=0,i.length=0,s.length=0}function a(u){u.isLightProbeGrid?s.push(u):e.push(u)}function o(u){i.push(u)}function c(){t.setup(e),s.sort((u,f)=>u.priority-f.priority||u.id-f.id)}function l(u){t.setupView(e,u)}let h={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function _v(n){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new yd(n),t.set(s,[o])):r>=a.length?(o=new yd(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var vv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yv=`uniform sampler2D shadow_pass;
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
}`,Mv=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],Sv=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],Md=new ge,Ma=new O,Eh=new O;function bv(n,t,e){let i=new Hi,s=new pt,r=new pt,a=new Le,o=new Uo,c=new Fo,l={},h=e.maxTextureSize,u={[Xi]:en,[en]:Xi,[He]:He},f=new Oe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:vv,fragmentShader:yv}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new we;m.setAttribute("position",new qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Ht(m,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oa;let g=this.type;this.render=function(T,x,E){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===$o&&(Zt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=oa);let D=n.getRenderTarget(),C=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),B=n.state;B.setBlending(bi),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let W=g!==this.type;W&&x.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(F=>F.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,F=T.length;L<F;L++){let $=T[L],G=$.shadow;if(G===void 0){Zt("WebGLShadowMap:",$,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let ut=G.getFrameExtents();s.multiply(ut),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ut.x),s.x=r.x*ut.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ut.y),s.y=r.y*ut.y,G.mapSize.y=r.y));let et=n.state.buffers.depth.getReversed();if(G.camera._reversedDepth=et,G.map===null||W===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===js){if($.isPointLight){Zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Ye(s.x,s.y,{format:Yi,type:nn,minFilter:xn,magFilter:xn,generateMipmaps:!1}),G.map.texture.name=$.name+".shadowMap",G.map.depthTexture=new yi(s.x,s.y,Fn),G.map.depthTexture.name=$.name+".shadowMapDepth",G.map.depthTexture.format=xi,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=je,G.map.depthTexture.magFilter=je}else $.isPointLight?(G.map=new ba(s.x),G.map.depthTexture=new Hr(s.x,Wn)):(G.map=new Ye(s.x,s.y),G.map.depthTexture=new yi(s.x,s.y,Wn)),G.map.depthTexture.name=$.name+".shadowMap",G.map.depthTexture.format=xi,this.type===oa?(G.map.depthTexture.compareFunction=et?ph:dh,G.map.depthTexture.minFilter=xn,G.map.depthTexture.magFilter=xn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=je,G.map.depthTexture.magFilter=je);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==s.x||G.map.height!==s.y)&&G.map.setSize(s.x,s.y);let at=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();$.isPointLight!==!0&&G.updateMatrices($,E);let P=(G.camera.layers.mask&4294967294)!==0?G.camera.layers:E.layers;for(let nt=0;nt<at;nt++){let ct=G.getCamera(nt);if($.isPointLight){let X=G.camera,rt=G.matrix,mt=$.distance||X.far;mt!==X.far&&(X.far=mt,X.updateProjectionMatrix()),Ma.setFromMatrixPosition($.matrixWorld),X.position.copy(Ma),Eh.copy(X.position),Eh.add(Mv[nt]),X.up.copy(Sv[nt]),X.lookAt(Eh),X.updateMatrixWorld(),rt.makeTranslation(-Ma.x,-Ma.y,-Ma.z),Md.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Md,X.coordinateSystem,X.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)n.setRenderTarget(G.map,nt),n.clear();else{nt===0&&(n.setRenderTarget(G.map),n.clear());let X=G.getViewport(nt);a.set(r.x*X.x,r.y*X.y,r.x*X.z,r.y*X.w),B.viewport(a)}i=G.getFrustum(nt),M(x,E,ct,$,P,this.type)}G.isPointLightShadow!==!0&&this.type===js&&y(G,E),G.needsUpdate=!1}g=this.type,p.needsUpdate=!1,n.setRenderTarget(D,C,U)};function y(T,x){let E=t.update(v);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null?T.mapPass=new Ye(s.x,s.y,{format:Yi,type:nn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(x,null,E,f,v,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(x,null,E,d,v,null)}function S(T,x,E,D){let C=null,U=E.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(U!==void 0)C=U;else if(C=E.isPointLight===!0?c:o,n.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let B=C.uuid,W=x.uuid,L=l[B];L===void 0&&(L={},l[B]=L);let F=L[W];F===void 0&&(F=C.clone(),L[W]=F,x.addEventListener("dispose",A)),C=F}if(C.visible=x.visible,C.wireframe=x.wireframe,D===js?C.side=x.shadowSide!==null?x.shadowSide:x.side:C.side=x.shadowSide!==null?x.shadowSide:u[x.side],C.alphaMap=x.alphaMap,C.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,C.map=x.map,C.clipShadows=x.clipShadows,C.clippingPlanes=x.clippingPlanes,C.clipIntersection=x.clipIntersection,C.displacementMap=x.displacementMap,C.displacementScale=x.displacementScale,C.displacementBias=x.displacementBias,C.wireframeLinewidth=x.wireframeLinewidth,C.linewidth=x.linewidth,E.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let B=n.properties.get(C);B.light=E}return C}function M(T,x,E,D,C,U){if(T.visible===!1)return;if(T.layers.test(C)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&U===js)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,T.matrixWorld);let L=t.update(T),F=T.material;if(Array.isArray(F)){let $=L.groups;for(let G=0,ut=$.length;G<ut;G++){let et=$[G],at=F[et.materialIndex];if(at&&at.visible){let P=S(T,at,D,U);T.onBeforeShadow(n,T,x,E,L,P,et),n.renderBufferDirect(E,null,L,P,T,et),T.onAfterShadow(n,T,x,E,L,P,et)}}}else if(F.visible){let $=S(T,F,D,U);T.onBeforeShadow(n,T,x,E,L,$,null),n.renderBufferDirect(E,null,L,$,T,null),T.onAfterShadow(n,T,x,E,L,$,null)}}let W=T.children;for(let L=0,F=W.length;L<F;L++)M(W[L],x,E,D,C,U)}function A(T){T.target.removeEventListener("dispose",A);for(let E in l){let D=l[E],C=T.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}}function Ev(n,t){function e(){let R=!1,tt=new Le,Q=null,gt=new Le(0,0,0,0);return{setMask:function(vt){Q!==vt&&!R&&(n.colorMask(vt,vt,vt,vt),Q=vt)},setLocked:function(vt){R=vt},setClear:function(vt,wt,Xt,oe,_t){_t===!0&&(vt*=oe,wt*=oe,Xt*=oe),tt.set(vt,wt,Xt,oe),gt.equals(tt)===!1&&(n.clearColor(vt,wt,Xt,oe),gt.copy(tt))},reset:function(){R=!1,Q=null,gt.set(-1,0,0,0)}}}function i(){let R=!1,tt=!1,Q=null,gt=null,vt=null;return{setReversed:function(wt){if(tt!==wt){let Xt=t.get("EXT_clip_control");wt?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT),tt=wt;let oe=vt;vt=null,this.setClear(oe)}},getReversed:function(){return tt},setTest:function(wt){wt?At(n.DEPTH_TEST):Vt(n.DEPTH_TEST)},setMask:function(wt){Q!==wt&&!R&&(n.depthMask(wt),Q=wt)},setFunc:function(wt){if(tt&&(wt=Vf[wt]),gt!==wt){switch(wt){case fo:n.depthFunc(n.NEVER);break;case po:n.depthFunc(n.ALWAYS);break;case mo:n.depthFunc(n.LESS);break;case Gs:n.depthFunc(n.LEQUAL);break;case go:n.depthFunc(n.EQUAL);break;case xo:n.depthFunc(n.GEQUAL);break;case _o:n.depthFunc(n.GREATER);break;case vo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}gt=wt}},setLocked:function(wt){R=wt},setClear:function(wt){vt!==wt&&(vt=wt,tt&&(wt=1-wt),n.clearDepth(wt))},reset:function(){R=!1,Q=null,gt=null,vt=null,tt=!1}}}function s(){let R=!1,tt=null,Q=null,gt=null,vt=null,wt=null,Xt=null,oe=null,_t=null;return{setTest:function(qt){R||(qt?At(n.STENCIL_TEST):Vt(n.STENCIL_TEST))},setMask:function(qt){tt!==qt&&!R&&(n.stencilMask(qt),tt=qt)},setFunc:function(qt,ae,It){(Q!==qt||gt!==ae||vt!==It)&&(n.stencilFunc(qt,ae,It),Q=qt,gt=ae,vt=It)},setOp:function(qt,ae,It){(wt!==qt||Xt!==ae||oe!==It)&&(n.stencilOp(qt,ae,It),wt=qt,Xt=ae,oe=It)},setLocked:function(qt){R=qt},setClear:function(qt){_t!==qt&&(n.clearStencil(qt),_t=qt)},reset:function(){R=!1,tt=null,Q=null,gt=null,vt=null,wt=null,Xt=null,oe=null,_t=null}}}let r=new e,a=new i,o=new s,c={},l=new WeakMap,h={},u={},f={},d=new WeakMap,m=[],v=null,p=!1,g=null,y=null,S=null,M=null,A=null,T=null,x=null,E=new kt(0,0,0),D=0,C=!1,U=null,B=null,W=null,L=null,F=null,$=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,ut=0,et=n.getParameter(n.VERSION);et.indexOf("WebGL")!==-1?(ut=parseFloat(/^WebGL (\d)/.exec(et)[1]),G=ut>=1):et.indexOf("OpenGL ES")!==-1&&(ut=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),G=ut>=2);let at=null,P={},nt=n.getParameter(n.SCISSOR_BOX),ct=n.getParameter(n.VIEWPORT),X=new Le().fromArray(nt),rt=new Le().fromArray(ct);function mt(R,tt,Q,gt){let vt=new Uint8Array(4),wt=n.createTexture();n.bindTexture(R,wt),n.texParameteri(R,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(R,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Xt=0;Xt<Q;Xt++)R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY?n.texImage3D(tt,0,n.RGBA,1,1,gt,0,n.RGBA,n.UNSIGNED_BYTE,vt):n.texImage2D(tt+Xt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,vt);return wt}let Nt={};Nt[n.TEXTURE_2D]=mt(n.TEXTURE_2D,n.TEXTURE_2D,1),Nt[n.TEXTURE_CUBE_MAP]=mt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Nt[n.TEXTURE_2D_ARRAY]=mt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Nt[n.TEXTURE_3D]=mt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),At(n.DEPTH_TEST),a.setFunc(Gs),dt(!1),Mt(th),At(n.CULL_FACE),Et(bi);function At(R){h[R]!==!0&&(n.enable(R),h[R]=!0)}function Vt(R){h[R]!==!1&&(n.disable(R),h[R]=!1)}function _e(R,tt){return f[R]!==tt?(n.bindFramebuffer(R,tt),f[R]=tt,R===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=tt),R===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=tt),!0):!1}function Wt(R,tt){let Q=m,gt=!1;if(R){Q=d.get(tt),Q===void 0&&(Q=[],d.set(tt,Q));let vt=R.textures;if(Q.length!==vt.length||Q[0]!==n.COLOR_ATTACHMENT0){for(let wt=0,Xt=vt.length;wt<Xt;wt++)Q[wt]=n.COLOR_ATTACHMENT0+wt;Q.length=vt.length,gt=!0}}else Q[0]!==n.BACK&&(Q[0]=n.BACK,gt=!0);gt&&n.drawBuffers(Q)}function se(R){return v!==R?(n.useProgram(R),v=R,!0):!1}let re={[ds]:n.FUNC_ADD,[ff]:n.FUNC_SUBTRACT,[df]:n.FUNC_REVERSE_SUBTRACT};re[pf]=n.MIN,re[mf]=n.MAX;let lt={[gf]:n.ZERO,[xf]:n.ONE,[_f]:n.SRC_COLOR,[ih]:n.SRC_ALPHA,[Ef]:n.SRC_ALPHA_SATURATE,[Sf]:n.DST_COLOR,[yf]:n.DST_ALPHA,[vf]:n.ONE_MINUS_SRC_COLOR,[sh]:n.ONE_MINUS_SRC_ALPHA,[bf]:n.ONE_MINUS_DST_COLOR,[Mf]:n.ONE_MINUS_DST_ALPHA,[wf]:n.CONSTANT_COLOR,[Tf]:n.ONE_MINUS_CONSTANT_COLOR,[Af]:n.CONSTANT_ALPHA,[Rf]:n.ONE_MINUS_CONSTANT_ALPHA};function Et(R,tt,Q,gt,vt,wt,Xt,oe,_t,qt){if(R===bi){p===!0&&(Vt(n.BLEND),p=!1);return}if(p===!1&&(At(n.BLEND),p=!0),R!==uf){if(R!==g||qt!==C){if((y!==ds||A!==ds)&&(n.blendEquation(n.FUNC_ADD),y=ds,A=ds),qt)switch(R){case qi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case fs:n.blendFunc(n.ONE,n.ONE);break;case eh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case nh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Jt("WebGLState: Invalid blending: ",R);break}else switch(R){case qi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case fs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case eh:Jt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case nh:Jt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Jt("WebGLState: Invalid blending: ",R);break}S=null,M=null,T=null,x=null,E.set(0,0,0),D=0,g=R,C=qt}return}vt=vt||tt,wt=wt||Q,Xt=Xt||gt,(tt!==y||vt!==A)&&(n.blendEquationSeparate(re[tt],re[vt]),y=tt,A=vt),(Q!==S||gt!==M||wt!==T||Xt!==x)&&(n.blendFuncSeparate(lt[Q],lt[gt],lt[wt],lt[Xt]),S=Q,M=gt,T=wt,x=Xt),(oe.equals(E)===!1||_t!==D)&&(n.blendColor(oe.r,oe.g,oe.b,_t),E.copy(oe),D=_t),g=R,C=!1}function yt(R,tt){R.side===He?Vt(n.CULL_FACE):At(n.CULL_FACE);let Q=R.side===en;tt&&(Q=!Q),dt(Q),R.blending===qi&&R.transparent===!1?Et(bi):Et(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),r.setMask(R.colorWrite);let gt=R.stencilWrite;o.setTest(gt),gt&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Ot(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?At(n.SAMPLE_ALPHA_TO_COVERAGE):Vt(n.SAMPLE_ALPHA_TO_COVERAGE)}function dt(R){U!==R&&(R?n.frontFace(n.CW):n.frontFace(n.CCW),U=R)}function Mt(R){R!==cf?(At(n.CULL_FACE),R!==B&&(R===th?n.cullFace(n.BACK):R===hf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Vt(n.CULL_FACE),B=R}function Yt(R){R!==W&&(G&&n.lineWidth(R),W=R)}function Ot(R,tt,Q){R?(At(n.POLYGON_OFFSET_FILL),(L!==tt||F!==Q)&&(L=tt,F=Q,a.getReversed()&&(tt=-tt,Q=-Q),n.polygonOffset(tt,Q))):Vt(n.POLYGON_OFFSET_FILL)}function jt(R){R?At(n.SCISSOR_TEST):Vt(n.SCISSOR_TEST)}function Kt(R){R===void 0&&(R=n.TEXTURE0+$-1),at!==R&&(n.activeTexture(R),at=R)}function ee(R,tt,Q){Q===void 0&&(at===null?Q=n.TEXTURE0+$-1:Q=at);let gt=P[Q];gt===void 0&&(gt={type:void 0,texture:void 0},P[Q]=gt),(gt.type!==R||gt.texture!==tt)&&(at!==Q&&(n.activeTexture(Q),at=Q),n.bindTexture(R,tt||Nt[R]),gt.type=R,gt.texture=tt)}function z(){let R=P[at];R!==void 0&&R.type!==void 0&&(n.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function Re(){try{n.compressedTexImage2D(...arguments)}catch(R){Jt("WebGLState:",R)}}function Pt(){try{n.compressedTexImage3D(...arguments)}catch(R){Jt("WebGLState:",R)}}function ne(){try{n.texSubImage2D(...arguments)}catch(R){Jt("WebGLState:",R)}}function St(){try{n.texSubImage3D(...arguments)}catch(R){Jt("WebGLState:",R)}}function I(){try{n.compressedTexSubImage2D(...arguments)}catch(R){Jt("WebGLState:",R)}}function q(){try{n.compressedTexSubImage3D(...arguments)}catch(R){Jt("WebGLState:",R)}}function j(){try{n.texStorage2D(...arguments)}catch(R){Jt("WebGLState:",R)}}function b(){try{n.texStorage3D(...arguments)}catch(R){Jt("WebGLState:",R)}}function _(){try{n.texImage2D(...arguments)}catch(R){Jt("WebGLState:",R)}}function N(){try{n.texImage3D(...arguments)}catch(R){Jt("WebGLState:",R)}}function Y(R){return u[R]!==void 0?u[R]:n.getParameter(R)}function H(R,tt){u[R]!==tt&&(n.pixelStorei(R,tt),u[R]=tt)}function it(R){X.equals(R)===!1&&(n.scissor(R.x,R.y,R.z,R.w),X.copy(R))}function ot(R){rt.equals(R)===!1&&(n.viewport(R.x,R.y,R.z,R.w),rt.copy(R))}function V(R,tt){let Q=l.get(tt);Q===void 0&&(Q=new WeakMap,l.set(tt,Q));let gt=Q.get(R);gt===void 0&&(gt=n.getUniformBlockIndex(tt,R.name),n.uniformBlockBinding(tt,gt,gt),Q.set(R,gt))}function J(R,tt,Q){let vt=l.get(tt).get(R);c[vt]!==Q&&(n.bindBufferBase(n.UNIFORM_BUFFER,vt,Q),c[vt]=Q)}function ht(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},u={},at=null,P={},f={},c={},d=new WeakMap,m=[],v=null,p=!1,g=null,y=null,S=null,M=null,A=null,T=null,x=null,E=new kt(0,0,0),D=0,C=!1,U=null,B=null,W=null,L=null,F=null,X.set(0,0,n.canvas.width,n.canvas.height),rt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:At,disable:Vt,bindFramebuffer:_e,drawBuffers:Wt,useProgram:se,setBlending:Et,setMaterial:yt,setFlipSided:dt,setCullFace:Mt,setLineWidth:Yt,setPolygonOffset:Ot,setScissorTest:jt,activeTexture:Kt,bindTexture:ee,unbindTexture:z,compressedTexImage2D:Re,compressedTexImage3D:Pt,texImage2D:_,texImage3D:N,pixelStorei:H,getParameter:Y,updateUBOMapping:V,uniformBlockBinding:J,texStorage2D:j,texStorage3D:b,texSubImage2D:ne,texSubImage3D:St,compressedTexSubImage2D:I,compressedTexSubImage3D:q,scissor:it,viewport:ot,reset:ht}}function wv(n,t,e,i,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new pt,h=new WeakMap,u=new Set,f,d=new WeakMap,m=new Set,v=new FinalizationRegistry(b=>m.delete(b)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,_){return p?new OffscreenCanvas(b,_):Ar("canvas")}function y(b,_,N){let Y=1,H=j(b);if((H.width>N||H.height>N)&&(Y=N/Math.max(H.width,H.height)),Y<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){let it=Math.floor(Y*H.width),ot=Math.floor(Y*H.height);f===void 0&&(f=g(it,ot));let V=_?g(it,ot):f;return V.width=it,V.height=ot,V.getContext("2d").drawImage(b,0,0,it,ot),Zt("WebGLRenderer: Texture has been resized from ("+H.width+"x"+H.height+") to ("+it+"x"+ot+")."),V}else return"data"in b&&Zt("WebGLRenderer: Image in DataTexture is too big ("+H.width+"x"+H.height+")."),b;return b}function S(b){return b.generateMipmaps}function M(b){n.generateMipmap(b)}function A(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(b,_,N,Y,H,it=!1){if(b!==null){if(n[b]!==void 0)return n[b];Zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ot;Y&&(ot=t.get("EXT_texture_norm16"),ot||Zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let V=_;if(_===n.RED&&(N===n.FLOAT&&(V=n.R32F),N===n.HALF_FLOAT&&(V=n.R16F),N===n.UNSIGNED_BYTE&&(V=n.R8),N===n.UNSIGNED_SHORT&&ot&&(V=ot.R16_EXT),N===n.SHORT&&ot&&(V=ot.R16_SNORM_EXT)),_===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&(V=n.R8UI),N===n.UNSIGNED_SHORT&&(V=n.R16UI),N===n.UNSIGNED_INT&&(V=n.R32UI),N===n.BYTE&&(V=n.R8I),N===n.SHORT&&(V=n.R16I),N===n.INT&&(V=n.R32I)),_===n.RG&&(N===n.FLOAT&&(V=n.RG32F),N===n.HALF_FLOAT&&(V=n.RG16F),N===n.UNSIGNED_BYTE&&(V=n.RG8),N===n.UNSIGNED_SHORT&&ot&&(V=ot.RG16_EXT),N===n.SHORT&&ot&&(V=ot.RG16_SNORM_EXT)),_===n.RG_INTEGER&&(N===n.UNSIGNED_BYTE&&(V=n.RG8UI),N===n.UNSIGNED_SHORT&&(V=n.RG16UI),N===n.UNSIGNED_INT&&(V=n.RG32UI),N===n.BYTE&&(V=n.RG8I),N===n.SHORT&&(V=n.RG16I),N===n.INT&&(V=n.RG32I)),_===n.RGB_INTEGER&&(N===n.UNSIGNED_BYTE&&(V=n.RGB8UI),N===n.UNSIGNED_SHORT&&(V=n.RGB16UI),N===n.UNSIGNED_INT&&(V=n.RGB32UI),N===n.BYTE&&(V=n.RGB8I),N===n.SHORT&&(V=n.RGB16I),N===n.INT&&(V=n.RGB32I)),_===n.RGBA_INTEGER&&(N===n.UNSIGNED_BYTE&&(V=n.RGBA8UI),N===n.UNSIGNED_SHORT&&(V=n.RGBA16UI),N===n.UNSIGNED_INT&&(V=n.RGBA32UI),N===n.BYTE&&(V=n.RGBA8I),N===n.SHORT&&(V=n.RGBA16I),N===n.INT&&(V=n.RGBA32I)),_===n.RGB&&(N===n.UNSIGNED_SHORT&&ot&&(V=ot.RGB16_EXT),N===n.SHORT&&ot&&(V=ot.RGB16_SNORM_EXT),N===n.UNSIGNED_INT_5_9_9_9_REV&&(V=n.RGB9_E5),N===n.UNSIGNED_INT_10F_11F_11F_REV&&(V=n.R11F_G11F_B10F)),_===n.RGBA){let J=it?Tr:ue.getTransfer(H);N===n.FLOAT&&(V=n.RGBA32F),N===n.HALF_FLOAT&&(V=n.RGBA16F),N===n.UNSIGNED_BYTE&&(V=J===ve?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT&&ot&&(V=ot.RGBA16_EXT),N===n.SHORT&&ot&&(V=ot.RGBA16_SNORM_EXT),N===n.UNSIGNED_SHORT_4_4_4_4&&(V=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&(V=n.RGB5_A1)}return(V===n.R16F||V===n.R32F||V===n.RG16F||V===n.RG32F||V===n.RGBA16F||V===n.RGBA32F)&&t.get("EXT_color_buffer_float"),V}function x(b,_){let N;return b?_===null||_===Wn||_===gs?N=n.DEPTH24_STENCIL8:_===Fn?N=n.DEPTH32F_STENCIL8:_===er&&(N=n.DEPTH24_STENCIL8,Zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Wn||_===gs?N=n.DEPTH_COMPONENT24:_===Fn?N=n.DEPTH_COMPONENT32F:_===er&&(N=n.DEPTH_COMPONENT16),N}function E(b,_){return S(b)===!0||b.isFramebufferTexture&&b.minFilter!==je&&b.minFilter!==xn?Math.log2(Math.max(_.width,_.height))+1:b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?_.mipmaps.length:1}function D(b){let _=new WeakRef(b);i.get(b).__ref=_,m.add(_),v.register(b,_,_)}function C(b){let _=i.get(b).__ref;_!==void 0&&(m.delete(_),v.unregister(_))}function U(b){W(b.target)}function B(b){L(b.target)}function W(b){b.removeEventListener("dispose",U),C(b),$(b),b.isVideoTexture&&h.delete(b),b.isHTMLTexture&&u.delete(b)}function L(b){b.removeEventListener("dispose",B),C(b),ut(b)}function F(){for(let b of m){let _=b.deref();_!==void 0&&(_.isRenderTarget===!0?L(_):W(_))}m.clear(),u.clear()}function $(b){let _=i.get(b);if(_.__webglInit===void 0)return;let N=b.source,Y=d.get(N);if(Y){let H=Y[_.__cacheKey];H.usedTimes--,H.usedTimes===0&&G(b),Object.keys(Y).length===0&&d.delete(N)}i.remove(b)}function G(b){let _=i.get(b);n.deleteTexture(_.__webglTexture);let N=b.source,Y=d.get(N);delete Y[_.__cacheKey],a.memory.textures--}function ut(b){let _=i.get(b);_.__depthDisposeCallback&&_.__depthDisposeCallback();let N=b.depthTexture;if(N&&N.renderTarget===b&&W(N),b.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(_.__webglFramebuffer[H]))for(let it=0;it<_.__webglFramebuffer[H].length;it++)n.deleteFramebuffer(_.__webglFramebuffer[H][it]);else n.deleteFramebuffer(_.__webglFramebuffer[H]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[H])}else{if(Array.isArray(_.__webglFramebuffer))for(let H=0;H<_.__webglFramebuffer.length;H++)n.deleteFramebuffer(_.__webglFramebuffer[H]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let H=0;H<_.__webglColorRenderbuffer.length;H++)_.__webglColorRenderbuffer[H]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[H]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let Y=b.textures;for(let H=0,it=Y.length;H<it;H++){let ot=i.get(Y[H]);ot.__webglTexture&&(n.deleteTexture(ot.__webglTexture),a.memory.textures--),i.remove(Y[H])}i.remove(b)}let et=0;function at(){et=0}function P(){return et}function nt(b){et=b}function ct(){let b=et;return b>=s.maxTextures&&Zt("WebGLTextures: Trying to use "+(b+1)+" texture units while this GPU supports only "+s.maxTextures),et+=1,b}function X(b){let _=[];return _.push(b.wrapS),_.push(b.wrapT),_.push(b.wrapR||0),_.push(b.magFilter),_.push(b.minFilter),_.push(b.anisotropy),_.push(b.internalFormat),_.push(b.format),_.push(b.type),_.push(b.generateMipmaps),_.push(b.mipmapsAutoUpdate),_.push(b.premultiplyAlpha),_.push(b.flipY),_.push(b.unpackAlignment),_.push(b.colorSpace),_.join()}function rt(b,_){let N=i.get(b);if(b.isVideoTexture&&I(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&N.__version!==b.version){let Y=b.image;if(Y===null)Zt("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Zt("WebGLRenderer: Texture marked for update but image is incomplete");else{yt(N,b,_);return}}else b.isExternalTexture&&(N.__webglTexture=b.sourceTexture?b.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+_)}function mt(b,_){let N=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&N.__version!==b.version){yt(N,b,_);return}else b.isExternalTexture&&(N.__webglTexture=b.sourceTexture?b.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+_)}function Nt(b,_){let N=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&N.__version!==b.version){yt(N,b,_);return}e.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+_)}function At(b,_){let N=i.get(b);if(b.version>0&&N.__version!==b.version){dt(N,b,_);return}e.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+_)}let Vt={[zi]:n.REPEAT,[Dn]:n.CLAMP_TO_EDGE,[yo]:n.MIRRORED_REPEAT},_e={[je]:n.NEAREST,[If]:n.NEAREST_MIPMAP_NEAREST,[pa]:n.NEAREST_MIPMAP_LINEAR,[xn]:n.LINEAR,[Qo]:n.LINEAR_MIPMAP_NEAREST,[Ei]:n.LINEAR_MIPMAP_LINEAR},Wt={[Uf]:n.NEVER,[mh]:n.ALWAYS,[Ff]:n.LESS,[dh]:n.LEQUAL,[Of]:n.EQUAL,[ph]:n.GEQUAL,[Bf]:n.GREATER,[zf]:n.NOTEQUAL};function se(b,_){if(_.type===Fn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===xn||_.magFilter===Qo||_.magFilter===pa||_.magFilter===Ei||_.minFilter===xn||_.minFilter===Qo||_.minFilter===pa||_.minFilter===Ei)&&Zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,Vt[_.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,Vt[_.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,Vt[_.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,_e[_.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,_e[_.minFilter]),_.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,Wt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===je||_.minFilter!==pa&&_.minFilter!==Ei||_.type===Fn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let N=t.get("EXT_texture_filter_anisotropic");n.texParameterf(b,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function re(b,_){let N=!1;b.__webglInit===void 0&&(b.__webglInit=!0,_.addEventListener("dispose",U),D(_));let Y=_.source,H=d.get(Y);H===void 0&&(H={},d.set(Y,H));let it=X(_);if(it!==b.__cacheKey){H[it]===void 0&&(H[it]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,N=!0),H[it].usedTimes++;let ot=H[b.__cacheKey];ot!==void 0&&(H[b.__cacheKey].usedTimes--,ot.usedTimes===0&&G(_)),b.__cacheKey=it,b.__webglTexture=H[it].texture}return N}function lt(b,_,N){return Math.floor(Math.floor(b/N)/_)}function Et(b,_,N,Y){let it=b.updateRanges;if(it.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,N,Y,_.data);else{it.sort((R,tt)=>R.start-tt.start);let ot=0;for(let R=1;R<it.length;R++){let tt=it[ot],Q=it[R],gt=tt.start+tt.count,vt=lt(Q.start,_.width,4),wt=lt(tt.start,_.width,4);Q.start<=gt+1&&vt===wt&&lt(Q.start+Q.count-1,_.width,4)===vt?tt.count=Math.max(tt.count,Q.start+Q.count-tt.start):(++ot,it[ot]=Q)}it.length=ot+1;let V=e.getParameter(n.UNPACK_ROW_LENGTH),J=e.getParameter(n.UNPACK_SKIP_PIXELS),ht=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let R=0,tt=it.length;R<tt;R++){let Q=it[R],gt=Math.floor(Q.start/4),vt=Math.ceil(Q.count/4),wt=gt%_.width,Xt=Math.floor(gt/_.width),oe=vt,_t=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,wt),e.pixelStorei(n.UNPACK_SKIP_ROWS,Xt),e.texSubImage2D(n.TEXTURE_2D,0,wt,Xt,oe,_t,N,Y,_.data)}b.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,V),e.pixelStorei(n.UNPACK_SKIP_PIXELS,J),e.pixelStorei(n.UNPACK_SKIP_ROWS,ht)}}function yt(b,_,N){let Y=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Y=n.TEXTURE_3D);let H=re(b,_),it=_.source;e.bindTexture(Y,b.__webglTexture,n.TEXTURE0+N);let ot=i.get(it);if(it.version!==ot.__version||H===!0){if(e.activeTexture(n.TEXTURE0+N),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let _t=ue.getPrimaries(ue.workingColorSpace),qt=_.colorSpace===Ti?null:ue.getPrimaries(_.colorSpace),ae=_.colorSpace===Ti||_t===qt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae)}e.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment);let J=y(_.image,!1,s.maxTextureSize);J=q(_,J);let ht=r.convert(_.format,_.colorSpace),R=r.convert(_.type),tt=T(_.internalFormat,ht,R,_.normalized,_.colorSpace,_.isVideoTexture);se(Y,_);let Q,gt=_.mipmaps,vt=_.isVideoTexture!==!0,wt=ot.__version===void 0||H===!0,Xt=it.dataReady,oe=E(_,J);if(_.isDepthTexture)tt=x(_.format===wi,_.type),wt&&(vt?e.texStorage2D(n.TEXTURE_2D,1,tt,J.width,J.height):e.texImage2D(n.TEXTURE_2D,0,tt,J.width,J.height,0,ht,R,null));else if(_.isDataTexture)if(gt.length>0){vt&&wt&&e.texStorage2D(n.TEXTURE_2D,oe,tt,gt[0].width,gt[0].height);for(let _t=0,qt=gt.length;_t<qt;_t++)Q=gt[_t],vt?Xt&&e.texSubImage2D(n.TEXTURE_2D,_t,0,0,Q.width,Q.height,ht,R,Q.data):e.texImage2D(n.TEXTURE_2D,_t,tt,Q.width,Q.height,0,ht,R,Q.data);_.generateMipmaps=!1}else vt?(wt&&e.texStorage2D(n.TEXTURE_2D,oe,tt,J.width,J.height),Xt&&Et(_,J,ht,R)):e.texImage2D(n.TEXTURE_2D,0,tt,J.width,J.height,0,ht,R,J.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){vt&&wt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,oe,tt,gt[0].width,gt[0].height,J.depth);for(let _t=0,qt=gt.length;_t<qt;_t++)if(Q=gt[_t],_.format!==Xn)if(ht!==null)if(vt){if(Xt)if(_.layerUpdates.size>0){let ae=Sh(Q.width,Q.height,_.format,_.type);for(let It of _.layerUpdates){let be=Q.data.subarray(It*ae/Q.data.BYTES_PER_ELEMENT,(It+1)*ae/Q.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,_t,0,0,It,Q.width,Q.height,1,ht,be)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,_t,0,0,0,Q.width,Q.height,J.depth,ht,Q.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,_t,tt,Q.width,Q.height,J.depth,0,Q.data,0,0);else Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else vt?Xt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,_t,0,0,0,Q.width,Q.height,J.depth,ht,R,Q.data):e.texImage3D(n.TEXTURE_2D_ARRAY,_t,tt,Q.width,Q.height,J.depth,0,ht,R,Q.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{vt&&wt&&e.texStorage2D(n.TEXTURE_2D,oe,tt,gt[0].width,gt[0].height);for(let _t=0,qt=gt.length;_t<qt;_t++)Q=gt[_t],_.format!==Xn?ht!==null?vt?Xt&&e.compressedTexSubImage2D(n.TEXTURE_2D,_t,0,0,Q.width,Q.height,ht,Q.data):e.compressedTexImage2D(n.TEXTURE_2D,_t,tt,Q.width,Q.height,0,Q.data):Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):vt?Xt&&e.texSubImage2D(n.TEXTURE_2D,_t,0,0,Q.width,Q.height,ht,R,Q.data):e.texImage2D(n.TEXTURE_2D,_t,tt,Q.width,Q.height,0,ht,R,Q.data)}else if(_.isDataArrayTexture)if(vt){if(wt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,oe,tt,J.width,J.height,J.depth),Xt)if(_.layerUpdates.size>0){let _t=Sh(J.width,J.height,_.format,_.type);for(let qt of _.layerUpdates){let ae=J.data.subarray(qt*_t/J.data.BYTES_PER_ELEMENT,(qt+1)*_t/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,qt,J.width,J.height,1,ht,R,ae)}_.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ht,R,J.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,tt,J.width,J.height,J.depth,0,ht,R,J.data);else if(_.isData3DTexture)vt?(wt&&e.texStorage3D(n.TEXTURE_3D,oe,tt,J.width,J.height,J.depth),Xt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ht,R,J.data)):e.texImage3D(n.TEXTURE_3D,0,tt,J.width,J.height,J.depth,0,ht,R,J.data);else if(_.isFramebufferTexture){if(wt)if(vt)e.texStorage2D(n.TEXTURE_2D,oe,tt,J.width,J.height);else{let _t=J.width,qt=J.height;for(let ae=0;ae<oe;ae++)e.texImage2D(n.TEXTURE_2D,ae,tt,_t,qt,0,ht,R,null),_t>>=1,qt>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in n){let _t=n.canvas;if(_t.hasAttribute("layoutsubtree")||_t.setAttribute("layoutsubtree","true"),J.parentNode!==_t){_t.appendChild(J),u.add(_),_t.onpaint=qt=>{let ae=qt.changedElements;for(let It of u)ae.includes(It.image)&&(It.needsUpdate=!0)},_t.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,J);else{let ae=n.RGBA,It=n.RGBA,be=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,ae,It,be,J)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(gt.length>0){if(vt&&wt){let _t=j(gt[0]);e.texStorage2D(n.TEXTURE_2D,oe,tt,_t.width,_t.height)}for(let _t=0,qt=gt.length;_t<qt;_t++)Q=gt[_t],vt?Xt&&e.texSubImage2D(n.TEXTURE_2D,_t,0,0,ht,R,Q):e.texImage2D(n.TEXTURE_2D,_t,tt,ht,R,Q);_.generateMipmaps=!1}else if(vt){if(wt){let _t=j(J);e.texStorage2D(n.TEXTURE_2D,oe,tt,_t.width,_t.height)}Xt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ht,R,J)}else e.texImage2D(n.TEXTURE_2D,0,tt,ht,R,J);S(_)&&_.mipmapsAutoUpdate===!0&&M(Y),ot.__version=it.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function dt(b,_,N){if(_.image.length!==6)return;let Y=re(b,_),H=_.source;e.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+N);let it=i.get(H);if(H.version!==it.__version||Y===!0){e.activeTexture(n.TEXTURE0+N);let ot=ue.getPrimaries(ue.workingColorSpace),V=_.colorSpace===Ti?null:ue.getPrimaries(_.colorSpace),J=_.colorSpace===Ti||ot===V?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let ht=_.isCompressedTexture||_.image[0].isCompressedTexture,R=_.image[0]&&_.image[0].isDataTexture,tt=[];for(let It=0;It<6;It++)!ht&&!R?tt[It]=y(_.image[It],!0,s.maxCubemapSize):tt[It]=R?_.image[It].image:_.image[It],tt[It]=q(_,tt[It]);let Q=tt[0],gt=r.convert(_.format,_.colorSpace),vt=r.convert(_.type),wt=T(_.internalFormat,gt,vt,_.normalized,_.colorSpace),Xt=_.isVideoTexture!==!0,oe=it.__version===void 0||Y===!0,_t=H.dataReady,qt=E(_,Q);se(n.TEXTURE_CUBE_MAP,_);let ae;if(_.isDepthTexture){if(wt=x(_.format===wi,_.type),oe)if(Xt)e.texStorage2D(n.TEXTURE_CUBE_MAP,1,wt,Q.width,Q.height);else for(let It=0;It<6;It++)e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,wt,Q.width,Q.height,0,gt,vt,null)}else if(ht){Xt&&oe&&e.texStorage2D(n.TEXTURE_CUBE_MAP,qt,wt,Q.width,Q.height);for(let It=0;It<6;It++){ae=tt[It].mipmaps;for(let be=0;be<ae.length;be++){let Je=ae[be];_.format!==Xn?gt!==null?Xt?_t&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+It,be,0,0,Je.width,Je.height,gt,Je.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+It,be,wt,Je.width,Je.height,0,Je.data):Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?_t&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+It,be,0,0,Je.width,Je.height,gt,vt,Je.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+It,be,wt,Je.width,Je.height,0,gt,vt,Je.data)}}}else{if(ae=_.mipmaps,Xt&&oe){ae.length>0&&qt++;let It=j(tt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,qt,wt,It.width,It.height)}for(let It=0;It<6;It++)if(R){Xt?_t&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,0,0,tt[It].width,tt[It].height,gt,vt,tt[It].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,wt,tt[It].width,tt[It].height,0,gt,vt,tt[It].data);for(let be=0;be<ae.length;be++){let Li=ae[be].image[It].image;Xt?_t&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+It,be+1,0,0,Li.width,Li.height,gt,vt,Li.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+It,be+1,wt,Li.width,Li.height,0,gt,vt,Li.data)}}else{Xt?_t&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,0,0,gt,vt,tt[It]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,wt,gt,vt,tt[It]);for(let be=0;be<ae.length;be++){let Je=ae[be];Xt?_t&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+It,be+1,0,0,gt,vt,Je.image[It]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+It,be+1,wt,gt,vt,Je.image[It])}}}S(_)&&_.mipmapsAutoUpdate===!0&&M(n.TEXTURE_CUBE_MAP),it.__version=H.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function Mt(b,_,N,Y,H,it){let ot=r.convert(N.format,N.colorSpace),V=r.convert(N.type),J=T(N.internalFormat,ot,V,N.normalized,N.colorSpace),ht=i.get(_),R=i.get(N);if(R.__renderTarget=_,!ht.__hasExternalTextures){let tt=Math.max(1,_.width>>it),Q=Math.max(1,_.height>>it);H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?e.texImage3D(H,it,J,tt,Q,_.depth,0,ot,V,null):e.texImage2D(H,it,J,tt,Q,0,ot,V,null)}e.bindFramebuffer(n.FRAMEBUFFER,b),St(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,H,R.__webglTexture,0,ne(_)):(H===n.TEXTURE_2D||H>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&H<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,H,R.__webglTexture,it),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Yt(b,_,N){if(n.bindRenderbuffer(n.RENDERBUFFER,b),_.depthBuffer){let Y=_.depthTexture,H=Y&&Y.isDepthTexture?Y.type:null,it=x(_.stencilBuffer,H),ot=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;St(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ne(_),it,_.width,_.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,ne(_),it,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,it,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ot,n.RENDERBUFFER,b)}else{let Y=_.textures;for(let H=0;H<Y.length;H++){let it=Y[H],ot=r.convert(it.format,it.colorSpace),V=r.convert(it.type),J=T(it.internalFormat,ot,V,it.normalized,it.colorSpace);St(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ne(_),J,_.width,_.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,ne(_),J,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,J,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ot(b,_,N){let Y=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,b),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let H=i.get(_.depthTexture);H.__renderTarget=_;let it=Y?_.depthTexture.image[0]:_.depthTexture.image;(!H.__webglTexture||it.width!==_.width||it.height!==_.height)&&(it.width=_.width,it.height=_.height,_.depthTexture.needsUpdate=!0),Y?At(_.depthTexture,0):rt(_.depthTexture,0);let ot=H.__webglTexture,V=ne(_),J=Y?n.TEXTURE_CUBE_MAP_POSITIVE_X+N:n.TEXTURE_2D,ht=_.depthTexture.format===wi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===xi)St(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ht,J,ot,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,ht,J,ot,0);else if(_.depthTexture.format===wi)St(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ht,J,ot,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,ht,J,ot,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function jt(b){let _=i.get(b),N=b.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==b.depthTexture){let Y=b.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Y){let H=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Y.removeEventListener("dispose",H)};Y.addEventListener("dispose",H),_.__depthDisposeCallback=H}_.__boundDepthTexture=Y}if(b.depthTexture&&!_.__autoAllocateDepthBuffer)if(N)for(let Y=0;Y<6;Y++)Ot(_.__webglFramebuffer[Y],b,Y);else b.texture.mipmaps.length>0?Ot(_.__webglFramebuffer[0],b,0):Ot(_.__webglFramebuffer,b,0);else if(N){_.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[Y]),_.__webglDepthbuffer[Y]===void 0)_.__webglDepthbuffer[Y]=n.createRenderbuffer(),Yt(_.__webglDepthbuffer[Y],b,!1);else{let H=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,it=_.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,it),n.framebufferRenderbuffer(n.FRAMEBUFFER,H,n.RENDERBUFFER,it)}}else if(b.texture.mipmaps.length>0?e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),Yt(_.__webglDepthbuffer,b,!1);else{let H=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,it=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,it),n.framebufferRenderbuffer(n.FRAMEBUFFER,H,n.RENDERBUFFER,it)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Kt(b,_,N){let Y=i.get(b);_!==void 0&&Mt(Y.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&jt(b)}function ee(b){let _=b.texture,N=i.get(b),Y=i.get(_);b.addEventListener("dispose",B),D(b);let H=b.textures,it=b.isWebGLCubeRenderTarget===!0,ot=H.length>1;if(ot||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=_.version,a.memory.textures++),it){N.__webglFramebuffer=[];for(let V=0;V<6;V++)if(_.mipmaps.length>0){N.__webglFramebuffer[V]=[];for(let J=0;J<_.mipmaps.length;J++)N.__webglFramebuffer[V][J]=n.createFramebuffer()}else N.__webglFramebuffer[V]=n.createFramebuffer()}else{if(_.mipmaps.length>0){N.__webglFramebuffer=[];for(let V=0;V<_.mipmaps.length;V++)N.__webglFramebuffer[V]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if(ot)for(let V=0,J=H.length;V<J;V++){let ht=i.get(H[V]);ht.__webglTexture===void 0&&(ht.__webglTexture=n.createTexture(),a.memory.textures++)}if(b.samples>0&&St(b)===!1){N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let V=0;V<H.length;V++){let J=H[V];N.__webglColorRenderbuffer[V]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[V]);let ht=r.convert(J.format,J.colorSpace),R=r.convert(J.type),tt=T(J.internalFormat,ht,R,J.normalized,J.colorSpace,b.isXRRenderTarget===!0),Q=ne(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,Q,tt,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+V,n.RENDERBUFFER,N.__webglColorRenderbuffer[V])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),Yt(N.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(it){e.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),se(n.TEXTURE_CUBE_MAP,_);for(let V=0;V<6;V++)if(_.mipmaps.length>0)for(let J=0;J<_.mipmaps.length;J++)Mt(N.__webglFramebuffer[V][J],b,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+V,J);else Mt(N.__webglFramebuffer[V],b,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+V,0);S(_)?M(n.TEXTURE_CUBE_MAP):_.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,_.mipmaps.length-1),e.unbindTexture()}else if(ot){for(let V=0,J=H.length;V<J;V++){let ht=H[V],R=i.get(ht),tt=n.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(tt=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(tt,R.__webglTexture),se(tt,ht),Mt(N.__webglFramebuffer,b,ht,n.COLOR_ATTACHMENT0+V,tt,0),S(ht)&&M(tt)}e.unbindTexture()}else{let V=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(V=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(V,Y.__webglTexture),se(V,_),_.mipmaps.length>0)for(let J=0;J<_.mipmaps.length;J++)Mt(N.__webglFramebuffer[J],b,_,n.COLOR_ATTACHMENT0,V,J);else Mt(N.__webglFramebuffer,b,_,n.COLOR_ATTACHMENT0,V,0);S(_)?M(V):_.mipmaps.length>0&&n.texParameteri(V,n.TEXTURE_MAX_LEVEL,_.mipmaps.length-1),e.unbindTexture()}b.depthBuffer&&jt(b)}function z(b){let _=b.textures;for(let N=0,Y=_.length;N<Y;N++){let H=_[N];if(S(H)&&H.mipmapsAutoUpdate===!0){let it=A(b),ot=i.get(H).__webglTexture;e.bindTexture(it,ot),M(it),e.unbindTexture()}}}let Re=[];function Pt(b){if(b.samples>0){if(St(b)===!1){let _=b.textures,N=b.width,Y=b.height,H=n.COLOR_BUFFER_BIT,it=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ot=i.get(b),V=_.length>1;if(V)for(let ht=0;ht<_.length;ht++)e.bindFramebuffer(n.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ot.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ot.__webglMultisampledFramebuffer),b.texture.mipmaps.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ot.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ot.__webglFramebuffer);for(let ht=0;ht<_.length;ht++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(H|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(H|=n.STENCIL_BUFFER_BIT)),V){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ot.__webglColorRenderbuffer[ht]);let R=i.get(_[ht]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,R,0)}n.blitFramebuffer(0,0,N,Y,0,0,N,Y,H,n.NEAREST),c===!0&&(Re.length=0,Re.push(n.COLOR_ATTACHMENT0+ht),b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&Re.push(it),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Re))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),V)for(let ht=0;ht<_.length;ht++){e.bindFramebuffer(n.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.RENDERBUFFER,ot.__webglColorRenderbuffer[ht]);let R=i.get(_[ht]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ot.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.TEXTURE_2D,R,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ot.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&c){let _=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function ne(b){return Math.min(s.maxSamples,b.samples)}function St(b){let _=i.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function I(b){let _=a.render.frame;h.get(b)!==_&&(h.set(b,_),b.update())}function q(b,_){let N=b.colorSpace,Y=b.format,H=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||N!==wr&&N!==Ti&&(ue.getTransfer(N)===ve?(Y!==Xn||H!==bn)&&Zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Jt("WebGLTextures: Unsupported texture color space:",N)),_}function j(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=ct,this.resetTextureUnits=at,this.getTextureUnits=P,this.setTextureUnits=nt,this.setTexture2D=rt,this.setTexture2DArray=mt,this.setTexture3D=Nt,this.setTextureCube=At,this.rebindTextures=Kt,this.setupRenderTarget=ee,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=jt,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=St,this.dispose=F}function Tv(n,t){function e(i,s=Ti){let r,a=ue.getTransfer(s);if(i===bn)return n.UNSIGNED_BYTE;if(i===tl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===el)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ch)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===hh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===oh)return n.BYTE;if(i===lh)return n.SHORT;if(i===er)return n.UNSIGNED_SHORT;if(i===jo)return n.INT;if(i===Wn)return n.UNSIGNED_INT;if(i===Fn)return n.FLOAT;if(i===nn)return n.HALF_FLOAT;if(i===uh)return n.ALPHA;if(i===fh)return n.RGB;if(i===Xn)return n.RGBA;if(i===xi)return n.DEPTH_COMPONENT;if(i===wi)return n.DEPTH_STENCIL;if(i===nl)return n.RED;if(i===il)return n.RED_INTEGER;if(i===Yi)return n.RG;if(i===sl)return n.RG_INTEGER;if(i===rl)return n.RGBA_INTEGER;if(i===ma||i===ga||i===xa||i===_a)if(a===ve)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ma)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ga)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===_a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ma)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ga)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===xa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===_a)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===al||i===ol||i===ll||i===cl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===al)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ol)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ll)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===cl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===hl||i===ul||i===fl||i===dl||i===pl||i===va||i===ml)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===hl||i===ul)return a===ve?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===fl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===dl)return r.COMPRESSED_R11_EAC;if(i===pl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===va)return r.COMPRESSED_RG11_EAC;if(i===ml)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===gl||i===xl||i===_l||i===vl||i===yl||i===Ml||i===Sl||i===bl||i===El||i===wl||i===Tl||i===Al||i===Rl||i===Cl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===gl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===xl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===_l)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===vl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===yl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ml)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Sl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===bl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===El)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===wl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Tl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Al)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Rl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Cl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Pl||i===Il||i===Ll)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Pl)return a===ve?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Il)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ll)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Dl||i===Nl||i===ya||i===Ul)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Dl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Nl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ya)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ul)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===gs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Av=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Rv=`
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

}`,Ih=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Gr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Oe({vertexShader:Av,fragmentShader:Rv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ht(new Fe(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Lh=class extends Jn{constructor(t,e){super();let i=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,m=null,v=typeof XRWebGLBinding<"u",p=new Ih,g={},y=e.getContextAttributes(),S=null,M=null,A=[],T=[],x=new pt,E=null,D=null,C=new gn;C.viewport=new Le;let U=new gn;U.viewport=new Le;let B=[C,U],W=new Zo,L=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let rt=A[X];return rt===void 0&&(rt=new qs,A[X]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(X){let rt=A[X];return rt===void 0&&(rt=new qs,A[X]=rt),rt.getGripSpace()},this.getHand=function(X){let rt=A[X];return rt===void 0&&(rt=new qs,A[X]=rt),rt.getHandSpace()};function $(X){let rt=T.indexOf(X.inputSource);if(rt===-1)return;let mt=A[rt];mt!==void 0&&(mt.update(X.inputSource,X.frame,l||a),mt.dispatchEvent({type:X.type,data:X.inputSource}))}function G(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",ut);for(let X=0;X<A.length;X++){let rt=T[X];rt!==null&&(T[X]=null,A[X].disconnect(rt))}L=null,F=null,p.reset();for(let X in g)delete g[X];if(t.setRenderTarget(S),d=null,f=null,u=null,s=null,M=null,ct.stop(),i.isPresenting=!1,t.setPixelRatio(E),t.setSize(x.width,x.height,!1),D!==null){let X=D.camera;X.fov=D.fov,X.zoom=D.zoom,X.updateProjectionMatrix(),D=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,i.isPresenting===!0&&Zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,i.isPresenting===!0&&Zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(S=t.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",G),s.addEventListener("inputsourceschange",ut),y.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(x),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let mt=null,Nt=null,At=null;y.depth&&(At=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,mt=y.stencil?wi:xi,Nt=y.stencil?gs:Wn);let Vt={colorFormat:e.RGBA8,depthFormat:At,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Vt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new Ye(f.textureWidth,f.textureHeight,{format:Xn,type:bn,depthTexture:new yi(f.textureWidth,f.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,mt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let mt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,mt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new Ye(d.framebufferWidth,d.framebufferHeight,{format:Xn,type:bn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),ct.setContext(s),ct.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function ut(X){for(let rt=0;rt<X.removed.length;rt++){let mt=X.removed[rt],Nt=T.indexOf(mt);Nt>=0&&(T[Nt]=null,A[Nt].disconnect(mt))}for(let rt=0;rt<X.added.length;rt++){let mt=X.added[rt],Nt=T.indexOf(mt);if(Nt===-1){for(let Vt=0;Vt<A.length;Vt++)if(Vt>=T.length){T.push(mt),Nt=Vt;break}else if(T[Vt]===null){T[Vt]=mt,Nt=Vt;break}if(Nt===-1)break}let At=A[Nt];At&&At.connect(mt)}}function et(X,rt){rt===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(rt.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let rt=X.near,mt=X.far;p.texture!==null&&(p.depthNear>0&&(rt=p.depthNear),p.depthFar>0&&(mt=p.depthFar)),W.near=U.near=C.near=rt,W.far=U.far=C.far=mt,(L!==W.near||F!==W.far)&&(s.updateRenderState({depthNear:W.near,depthFar:W.far}),L=W.near,F=W.far),W.layers.mask=X.layers.mask|6,C.layers.mask=W.layers.mask&-5,U.layers.mask=W.layers.mask&-3;let Nt=X.parent,At=W.cameras;et(W,Nt);for(let Vt=0;Vt<At.length;Vt++)et(At[Vt],Nt);W.projectionMatrix.copy(C.projectionMatrix),W.projectionMatrixInverse.copy(C.projectionMatrixInverse),D===null&&X.isPerspectiveCamera&&(D={camera:X,fov:X.fov,zoom:X.zoom}),at(X,W,Nt)};function at(X,rt,mt){mt===null?X.matrix.copy(rt.matrixWorld):(X.matrix.copy(mt.matrixWorld),X.matrix.invert(),X.matrix.multiply(rt.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(rt.projectionMatrix),X.projectionMatrixInverse.copy(rt.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=So*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(X){c=X,f!==null&&(f.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(W)},this.getCameraTexture=function(X){return g[X]};let P=null;function nt(X,rt){if(h=rt.getViewerPose(l||a),m=rt,h!==null){let mt=h.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let Nt=!1;mt.length!==W.cameras.length&&(W.cameras.length=0,Nt=!0);for(let Wt=0;Wt<mt.length;Wt++){let se=mt[Wt],re=null;if(d!==null)re=d.getViewport(se);else{let Et=u.getViewSubImage(f,se);re=Et.viewport,Wt===0&&(t.setRenderTargetTextures(M,Et.colorTexture,Et.depthStencilTexture),t.setRenderTarget(M))}let lt=B[Wt];lt===void 0&&(lt=new gn,lt.layers.enable(Wt),lt.viewport=new Le,B[Wt]=lt),lt.matrix.fromArray(se.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(se.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(re.x,re.y,re.width,re.height),Wt===0&&(W.matrix.copy(lt.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),Nt===!0&&W.cameras.push(lt)}let At=s.enabledFeatures;if(At&&At.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=i.getBinding();let Wt=u.getDepthInformation(mt[0]);Wt&&Wt.isValid&&Wt.texture&&p.init(Wt,s.renderState)}if(At&&At.includes("camera-access")&&v){t.state.unbindTexture(),u=i.getBinding();for(let Wt=0;Wt<mt.length;Wt++){let se=mt[Wt].camera;if(se){let re=g[se];re||(re=new Gr,g[se]=re);let lt=u.getCameraImage(se);re.sourceTexture=lt}}}}for(let mt=0;mt<A.length;mt++){let Nt=T[mt],At=A[mt];Nt!==null&&At!==void 0&&At.update(Nt,rt,l||a)}P&&P(X,rt),rt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:rt}),m=null}let ct=new Sd;ct.setAnimationLoop(nt),this.setAnimationLoop=function(X){P=X},this.dispose=function(){}}},Cv=new ge,Ld=new Qt;Ld.set(-1,0,0,0,1,0,0,0,1);function Pv(n,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function i(p,g){g.color.getRGB(p.fogColor.value,vh(n)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,y,S,M){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),u(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),f(p,g),g.isMeshPhysicalMaterial&&d(p,g,M)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),v(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(a(p,g),g.isLineDashedMaterial&&o(p,g)):g.isPointsMaterial?c(p,g,y,S):g.isSpriteMaterial?l(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===en&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===en&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let y=t.get(g),S=y.envMap,M=y.envMapRotation;S&&(p.envMap.value=S,p.envMapRotation.value.setFromMatrix4(Cv.makeRotationFromEuler(M)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Ld),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function a(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function o(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function c(p,g,y,S){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*y,p.scale.value=S*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function l(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function u(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function f(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function d(p,g,y){p.ior.value=g.ior,g.diffuseRoughness>0&&(p.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===en&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function v(p,g){let y=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Iv(n,t,e,i){let s={},r={};function a(y,S){let M=S.program;i.uniformBlockBinding(y,M,s[y.id])}function o(y,S){let M=s[y.id];M===void 0&&(m(y),M=c(y),s[y.id]=M,y.addEventListener("dispose",p));let A=S.program;i.updateUBOMapping(y,A);let T=t.render.frame;r[y.id]!==T&&(l(y),r[y.id]=T)}function c(y){let S=n.createBuffer(),M=y.__size,A=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,M,A),n.bindBuffer(n.UNIFORM_BUFFER,null),S}function l(y){let S=s[y.id],M=y.uniforms,A=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let T=0,x=M.length;T<x;T++){let E=M[T];if(Array.isArray(E))for(let D=0,C=E.length;D<C;D++)h(E[D],T,D,A);else h(E,T,0,A)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(y,S,M,A){if(f(y,S,M,A)===!0){let T=y.__offset,x=y.value;if(Array.isArray(x)){let E=0;for(let D=0;D<x.length;D++){let C=x[D],U=v(C,!0);u(C,y.__data,E),E+=U.storage/Float32Array.BYTES_PER_ELEMENT}}else u(x,y.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,T,y.__data)}}function u(y,S,M){typeof y=="number"||typeof y=="boolean"?S[M]=y:y.isMatrix3?(S[M]=y.elements[0],S[M+1]=y.elements[1],S[M+2]=y.elements[2],S[M+3]=0,S[M+4]=y.elements[3],S[M+5]=y.elements[4],S[M+6]=y.elements[5],S[M+7]=0,S[M+8]=y.elements[6],S[M+9]=y.elements[7],S[M+10]=y.elements[8],S[M+11]=0):ArrayBuffer.isView(y)?S.set(y.subarray(0,S.length-M),M):y.toArray(S,M)}function f(y,S,M,A){let T=y.value,x=S+"_"+M;if(Array.isArray(T)){A[x]===void 0&&(A[x]=[]);let E=A[x],D=!1;for(let C=0;C<T.length;C++)d(T[C],E,C)===!0&&(D=!0);return D}return d(T,A,x)}function d(y,S,M){if(S[M]===void 0)return typeof y=="number"||typeof y=="boolean"?S[M]=y:ArrayBuffer.isView(y)?S[M]=y.slice():S[M]=y.clone(),!0;{let A=S[M];if(typeof y=="number"||typeof y=="boolean"){if(A!==y)return S[M]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(A.equals(y)===!1)return A.copy(y),!0}}return!1}function m(y){let S=y.uniforms,M=0,A=16;for(let x=0,E=S.length;x<E;x++){let D=Array.isArray(S[x])?S[x]:[S[x]];for(let C=0,U=D.length;C<U;C++){let B=D[C],W=Array.isArray(B.value)?B.value:[B.value],L=Array.isArray(S[x])||Array.isArray(B.value),F=M;for(let G=0,ut=W.length;G<ut;G++){let et=W[G],at=v(et,L),P=M%A,nt=P%at.boundary,ct=P+nt;M+=nt,ct!==0&&A-ct<at.storage&&(M+=A-ct),G===0&&(F=M),M+=at.storage}let $=B.type==="int"?Int32Array:B.type==="uint"?Uint32Array:Float32Array;B.__data=new $((M-F)/Float32Array.BYTES_PER_ELEMENT),B.__offset=F}}let T=M%A;return T>0&&(M+=A-T),y.__size=M,y.__cache={},this}function v(y,S){let M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=16,M.storage=48):y.isMatrix4?(M.boundary=16,M.storage=64):y.isTexture?Zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(M.boundary=16,M.storage=y.byteLength):Zt("WebGLRenderer: Unsupported uniform value type.",y),S===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function p(y){let S=y.target;S.removeEventListener("dispose",p),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function g(){for(let y in s)n.deleteBuffer(s[y]);s={},r={}}return{bind:a,update:o,dispose:g}}var Lv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ei=null;function Dv(){return ei===null&&(ei=new Or(Lv,16,16,Yi,nn),ei.name="DFG_LUT",ei.minFilter=xn,ei.magFilter=xn,ei.wrapS=Dn,ei.wrapT=Dn,ei.generateMipmaps=!1,ei.needsUpdate=!0),ei}var kl=class{constructor(t={}){let{canvas:e=kf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=bn}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;let v=d,p=new Set([rl,sl,il]),g=new Set([bn,Wn,er,gs,tl,el]),y=new Uint32Array(4),S=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},A=null,T=null,x=[],E=[],D=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ti,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,U=!1,B=null,W=null,L=null,F=null;this._outputColorSpace=ke;let $=0,G=0,ut=null,et=-1,at=null,P=new Le,nt=new Le,ct=null,X=new kt(0),rt=0,mt=e.width,Nt=e.height,At=1,Vt=null,_e=null,Wt=new Le(0,0,mt,Nt),se=new Le(0,0,mt,Nt),re=!1,lt=new Hi,Et=new Ao,yt=!1,dt=!1,Mt=new ge,Yt=new O,Ot=new Le,jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Kt=!1;function ee(){return ut===null?At:1}let z=i;function Re(w,k){return e.getContext(w,k)}let Pt,ne,St,I,q,j,b,_,N,Y,H,it,ot,V,J,ht,R,tt,Q,gt,vt,wt,Xt;try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",qt,!1),e.addEventListener("webglcontextrestored",ae,!1),e.addEventListener("webglcontextcreationerror",It,!1),z===null){let k="webgl2";if(z=Re(k,w),z===null)throw Re(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}oe()}catch(w){throw e.removeEventListener("webglcontextlost",qt,!1),e.removeEventListener("webglcontextrestored",ae,!1),e.removeEventListener("webglcontextcreationerror",It,!1),Jt("WebGLRenderer: "+w.message),w}function oe(){Pt=new Wx(z),Pt.init(),vt=new Tv(z,Pt),ne=new Dx(z,Pt,t,vt),St=new Ev(z,Pt),ne.reversedDepthBuffer&&f&&St.buffers.depth.setReversed(!0),W=z.createFramebuffer(),L=z.createFramebuffer(),F=z.createFramebuffer(),I=new Yx(z),q=new hv,j=new wv(z,Pt,St,q,ne,vt,I),b=new Vx(C),_=new $m(z),wt=new Ix(z,_),N=new Xx(z,_,I,wt),Y=new $x(z,N,_,wt,I),tt=new Zx(z,ne,j),J=new Nx(q),H=new cv(C,b,Pt,ne,wt,J),it=new Pv(C,q),ot=new fv,V=new _v(Pt),R=new Px(C,b,St,Y,m,c),ht=new bv(C,Y,ne),Xt=new Iv(z,I,ne,St),Q=new Lx(z,Pt,I),gt=new qx(z,Pt,I),I.programs=H.programs,C.capabilities=ne,C.extensions=Pt,C.properties=q,C.renderLists=ot,C.shadowMap=ht,C.state=St,C.info=I}v!==bn&&(D=new Kx(v,e.width,e.height,o,s,r));let _t=new Lh(C,z);this.xr=_t,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let w=Pt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Pt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return At},this.setPixelRatio=function(w){w!==void 0&&(At=w,this.setSize(mt,Nt,!1))},this.getSize=function(w){return w.set(mt,Nt)},this.setSize=function(w,k,st=!0){if(_t.isPresenting){Zt("WebGLRenderer: Can't change size while VR device is presenting.");return}mt=w,Nt=k,e.width=Math.floor(w*At),e.height=Math.floor(k*At),st===!0&&(e.style.width=w+"px",e.style.height=k+"px"),D!==null&&D.setSize(e.width,e.height),this.setViewport(0,0,w,k)},this.getDrawingBufferSize=function(w){return w.set(mt*At,Nt*At).floor()},this.setDrawingBufferSize=function(w,k,st){mt=w,Nt=k,At=st,e.width=Math.floor(w*st),e.height=Math.floor(k*st),this.setViewport(0,0,w,k)},this.setEffects=function(w){if(v===bn){Jt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let k=0;k<w.length;k++)if(w[k].isOutputPass===!0){Zt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(P)},this.getViewport=function(w){return w.copy(Wt)},this.setViewport=function(w,k,st,Z){w.isVector4?Wt.set(w.x,w.y,w.z,w.w):Wt.set(w,k,st,Z),St.viewport(P.copy(Wt).multiplyScalar(ee()).round())},this.getScissor=function(w){return w.copy(se)},this.setScissor=function(w,k,st,Z){w.isVector4?se.set(w.x,w.y,w.z,w.w):se.set(w,k,st,Z),St.scissor(nt.copy(se).multiplyScalar(ee()).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(w){St.setScissorTest(re=w)},this.setOpaqueSort=function(w){Vt=w},this.setTransparentSort=function(w){_e=w},this.getClearColor=function(w){return w.copy(R.getClearColor())},this.setClearColor=function(){R.setClearColor(...arguments)},this.getClearAlpha=function(){return R.getClearAlpha()},this.setClearAlpha=function(){R.setClearAlpha(...arguments)},this.clear=function(w=!0,k=!0,st=!0){let Z=0;if(w){let K=!1;if(ut!==null){let Ct=ut.texture.format;K=p.has(Ct)}if(K){let Ct=ut.texture.type,Ft=g.has(Ct),Rt=R.getClearColor(),Dt=R.getClearAlpha(),Gt=Rt.r,te=Rt.g,de=Rt.b;Ft?(y[0]=Gt,y[1]=te,y[2]=de,y[3]=Dt,z.clearBufferuiv(z.COLOR,0,y)):(S[0]=Gt,S[1]=te,S[2]=de,S[3]=Dt,z.clearBufferiv(z.COLOR,0,S))}else Z|=z.COLOR_BUFFER_BIT}k&&(Z|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),st&&(Z|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&z.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),B=w},this.dispose=function(){e.removeEventListener("webglcontextlost",qt,!1),e.removeEventListener("webglcontextrestored",ae,!1),e.removeEventListener("webglcontextcreationerror",It,!1),R.dispose(),ot.dispose(),V.dispose(),j.dispose(),q.dispose(),b.dispose(),Y.dispose(),N.dispose(),wt.dispose(),Xt.dispose(),H.dispose(),_t.dispose(),_t.removeEventListener("sessionstart",gu),_t.removeEventListener("sessionend",xu),ji.stop()};function qt(w){w.preventDefault(),Rr("WebGLRenderer: Context Lost."),U=!0}function ae(){Rr("WebGLRenderer: Context Restored."),U=!1;let w=I.autoReset,k=ht.enabled,st=ht.autoUpdate,Z=ht.needsUpdate,K=ht.type;oe(),I.autoReset=w,ht.enabled=k,ht.autoUpdate=st,ht.needsUpdate=Z,ht.type=K}function It(w){Jt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function be(w){let k=w.target;k.removeEventListener("dispose",be),Je(k)}function Je(w){Li(w),q.remove(w)}function Li(w){let k=q.get(w).programs;k!==void 0&&(k.forEach(function(st){H.releaseProgram(st)}),w.isShaderMaterial&&H.releaseShaderCache(w))}this.renderBufferDirect=function(w,k,st,Z,K,Ct){k===null&&(k=jt);let Ft=K.isMesh&&K.matrixWorld.determinantAffine()<0,Rt=Fp(w,k,st,Z,K);St.setMaterial(Z,Ft);let Dt=st.index,Gt=1;if(Z.wireframe===!0){if(Dt=N.getWireframeAttribute(st),Dt===void 0)return;Gt=2}let te=st.drawRange,de=st.attributes.position,Bt=te.start*Gt,pe=(te.start+te.count)*Gt;Ct!==null&&(Bt=Math.max(Bt,Ct.start*Gt),pe=Math.min(pe,(Ct.start+Ct.count)*Gt)),Dt!==null?(Bt=Math.max(Bt,0),pe=Math.min(pe,Dt.count)):de!=null&&(Bt=Math.max(Bt,0),pe=Math.min(pe,de.count));let Ge=pe-Bt;if(Ge<0||Ge===1/0)return;wt.setup(K,Z,Rt,st,Dt);let Pe,Ce=Q;if(Dt!==null&&(Pe=_.get(Dt),Ce=gt,Ce.setIndex(Pe)),K.isMesh)Z.wireframe===!0?(St.setLineWidth(Z.wireframeLinewidth*ee()),Ce.setMode(z.LINES)):Ce.setMode(z.TRIANGLES);else if(K.isLine){let rn=Z.linewidth;rn===void 0&&(rn=1),St.setLineWidth(rn*ee()),K.isLineSegments?Ce.setMode(z.LINES):K.isLineLoop?Ce.setMode(z.LINE_LOOP):Ce.setMode(z.LINE_STRIP)}else K.isPoints?Ce.setMode(z.POINTS):K.isSprite&&Ce.setMode(z.TRIANGLES);if(K.isBatchedMesh)if(Pt.get("WEBGL_multi_draw"))Ce.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let rn=K._multiDrawStarts,zt=K._multiDrawCounts,pn=K._multiDrawCount,ye=Dt?_.get(Dt).bytesPerElement:1,ts=q.get(Z).currentProgram.getUniforms();for(let an=0;an<pn;an++)ts.setValue(z,"_gl_DrawID",an),Ce.render(rn[an]/ye,zt[an])}else if(K.isInstancedMesh)Ce.renderInstances(Bt,Ge,K.count);else if(st.isInstancedBufferGeometry){let rn=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,zt=Math.min(st.instanceCount,rn);Ce.renderInstances(Bt,Ge,zt)}else Ce.render(Bt,Ge)};function mu(w,k,st,Z){B!==null&&w.isNodeMaterial&&B.setObject(Z,w),yt===!0&&J.setState(w,st,!1),w.transparent===!0&&w.side===He&&w.forceSinglePass===!1?(w.side=en,w.needsUpdate=!0,ur(w,k,Z),w.side=Xi,w.needsUpdate=!0,ur(w,k,Z),w.side=He):ur(w,k,Z)}this.compile=function(w,k,st=null){st===null&&(st=w),B!==null&&B.renderStart(w,k,st),T=V.get(st),T.init(k),E.push(T),st.traverseVisible(function(K){K.isLight&&K.layers.test(k.layers)&&(T.pushLight(K),K.castShadow&&T.pushShadow(K))}),w!==st&&w.traverseVisible(function(K){K.isLight&&K.layers.test(k.layers)&&(T.pushLight(K),K.castShadow&&T.pushShadow(K))}),T.setupLights(),B!==null&&B.updateLights(T.state.lightsArray),dt=this.localClippingEnabled,yt=J.init(this.clippingPlanes,dt),yt===!0&&J.setGlobalState(this.clippingPlanes,k),B!==null&&ht.render(T.state.shadowsArray,st,k);let Z=new Set;return w.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let Ct=K.material;if(Ct)if(Array.isArray(Ct))for(let Ft=0;Ft<Ct.length;Ft++){let Rt=Ct[Ft];mu(Rt,st,k,K),Z.add(Rt)}else mu(Ct,st,k,K),Z.add(Ct)}),T=E.pop(),B!==null&&B.renderEnd(),Z},this.compileAsync=function(w,k,st=null){let Z=this.compile(w,k,st);return new Promise(K=>{function Ct(){if(Z.forEach(function(Ft){let Dt=q.get(Ft).currentProgram;(Dt===void 0||Dt.isReady())&&Z.delete(Ft)}),Z.size===0){K(w);return}setTimeout(Ct,10)}Pt.get("KHR_parallel_shader_compile")!==null?Ct():setTimeout(Ct,10)})};let pc=null;function Np(w){pc&&pc(w)}function gu(){ji.stop()}function xu(){ji.start()}let ji=new Sd;ji.setAnimationLoop(Np),typeof self<"u"&&ji.setContext(self),this.setAnimationLoop=function(w){pc=w,_t.setAnimationLoop(w),w===null?ji.stop():ji.start()},_t.addEventListener("sessionstart",gu),_t.addEventListener("sessionend",xu),this.render=function(w,k){if(k!==void 0&&k.isCamera!==!0){Jt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;B!==null&&B.renderStart(w,k);let st=_t.enabled===!0&&_t.isPresenting===!0,Z=D!==null&&(ut===null||st)&&D.begin(C,ut);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),_t.enabled===!0&&_t.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(_t.cameraAutoUpdate===!0&&_t.updateCamera(k),k=_t.getCamera()),w.isScene===!0&&w.onBeforeRender(C,w,k,ut),T=V.get(w,E.length),T.init(k),T.state.textureUnits=j.getTextureUnits(),E.push(T),Mt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),k.isArrayCamera?Et.setFromArrayCamera(k):lt.setFromProjectionMatrix(Mt,Nn,k.reversedDepth),dt=this.localClippingEnabled,yt=J.init(this.clippingPlanes,dt),A=ot.get(w,x.length),A.init(),x.push(A),this.info.render.frame++,_t.enabled===!0&&_t.isPresenting===!0){let Ft=C.xr.getDepthSensingMesh();Ft!==null&&mc(Ft,k,-1/0,C.sortObjects)}mc(w,k,0,C.sortObjects),A.finish(),B!==null&&B.updateLights(T.state.lightsArray),C.sortObjects===!0&&A.sort(Vt,_e),Kt=_t.enabled===!1||_t.isPresenting===!1||_t.hasDepthSensing()===!1,Kt&&R.addToRenderList(A,w),this.info.autoReset===!0&&this.info.reset(),yt===!0&&J.beginShadows();let K=T.state.shadowsArray;if(ht.render(K,w,k),yt===!0&&J.endShadows(),(Z&&D.hasRenderPass())===!1){let Ft=A.opaque,Rt=A.transmissive;if(T.setupLights(),k.isArrayCamera){let Dt=k.cameras;if(Rt.length>0)for(let Gt=0,te=Dt.length;Gt<te;Gt++){let de=Dt[Gt];vu(Ft,Rt,w,de)}Kt&&R.render(w);for(let Gt=0,te=Dt.length;Gt<te;Gt++){let de=Dt[Gt];_u(A,w,de,de.viewport)}}else Rt.length>0&&vu(Ft,Rt,w,k),Kt&&R.render(w),_u(A,w,k)}ut!==null&&G===0&&(j.updateMultisampleRenderTarget(ut),j.updateRenderTargetMipmap(ut)),Z&&D.end(C),w.isScene===!0&&w.onAfterRender(C,w,k),wt.resetDefaultState(),et=-1,at=null,E.pop(),E.length>0?(T=E[E.length-1],j.setTextureUnits(T.state.textureUnits),yt===!0&&J.setGlobalState(C.clippingPlanes,T.state.camera)):T=null,x.pop(),x.length>0?A=x[x.length-1]:A=null,B!==null&&B.renderEnd()};function mc(w,k,st,Z){if(w.visible===!1)return;if(w.layers.test(k.layers)){if(w.isGroup)st=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(k);else if(w.isLight)T.pushLight(w),w.castShadow&&T.pushShadow(w);else if(w.isSprite){let Ft=k.isArrayCamera?Et:lt;if(!w.frustumCulled||w.intersectsFrustum(Ft)){Z&&Ot.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Mt);let Rt=Y.update(w),Dt=w.material;Dt.visible&&A.push(w,Rt,Dt,st,Ot.z,null,k)}}else if(w.isMesh||w.isLine||w.isPoints){let Ft=k.isArrayCamera?Et:lt;if(!w.frustumCulled||w.intersectsFrustum(Ft)){let Rt=Y.update(w),Dt=w.material;if(Z&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ot.copy(w.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),Ot.copy(Rt.boundingSphere.center)),Ot.applyMatrix4(w.matrixWorld).applyMatrix4(Mt)),Array.isArray(Dt)){let Gt=Rt.groups;for(let te=0,de=Gt.length;te<de;te++){let Bt=Gt[te],pe=Dt[Bt.materialIndex];pe&&pe.visible&&A.push(w,Rt,pe,st,Ot.z,Bt,k)}}else Dt.visible&&A.push(w,Rt,Dt,st,Ot.z,null,k)}}}let Ct=w.children;for(let Ft=0,Rt=Ct.length;Ft<Rt;Ft++)mc(Ct[Ft],k,st,Z)}function _u(w,k,st,Z){let{opaque:K,transmissive:Ct,transparent:Ft}=w;T.setupLightsView(st),yt===!0&&J.setGlobalState(C.clippingPlanes,st),Z&&St.viewport(P.copy(Z)),K.length>0&&Na(K,k,st),Ct.length>0&&Na(Ct,k,st),Ft.length>0&&Na(Ft,k,st),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function vu(w,k,st,Z){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[Z.id]===void 0){let Bt=Pt.has("EXT_color_buffer_half_float")||Pt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[Z.id]=new Ye(1,1,{generateMipmaps:!0,type:Bt?nn:bn,minFilter:Ei,samples:Math.max(4,ne.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ue.workingColorSpace})}let Ct=T.state.transmissionRenderTarget[Z.id],Ft=Z.viewport||P;Ct.setSize(Ft.z*C.transmissionResolutionScale,Ft.w*C.transmissionResolutionScale);let Rt=C.getRenderTarget(),Dt=C.getActiveCubeFace(),Gt=C.getActiveMipmapLevel();C.setRenderTarget(Ct),C.getClearColor(X),rt=C.getClearAlpha(),rt<1&&C.setClearColor(16777215,.5),C.clear(),Kt&&R.render(st);let te=C.toneMapping;C.toneMapping=ti;let de=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),T.setupLightsView(Z),yt===!0&&J.setGlobalState(C.clippingPlanes,Z),Na(w,st,Z),j.updateMultisampleRenderTarget(Ct),j.updateRenderTargetMipmap(Ct),Pt.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let pe=0,Ge=k.length;pe<Ge;pe++){let Pe=k[pe],{object:Ce,geometry:rn,material:zt,group:pn}=Pe;if(zt.side===He&&Ce.layers.test(Z.layers)){let ye=zt.side;zt.side=en,zt.needsUpdate=!0,yu(Ce,st,Z,rn,zt,pn),zt.side=ye,zt.needsUpdate=!0,Bt=!0}}Bt===!0&&(j.updateMultisampleRenderTarget(Ct),j.updateRenderTargetMipmap(Ct))}C.setRenderTarget(Rt,Dt,Gt),C.setClearColor(X,rt),de!==void 0&&(Z.viewport=de),C.toneMapping=te}function Na(w,k,st){let Z=k.isScene===!0?k.overrideMaterial:null;for(let K=0,Ct=w.length;K<Ct;K++){let Ft=w[K],{object:Rt,geometry:Dt,group:Gt}=Ft,te=Ft.material;te.allowOverride===!0&&Z!==null&&(te=Z),Rt.layers.test(st.layers)&&yu(Rt,k,st,Dt,te,Gt)}}function yu(w,k,st,Z,K,Ct){B!==null&&K.isNodeMaterial&&B.setObject(w,K),w.onBeforeRender(C,k,st,Z,K,Ct),w.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),K.onBeforeRender(C,k,st,Z,w,Ct),K.transparent===!0&&K.side===He&&K.forceSinglePass===!1?(K.side=en,K.needsUpdate=!0,C.renderBufferDirect(st,k,Z,K,w,Ct),K.side=Xi,K.needsUpdate=!0,C.renderBufferDirect(st,k,Z,K,w,Ct),K.side=He):C.renderBufferDirect(st,k,Z,K,w,Ct),w.onAfterRender(C,k,st,Z,K,Ct)}function Mu(w){let k=0;for(let st of w)st.texture!==null&&k++;return k}function ur(w,k,st){k.isScene!==!0&&(k=jt);let Z=q.get(w),K=T.state.lights,Ct=T.state.shadowsArray,Ft=K.state.version,Rt=H.getParameters(w,K.state,Ct,k,st,T.state.lightProbeGridArray),Dt=H.getProgramCacheKey(Rt),Gt=Z.programs;Z.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?k.environment:null,Z.fog=k.fog;let te=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;Z.envMap=b.get(w.envMap||Z.environment,te),Z.envMapRotation=Z.environment!==null&&w.envMap===null?k.environmentRotation:w.envMapRotation,Gt===void 0&&(w.addEventListener("dispose",be),Gt=new Map,Z.programs=Gt,Z.programVariants=new Map);let de=Gt.get(Dt);if(de!==void 0){if(Z.currentProgram===de&&Z.lightsStateVersion===Ft)return bu(w,Rt),de}else Rt.uniforms=H.getUniforms(w),B!==null&&w.isNodeMaterial&&B.build(w,st,Rt),w.onBeforeCompile(Rt,C),de=H.acquireProgram(Rt,Dt),Gt.set(Dt,de),Z.uniforms=Rt.uniforms;let Bt=Z.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Bt.clippingPlanes=J.uniform),bu(w,Rt),Z.needsLights=Bp(w),Z.lightsStateVersion=Ft,Z.needsLights&&(Bt.ambientLightColor.value=K.state.ambient,Bt.lightProbe.value=K.state.probe,Bt.sunLights.value=K.state.sun,Bt.sunLightShadows.value=K.state.sunShadow,Bt.directionalLights.value=K.state.directional,Bt.directionalLightShadows.value=K.state.directionalShadow,Bt.spotLights.value=K.state.spot,Bt.spotLightShadows.value=K.state.spotShadow,Bt.rectAreaLights.value=K.state.rectArea,Bt.ltc_1.value=K.state.rectAreaLTC1,Bt.ltc_2.value=K.state.rectAreaLTC2,Bt.pointLights.value=K.state.point,Bt.pointLightShadows.value=K.state.pointShadow,Bt.hemisphereLights.value=K.state.hemi,Bt.sunShadowMatrix.value=K.state.sunShadowMatrix,Bt.sunShadowCascade.value=K.state.sunShadowCascade,Bt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Bt.spotLightMatrix.value=K.state.spotLightMatrix,Bt.spotLightMap.value=K.state.spotLightMap,Bt.pointShadowMatrix.value=K.state.pointShadowMatrix),Z.numLightProbeGrids=Mu(T.state.lightProbeGridArray),Z.currentProgram=de,Z.uniformsList=null,de}function Up(w,k,st,Z,K){let Ct=q.get(w),Ft=Ct.currentProgram.id+","+Z+","+K,Rt=Ct.programVariants.get(Ft);return Rt===void 0?(Rt=ur(w,k,st),Ct.programVariants.set(Ft,Rt)):(Ct.currentProgram=Rt,Ct.uniformsList=null,Ct.outputColorSpace=Z,Ct.toneMapping=K),Rt}function Su(w){if(w.uniformsList===null){let k=w.currentProgram.getUniforms();w.uniformsList=nr.seqWithValue(k.seq,w.uniforms)}return w.uniformsList}function bu(w,k){let st=q.get(w);st.outputColorSpace=k.outputColorSpace,st.batching=k.batching,st.batchingColor=k.batchingColor,st.instancing=k.instancing,st.instancingColor=k.instancingColor,st.instancingMorph=k.instancingMorph,st.skinning=k.skinning,st.morphTargets=k.morphTargets,st.morphNormals=k.morphNormals,st.morphColors=k.morphColors,st.morphTargetsCount=k.morphTargetsCount,st.numClippingPlanes=k.numClippingPlanes,st.numIntersection=k.numClipIntersection,st.vertexAlphas=k.vertexAlphas,st.vertexTangents=k.vertexTangents,st.toneMapping=k.toneMapping}function Fp(w,k,st,Z,K){k.isScene!==!0&&(k=jt),j.resetTextureUnits();let Ct=k.fog,Ft=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?k.environment:null,Rt=ut===null?C.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:ue.workingColorSpace,Dt=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,Gt=b.get(Z.envMap||Ft,Dt),te=Z.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,de=!!st.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Bt=!!st.morphAttributes.position,pe=!!st.morphAttributes.normal,Ge=!!st.morphAttributes.color,Pe=ti;Z.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(Pe=C.toneMapping);let Ce=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,rn=Ce!==void 0?Ce.length:0,zt=q.get(Z),pn=T.state.lights;if(yt===!0&&(dt===!0||w!==at)){let Ne=w===at&&Z.id===et;J.setState(Z,w,Ne)}let ye=!1,ts=!1;Z.version===zt.__version?zt.needsLights&&zt.lightsStateVersion!==pn.state.version||K.isBatchedMesh&&zt.batching===!1||!K.isBatchedMesh&&zt.batching===!0||K.isBatchedMesh&&zt.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&zt.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&zt.instancing===!1||!K.isInstancedMesh&&zt.instancing===!0||K.isSkinnedMesh&&zt.skinning===!1||!K.isSkinnedMesh&&zt.skinning===!0||K.isInstancedMesh&&zt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&zt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&zt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&zt.instancingMorph===!1&&K.morphTexture!==null||zt.envMap!==Gt||Z.fog===!0&&zt.fog!==Ct||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==J.numPlanes||zt.numIntersection!==J.numIntersection)||zt.vertexAlphas!==te||zt.vertexTangents!==de||zt.morphTargets!==Bt||zt.morphNormals!==pe||zt.morphColors!==Ge||zt.morphTargetsCount!==rn||zt.numLightProbeGrids!==Mu(T.state.lightProbeGridArray)?ye=!0:(zt.outputColorSpace!==Rt||zt.toneMapping!==Pe)&&(ts=!0):(ye=!0,zt.__version=Z.version);let an=zt.currentProgram;(ye===!0||ts===!0)&&(an=ts===!0?Up(Z,k,K,Rt,Pe):ur(Z,k,K),B&&Z.isNodeMaterial&&B.onUpdateProgram(Z,an,zt));let Ua=!1,Di=!1,es=!1,xe=an.getUniforms(),tn=zt.uniforms;if(St.useProgram(an.program)&&(Ua=!0,Di=!0,es=!0),Z.id!==et&&(et=Z.id,Di=!0),Ua||at!==w){St.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),xe.setValue(z,"projectionMatrix",w.projectionMatrix),xe.setValue(z,"viewMatrix",w.matrixWorldInverse);let Ke=xe.map.cameraPosition;Ke!==void 0&&Ke.setValue(z,Yt.setFromMatrixPosition(w.matrixWorld)),ne.logarithmicDepthBuffer&&xe.setValue(z,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&xe.setValue(z,"isOrthographic",w.isOrthographicCamera===!0),at!==w&&(at=w,Di=!0,es=!0)}if(zt.needsLights&&(pn.state.sunShadowMap.length>0&&xe.setValue(z,"sunShadowMap",pn.state.sunShadowMap,j),pn.state.directionalShadowMap.length>0&&xe.setValue(z,"directionalShadowMap",pn.state.directionalShadowMap,j),pn.state.spotShadowMap.length>0&&xe.setValue(z,"spotShadowMap",pn.state.spotShadowMap,j),pn.state.pointShadowMap.length>0&&xe.setValue(z,"pointShadowMap",pn.state.pointShadowMap,j)),K.isSkinnedMesh){xe.setOptional(z,K,"bindMatrix"),xe.setOptional(z,K,"bindMatrixInverse");let Ne=K.skeleton;Ne&&(Ne.boneTexture===null&&Ne.computeBoneTexture(),xe.setValue(z,"boneTexture",Ne.boneTexture,j))}K.isBatchedMesh&&(xe.setOptional(z,K,"batchingTexture"),xe.setValue(z,"batchingTexture",K._matricesTexture,j),xe.setOptional(z,K,"batchingIdTexture"),xe.setValue(z,"batchingIdTexture",K._indirectTexture,j),xe.setOptional(z,K,"batchingColorTexture"),K._colorsTexture!==null&&xe.setValue(z,"batchingColorTexture",K._colorsTexture,j));let Bn=st.morphAttributes;if((Bn.position!==void 0||Bn.normal!==void 0||Bn.color!==void 0)&&tt.update(K,st,an),(Di||zt.receiveShadow!==K.receiveShadow)&&(zt.receiveShadow=K.receiveShadow,xe.setValue(z,"receiveShadow",K.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&k.environment!==null&&(tn.envMapIntensity.value=k.environmentIntensity),tn.dfgLUT!==void 0&&(tn.dfgLUT.value=Dv()),Di){if(xe.setValue(z,"toneMappingExposure",C.toneMappingExposure),zt.needsLights&&Op(tn,es),Ct&&Z.fog===!0&&it.refreshFogUniforms(tn,Ct),it.refreshMaterialUniforms(tn,Z,At,Nt,T.state.transmissionRenderTarget[w.id]),zt.needsLights&&zt.numLightProbeGrids>0){let Ne=M,Ke=0;for(let ci of T.state.lightProbeGridArray)ci.texture!==null&&(Ne.textures[Ke]=ci.texture,Ne.min[Ke]=ci.boundingBox.min,Ne.max[Ke]=ci.boundingBox.max,Ne.resolution[Ke]=ci.resolution,Ke++);for(let ci in Ne)Ne[ci].length=Ke;tn.probesSH.value=Ne.textures,tn.probesMin.value=Ne.min,tn.probesMax.value=Ne.max,tn.probesResolution.value=Ne.resolution}nr.upload(z,Su(zt),tn,j)}if(Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(nr.upload(z,Su(zt),tn,j),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&xe.setValue(z,"center",K.center),xe.setValue(z,"modelViewMatrix",K.modelViewMatrix),xe.setValue(z,"normalMatrix",K.normalMatrix),xe.setValue(z,"modelMatrix",K.matrixWorld),Z.uniformsGroups!==void 0){let Ne=Z.uniformsGroups;for(let Ke=0,ci=Ne.length;Ke<ci;Ke++){let wu=Ne[Ke];Xt.update(wu,an),Xt.bind(wu,an)}}return an}function Op(w,k){w.ambientLightColor.needsUpdate=k,w.lightProbe.needsUpdate=k,w.sunLights.needsUpdate=k,w.sunLightShadows.needsUpdate=k,w.directionalLights.needsUpdate=k,w.directionalLightShadows.needsUpdate=k,w.pointLights.needsUpdate=k,w.pointLightShadows.needsUpdate=k,w.spotLights.needsUpdate=k,w.spotLightShadows.needsUpdate=k,w.rectAreaLights.needsUpdate=k,w.hemisphereLights.needsUpdate=k}function Bp(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return ut},this.setRenderTargetTextures=function(w,k,st){let Z=q.get(w);Z.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),q.get(w.texture).__webglTexture=k,q.get(w.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:st,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,k){let st=q.get(w);st.__webglFramebuffer=k,st.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(w,k=0,st=0){ut=w,$=k,G=st;let Z=null,K=!1,Ct=!1;if(w){let Rt=q.get(w);if(Rt.__useDefaultFramebuffer!==void 0){St.bindFramebuffer(z.FRAMEBUFFER,Rt.__webglFramebuffer),P.copy(w.viewport),nt.copy(w.scissor),ct=w.scissorTest,St.viewport(P),St.scissor(nt),St.setScissorTest(ct),et=-1;return}else if(Rt.__webglFramebuffer===void 0)j.setupRenderTarget(w);else if(Rt.__hasExternalTextures)j.rebindTextures(w,q.get(w.texture).__webglTexture,q.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let te=w.depthTexture;if(Rt.__boundDepthTexture!==te){if(te!==null&&q.has(te)&&(w.width!==te.image.width||w.height!==te.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(w)}}let Dt=w.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(Ct=!0);let Gt=q.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Gt[k])?Z=Gt[k][st]:Z=Gt[k],K=!0):w.samples>0&&j.useMultisampledRTT(w)===!1?Z=q.get(w).__webglMultisampledFramebuffer:Array.isArray(Gt)?Z=Gt[st]:Z=Gt,P.copy(w.viewport),nt.copy(w.scissor),ct=w.scissorTest}else P.copy(Wt).multiplyScalar(At).floor(),nt.copy(se).multiplyScalar(At).floor(),ct=re;if(st!==0&&(Z=W),St.bindFramebuffer(z.FRAMEBUFFER,Z)&&St.drawBuffers(w,Z),St.viewport(P),St.scissor(nt),St.setScissorTest(ct),K){let Rt=q.get(w.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+k,Rt.__webglTexture,st)}else if(Ct){let Rt=k;for(let Dt=0;Dt<w.textures.length;Dt++){let Gt=q.get(w.textures[Dt]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Dt,Gt.__webglTexture,st,Rt)}}else if(w!==null&&st!==0){let Rt=q.get(w.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Rt.__webglTexture,st)}et=-1};function Eu(w){let k=q.get(w);return(k.__readFormat!==w.format||k.__readType!==w.type)&&(k.__readFormat=w.format,k.__readType=w.type,k.__formatReadable=ne.textureFormatReadable(w.format),k.__typeReadable=ne.textureTypeReadable(w.type)),k}this.readRenderTargetPixels=function(w,k,st,Z,K,Ct,Ft,Rt=0){if(!(w&&w.isWebGLRenderTarget)){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=q.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ft!==void 0&&(Dt=Dt[Ft],Array.isArray(Dt)&&(Dt=Dt[0])),Dt){St.bindFramebuffer(z.FRAMEBUFFER,Dt);try{let Gt=w.textures[Rt],te=Gt.format,de=Gt.type;w.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Rt);let Bt=Eu(Gt);if(Bt.__formatReadable===!1){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Bt.__typeReadable===!1){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=w.width-Z&&st>=0&&st<=w.height-K&&z.readPixels(k,st,Z,K,vt.convert(te),vt.convert(de),Ct)}finally{let Gt=ut!==null?q.get(ut).__webglFramebuffer:null;St.bindFramebuffer(z.FRAMEBUFFER,Gt)}}},this.readRenderTargetPixelsAsync=async function(w,k,st,Z,K,Ct,Ft,Rt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=q.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ft!==void 0&&(Dt=Dt[Ft],Array.isArray(Dt)&&(Dt=Dt[0])),Dt)if(k>=0&&k<=w.width-Z&&st>=0&&st<=w.height-K){St.bindFramebuffer(z.FRAMEBUFFER,Dt);let Gt=w.textures[Rt],te=Gt.format,de=Gt.type;w.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Rt);let Bt=Eu(Gt);if(Bt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Bt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let pe=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,pe),z.bufferData(z.PIXEL_PACK_BUFFER,Ct.byteLength,z.STREAM_READ),z.readPixels(k,st,Z,K,vt.convert(te),vt.convert(de),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let Ge=ut!==null?q.get(ut).__webglFramebuffer:null;St.bindFramebuffer(z.FRAMEBUFFER,Ge);let Pe=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Gf(z,Pe,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,pe),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Ct),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(pe),z.deleteSync(Pe),Ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,k=null,st=0){let Z=Math.pow(2,-st),K=Math.floor(w.image.width*Z),Ct=Math.floor(w.image.height*Z),Ft=k!==null?k.x:0,Rt=k!==null?k.y:0;j.setTexture2D(w,0),z.copyTexSubImage2D(z.TEXTURE_2D,st,0,0,Ft,Rt,K,Ct),St.unbindTexture()},this.copyTextureToTexture=function(w,k,st=null,Z=null,K=0,Ct=0){let Ft,Rt,Dt,Gt,te,de,Bt,pe,Ge,Pe=w.isCompressedTexture?w.mipmaps[Ct]:w.image;if(st!==null)Ft=st.max.x-st.min.x,Rt=st.max.y-st.min.y,Dt=st.isBox3?st.max.z-st.min.z:1,Gt=st.min.x,te=st.min.y,de=st.isBox3?st.min.z:0;else{let xe=Math.pow(2,-K);Ft=Math.floor(Pe.width*xe),Rt=Math.floor(Pe.height*xe),w.isDataArrayTexture?Dt=Pe.depth:w.isData3DTexture?Dt=Math.floor(Pe.depth*xe):Dt=1,Gt=0,te=0,de=0}Z!==null?(Bt=Z.x,pe=Z.y,Ge=Z.z):(Bt=0,pe=0,Ge=0);let Ce=vt.convert(k.format),rn=vt.convert(k.type),zt;k.isData3DTexture?(j.setTexture3D(k,0),zt=z.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(j.setTexture2DArray(k,0),zt=z.TEXTURE_2D_ARRAY):(j.setTexture2D(k,0),zt=z.TEXTURE_2D),St.activeTexture(z.TEXTURE0),St.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,k.flipY),St.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),St.pixelStorei(z.UNPACK_ALIGNMENT,k.unpackAlignment);let pn=St.getParameter(z.UNPACK_ROW_LENGTH),ye=St.getParameter(z.UNPACK_IMAGE_HEIGHT),ts=St.getParameter(z.UNPACK_SKIP_PIXELS),an=St.getParameter(z.UNPACK_SKIP_ROWS),Ua=St.getParameter(z.UNPACK_SKIP_IMAGES);St.pixelStorei(z.UNPACK_ROW_LENGTH,Pe.width),St.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Pe.height),St.pixelStorei(z.UNPACK_SKIP_PIXELS,Gt),St.pixelStorei(z.UNPACK_SKIP_ROWS,te),St.pixelStorei(z.UNPACK_SKIP_IMAGES,de);let Di=w.isDataArrayTexture||w.isData3DTexture,es=k.isDataArrayTexture||k.isData3DTexture;if(w.isDepthTexture){let xe=q.get(w),tn=q.get(k),Bn=q.get(xe.__renderTarget),Ne=q.get(tn.__renderTarget);St.bindFramebuffer(z.READ_FRAMEBUFFER,Bn.__webglFramebuffer),St.bindFramebuffer(z.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let Ke=0;Ke<Dt;Ke++)Di&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,q.get(w).__webglTexture,K,de+Ke),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,q.get(k).__webglTexture,Ct,Ge+Ke)),z.blitFramebuffer(Gt,te,Gt+Ft,te+Rt,Bt,pe,Bt+Ft,pe+Rt,z.DEPTH_BUFFER_BIT,z.NEAREST);St.bindFramebuffer(z.READ_FRAMEBUFFER,null),St.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(K!==0||w.isRenderTargetTexture||q.has(w)){let xe=q.get(w),tn=q.get(k);St.bindFramebuffer(z.READ_FRAMEBUFFER,L),St.bindFramebuffer(z.DRAW_FRAMEBUFFER,F);for(let Bn=0;Bn<Dt;Bn++)Di?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,xe.__webglTexture,K,de+Bn):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,xe.__webglTexture,K),es?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,tn.__webglTexture,Ct,Ge+Bn):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,tn.__webglTexture,Ct),K!==0?z.blitFramebuffer(Gt,te,Gt+Ft,te+Rt,Bt,pe,Bt+Ft,pe+Rt,z.COLOR_BUFFER_BIT,z.NEAREST):es?z.copyTexSubImage3D(zt,Ct,Bt,pe,Ge+Bn,Gt,te,Ft,Rt):z.copyTexSubImage2D(zt,Ct,Bt,pe,Gt,te,Ft,Rt);St.bindFramebuffer(z.READ_FRAMEBUFFER,null),St.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else es?w.isDataTexture||w.isData3DTexture?z.texSubImage3D(zt,Ct,Bt,pe,Ge,Ft,Rt,Dt,Ce,rn,Pe.data):k.isCompressedArrayTexture?z.compressedTexSubImage3D(zt,Ct,Bt,pe,Ge,Ft,Rt,Dt,Ce,Pe.data):z.texSubImage3D(zt,Ct,Bt,pe,Ge,Ft,Rt,Dt,Ce,rn,Pe):w.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Ct,Bt,pe,Ft,Rt,Ce,rn,Pe.data):w.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Ct,Bt,pe,Pe.width,Pe.height,Ce,Pe.data):z.texSubImage2D(z.TEXTURE_2D,Ct,Bt,pe,Ft,Rt,Ce,rn,Pe);St.pixelStorei(z.UNPACK_ROW_LENGTH,pn),St.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ye),St.pixelStorei(z.UNPACK_SKIP_PIXELS,ts),St.pixelStorei(z.UNPACK_SKIP_ROWS,an),St.pixelStorei(z.UNPACK_SKIP_IMAGES,Ua),Ct===0&&k.generateMipmaps===!0&&k.mipmapsAutoUpdate===!0&&z.generateMipmap(zt),St.unbindTexture()},this.initRenderTarget=function(w){q.get(w).__webglFramebuffer===void 0&&j.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?j.setTextureCube(w,0):w.isData3DTexture?j.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?j.setTexture2DArray(w,0):j.setTexture2D(w,0),St.unbindTexture()},this.resetState=function(){$=0,G=0,ut=null,St.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ue._getDrawingBufferColorSpace(t),e.unpackColorSpace=ue._getUnpackColorSpace()}};var rr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Pn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Nv=new us(-1,1,1,-1,0,1),Dh=class extends we{constructor(){super(),this.setAttribute("position",new $t([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new $t([0,2,0,0,2,0],2))}},Uv=new Dh,$i=class{constructor(t){this._mesh=new Ht(Uv,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Nv)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Wl=class extends Pn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Oe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Ai.clone(t.uniforms),this.material=new Oe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new $i(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var wa=class extends Pn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Xl=class extends Pn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var ql=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new pt);this._width=i.width,this._height=i.height,e=new Ye(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:nn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Wl(rr),this.copyPass.material.blending=bi,this.timer=new aa}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),a.needsSwap){if(i){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}wa!==void 0&&(a instanceof wa?i=!0:a instanceof Xl&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new pt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Yl=class extends Pn{constructor(t,e,i=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new kt}render(t,e,i){let s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}};var Dd={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new kt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var ar=class n extends Pn{constructor(t,e=1,i,s){super(),this.strength=e,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new pt(t.x,t.y):new pt(256,256),this.clearColor=new kt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ye(r,a,{type:nn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new Ye(r,a,{type:nn,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let f=new Ye(r,a,{type:nn,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}let o=Dd;this.highPassUniforms=Ai.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Oe({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new pt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ai.clone(rr.uniforms),this.blendMaterial=new Oe({uniforms:this.copyUniforms,vertexShader:rr.vertexShader,fragmentShader:rr.fragmentShader,premultipliedAlpha:!0,blending:fs,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new kt,this._oldClearAlpha=1,this._basic=new ze,this._fsQuad=new $i(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new pt(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,e,i,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=n.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=n.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){let e=[],i=t/3;for(let a=0;a<t;a++)e.push(.39894*Math.exp(-.5*a*a/(i*i))/i);let s=[],r=[];for(let a=1;a<t;a+=2){let o=e[a],c=a+1<t?e[a+1]:0,l=o+c;s.push((a*o+(a+1)*c)/l),r.push(l)}return new Oe({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new pt(.5,.5)},direction:{value:new pt(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}};ar.BlurDirectionX=new pt(1,0);ar.BlurDirectionY=new pt(0,1);var Ta={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Zl=class extends Pn{constructor(){super(),this.isOutputPass=!0,this.uniforms=Ai.clone(Ta.uniforms),this.material=new Ks({name:Ta.name,uniforms:this.uniforms,vertexShader:Ta.vertexShader,fragmentShader:Ta.fragmentShader}),this._fsQuad=new $i(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ue.getTransfer(this._outputColorSpace)===ve&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===la?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ca?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ha?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ps?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===fa?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===da?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===ua&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Nh=[{id:"bahia",name:"Bah\xEDa Azul",desc:"Recta larga, horquilla y chicana junto al mar",width:14,laps:3,theme:"day",pts:[[-350,0],[450,0],[565,35],[585,125],[520,200],[380,232],[300,285],[330,365],[265,435],[300,520],[450,565],[600,640],[645,755],[585,822],[500,785],[300,705],[0,682],[-140,664],[-175,630],[-235,640],[-380,602],[-480,520],[-520,380],[-475,262],[-520,150],[-500,50]]},{id:"niebla",name:"Monte Niebla",desc:"Curvas r\xE1pidas y enlazadas al atardecer",width:13,laps:3,theme:"sunset",pts:[[0,0],[520,0],[610,50],[600,150],[480,190],[420,280],[470,380],[600,420],[700,520],[660,640],[520,660],[380,600],[250,640],[120,760],[-40,760],[-120,660],[-60,560],[-130,470],[-280,470],[-360,380],[-330,250],[-380,140],[-300,30],[-170,0]]},{id:"puerto",name:"Puerto Nocturno",desc:"Callejero de noche entre edificios y el puerto, muros pegados",width:12,laps:3,theme:"night",street:!0,pts:[[-260,0],[480,0],[530,12],[552,55],[556,210],[572,255],[618,275],[770,278],[818,298],[834,345],[812,392],[705,468],[655,522],[642,600],[606,642],[545,652],[385,652],[334,632],[314,584],[306,430],[286,386],[242,368],[100,366],[58,346],[44,302],[40,182],[20,140],[-22,122],[-190,120],[-240,102],[-262,58]]}];var bt={mass:798,Iz:1150,wb:3.6,a:1.98,b:1.62,tw:1.6,h:.29,R:.36,ClA:3.8,CdA:1.25,aeroFront:.42,mu:1.72,Fz0:2600,loadSens:.07,kp:.11,ap:.105,IwF:1,IwR:1.3,Ie:.06,eff:.92,brakeF:4300,brakeR:3300,idle:4e3,limiter:12800,upRpm:12300,downRpm:7700,gears:[15.2,12.3,10.4,9,7.9,6.9,6,5.1],maxSteer:.36},Fh=1.225,$l=9.81,Ji=[[3e3,330],[4e3,390],[6e3,470],[8e3,560],[1e4,620],[11e3,640],[12e3,615],[12800,560],[13500,400]];function Fv(n){if(n<=Ji[0][0])return Ji[0][1];for(let t=1;t<Ji.length;t++)if(n<=Ji[t][0]){let[e,i]=Ji[t-1],[s,r]=Ji[t];return i+(r-i)*(n-e)/(s-e)}return Ji[Ji.length-1][1]}var Ud=1.6,Ov=Math.tan(Math.PI/(2*Ud));function Bv(n){return Math.sin(Ud*Math.atan(Ov*n))}var zv=Math.tan(bt.ap),kv=[[bt.a,bt.tw/2],[bt.a,-bt.tw/2],[-bt.b,bt.tw/2],[-bt.b,-bt.tw/2]];function Fd(n,t,e){return{x:n,z:t,h:e,vx:0,vy:0,r:0,w:[0,0,0,0],rot:[0,0,0,0],kap:[0,0,0,0],alp:[0,0,0,0],Fz:[0,0,0,0],use:[0,0,0,0],surf:[0,0,0,0],gear:1,rpm:bt.idle,shiftT:0,steer:0,thr:0,brk:0,axs:0,ays:0,tcCut:1,absF:[1,1,1,1],drs:!1,tow:0,revCount:0,dmg:new Array(11).fill(0),assist:{abs:!0,tc:!0,auto:!0}}}function qn(n){return Math.hypot(n.vx,n.vy)}function Hv(n){return n===0?1:n===1?.93:n===2?.55:n===3?.45:.88}function Uh(n,t,e,i,s,r){let a=Math.max(Math.abs(i),3),o=(e*bt.R-i)/a,c=s/a,l=o/bt.kp,h=c/zv,u=Math.hypot(l,h);if(u<1e-6||r<=0)return[0,0,o,c,0];let f=bt.mu*(1-bt.loadSens*(r/bt.Fz0-1));f=Math.max(bt.mu*.7,f)*Hv(n.surf[t])*(t>1?1.07:1)*(1-.3*Math.min(1,n.dmg[4+t]));let d=f*r*Bv(u);return[d*l/u,-d*h/u,o,c,u]}function Od(n,t,e){let i=bt.mass,s=n.vx,r=t.steer-n.steer,a=3.2*e;n.steer+=Math.max(-a,Math.min(a,r)),n.steer=Math.max(-bt.maxSteer,Math.min(bt.maxSteer,n.steer)),n.thr+=(t.thr-n.thr)*Math.min(1,e*18),n.brk+=(t.brk-n.brk)*Math.min(1,e*22);let o=s*s,c=n.drs?1:0,l=n.tow||0,h=n.dmg,u=h[2]>=1?1:Math.min(1,h[0]),f=h[2]>=1?1:Math.min(1,h[1]),d=Math.min(1,h[3]),m=1-.12*(Math.min(1,h[8])+Math.min(1,h[9])),v=bt.CdA*(1-.18*c)*(1-.28*l)*(1-.22*d)*(1+.04*(u+f)),p=bt.ClA*(1-.12*l)*m,g=.5*Fh*o,y=g*p*bt.aeroFront,S=g*p*(1-bt.aeroFront)*(1-.12*c)*(1-.7*d),M=g*v*Math.sign(s),A=bt.wb,T=i*$l*bt.b/A,x=i*$l*bt.a/A,E=i*n.axs*bt.h/A,D=(T-E)/2,C=(x+S+E)/2,U=i*n.ays*bt.h/bt.tw*.5,B=n.Fz;B[0]=Math.max(0,D+y/2*(1-.75*u)-U),B[1]=Math.max(0,D+y/2*(1-.75*f)+U),B[2]=Math.max(0,C-U),B[3]=Math.max(0,C+U);for(let dt=0;dt<4;dt++)h[4+dt]>=1&&(B[dt]=0);let W=n.gear>0?bt.gears[n.gear-1]:n.gear<0?-14:0,L=(n.w[2]+n.w[3])/2,F=Math.abs(L*W)*60/(2*Math.PI),$=1,G=F,ut=bt.idle+n.thr*5200;n.gear!==0&&F<ut&&F<6500&&(G=Math.max(F,ut),$=.85),n.gear===0&&(G=bt.idle+n.thr*8e3),n.rpm+=(Math.min(13500,G)-n.rpm)*Math.min(1,e*30),n.shiftT>0&&(n.shiftT-=e);let et=0;n.gear!==0&&n.shiftT<=0&&(n.thr>.02&&F<bt.limiter?et=Fv(G)*n.thr*n.tcCut*$*(1-.45*Math.min(1,h[10]))*(n.limiter&&s>n.limiter?0:1):et=-(25+F*.004)*(1-n.thr));let at=et*W*bt.eff/2,P=bt.IwR+bt.Ie*W*W/2,nt=0,ct=0,X=0,rt=0,mt=0,Nt=0;for(let dt=0;dt<4;dt++){let[Mt,Yt]=kv[dt],Ot=n.vx-n.r*Yt,jt=n.vy+n.r*Mt,Kt=dt<2,ee=h[4+dt]>.15?(Yt>0?1:-1)*.04*Math.min(1,h[4+dt]):0,z=(Kt?n.steer:0)+ee,Re=ee||Kt?Math.cos(z):1,Pt=ee||Kt?Math.sin(z):0,ne=Ot*Re+jt*Pt,St=-Ot*Pt+jt*Re,I=Kt?bt.IwF:P,q=Kt?0:at,j=n.w[dt],b=Uh(n,dt,j,ne,St,B[dt]),_=.05,N=Uh(n,dt,j+_,ne,St,B[dt]),Y=Math.max(0,(N[0]-b[0])/_),H=j+e*(q-b[0]*bt.R)/(I+e*Y*bt.R*bt.R),it=(Kt?bt.brakeF:bt.brakeR)*n.brk*n.absF[dt];n.surf[dt]>=2&&(it+=0);let ot=it*e/(I+e*Y*bt.R*bt.R);Math.abs(H)<=ot?H=0:H-=Math.sign(H)*ot,n.w[dt]=H;let[V,J,ht,R,tt]=Uh(n,dt,H,ne,St,B[dt]);n.kap[dt]=ht,n.alp[dt]=R,n.use[dt]=tt,Kt||(rt=Math.max(rt,ht),ht>.02&&(Nt=Math.max(Nt,tt))),mt=Math.min(mt,ht);let Q=-.012*B[dt]*Math.sign(ne);h[4+dt]>=1&&(Q-=i*$l/4*.75*Math.sign(ne)*Math.min(1,Math.abs(ne))),n.surf[dt]===2&&(Q-=i/4*(.9+.06*Math.abs(ne))*Math.sign(ne)),n.surf[dt]===3&&(Q-=i/4*(3.2+.16*Math.abs(ne))*Math.sign(ne)),Math.abs(ne)<.5&&(Q*=Math.abs(ne)/.5);let gt=V+Q,vt=gt*Re-J*Pt,wt=gt*Pt+J*Re;nt+=vt,ct+=wt,X+=Mt*wt-Yt*vt,n.assist.abs?ht<-.13&&n.brk>.05?n.absF[dt]=Math.max(.15,n.absF[dt]-e*9):n.absF[dt]=Math.min(1,n.absF[dt]+e*6):n.absF[dt]=1}let At=(n.w[2]+n.w[3])/2,Vt=Math.min(1,e*40);n.w[2]+=(At-n.w[2])*Vt*.5,n.w[3]+=(At-n.w[3])*Vt*.5,n.assist.tc?rt>.12||Nt>1.05?n.tcCut=Math.max(.15,n.tcCut-e*7):n.tcCut=Math.min(1,n.tcCut+e*3):n.tcCut=1,nt-=M,ct-=.5*Fh*2.2*n.vy*Math.abs(n.vy);let _e=nt/i,Wt=ct/i;n.vx+=(_e+n.r*n.vy)*e,n.vy+=(Wt-n.r*n.vx)*e,n.r+=X/bt.Iz*e,Math.hypot(n.vx,n.vy)<.3&&n.thr<.05&&(n.vx*=.9,n.vy*=.9,n.r*=.9),n.axs+=(_e-n.axs)*Math.min(1,e*14),n.ays+=(Wt-n.ays)*Math.min(1,e*14),n.h+=n.r*e;let re=Math.sin(n.h),lt=Math.cos(n.h),Et=Math.cos(n.h),yt=-Math.sin(n.h);n.x+=(n.vx*re+n.vy*Et)*e,n.z+=(n.vx*lt+n.vy*yt)*e;for(let dt=0;dt<4;dt++)n.rot[dt]+=n.w[dt]*e;n.lastAx=_e,n.lastAy=Wt}function Bd(n,t){let e=n.vx;if(n.gear>=1&&e<.6&&t.brk>.5&&t.thr<.1){if(n.revCount+=t.dt,n.revCount>.45)return n.gear=-1,n.revCount=0,"down"}else n.revCount=0;if(n.gear===-1&&(t.thr>.1||e>1)&&t.thr>.1&&e>-.6)return n.gear=1,"up";if(n.gear<1||n.shiftT>0)return null;let i=s=>Math.abs((n.w[2]+n.w[3])/2*bt.gears[s-1])*60/(2*Math.PI);if(n.assist.auto){if(n.gear<8&&i(n.gear)>bt.upRpm)return n.gear++,n.shiftT=.05,"up";if(n.gear>1&&i(n.gear)<bt.downRpm&&i(n.gear-1)<11800)return n.gear--,n.shiftT=.03,"down"}else{if(t.up&&n.gear<8)return n.gear++,n.shiftT=.05,"up";if(t.down&&n.gear>1&&i(n.gear-1)<13200)return n.gear--,n.shiftT=.03,"down"}return null}function zd(n,t,e,i){n.x+=t*i,n.z+=e*i;let s=Math.sin(n.h),r=Math.cos(n.h),a=Math.cos(n.h),o=-Math.sin(n.h),c=n.vx*s+n.vy*a,l=n.vx*r+n.vy*o,h=c*t+l*e;if(h>=0)return 0;let u=c-h*t,f=l-h*e,d=.25,m=Math.max(.55,1-Math.abs(h)*.02);c=u*m-h*d*t,l=f*m-h*d*e,n.vx=c*s+l*r,n.vy=c*a+l*o,n.r*=.5,n.r+=(Math.random()-.5)*Math.min(1.5,-h*.05);for(let v=0;v<4;v++)n.w[v]=n.vx/bt.R;return-h}var kd=["Aler\xF3n del. izq.","Aler\xF3n del. der.","Trompa","Aler\xF3n trasero","Suspensi\xF3n del. izq.","Suspensi\xF3n del. der.","Suspensi\xF3n tras. izq.","Suspensi\xF3n tras. der.","Pont\xF3n izq.","Pont\xF3n der.","Motor"],Gv=[9,9,15,11,15,15,17,17,18,18,30];function Oh(n,t,e,i,s=1){let r=i-4.5;if(r<=0)return[];let a=(l,h=1)=>{let u=n.dmg[l];n.dmg[l]=Math.min(1,n.dmg[l]+r/Gv[l]*h*s),u<1&&n.dmg[l]>=1&&o.push(l)},o=[],c=e>0;return t>2.2?Math.abs(e)<.35?(a(0),a(1),i>13&&a(2,.7)):(a(c?0:1,1.2),i>12&&(a(c?4:5,.6),a(2,.35))):t>.9?(a(c?4:5),a(c?0:1,.6)):t>-1?(a(c?8:9),i>12&&a(c?4:5,.3)):t>-2.2?(a(c?6:7),i>12&&a(3,.4)):(a(3,1.1),i>14&&a(c?6:7,.4)),i>16&&a(10,.6),i>22&&(a(c?8:9,.5),a(3,.3)),o}var Nd=[[2.95,.9],[2.95,-.9],[3.05,0],[1.98,1],[1.98,-1],[0,.85],[0,-.85],[-1.62,1],[-1.62,-1],[-2.55,.48],[-2.55,-.48]];function Hd(n,t,e){let i=Math.sin(n.h),s=Math.cos(n.h),r=Math.cos(n.h),a=-Math.sin(n.h),o=Nd[0],c=-1e9;for(let l of Nd){let h=i*l[0]+r*l[1],u=s*l[0]+a*l[1],f=-(h*t+u*e);f>c&&(c=f,o=l)}return o}function Gd(n){n.dmg.fill(0)}function Vd(n,t,e){let i=Math.max(.5,n.vx),s=.5*Fh*bt.ClA/bt.mass,r=1.45*($l+s*i*i),a=t*Math.min(r/i,i/6),o=Math.atan(bt.wb*a/i)+t*Math.min(.07,9e-4*i);return o+=(a-n.r)*(i>8?.09:.03),i>5&&(o+=Math.max(-.14,Math.min(.14,Math.atan2(n.vy,i)*.8))),Math.max(-bt.maxSteer,Math.min(bt.maxSteer,o*1))}var Vv=3;function Wv(n,t,e,i,s){let r=(g,y)=>Math.pow(Math.hypot(y[0]-g[0],y[1]-g[1]),.5)||1e-4,o=0+r(n,t),c=o+r(t,e),l=c+r(e,i),h=o+(c-o)*s,u=(g,y,S,M)=>[(M-h)/(M-S)*g[0]+(h-S)/(M-S)*y[0],(M-h)/(M-S)*g[1]+(h-S)/(M-S)*y[1]],f=u(n,t,0,o),d=u(t,e,o,c),m=u(e,i,c,l),v=u(f,d,0,c),p=u(d,m,o,l);return u(v,p,o,c)}function Xd(n){let t=n.pts,e=t.length,i=[];for(let P=0;P<e;P++){let nt=t[(P-1+e)%e],ct=t[P],X=t[(P+1)%e],rt=t[(P+2)%e],mt=Math.max(8,Math.ceil(Math.hypot(X[0]-ct[0],X[1]-ct[1])/.5));for(let Nt=0;Nt<mt;Nt++)i.push(Wv(nt,ct,X,rt,Nt/mt))}let s=[0];for(let P=1;P<=i.length;P++){let nt=i[P-1],ct=i[P%i.length];s.push(s[P-1]+Math.hypot(ct[0]-nt[0],ct[1]-nt[1]))}let r=s[i.length],a=Math.round(r/Vv),o=r/a,c=new Float64Array(a),l=new Float64Array(a),h=0;for(let P=0;P<a;P++){let nt=P*o;for(;s[h+1]<nt;)h++;let ct=i[h],X=i[(h+1)%i.length],rt=(nt-s[h])/(s[h+1]-s[h]||1);c[P]=ct[0]+(X[0]-ct[0])*rt,l[P]=ct[1]+(X[1]-ct[1])*rt}let u=new Float64Array(a);for(let P=0;P<a;P++){let nt=0;for(let ct=-3;ct<=3;ct++)nt=Math.max(nt,Math.abs(Jl(c,l,a,(P+ct+a)%a,4)));u[P]=nt}let f=0,d=0;{let P=0;for(;u[P]<1/700&&P<a;)P++;let nt=-1;for(let ct=0;ct<=a;ct++){let X=(P+ct)%a,rt=ct<a&&u[X]<1/700;rt&&nt<0&&(nt=ct),!rt&&nt>=0&&(ct-nt>d&&(d=ct-nt,f=(P+nt)%a),nt=-1)}}let m=d*o,v=Math.min(m-160,Math.max(m*.42,270)),p=(f+Math.round(v/o))%a,g=new Float64Array(a),y=new Float64Array(a);for(let P=0;P<a;P++)g[P]=c[(P+p)%a],y[P]=l[(P+p)%a];c=g,l=y;let S={def:n,N:a,ds:o,L:r,px:c,pz:l,width:n.width,hw:n.width/2,street:!!n.street};S.straight={a:-v,b:m-v};let M=new Float64Array(a),A=new Float64Array(a),T=new Float64Array(a),x=new Float64Array(a),E=new Float64Array(a);for(let P=0;P<a;P++){let nt=(P-1+a)%a,ct=(P+1)%a,X=c[ct]-c[nt],rt=l[ct]-l[nt],mt=Math.hypot(X,rt);X/=mt,rt/=mt,M[P]=X,A[P]=rt,T[P]=rt,x[P]=-X}for(let P=0;P<a;P++)E[P]=Jl(c,l,a,P,4);Object.assign(S,{tx:M,tz:A,nx:T,nz:x,curv:E}),S.head=P=>Math.atan2(M[(P%a+a)%a],A[(P%a+a)%a]),S.idx=P=>Math.floor((P%r+r)%r/o)%a;let D=new Float64Array(a),C=new Float64Array(a),U=new Uint8Array(a),B=new Uint8Array(a),W=new Uint8Array(a),L=new Uint8Array(a);for(let P=0;P<a;P++){let nt=0;for(let rt=-12;rt<=30;rt++){let mt=E[(P+rt+a)%a];Math.abs(mt)>Math.abs(nt)&&(nt=mt)}let ct=Math.min(1,Math.abs(nt)*70),X=nt<0;if(S.street){let mt=3.2+7*ct;D[P]=S.hw+(X?mt:3.2),C[P]=S.hw+(X?3.2:mt)}else{let mt=9+14*ct;D[P]=S.hw+(X?mt:11),C[P]=S.hw+(X?11:mt),ct>.35&&(X?U[P]=1:B[P]=1)}}for(let P=0;P<a;P++)if(Math.abs(E[P])>1/260)for(let nt=-6;nt<=6;nt++){let ct=(P+nt+a)%a;W[ct]=1,L[ct]=1}let F={side:1,inS:S.straight.a+15,outS:S.straight.b-70,blend:75,lane:S.hw+7.4,width:7,wall:S.hw+2.8};F.boxes=[];for(let P=0;P<8;P++)F.boxes.push(F.inS+F.blend+40+P*14);F.limitA=F.inS+F.blend,F.limitB=F.outS-F.blend,F.offsetAt=(P,nt=0)=>{let ct=$(P),X=rt=>rt*rt*(3-2*rt);return ct<F.inS?nt:ct<F.inS+F.blend?nt+(F.lane-nt)*X((ct-F.inS)/F.blend):ct<F.outS-F.blend?F.lane:ct<F.outS?F.lane+(S.hw-2.5-F.lane)*X((ct-(F.outS-F.blend))/F.blend):S.hw-2.5};let $=P=>{let nt=(P%r+r)%r;return nt>r/2&&(nt-=r),nt};S.rel=$,S.pit=F;for(let P=0;P<a;P++){let nt=$(P*o);if(nt>F.inS-10&&nt<F.outS+10){let ct=nt<F.inS+F.blend*.85||nt>F.outS-F.blend*.85;D[P]=ct?Math.max(D[P],F.lane+F.width/2+1):F.wall,U[P]=0,W[P]=0,nt>F.inS-10&&nt<F.outS+10&&(B[P]=0)}}let G=40,ut=new Map,et=(P,nt)=>Math.floor(P/G)+","+Math.floor(nt/G);for(let P=0;P<a;P++){let nt=et(c[P],l[P]);ut.has(nt)||ut.set(nt,[]),ut.get(nt).push(P)}S.grid=ut,S.cell=G;for(let P=0;P<a;P++)for(let nt of[1,-1]){let ct=nt>0?D:C,X=ct[P];for(let rt=2;rt<X+6;rt+=2){let mt=c[P]+T[P]*rt*nt,Nt=l[P]+x[P]*rt*nt,At=Xv(S,mt,Nt,P);if(At<rt+1){X=Math.max(S.hw+1.5,Math.min(X,(rt+At)/2-.5));break}}ct[P]=X}Wd(D,3,a),Wd(C,6,a),Object.assign(S,{wallL:D,wallR:C,gravL:U,gravR:B,kerbL:W,kerbR:L}),qv(S),Yv(S),S.sectors=[S.L/3,2*S.L/3];let at=[];for(let P=0;P<a;P++){let nt=S.vmax[P];if(nt<38&&nt<=S.vmax[(P-1+a)%a]&&nt<=S.vmax[(P+1)%a]){let ct=E[P]>0?1:-1,X=$(P*o);if(X>F.inS-20&&X<F.outS+20)continue;for(let rt=-1;rt<=1;rt++){let mt=(P+rt*3+a)%a,Nt=ct*(S.hw+2.4+Math.abs(rt)*.4);at.push({type:"cone",x:c[mt]+T[mt]*Nt,z:l[mt]+x[mt]*Nt})}P+=15}}for(let P=F.outS-F.blend*.9;P<F.outS+30;P+=9){let nt=S.idx(P),ct=S.hw+.9+Math.max(0,Math.min(1,(F.outS-P)/F.blend))*1.5;at.push({type:"cone",x:c[nt]+T[nt]*ct,z:l[nt]+x[nt]*ct})}for(let P=0;P<a;P++){let nt=S.vmax[P];if(nt>75&&nt-S.vmax[(P+40)%a]>25&&S.vmax[(P-1+a)%a]>=nt-.01&&nt-S.vmax[(P+8)%a]>1){let ct=E[(P+40)%a]>0?-1:1;for(let X of[150,100,50]){let rt=S.idx(P*o+120-X),mt=ct*(S.hw+2.6);at.push({type:"board",n:X,x:c[rt]+T[rt]*mt,z:l[rt]+x[rt]*mt,h:S.head(rt)+Math.PI})}P+=40}}return S.props=at,S.startIdx=0,S}function Xv(n,t,e,i){let s=1e9,r=n.cell,a=Math.floor(t/r),o=Math.floor(e/r);for(let c=-1;c<=1;c++)for(let l=-1;l<=1;l++){let h=n.grid.get(a+c+","+(o+l));if(h)for(let u of h){let f=Math.abs(u-i);if(f=Math.min(f,n.N-f),f*n.ds<60)continue;let d=Math.hypot(n.px[u]-t,n.pz[u]-e)-n.hw;d<s&&(s=d)}}return s}function Wd(n,t,e){let i=Float64Array.from(n);for(let s=0;s<e;s++){let r=1e9;for(let a=-t;a<=t;a++)r=Math.min(r,i[(s+a+e)%e]);n[s]=r}}function Jl(n,t,e,i,s){let r=(i-s+e)%e,a=(i+s)%e,o=n[i]-n[r],c=t[i]-t[r],l=n[a]-n[i],h=t[a]-t[i],u=o*h-c*l,f=Math.hypot(o,c),d=Math.hypot(l,h),m=Math.hypot(n[a]-n[r],t[a]-t[r]);return-2*u/(f*d*m||1)}function qv(n){let{N:t,px:e,pz:i,nx:s,nz:r}=n,a=n.hw-1.6,o=new Float64Array(t),c=new Float64Array(t),l=new Float64Array(t);for(let h=0;h<1400;h++){for(let u=0;u<t;u++)c[u]=e[u]+s[u]*o[u],l[u]=i[u]+r[u]*o[u];for(let u=0;u<t;u++){let f=(u-2+t)%t,d=(u+2)%t,m=(c[f]+c[d])/2,v=(l[f]+l[d])/2,p=(m-e[u])*s[u]+(v-i[u])*r[u];o[u]+=(p-o[u])*.55,o[u]>a?o[u]=a:o[u]<-a&&(o[u]=-a)}}n.line=o,n.lx=new Float64Array(t),n.lz=new Float64Array(t);for(let h=0;h<t;h++)n.lx[h]=e[h]+s[h]*o[h],n.lz[h]=i[h]+r[h]*o[h]}function Yv(n){let{N:t,ds:e}=n,i=9.81,s=1.5,r=.5*1.225*bt.ClA/bt.mass,a=.5*1.225*bt.CdA/bt.mass,o=new Float64Array(t),c=new Float64Array(t),l=new Float64Array(t);for(let u=0;u<t;u++)c[u]=Math.abs(Jl(n.lx,n.lz,t,u,5));for(let u=0;u<t;u++)l[u]=Math.abs(Jl(n.px,n.pz,t,u,5));let h=(u,f)=>{let d=new Float64Array(t);for(let m=0;m<t;m++){let v=0;for(let g=-2;g<=2;g++)v=Math.max(v,u[(m+g+t)%t]);let p=v-f*r;d[m]=p<=0?95:Math.min(95,Math.sqrt(f*i/p))}for(let m=0;m<2;m++)for(let v=t-1;v>=0;v--){let p=d[(v+1)%t],g=1.25*(i+r*p*p)+a*p*p,y=Math.sqrt(p*p+2*g*e);d[v]>y&&(d[v]=y)}return d};n.vmax=h(c,s),n.vsafe=h(l,1.32)}function Bh(n,t,e,i=-1){let{N:s,px:r,pz:a}=n,o=-1,c=1e18;if(i<0)for(let T=0;T<s;T++){let x=(r[T]-t)**2+(a[T]-e)**2;x<c&&(c=x,o=T)}else{for(let T=-25;T<=25;T++){let x=(i+T+s)%s,E=(r[x]-t)**2+(a[x]-e)**2;E<c&&(c=E,o=x)}if(c>3600)return Bh(n,t,e,-1)}let l=o,h=(l+1)%s,u=(l-1+s)%s,f=l,d=0,m=(T,x)=>{let E=r[x]-r[T],D=a[x]-a[T];return((t-r[T])*E+(e-a[T])*D)/(E*E+D*D)},v=m(l,h);v>=0?(f=l,d=Math.min(1,v)):(f=u,d=Math.max(0,Math.min(1,m(u,l))));let p=(f+1)%s,g=r[f]+(r[p]-r[f])*d,y=a[f]+(a[p]-a[f])*d,S=n.nx[f]+(n.nx[p]-n.nx[f])*d,M=n.nz[f]+(n.nz[p]-n.nz[f])*d,A=(t-g)*S+(e-y)*M;return{i:o,seg:f,f:d,s:(f+d)*n.ds,d:A}}function hn(n,t,e){let i=(e/n.ds%n.N+n.N)%n.N,s=Math.floor(i),r=i-s;return t[s]+(t[(s+1)%n.N]-t[s])*r}function Xe(n,t,e=0){let i=(t/n.ds%n.N+n.N)%n.N,s=Math.floor(i),r=i-s,a=(s+1)%n.N,o=n.px[s]+(n.px[a]-n.px[s])*r,c=n.pz[s]+(n.pz[a]-n.pz[s])*r,l=n.nx[s]+(n.nx[a]-n.nx[s])*r,h=n.nz[s]+(n.nz[a]-n.nz[s])*r;return[o+l*e,c+h*e]}function ii(n,t){return Math.atan2(hn(n,n.tx,t),hn(n,n.tz,t))}var Zv=1/400,$v=[[bt.a+.2,.85],[bt.a+.2,-.85],[-bt.b,.85],[-bt.b,-.85]];function Ri(n,t){let e=Bh(n,t.x,t.z,t.ti??-1);return t.ti=e.i,t.ts=e.s,t.td=e.d,e}function zh(n,t,e){let i=Math.sin(t.h),s=Math.cos(t.h),r=Math.cos(t.h),a=-Math.sin(t.h),o=n.nx[e.i],c=n.nz[e.i];for(let l=0;l<4;l++){let[h,u]=$v[l],f=i*h+r*u,d=s*h+a*u,m=e.d+f*o+d*c,v=Math.abs(m),p=0;v>n.hw&&((m>0?n.kerbL[e.i]:n.kerbR[e.i])&&v<n.hw+1.6?p=1:v<n.hw+1.6?p=0:p=(m>0?n.gravL[e.i]:n.gravR[e.i])?3:2),t.surf[l]=p}}function qd(n,t,e,i){let s=Math.max(1,Math.round(i/Zv)),r=i/s,a=0;for(let o=0;o<s;o++)if(Od(t,e,r),o%4===3||o===s-1){let c=Ri(n,t);o===s-1&&zh(n,t,c);let l=hn(n,n.wallL,c.s)-1.1,h=hn(n,n.wallR,c.s)-1.1,u=null,f=0;if(c.d>l?(u=[-n.nx[c.i],-n.nz[c.i]],f=c.d-l):c.d<-h&&(u=[n.nx[c.i],n.nz[c.i]],f=-h-c.d),u)if(f>3||t.ghost)t.x+=u[0]*f,t.z+=u[1]*f;else{let d=Hd(t,u[0],u[1]),m=zd(t,u[0],u[1],f);if(m>0){a=Math.max(a,m);let v=Oh(t,d[0],d[1],m,t.dmgScale??1);v.length&&(t.broke||(t.broke=[])).push(...v),t.lastHit={x:t.x-u[0],z:t.z-u[1],imp:m}}}}return a}function kh(n,t){t.lap==null&&(t.lap=0,t.prevS=t.ts,t.half=!1);let e=t.ts;e>n.L*.4&&e<n.L*.6&&(t.half=!0);let i=!1;return t.prevS>n.L*.8&&e<n.L*.2?(t.half||t.lap===0&&t.gridLap)&&(t.lap++,i=!0,t.half=!1,t.gridLap=!1):t.prevS<n.L*.2&&e>n.L*.8&&!t.half&&(t.lap--,t.half=!0),t.prevS=e,t.prog=(t.lap-1)*n.L+e,i}function Yd(n,t,e,i){if(n.ghost>0||t.ghost>0)return 0;let s=t.x-n.x,r=t.z-n.z;if(s*s+r*r>49)return 0;let a=.95,o=null;for(let p of[1.45,-1.3])for(let g of[1.45,-1.3]){let y=n.x+Math.sin(n.h)*p,S=n.z+Math.cos(n.h)*p,M=t.x+Math.sin(t.h)*g,A=t.z+Math.cos(t.h)*g,T=M-y,x=A-S,E=Math.hypot(T,x);E<2*a&&(!o||E<o.d)&&(o={d:E,nx:T/(E||1),nz:x/(E||1),oa:p,ob:g})}if(!o)return 0;let c=2*a-o.d,{nx:l,nz:h}=o,u=Ki(n),f=Ki(t),d=(f[0]-u[0])*l+(f[1]-u[1])*h,m=e&&i?.5:1,v=d<0?-d*.6*m:0;if(d<-4)for(let[p,g,y,S]of[[n,e,o.oa,1],[t,i,o.ob,-1]]){if(!g)continue;let M=l*S,A=h*S,T=M*Math.cos(p.h)-A*Math.sin(p.h),x=y>0?Math.abs(T)>.7?1.98:2.6:Math.abs(T)>.7?-1.62:-2.5,E=Oh(p,x,T,-d*.8,p.dmgScale??1);E.length&&(p.broke||(p.broke=[])).push(...E)}return e&&(n.x-=l*c*(i?.5:1),n.z-=h*c*(i?.5:1),Kl(n,u[0]-l*v,u[1]-h*v)),i&&(t.x+=l*c*(e?.5:1),t.z+=h*c*(e?.5:1),Kl(t,f[0]+l*v,f[1]+h*v)),-Math.min(0,d)}function Ki(n){let t=Math.sin(n.h),e=Math.cos(n.h),i=Math.cos(n.h),s=-Math.sin(n.h);return[n.vx*t+n.vy*i,n.vx*e+n.vy*s]}function Kl(n,t,e){let i=Math.sin(n.h),s=Math.cos(n.h),r=Math.cos(n.h),a=-Math.sin(n.h),o=t*i+e*s,c=o-n.vx;n.vx=o,n.vy=t*r+e*a;for(let l=0;l<4;l++)n.w[l]+=c/bt.R}function Hh(n,t){let e=n.L-14-t*9,i=(t%2===0?1:-1)*3.2;return{s:e,off:i}}function Zd(n,t,e){let i=t.vx;if(t.bAssist=!1,i<10)return;let s=Math.min(hn(n,n.vsafe,t.ts+i*.25),hn(n,n.vsafe,t.ts+i*.5)+4);if(i>s+1.2){let r=Math.min(1,(i-s)/4+.35);e.brk<r&&(e.brk=r,t.bAssist=!0),e.thr=0}else i>s-1&&e.thr>.6&&(e.thr=.6)}function Ql(n){return{skill:n,off:0,offT:0,mistake:0}}function $d(n,t,e,i,s){let r=t.vx,a=t.ts??0,o=0,c=1e9;for(let $ of i){if($===t||$.prog==null||t.prog==null||$.limiter)continue;let G=$.prog-t.prog;G<-n.L/2&&(G+=n.L),G>n.L/2&&(G-=n.L);let ut=($.td??0)-(t.td??0);if(G>0&&G<30){if(Math.abs(ut)<2.8){let et=$.vx??qn($);r>et-1.5&&(o=($.td??0)>0?-3.6:3.6,G<14&&(c=Math.min(c,et+Math.max(0,G-7)*.4)))}}else G>-6&&G<=0&&Math.abs(ut)<2.6&&(o=ut>0?-2.5:2.5)}e.off+=(o-e.off)*Math.min(1,s*1.2);let l=7+Math.max(0,r)*.34,h=a+l,u=hn(n,n.line,h)+e.off,f=n.hw-1.4,[d,m]=Xe(n,h,Math.max(-f,Math.min(f,u))),v=d-t.x,p=m-t.z,g=Math.sin(t.h),y=Math.cos(t.h),S=Math.cos(t.h),M=-Math.sin(t.h),A=v*g+p*y,T=v*S+p*M,x=A*A+T*T,E=Math.atan(bt.wb*2*T/x)-t.r*.04;r<0&&(E=-E);let D=t.dmg||[],C=1-.1*Math.min(1,((D[0]||0)+(D[1]||0))/2)-.12*Math.min(1,D[3]||0),U=hn(n,n.vmax,a+Math.max(0,r)*.18)*e.skill*C;U=Math.min(U,c);let B=0,W=0;r>U+.8?W=Math.min(1,(r-U)/5+.25):B=Math.min(1,Math.max(.15,(U-r)/2.5+.6));let L=Math.abs(t.vy)/Math.max(5,Math.abs(r));L>.08&&(B*=Math.max(.1,1-(L-.08)*8));let F=Math.max(t.use[2],t.use[3]);return F>.9&&(B*=Math.max(.3,1-(F-.9)*3)),r>8&&(E+=Math.atan2(t.vy,r)*.6),t.stuck>1.5?{thr:0,brk:1,steer:-E}:{thr:B,brk:W,steer:E}}var Jd={day:{top:"#2f7fe0",hor:"#d6ecff",fog:"#cfe2f3",fogN:380,fogF:2600,sun:"#fff1dc",sunI:2.7,sunDir:[.45,.8,.35],hemiS:"#cfe6ff",hemiG:"#5d7a3a",hemiI:.9,grass:["#4f8a2c","#5d9a35"],water:!0,palms:!0,clouds:!0,exposure:.95,bloom:.12},sunset:{top:"#3d5b9e",hor:"#ffb079",fog:"#e0b39a",fogN:350,fogF:2400,sun:"#ffb27a",sunI:2.3,sunDir:[-.8,.32,.5],hemiS:"#ffc9a8",hemiG:"#4a5a2c",hemiI:.75,grass:["#557c2a","#62892f"],water:!1,clouds:!0,exposure:1,bloom:.2},night:{top:"#050913",hor:"#1a2440",fog:"#101a30",fogN:260,fogF:1600,sun:"#b9cbff",sunI:.9,sunDir:[.3,.85,-.4],hemiS:"#8ea6e0",hemiG:"#2a2a35",hemiI:.85,grass:["#2a2c31","#303237"],water:!0,city:!0,stars:!0,exposure:1.15,bloom:.85}};function vn(n,t,e,i=!0){let s=document.createElement("canvas");s.width=n,s.height=t,e(s.getContext("2d"),n,t);let r=new Vn(s);return r.colorSpace=ke,i&&(r.wrapS=r.wrapT=zi),r.anisotropy=8,r}function Aa(n,t,e,i,s,r=9e3,a=2){n.fillStyle=i,n.fillRect(0,0,t,e);for(let o=0;o<r;o++){let c=(Math.random()-.5)*s;n.fillStyle=c>0?`rgba(255,255,255,${c})`:`rgba(0,0,0,${-c})`,n.fillRect(Math.random()*t,Math.random()*e,a*Math.random()+.6,a*Math.random()+.6)}}function In(n,t,e,i,s,{vLen:r=10,filter:a=null,colorFn:o=null}={}){let c=[],l=[],h=[],u=n.N,f=(v,p)=>[n.px[v]+n.nx[v]*p,n.pz[v]+n.nz[v]*p];for(let v=0;v<u;v++){if(a&&!a(v))continue;let p=(v+1)%u,g=f(v,t(v)),y=f(v,e(v)),S=f(p,t(p)),M=f(p,e(p)),A=v*n.ds/r,T=(v+1)*n.ds/r,x=typeof i=="function"?i(0):i,E=typeof i=="function"?i(1):i;if(c.push(g[0],x,g[1],S[0],x,S[1],y[0],E,y[1],y[0],E,y[1],S[0],x,S[1],M[0],E,M[1]),l.push(0,A,0,T,1,A,1,A,0,T,1,T),o){let D=o(v);for(let C=0;C<6;C++)h.push(D.r,D.g,D.b)}}let d=new we;d.setAttribute("position",new $t(c,3)),d.setAttribute("uv",new $t(l,2)),o&&d.setAttribute("color",new $t(h,3)),d.computeVertexNormals();let m=new Ht(d,s);return m.receiveShadow=!0,m}function _s(n,t,e,i,s,{uLen:r=24,filter:a=null}={}){let o=[],c=[],l=0;for(let f=0;f<n.N;f++){let d=(f+1)%n.N,m=n.px[f]+n.nx[f]*t(f),v=n.pz[f]+n.nz[f]*t(f),p=n.px[d]+n.nx[d]*t(d),g=n.pz[d]+n.nz[d]*t(d),y=Math.hypot(p-m,g-v),S=l+y/r;(!a||a(f))&&(o.push(m,e,v,p,e,g,m,i,v,p,e,g,p,i,g,m,i,v),c.push(l,0,S,0,l,1,S,0,S,1,l,1)),l=S}let h=new we;h.setAttribute("position",new $t(o,3)),h.setAttribute("uv",new $t(c,2)),h.computeVertexNormals();let u=new Ht(h,s);return u.castShadow=!0,u.receiveShadow=!0,u}var Jv=["CLAUDE ARCADE","TURBO COLA","NAFTA SUR","BAH\xCDA AZUL","RAYO TELECOM","PANCHO GP","OLA MOTORS","MATE POWER"],Gh=[["#d7141a","#fff"],["#111","#ffd21a"],["#0b3d91","#fff"],["#00a6a6","#fff"],["#ff7a00","#111"],["#fff","#d7141a"],["#1b1b1b","#4fc3ff"],["#0a6b47","#fff"]];function Qd(n,t){let e=Jd[n.def.theme]||Jd.day,i=new ki;t.toneMappingExposure=e.exposure,i.fog=new Ir(e.fog,e.fogN,e.fogF);let s=n.pit,r=n.rel,a=I=>{let q=r(I*n.ds);return q>s.inS-10&&q<s.outS+10},o=new Oe({side:en,depthWrite:!1,fog:!1,uniforms:{top:{value:new kt(e.top)},hor:{value:new kt(e.hor)},sunDir:{value:new O(...e.sunDir).normalize()},sunC:{value:new kt(e.sun)},stars:{value:e.stars?1:0}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform vec3 top; uniform vec3 hor; uniform vec3 sunDir; uniform vec3 sunC; uniform float stars; varying vec3 vP;
      float h(vec3 p){ return fract(sin(dot(p, vec3(12.9898,78.233,45.164))) * 43758.5453); }
      void main(){ float y = clamp(vP.y, -0.1, 1.0); vec3 c = mix(hor, top, pow(max(y,0.0), 0.55));
      float s = max(dot(normalize(vP), sunDir), 0.0); c += sunC * (pow(s, 600.0) * 2.0 + pow(s, 16.0) * 0.12);
      if (stars > 0.5 && y > 0.05) { vec3 q = floor(vP * 420.0); float r = h(q); c += vec3(step(0.9975, r) * (0.6 + 0.4 * h(q + 1.0))) * smoothstep(0.05, 0.3, y); }
      gl_FragColor = vec4(c, 1.0); }`}),c=new Ht(new jn(4e3,32,16),o);c.frustumCulled=!1,i.add(c);{let I=new ki;I.add(new Ht(new jn(100,32,16),o.clone()));let q=new Ht(new ls(90,24),new ze({color:e.city?"#15161b":e.grass[0]}));if(q.rotation.x=-Math.PI/2,q.position.y=-2,I.add(q),e.city)for(let b=0;b<14;b++){let _=new Ht(new We(6,30,3),new ze({color:"#ffd9a0"})),N=b/14*Math.PI*2;_.position.set(Math.cos(N)*80,6,Math.sin(N)*80),_.lookAt(0,6,0),I.add(_)}let j=new ir(t);i.environment=j.fromScene(I,.04).texture,i.environmentIntensity=e.city?.6:.45,j.dispose()}i.add(new ia(e.hemiS,e.hemiG,e.hemiI));let l=new ra(e.sun,e.sunI),h=new O(...e.sunDir).normalize();l.castShadow=!0,l.shadow.mapSize.set(2048,2048);let u=l.shadow.camera;u.left=-70,u.right=70,u.top=70,u.bottom=-70,u.near=1,u.far=400,l.shadow.bias=-4e-4,l.shadow.normalBias=.04,i.add(l,l.target);let f=1e9,d=-1e9,m=1e9,v=-1e9;for(let I=0;I<n.N;I++)f=Math.min(f,n.px[I]),d=Math.max(d,n.px[I]),m=Math.min(m,n.pz[I]),v=Math.max(v,n.pz[I]);let p=(f+d)/2,g=(m+v)/2,y=Math.max(d-f,v-m),S=e.city?vn(512,512,(I,q,j)=>{Aa(I,q,j,"#2b2d33",.12,2e4,3),I.strokeStyle="rgba(255,255,255,0.05)",I.lineWidth=3;for(let b=0;b<=4;b++)I.beginPath(),I.moveTo(b*q/4,0),I.lineTo(b*q/4,j),I.stroke(),I.beginPath(),I.moveTo(0,b*j/4),I.lineTo(q,b*j/4),I.stroke()}):vn(512,512,(I,q,j)=>{Aa(I,q,j,e.grass[0],.16,26e3,3);for(let b=0;b<8;b++)I.fillStyle=b%2?"rgba(255,255,255,0.035)":"rgba(0,0,0,0.03)",I.fillRect(0,b*j/8,q,j/8)});S.repeat.set(y/12,y/12);let M=y+700,A=new Ht(new Fe(M,M),new ie({map:S,roughness:1}));A.rotation.x=-Math.PI/2,A.position.set(p,-.03,g),A.receiveShadow=!0,i.add(A);let T=null;if(e.water){if(!e.city){let I=new Ht(new Fe(M+120,M+120),new ie({color:"#e7d3a1",roughness:1}));I.rotation.x=-Math.PI/2,I.position.set(p,-.6,g),i.add(I)}T=new Ht(new Fe(9e3,9e3),new Si({color:e.city?"#0b1730":"#1f7fb8",roughness:.08,metalness:.1,clearcoat:1})),T.rotation.x=-Math.PI/2,T.position.set(p,-1.2,g),i.add(T)}else{let I=new Ht(new Fe(9e3,9e3),new ie({color:e.grass[0],roughness:1}));I.rotation.x=-Math.PI/2,I.position.set(p,-.5,g),i.add(I)}if(!e.city){let I=new Mi(1,1,7,1),q=new ie({color:e.water?"#5c7f6a":"#5b4f6b",roughness:1,flatShading:!0}),j=46,b=new Sn(I,q,j),_=new Be;for(let N=0;N<j;N++){let Y=N/j*Math.PI*2+Math.random()*.1,H=y*.9+900+Math.random()*500,it=180+Math.random()*(e.water?260:520),ot=260+Math.random()*300;_.position.set(p+Math.cos(Y)*H,it/2-5,g+Math.sin(Y)*H),_.scale.set(ot,it,ot),_.rotation.y=Math.random()*3,_.updateMatrix(),b.setMatrixAt(N,_.matrix)}i.add(b)}if(e.clouds){let I=vn(128,128,(j,b,_)=>{for(let N=0;N<14;N++){let Y=j.createRadialGradient(20+Math.random()*88,50+Math.random()*30,0,64,64,30+Math.random()*20);Y.addColorStop(0,"rgba(255,255,255,0.55)"),Y.addColorStop(1,"rgba(255,255,255,0)"),j.fillStyle=Y,j.fillRect(0,0,b,_)}},!1),q=new Ys({map:I,transparent:!0,depthWrite:!1,fog:!1,color:e.water?"#ffffff":"#ffd0b0"});for(let j=0;j<26;j++){let b=new Ur(q),_=Math.random()*Math.PI*2,N=900+Math.random()*1600;b.position.set(p+Math.cos(_)*N,260+Math.random()*280,g+Math.sin(_)*N);let Y=400+Math.random()*500;b.scale.set(Y,Y*.45,1),i.add(b)}}let x=vn(256,512,(I,q,j)=>{Aa(I,q,j,e.city?"#34363b":"#3d3f44",.1,26e3,1.6);for(let b=0;b<40;b++)I.fillStyle="rgba(0,0,0,0.05)",I.fillRect(Math.random()*q,Math.random()*j,2+Math.random()*40,1+Math.random()*3);I.fillStyle="#f2f2f2",I.fillRect(q*.012,0,q*.022,j),I.fillRect(q*.966,0,q*.022,j)}),E=new ie({map:x,roughness:.78,metalness:0,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});i.add(In(n,()=>-n.hw,()=>n.hw,0,E,{vLen:14}));let D=new ze({color:"#000",transparent:!0,opacity:.16,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});i.add(In(n,I=>n.line[I]-1.1,I=>n.line[I]+1.1,.004,D));let C=new ie({color:e.city?"#3b3c41":"#4a4b50",roughness:.9,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});i.add(In(n,()=>n.hw,I=>Math.min(n.wallL[I],n.hw+1.6),-.005,C,{filter:I=>!n.kerbL[I]})),i.add(In(n,I=>-Math.min(n.wallR[I],n.hw+1.6),()=>-n.hw,-.005,C,{filter:I=>!n.kerbR[I]})),n.street&&(i.add(In(n,()=>n.hw+1.5,I=>n.wallL[I],-.006,C,{filter:I=>n.wallL[I]>n.hw+1.6&&!a(I)})),i.add(In(n,I=>-n.wallR[I],()=>-n.hw-1.5,-.006,C,{filter:I=>n.wallR[I]>n.hw+1.6})));let U=new kt("#d8202a"),B=new kt("#f4f4f4"),W=new ie({vertexColors:!0,roughness:.55}),L=I=>Math.floor(I*n.ds/3)%2?U:B;i.add(In(n,()=>n.hw-.05,()=>n.hw+1.6,I=>I?.015:.05,W,{filter:I=>n.kerbL[I],colorFn:L})),i.add(In(n,()=>-n.hw-1.6,()=>-n.hw+.05,I=>I?.05:.015,W,{filter:I=>n.kerbR[I],colorFn:L}));let F=vn(256,256,(I,q,j)=>Aa(I,q,j,"#cdb98f",.3,2e4,2.5)),$=new ie({map:F,roughness:1});i.add(In(n,()=>n.hw+1.6,I=>n.wallL[I]-1.2,-.012,$,{filter:I=>n.gravL[I]&&n.wallL[I]>n.hw+3,vLen:8})),i.add(In(n,I=>-n.wallR[I]+1.2,()=>-n.hw-1.6,-.012,$,{filter:I=>n.gravR[I]&&n.wallR[I]>n.hw+3,vLen:8}));let G=vn(2048,64,(I,q,j)=>{for(let _=0;_<8;_++){let[N,Y]=Gh[_%Gh.length];I.fillStyle=N,I.fillRect(_*q/8,0,q/8,j),I.fillStyle=Y,I.font='italic 900 34px "Titillium Web", Arial, sans-serif',I.textAlign="center",I.textBaseline="middle",I.fillText(Jv[_],_*q/8+q/8/2,j/2+2)}});G.wrapT=Dn;let ut=new ie({map:G,roughness:.6,side:He,emissive:e.city?"#ffffff":"#000000",emissiveMap:e.city?G:null,emissiveIntensity:e.city?.35:0}),et=I=>{let q=r(I*n.ds);return q>s.inS-10&&q<s.outS+10&&(q<s.inS+s.blend*.85||q>s.outS-s.blend*.85)},at=I=>{let q=r(I*n.ds);return q>=s.inS+s.blend*.85&&q<=s.outS-s.blend*.85};i.add(_s(n,I=>n.wallL[I],0,1.1,ut,{uLen:120,filter:I=>!et(I)&&!at(I)})),i.add(_s(n,I=>-n.wallR[I],0,1.1,ut,{uLen:120}));let P=vn(64,64,(I,q,j)=>{I.clearRect(0,0,q,j),I.strokeStyle="rgba(210,215,220,0.9)",I.lineWidth=2,I.beginPath(),I.moveTo(0,0),I.lineTo(q,j),I.moveTo(q,0),I.lineTo(0,j),I.stroke(),I.fillStyle="#8b9096",I.fillRect(0,0,4,j)});P.repeat.set(1,3);let nt=new ie({map:P,transparent:!0,alphaTest:.4,side:He,roughness:.6});i.add(_s(n,I=>n.wallL[I]+.1,1.1,3.6,nt,{uLen:3,filter:I=>n.wallL[I]<n.hw+30&&!et(I)&&!at(I)})),i.add(_s(n,I=>-n.wallR[I]-.1,1.1,3.6,nt,{uLen:3,filter:I=>n.wallR[I]<n.hw+30}));let ct=new ie({map:vn(256,256,(I,q,j)=>Aa(I,q,j,"#45474d",.08,12e3,1.5)),roughness:.85,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),X=I=>I*n.ds,rt=I=>{let q=r(X(I));return q>s.inS&&q<s.outS},mt=I=>s.offsetAt(X(I),n.hw-1);i.add(In(n,I=>mt(I)-s.width/2,I=>mt(I)+s.width/2,.006,ct,{filter:rt}));let Nt=new ze({color:"#f2f2f2",polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}),At=new ze({color:"#ffd21a",polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3});i.add(In(n,I=>mt(I)+s.width/2-.25,I=>mt(I)+s.width/2-.1,.012,Nt,{filter:rt})),i.add(In(n,I=>mt(I)-s.width/2+.1,I=>mt(I)-s.width/2+.3,.012,At,{filter:rt}));let Vt=new ie({color:"#d9dbe0",roughness:.8});i.add(_s(n,()=>s.wall,0,1,Vt,{filter:at})),i.add(_s(n,()=>s.wall+.6,0,1,Vt,{filter:at})),i.add(_s(n,()=>s.wall+.3,1,3.2,nt,{uLen:3,filter:at}));let _e=vn(1024,128,(I,q,j)=>{I.fillStyle="#eef0f3",I.fillRect(0,0,q,j);for(let b=0;b<8;b++)I.fillStyle="#23262c",I.fillRect(b*q/8+10,34,q/8-20,j-34),I.fillStyle=Gh[b%8][0],I.fillRect(b*q/8+10,10,q/8-20,18)},!1),Wt=new ie({map:_e,roughness:.7,emissive:e.city?"#ffffff":"#000",emissiveMap:e.city?_e:null,emissiveIntensity:e.city?.25:0}),se=new ie({color:"#eef0f3",roughness:.7}),re=[];{let I=s.boxes[0]-10,q=s.boxes[s.boxes.length-1]+10,j=q-I,b=(I+q)/2,[_,N]=Xe(n,b,s.lane+s.width/2+7.5),Y=new Ee;Y.position.set(_,0,N),Y.rotation.y=ii(n,b),i.add(Y);let H=new Ht(new We(14,8,j),se);H.position.set(0,4,0),H.castShadow=!0,H.receiveShadow=!0,Y.add(H);let it=new Ht(new Fe(j,7),Wt);it.position.set(-7.02,3.5,0),it.rotation.y=-Math.PI/2,Y.add(it);let ot=new Ht(new Fe(j*.6,1.6),new ze({map:vn(1024,64,(V,J,ht)=>{V.fillStyle="#15151e",V.fillRect(0,0,J,ht),V.fillStyle="#fff",V.font='italic 900 44px "Titillium Web", Arial',V.textAlign="center",V.textBaseline="middle",V.fillText("PIT LANE \xB7 "+n.def.name.toUpperCase(),J/2,ht/2+2)},!1)}));ot.position.set(-7.05,8.6,0),ot.rotation.y=-Math.PI/2,Y.add(ot);for(let V of s.boxes){let[J,ht]=Xe(n,V,s.lane+1.2),R=new Ht(new Fe(2.6,6),new ze({color:"#f2f2f2",transparent:!0,opacity:.5,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}));R.rotation.x=-Math.PI/2;let tt=new Ee;tt.position.set(J,.013,ht),tt.rotation.y=ii(n,V),tt.add(R),i.add(tt),re.push([J,ht])}}let lt=new Ee;lt.visible=!1,i.add(lt);{let I=new ie({color:"#d7141a",roughness:.7}),q=new ie({color:"#ffffff",roughness:.3}),j=[[1.45,2],[-1.45,2],[1.5,-1.6],[-1.5,-1.6],[0,3.8],[2.4,.2]];for(let[b,_]of j){let N=new Ee;N.position.set(b,0,_);let Y=new Ht(new Vr(.22,.6,4,8),I);Y.position.y=.55,Y.castShadow=!0,N.add(Y);let H=new Ht(new jn(.15,10,8),q);H.position.y=1.15,N.add(H),lt.add(N)}}let Et=vn(256,32,I=>{for(let q=0;q<32;q++)for(let j=0;j<4;j++)I.fillStyle=(q+j)%2?"#111":"#fff",I.fillRect(q*8,j*8,8,8)},!1);{let I=new Ht(new Fe(n.width,1.6),new ie({map:Et,roughness:.7,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})),q=new Ee;q.position.set(n.px[0],.012,n.pz[0]),q.rotation.y=n.head(0),I.rotation.set(-Math.PI/2,0,0),q.add(I),i.add(q)}let yt=new ze({color:"#f2f2f2",polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});for(let I=0;I<8;I++){let q=n.L-14-I*9+2.6,j=(I%2===0?1:-1)*3.2,[b,_]=Xe(n,q,j),N=new Ee;N.position.set(b,.013,_),N.rotation.y=ii(n,q);let Y=new Ht(new Fe(2.4,.2),yt);Y.rotation.x=-Math.PI/2,N.add(Y);for(let H of[1.1,-1.1]){let it=new Ht(new Fe(.2,1.4),yt);it.rotation.x=-Math.PI/2,it.position.set(H,0,-.6),N.add(it)}i.add(N)}let dt=[];{let q=n.head(2),[j,b]=Xe(n,6,0),_=new Ee;_.position.set(j,0,b),_.rotation.y=q,i.add(_);let N=new ie({color:"#2a2d33",metalness:.6,roughness:.4}),Y=Math.min(hn(n,n.wallL,6),s.wall),H=hn(n,n.wallR,6),it=Y+H;for(let R of[Y,-H]){let tt=new Ht(new We(.5,7.6,.5),N);tt.position.set(R,3.8,0),tt.castShadow=!0,_.add(tt)}let ot=new Ht(new We(it,.7,.6),N);ot.position.set((Y-H)/2,7.2,0),ot.castShadow=!0,_.add(ot);let V=new Ht(new Fe(it*.9,1.4),new ze({map:vn(1024,96,(R,tt,Q)=>{R.fillStyle="#d7141a",R.fillRect(0,0,tt,Q),R.fillStyle="#fff",R.font='italic 900 64px "Titillium Web", Arial',R.textAlign="center",R.textBaseline="middle",R.fillText("F1 CLASH  \xB7  "+n.def.name.toUpperCase(),tt/2,Q/2+3)},!1),side:He}));V.position.set((Y-H)/2,8.4,-.05),V.rotation.y=Math.PI,_.add(V);let J=new Ht(new We(3.6,1.1,.5),new ie({color:"#0d0d0f",roughness:.6}));J.position.set(0,6.3,-.2),_.add(J);let ht=new jn(.2,14,10);for(let R=0;R<5;R++){let tt=new ie({color:"#2a0505",emissive:"#ff1010",emissiveIntensity:0});for(let Q of[6.55,6.05]){let gt=new Ht(ht,tt);gt.position.set(-1.4+R*.7,Q,-.45),_.add(gt)}dt.push(tt)}}let Mt=[],Yt=new ie({color:"#cfd3d8",roughness:.8}),Ot=new ie({color:"#d7141a",roughness:.6,side:He}),jt=[],Kt=(I,q,j,b)=>{let _=n.idx(I),N=q>0?n.wallL[_]:n.wallR[_],[Y,H]=Xe(n,I,q*(N+j));b(Y,H,n.head(_),_)};for(let I=n.straight.a+30;I<=n.straight.b-30;I+=32)Kt(I,-1,9,(q,j,b)=>{let _=new Ee;_.position.set(q,0,j),_.rotation.y=b,i.add(_);for(let Y=0;Y<5;Y++){let H=new Ht(new We(30,1.2+Y*1.2,2.6),Yt);H.position.set(-Y*2.4-1.3,(1.2+Y*1.2)/2,0),H.rotation.y=Math.PI/2,H.castShadow=!0,H.receiveShadow=!0,_.add(H)}let N=new Ht(new Fe(14,30),Ot);N.rotation.set(-Math.PI/2+.12,0,Math.PI/2),N.position.set(-6,11,0),_.add(N);for(let Y=0;Y<5;Y++)for(let H=0;H<22;H++){if(Math.random()<.15)continue;let it=new O(-Y*2.4-.8,1.2+Y*1.2+.45,-14+H*1.3+Math.random()*.3);it.applyAxisAngle(new O(0,1,0),b),Mt.push([q+it.x,it.y,j+it.z])}jt.push([q,j,28])});{let I=s.boxes[0],q=s.boxes[s.boxes.length-1];for(let j=I;j<=q;j+=20){let[b,_]=Xe(n,j,s.lane+10);jt.push([b,_,22])}}let ee=null;if(Mt.length){let I=new We(.5,.8,.4);ee=new Sn(I,new ie({roughness:.9}),Mt.length);let q=new Be,j=new kt,b=["#d7141a","#ffd21a","#1d6bff","#ffffff","#ff7a00","#0a6b47","#ff4fa3","#222","#4fc3ff"];Mt.forEach((_,N)=>{q.position.set(_[0],_[1],_[2]),q.updateMatrix(),ee.setMatrixAt(N,q.matrix),ee.setColorAt(N,j.set(b[N%b.length]))}),ee.userData.pos=Mt,i.add(ee)}let z=[];{let I=new Fe(1.4,.9);for(let q=150;q<n.L-60;q+=380){let j=n.idx(q),b=r(q);if(b>s.inS-20&&b<s.outS+20)continue;let _=n.curv[j]>0?-1:1,N=_>0?n.wallL[j]:n.wallR[j],[Y,H]=Xe(n,q,_*(N-.15)),it=new ie({color:"#111",emissive:"#ffd21a",emissiveIntensity:0}),ot=new Ht(I,it);ot.position.set(Y,2.1,H),ot.rotation.y=n.head(j)+Math.PI,i.add(ot);let V=new Ht(new We(.12,2,.12),Yt);V.position.set(Y,1,H),i.add(V),z.push({s:q,m:it})}}let Re=(I,q,j)=>{let b=n.cell,_=Math.floor(I/b),N=Math.floor(q/b);for(let Y=-2;Y<=2;Y++)for(let H=-2;H<=2;H++){let it=n.grid.get(_+Y+","+(N+H));if(it)for(let ot of it){let V=Math.max(n.wallL[ot],n.wallR[ot],a(ot)?s.lane+24:0);if(Math.hypot(n.px[ot]-I,n.pz[ot]-q)<V+j)return!0}}return!1},Pt=new Be,ne=new kt;if(e.city){let I=vn(128,256,(V,J,ht)=>{V.fillStyle="#14161c",V.fillRect(0,0,J,ht);for(let R=0;R<32;R++)for(let tt=0;tt<8;tt++){let Q=Math.random()<.42;V.fillStyle=Q?Math.random()<.7?"#ffd79a":"#9fd0ff":"#1d2028",V.fillRect(tt*16+3,R*8+2,10,5)}}),q=new ie({map:I,emissive:"#ffffff",emissiveMap:I,emissiveIntensity:.9,roughness:.8}),j=[];for(let V=0;V<4e3&&j.length<260;V++){let J=p+(Math.random()-.5)*(y+500),ht=g+(Math.random()-.5)*(y+500),R=18+Math.random()*26,tt=18+Math.random()*26,Q=Math.max(R,tt);Re(J,ht,Q*.75+6)||jt.some(gt=>Math.hypot(gt[0]-J,gt[1]-ht)<gt[2]+20)||j.some(gt=>Math.hypot(gt[0]-J,gt[1]-ht)<(gt[3]+Q)*.6)||j.push([J,ht,R,Q,tt,20+Math.random()*Math.random()*110])}let b=new Sn(new We(1,1,1),q,j.length);j.forEach(([V,J,ht,,R,tt],Q)=>{Pt.position.set(V,tt/2,J),Pt.scale.set(ht,tt,R),Pt.rotation.set(0,Math.round(Math.random()*4)*Math.PI/2+(Math.random()-.5)*.2,0),Pt.updateMatrix(),b.setMatrixAt(Q,Pt.matrix)}),b.castShadow=!0,b.receiveShadow=!0,i.add(b);let _=[];for(let V=0;V<n.L;V+=45){let J=n.idx(V);for(let ht of[1,-1]){if(ht>0&&a(J))continue;let R=ht>0?n.wallL[J]:n.wallR[J],[tt,Q]=Xe(n,V+(ht>0?0:22),ht*(R+.8));_.push([tt,Q,n.head(J),ht])}}let N=new Sn(new An(.12,.15,9,6),new ie({color:"#2c2f36",metalness:.6,roughness:.4}),_.length),Y=new Sn(new We(1.6,.25,.6),new ie({color:"#fff",emissive:"#fff4d6",emissiveIntensity:3}),_.length),H=[];_.forEach(([V,J,ht,R],tt)=>{Pt.scale.set(1,1,1),Pt.rotation.set(0,ht,0),Pt.position.set(V,4.5,J),Pt.updateMatrix(),N.setMatrixAt(tt,Pt.matrix);let Q=V-Math.cos(ht)*R*.6,gt=J+Math.sin(ht)*R*.6;Pt.position.set(Q,9,gt),Pt.updateMatrix(),Y.setMatrixAt(tt,Pt.matrix),H.push([Q,gt])}),i.add(N,Y);let it=vn(64,64,V=>{let J=V.createRadialGradient(32,32,0,32,32,32);J.addColorStop(0,"rgba(255,236,200,0.5)"),J.addColorStop(1,"rgba(255,236,200,0)"),V.fillStyle=J,V.fillRect(0,0,64,64)},!1),ot=new Sn(new Fe(22,22),new ze({map:it,transparent:!0,depthWrite:!1,blending:fs,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}),H.length);H.forEach(([V,J],ht)=>{Pt.position.set(V,.03,J),Pt.rotation.set(-Math.PI/2,0,0),Pt.scale.set(1,1,1),Pt.updateMatrix(),ot.setMatrixAt(ht,Pt.matrix)}),i.add(ot)}else{let I=[];for(let q=0;q<2600&&I.length<900;q++){let j=p+(Math.random()-.5)*(M-60),b=g+(Math.random()-.5)*(M-60);Re(j,b,12)||jt.some(_=>Math.hypot(_[0]-j,_[1]-b)<_[2]+10)||I.push([j,b,.7+Math.random()*.8])}if(e.palms){let q=new An(.18,.3,8,7);q.translate(0,4,0);let j=new Fe(4.2,.9,4,1);j.translate(2.1,0,0);{let H=j.attributes.position;for(let it=0;it<H.count;it++){let ot=H.getX(it);H.setY(it,H.getY(it)*(1-ot/4.6)),H.setZ(it,-ot*ot*.07)}}let b=[];for(let H=0;H<8;H++){let it=j.clone();it.rotateX(Math.PI/2+.25),it.rotateY(H/8*Math.PI*2),b.push(it)}let _=Kd(b);_.translate(0,8,0),_.computeVertexNormals();let N=new Sn(q,new ie({color:"#8a6a45",roughness:1}),I.length),Y=new Sn(_,new ie({color:"#3f8a3a",roughness:.9,side:He}),I.length);I.forEach(([H,it,ot],V)=>{Pt.position.set(H,0,it),Pt.scale.set(ot,ot,ot),Pt.rotation.set((Math.random()-.5)*.25,Math.random()*6,(Math.random()-.5)*.25),Pt.updateMatrix(),N.setMatrixAt(V,Pt.matrix),Y.setMatrixAt(V,Pt.matrix),Y.setColorAt(V,ne.set("#3f8a3a").offsetHSL((Math.random()-.5)*.05,0,(Math.random()-.5)*.12))}),N.castShadow=Y.castShadow=!0,i.add(N,Y)}else{let q=new Sn(new An(.25,.35,3,6),new ie({color:"#6b4a2b",roughness:1}),I.length),j=new Mi(2.6,4,8);j.translate(0,4.2,0);let b=new Mi(2,3.4,8);b.translate(0,6,0);let _=new Mi(1.3,2.6,8);_.translate(0,7.6,0);let N=new Sn(Kd([j,b,_]),new ie({color:"#2f6b3c",roughness:1,flatShading:!0}),I.length);I.forEach(([Y,H,it],ot)=>{Pt.position.set(Y,1.5*it,H),Pt.scale.set(it,it,it),Pt.rotation.set(0,Math.random()*6,0),Pt.updateMatrix(),q.setMatrixAt(ot,Pt.matrix),Pt.position.set(Y,0,H),Pt.updateMatrix(),N.setMatrixAt(ot,Pt.matrix),N.setColorAt(ot,ne.set("#2f6b3c").offsetHSL((Math.random()-.5)*.04,0,(Math.random()-.5)*.1))}),N.castShadow=q.castShadow=!0,i.add(q,N)}}let St=[];{let I=new Mi(.22,.7,12);I.translate(0,.35,0);let q=new ie({color:"#ff6a00",roughness:.6,emissive:e.city?"#ff4a00":"#000",emissiveIntensity:e.city?.3:0}),j=new ie({color:"#fff",roughness:.5}),b=new An(.15,.17,.12,12,1,!0);b.translate(0,.4,0);let _=H=>vn(128,128,(it,ot,V)=>{it.fillStyle="#fff",it.fillRect(0,0,ot,V),it.strokeStyle="#d7141a",it.lineWidth=10,it.strokeRect(5,5,ot-10,V-10),it.fillStyle="#111",it.font='900 56px "Titillium Web", Arial',it.textAlign="center",it.textBaseline="middle",it.fillText(H,ot/2,V/2+3)},!1),N={150:_("150"),100:_("100"),50:_("50")},Y=new We(1,1,.08);Y.translate(0,.5,0);for(let H of n.props){let it=new Ee;if(it.position.set(H.x,0,H.z),H.type==="cone"){let ot=new Ht(I,q);ot.castShadow=!0,it.add(ot),it.add(new Ht(b,j))}else{let ot=new Ht(Y,[j,j,j,j,new ze({map:N[H.n]}),j]);ot.position.y=.3,ot.castShadow=!0,it.add(ot),it.rotation.y=H.h}i.add(it),St.push({...H,obj:it,x0:H.x,z0:H.z,h0:it.rotation.y,vx:0,vy:0,vz:0,y:0,wx:0,wz:0,r:H.type==="cone"?.35:.7,moved:!1})}}return{scene:i,sun:l,sunDir:h,theme:e,crowd:ee,panels:z,crew:lt,boxPos:re,water:T,props:St,setLights(I){dt.forEach((q,j)=>{q.emissiveIntensity=j<I?3.2:0,q.color.set(j<I?"#ff2a2a":"#2a0505")})},followSun(I,q){l.position.set(I+h.x*150,h.y*150,q+h.z*150),l.target.position.set(I,0,q)}}}function Kd(n){let t={position:[],normal:[],uv:[]};for(let i of n){i.index&&(i=i.toNonIndexed());for(let s of["position","normal","uv"]){let r=i.attributes[s];if(r)for(let a=0;a<r.array.length;a++)t[s].push(r.array[a])}}let e=new we;return e.setAttribute("position",new $t(t.position,3)),e.setAttribute("normal",new $t(t.normal,3)),t.uv.length&&e.setAttribute("uv",new $t(t.uv,2)),e}var si=[{name:"Rojo carrera",c1:"#d7141a",c2:"#ffd400",helm:"#ffd400"},{name:"Plata y turquesa",c1:"#b9c3c9",c2:"#00c2a8",helm:"#1b1f24"},{name:"Naranja",c1:"#ff7a00",c2:"#1d6bff",helm:"#ff7a00"},{name:"Azul noche",c1:"#122a6b",c2:"#ff2a55",helm:"#ffd400"},{name:"Verde",c1:"#0a6b47",c2:"#c7ff3a",helm:"#ffffff"},{name:"Rosa",c1:"#ff4fa3",c2:"#2a1a5e",helm:"#ff4fa3"},{name:"Celeste",c1:"#4fc3ff",c2:"#ffffff",helm:"#ffffff"},{name:"Amarillo",c1:"#ffd21a",c2:"#151515",helm:"#151515"},{name:"Blanco",c1:"#f3f3f3",c2:"#e3262e",helm:"#e3262e"},{name:"Negro y oro",c1:"#17171a",c2:"#d4a64a",helm:"#d4a64a"}];function Ci(n,t,{bevel:e=.02,taper:i=null,curve:s=!0}={}){let r=new cs;s?(r.moveTo(n[0][0],n[0][1]),r.splineThru(n.slice(1).map(o=>new pt(o[0],o[1]))),r.lineTo(n[0][0],n[0][1])):(r.moveTo(n[0][0],n[0][1]),n.slice(1).forEach(o=>r.lineTo(o[0],o[1])),r.closePath());let a=new Js(r,{depth:t-e*2,bevelEnabled:e>0,bevelThickness:e,bevelSize:e,bevelSegments:3,curveSegments:18});if(a.rotateY(-Math.PI/2),a.translate((t-e*2)/2,0,0),i){let o=a.attributes.position;for(let c=0;c<o.count;c++)o.setX(c,o.getX(c)*i(o.getZ(c),o.getY(c)))}return a.computeVertexNormals(),a}function Ra(n,t,e){let i=r=>.2969*Math.sqrt(r)-.126*r-.3516*r*r+.2843*r**3-.1015*r**4,s=[];for(let r=0;r<=12;r++){let a=1-r/12;s.push([n*(.5-a),t*5*i(a)])}for(let r=12;r>=0;r--){let a=1-r/12;s.push([n*(.5-a),-t*2.2*i(a)])}return Ci(s,e,{bevel:0,curve:!1})}var Se={};function Kv(){if(Se.ok)return Se;Se.ok=!0,Se.box=new We(1,1,1),Se.tub=Ci([[-.75,.12],[1.5,.13],[1.5,.5],[.95,.56],[.35,.6],[-.75,.64]],.7,{bevel:.05,curve:!1,taper:t=>1-.28*Math.max(0,(t-.55)/.95)}),Se.nose=Ci([[1.45,.14],[2.4,.17],[3,.22],[3.08,.28],[2.9,.34],[2.2,.42],[1.45,.5]],.5,{bevel:.03,taper:t=>Math.max(.3,1-.68*Math.max(0,(t-1.45)/1.6))}),Se.pod=Ci([[.78,.15],[-.4,.11],[-1.55,.13],[-1.6,.3],[-.6,.42],[.55,.55],[.8,.56]],.44,{bevel:.06,taper:t=>1-.18*Math.max(0,-t/1.6)}),Se.cover=Ci([[-.1,.5],[.02,.98],[-.25,1.06],[-.7,.92],[-1.4,.68],[-2.15,.46],[-2.15,.3],[-.2,.32]],.46,{bevel:.04,taper:t=>1-.55*Math.max(0,Math.min(1,(-t-.2)/1.9))}),Se.fin=Ci([[-.45,.95],[-1.9,.66],[-1.95,.55],[-.6,.85]],.02,{bevel:0,curve:!1}),Se.floor=(()=>{let t=new cs,e=.76,i=.25;t.moveTo(-e+i,-2.05),t.lineTo(e-i,-2.05),t.quadraticCurveTo(e,-2.05,e,-2.05+i),t.lineTo(e,.75),t.quadraticCurveTo(e,1.25,.25,1.4),t.lineTo(-.25,1.4),t.quadraticCurveTo(-e,1.25,-e,.75),t.lineTo(-e,-2.05+i),t.quadraticCurveTo(-e,-2.05,-e+i,-2.05);let s=new Js(t,{depth:.035,bevelEnabled:!1});return s.rotateX(Math.PI/2),s.translate(0,.085,0),s})(),Se.wingMain=Ra(.5,.045,.83),Se.wingFlap=Ra(.3,.035,.78),Se.wingFlap2=Ra(.2,.03,.7),Se.rwMain=Ra(.42,.06,.96),Se.rwFlap=Ra(.26,.045,.96),Se.endF=Ci([[2.42,.06],[3.08,.06],[3.06,.24],[2.72,.3],[2.42,.22]],.025,{bevel:0,curve:!1}),Se.endR=Ci([[-2.05,.42],[-2.72,.48],[-2.75,1.05],[-2.12,1.06],[-2.05,.8]],.025,{bevel:0,curve:!1});let n=t=>{let e=bt.R,i=t/2,s=[[.24,-i],[.315,-i],[.345,-i+.025],[.358,-i+.07],[e,-i+.11],[e,i-.11],[.358,i-.07],[.345,i-.025],[.315,i],[.24,i]].map(a=>new pt(a[0],a[1])),r=new Qr(s,36);return r.rotateZ(Math.PI/2),r};return Se.tireF=n(.37),Se.tireR=n(.45),Se.barrel=new An(.245,.245,1,24,1,!0),Se.barrel.rotateZ(Math.PI/2),Se.disc=new ls(.245,24),Se.brake=new An(.17,.17,.04,20),Se.brake.rotateZ(Math.PI/2),Se.ring=new jr(.27,.3,36),Se.halo=(()=>{let t=new ta(.34,.034,10,24,Math.PI);return t.rotateX(Math.PI/2),t})(),Se.helm=new jn(.158,20,16),Se.arm=(()=>{let t=new An(.02,.02,1,6);return t.rotateZ(Math.PI/2),t})(),Se.mirror=Ci([[0,0],[.12,0],[.1,.07],[.01,.07]],.16,{bevel:.01,curve:!1}),Se}var Vh={};function Pa(n,t){return Vh[n]||(Vh[n]=t()),Vh[n]}var Ca=(n,t={})=>Pa("s"+n+JSON.stringify(t),()=>new ie({color:n,roughness:.4,metalness:.2,...t})),jd=n=>Pa("p"+n,()=>new Si({color:n,roughness:.38,metalness:.15,clearcoat:.8,clearcoatRoughness:.12}));function Qv(){return Pa("carbon",()=>{let n=document.createElement("canvas");n.width=n.height=64;let t=n.getContext("2d");t.fillStyle="#16171b",t.fillRect(0,0,64,64);for(let i=0;i<8;i++)for(let s=0;s<8;s++)t.fillStyle=(i+s)%2?"#202228":"#121317",t.fillRect(i*8,s*8,8,4),t.fillStyle=(i+s)%2?"#121317":"#202228",t.fillRect(i*8,s*8+4,8,4);let e=new Vn(n);return e.wrapS=e.wrapT=zi,e.repeat.set(6,6),e.colorSpace=ke,new Si({map:e,roughness:.38,metalness:.3,clearcoat:.6,clearcoatRoughness:.2})})}function jv(){return Pa("rimtex",()=>{let n=document.createElement("canvas");n.width=n.height=128;let t=n.getContext("2d");t.fillStyle="#1b1d22",t.beginPath(),t.arc(64,64,64,0,7),t.fill(),t.strokeStyle="#a7adb5",t.lineWidth=9;for(let i=0;i<10;i++){let s=i/10*Math.PI*2;t.beginPath(),t.moveTo(64+Math.cos(s)*16,64+Math.sin(s)*16),t.lineTo(64+Math.cos(s+.25)*60,64+Math.sin(s+.25)*60),t.stroke()}t.fillStyle="#d3d7dc",t.beginPath(),t.arc(64,64,15,0,7),t.fill(),t.fillStyle="#e8c21a",t.beginPath(),t.arc(64,64,6,0,7),t.fill(),t.strokeStyle="#c9ced4",t.lineWidth=4,t.beginPath(),t.arc(64,64,61,0,7),t.stroke();let e=new Vn(n);return e.colorSpace=ke,new ie({map:e,metalness:.7,roughness:.35,side:He})})}function ty(n,t,e){let i=document.createElement("canvas");i.width=128,i.height=128;let s=i.getContext("2d");s.fillStyle=t,s.fillRect(0,0,128,128),s.font='italic 900 92px "Titillium Web", Arial, sans-serif',s.textAlign="center",s.textBaseline="middle",s.lineWidth=8,s.strokeStyle=e,s.strokeText(String(n),64,70),s.fillStyle="#fff",s.fillText(String(n),64,70);let r=new Vn(i);return r.colorSpace=ke,r.anisotropy=4,r}function Wh(n,t){let e=Kv(),i=typeof n=="number"?si[n%si.length]:n,s=jd(i.c1),r=jd(i.c2),a=Qv(),o=Ca("#0a0a0c",{roughness:.75,metalness:0}),c=new Ee,l=new Ee;c.add(l);let h=(B,W,L,F=0,$=0,G=0,ut=1,et=1,at=1,P=0,nt=0,ct=0,X=!0)=>{let rt=new Ht(W,L);return rt.position.set(F,$,G),rt.scale.set(ut,et,at),rt.rotation.set(P,nt,ct),rt.castShadow=X,B.add(rt),rt};h(l,e.floor,a),h(l,e.box,a,0,.18,-2.15,1,.16,.45,-.3),h(l,e.tub,s),h(l,e.box,o,0,.59,.12,.42,.03,.7,0,0,0,!1),h(l,e.cover,s),h(l,e.fin,r),h(l,e.box,o,0,.92,.035,.22,.13,.03,0,0,0,!1),h(l,e.box,r,0,1.07,-.26,.05,.05,.12),h(l,e.halo,a,0,.74,.1),h(l,e.box,a,0,.71,.53,.06,.05,.42,.42),h(l,e.helm,Pa("h"+i.helm,()=>new Si({color:i.helm,roughness:.2,metalness:.2,clearcoat:1})),0,.68,0),h(l,e.box,Ca("#111",{metalness:.8,roughness:.1}),0,.7,.14,.22,.065,.05,0,0,0,!1);for(let B of[1,-1])h(l,e.mirror,a,B*.44,.6,.66),h(l,e.box,a,B*.36,.56,.66,.16,.02,.02,0,0,B*.4);h(l,e.box,a,0,.62,-2.3,.05,.42,.14);let u=h(l,e.box,new ie({color:"#ff2030",emissive:"#ff0018",emissiveIntensity:.5}),0,.34,-2.4,.12,.06,.03,0,0,0,!1),f=new ze({map:ty(t,i.c1,i.c2)}),d=new Fe(.28,.28),m=new Ht(d,f);m.rotation.y=Math.PI/2,m.position.set(.155,.72,-1),l.add(m);let v=new Ht(d,f);v.rotation.y=-Math.PI/2,v.position.set(-.155,.72,-1),l.add(v);let p=new Ee;l.add(p),h(p,e.nose,s);let g=new Ht(d,f);g.rotation.x=-Math.PI/2+.1,g.position.set(0,.47,2),p.add(g),h(p,e.box,r,.12,.15,2.62,.03,.14,.3),h(p,e.box,r,-.12,.15,2.62,.03,.14,.3);let y=[];for(let B of[1,-1]){let W=new Ee;p.add(W),h(W,e.wingMain,r,B*.53,.1,2.8),h(W,e.wingFlap,a,B*.55,.19,2.64,1,1,1,-.32),h(W,e.wingFlap2,a,B*.58,.27,2.55,1,1,1,-.6),h(W,e.endF,r,B*.95,0,0),y.push(W)}let S=[];for(let B of[1,-1]){let W=new Ee;l.add(W),h(W,e.pod,s,B*.55,0,0),h(W,e.box,o,B*.56,.36,.79,.36,.34,.02,0,0,0,!1),h(W,e.box,r,B*.56,.565,.3,.3,.012,.6,-.05,0,0,!1),S.push(W)}let M=new Ee;l.add(M),h(M,e.rwMain,s,0,.86,-2.4),h(M,e.rwFlap,r,0,.99,-2.3,1,1,1,-.38),h(M,e.endR,s,.49,0,0),h(M,e.endR,s,-.49,0,0),h(M,e.box,a,0,.5,-2.45,.9,.025,.18,-.2);let A=Ca("#141416",{roughness:.92,metalness:0}),T=Ca("#e8c21a",{roughness:.6,side:He}),x=new ie({color:"#3a3a3a",emissive:"#ff5a10",emissiveIntensity:0,metalness:.6,roughness:.4}),E=[],D=[],C=[[.8,bt.a,1],[-.8,bt.a,1],[.8,-bt.b,0],[-.8,-bt.b,0]];for(let[B,W,L]of C){let F=new Ee;c.add(F),D.push(F);let $=new Ee;$.position.set(B,bt.R,W),F.add($);let G=new Ee;$.add(G);let ut=L?.37:.45,et=new Ht(L?e.tireF:e.tireR,A);et.castShadow=!0,G.add(et);let at=new Ht(e.barrel,Ca("#25272c",{metalness:.7,roughness:.35}));at.scale.set(ut-.02,1,1),G.add(at);for(let nt of[1,-1]){let ct=new Ht(e.disc,jv());ct.rotation.y=nt*Math.PI/2,ct.position.x=nt*(ut/2-.05),G.add(ct);let X=new Ht(e.ring,T);X.rotation.y=nt*Math.PI/2,X.position.x=nt*(ut/2+.003),G.add(X)}let P=new Ht(e.brake,x);P.position.x=(B>0?-1:1)*.05,$.add(P),E.push({pivot:$,spin:G,front:!!L});for(let nt of[.1,-.08]){let ct=Math.abs(B)-.32,X=new Ht(e.arm,a);X.scale.set(ct,1,1),X.position.set(B/2+Math.sign(B)*.16,bt.R+nt,W),F.add(X)}}let U=[y[0],y[1],p,M,D[0],D[1],D[2],D[3],S[0],S[1],null];return c.userData={wheels:E,body:l,rain:u,livery:i,parts:U,discM:x,rnd:Array.from({length:11},()=>Math.random()-.5)},c}function Xh(n,t){let e=n.userData,i=[];for(let s=0;s<10;s++){let r=t[s]||0,a=e.parts[s];if(!a)continue;if(r>=1){a.visible&&(a.visible=!1,i.push(s));continue}a.visible||(a.visible=!0);let o=e.rnd[s];if(s<=1){let c=s===0?1:-1;a.rotation.set(r*.18,o*r*.2,-c*r*.22),a.position.set(0,-r*.06,-r*.05)}else if(s===2)a.rotation.set(r*.08,o*r*.15,0);else if(s===3)a.rotation.set(-r*.35,o*r*.2,o*r*.3),a.position.y=-r*.08;else if(s<=7){let c=s===4||s===6?1:-1;a.rotation.set(0,r>.2?o*r*.25:0,r>.2?c*r*.18:0)}else a.rotation.set(0,0,o*r*.15),a.position.y=-r*.04,a.scale.set(1-r*.15,1,1)}return i}function tp(n){for(let t of n.userData.parts)t&&(t.visible=!0,t.rotation.set(0,0,0),t.position.set(0,0,0),t.scale.set(1,1,1))}function qh(n,t){n.position.set(t.x,0,t.z),n.rotation.set(0,t.h,0);let e=n.userData.wheels;for(let h=0;h<4;h++){let u=e[h];u.front&&(u.pivot.rotation.y=t.steer||0),u.spin.rotation.x=t.rot?t.rot[h]:0}let i=n.userData.body,s=t.axs||0,r=t.ays||0;i.rotation.x+=(-s*.0022-i.rotation.x)*.2,i.rotation.z+=(r*.0016-i.rotation.z)*.2;let a=0,o=0;t.dmg&&((t.dmg[4]>=1||t.dmg[6]>=1)&&(a-=.06),(t.dmg[5]>=1||t.dmg[7]>=1)&&(a+=.06),(t.dmg[4]>=1||t.dmg[5]>=1)&&(o+=.05),(t.dmg[6]>=1||t.dmg[7]>=1)&&(o-=.05)),i.position.y=-.012*Math.min(1,(t.vx||0)*(t.vx||0)/7e3)-Math.abs(a)*2-Math.abs(o)*2,i.rotation.z+=a*.2,i.rotation.x+=o*.2;let c=Math.min(1,(t.brk||0)*Math.max(0,t.vx||0)/60),l=n.userData.discM;l.emissiveIntensity+=(c*2.5-l.emissiveIntensity)*.08}function ep(n=420){let t=new we,e=new Float32Array(n*3),i=new Float32Array(n*3),s=new Float32Array(n),r=new Float32Array(n);t.setAttribute("position",new qe(e,3)),t.setAttribute("color",new qe(i,3)),t.setAttribute("size",new qe(s,1)),t.setAttribute("alpha",new qe(r,1));let a=(()=>{let f=document.createElement("canvas");f.width=f.height=64;let d=f.getContext("2d"),m=d.createRadialGradient(32,32,0,32,32,32);return m.addColorStop(0,"rgba(255,255,255,1)"),m.addColorStop(.4,"rgba(255,255,255,0.55)"),m.addColorStop(1,"rgba(255,255,255,0)"),d.fillStyle=m,d.fillRect(0,0,64,64),new Vn(f)})(),o=f=>new Oe({uniforms:{map:{value:a}},transparent:!0,depthWrite:!1,vertexColors:!0,blending:f,vertexShader:"attribute float size; attribute float alpha; varying vec3 vC; varying float vA; void main(){ vC = color; vA = alpha; vec4 mv = modelViewMatrix * vec4(position,1.0); gl_PointSize = size * 3.0 * (600.0 / -mv.z); gl_Position = projectionMatrix * mv; }",fragmentShader:"uniform sampler2D map; varying vec3 vC; varying float vA; void main(){ vec4 t = texture2D(map, gl_PointCoord); gl_FragColor = vec4(vC, t.a * vA); }"}),c=new zr(t,o(qi));c.frustumCulled=!1;let l=t.clone(),h=[];for(let f=0;f<n;f++)h.push({life:0});let u=0;return{obj:c,emit(f,d,m,v,p,g,y,S,M,A,T,x=.4,E=0){let D=h[u];u=(u+1)%n,Object.assign(D,{x:f,y:d,z:m,vx:v,vy:p,vz:g,r:y,g:S,b:M,s:A,life:T,max:T,a:x,grav:E})},update(f){for(let d=0;d<n;d++){let m=h[d];if(m.life>0){m.life-=f,m.x+=m.vx*f,m.y+=m.vy*f,m.z+=m.vz*f;let p=Math.pow(.35,f);m.vx*=p,m.vz*=p,m.vy=m.vy*(m.grav?1:p)+(m.grav?-9.8*m.grav:.8)*f,m.y<.05&&m.grav&&(m.y=.05,m.vy=-m.vy*.3)}let v=Math.max(0,m.life/(m.max||1));e[d*3]=m.x||0,e[d*3+1]=m.life>0?m.y:-999,e[d*3+2]=m.z||0,i[d*3]=m.r||0,i[d*3+1]=m.g||0,i[d*3+2]=m.b||0,s[d]=m.life>0?m.s*(m.grav?1:1.9-v*.9):0,r[d]=v*(m.a||.4)}for(let d of["position","color","size","alpha"])t.attributes[d].needsUpdate=!0}}}function np(n,t=2400){let e=new Float32Array(t*6*3),i=new Float32Array(t*6),s=new we;s.setAttribute("position",new qe(e,3)),s.setAttribute("alpha",new qe(i,1));let r=new Oe({transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4,vertexShader:"attribute float alpha; varying float vA; void main(){ vA = alpha; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:"varying float vA; void main(){ gl_FragColor = vec4(0.04,0.04,0.045, vA); }"}),a=new Ht(s,r);a.frustumCulled=!1,n.add(a);let o=0,c=new Map;return{mesh:a,add(l,h,u,f,d,m,v){let p=c.get(l);if(c.set(l,[h,u]),!p||v<=0)return;let g=h-p[0],y=u-p[1],S=Math.hypot(g,y);if(S<.05||S>3)return;let M=-y/S*m/2,A=g/S*m/2,T=.02,x=[p[0]+M,T,p[1]+A,p[0]-M,T,p[1]-A,h+M,T,u+A,p[0]-M,T,p[1]-A,h-M,T,u-A,h+M,T,u+A];e.set(x,o*18);for(let E=0;E<6;E++)i[o*6+E]=Math.min(.55,v);o=(o+1)%t,s.attributes.position.needsUpdate=!0,s.attributes.alpha.needsUpdate=!0},cut(l){c.delete(l)}}}function ip(n){let t=[];return{list:t,spawn(e,i,s,r=[0,0]){e.updateMatrixWorld(!0);let a=i.clone(!0);a.visible=!0,new ge().copy(i.matrixWorld).decompose(a.position,a.quaternion,a.scale);let c=new Un().setFromObject(i),l=c.getCenter(new O),h=new Ee;h.position.copy(l),n.add(h),a.position.sub(l),h.add(a),a.traverse(m=>{m.isMesh&&(m.castShadow=!0)});let[u,f]=Ki(s),d={obj:h,x:l.x,y:l.y,z:l.z,vx:u*.75+r[0]+(Math.random()-.5)*6,vy:2+Math.random()*5,vz:f*.75+r[1]+(Math.random()-.5)*6,ax:(Math.random()-.5)*14,ay:(Math.random()-.5)*14,az:(Math.random()-.5)*14,life:45,r:Math.max(.35,c.getSize(new O).length()*.35),rest:!1};if(t.push(d),t.length>40){let m=t.shift();n.remove(m.obj)}return d},update(e,i){for(let s=t.length-1;s>=0;s--){let r=t[s];if(r.life-=e,r.life<=0){n.remove(r.obj),t.splice(s,1);continue}if(!r.rest){if(r.vy-=9.8*e,r.x+=r.vx*e,r.y+=r.vy*e,r.z+=r.vz*e,r.y<r.r*.4){r.y=r.r*.4,r.vy<0&&(r.vy=-r.vy*.25);let a=Math.pow(.12,e);r.vx*=a,r.vz*=a,r.ax*=a,r.ay*=a,r.az*=a,Math.hypot(r.vx,r.vz)<.3&&Math.abs(r.vy)<.5&&(r.rest=!0)}r.obj.rotation.x+=r.ax*e,r.obj.rotation.y+=r.ay*e,r.obj.rotation.z+=r.az*e,r.obj.position.set(r.x,r.y,r.z)}for(let a of i){let o=a.c;if(!(Math.abs(o.x-r.x)>3||Math.abs(o.z-r.z)>3)&&Math.hypot(o.x-r.x,o.z-r.z)<1.6&&qn(o)>3){let[c,l]=Ki(o);r.vx=c*1.1+(Math.random()-.5)*4,r.vz=l*1.1+(Math.random()-.5)*4,r.vy=2+Math.random()*3,r.rest=!1,r.ax=(Math.random()-.5)*20,r.az=(Math.random()-.5)*20,a.own&&qn(o)>20&&!a.hitDebris&&(a.hitDebris=.5,o.dmg[0+(Math.random()<.5?0:1)]+=.06)}}}},clear(){for(let e of t)n.remove(e.obj);t.length=0}}}function sp(n,t,e){for(let i of n){for(let s of t){let r=s.c;if(Math.abs(r.x-i.x)>4||Math.abs(r.z-i.z)>4)continue;let a=Math.sin(r.h),o=Math.cos(r.h);for(let c of[1.6,-.6]){let l=r.x+a*c,h=r.z+o*c,u=i.x-l,f=i.z-h,d=Math.hypot(u,f);if(d<i.r+.95&&i.y<1.5){let[m,v]=Ki(r),p=Math.hypot(m,v);p>1&&(i.vx=m*1.15+u/(d||1)*p*.3,i.vz=v*1.15+f/(d||1)*p*.3,i.vy=1.5+p*.12,i.wx=(Math.random()-.5)*16,i.wz=(Math.random()-.5)*16,i.moved=!0,s.own&&i.type==="board"&&Kl(r,m*.985,v*.985))}}}if(i.moved){if(i.vy-=9.8*e,i.x+=i.vx*e,i.y+=i.vy*e,i.z+=i.vz*e,i.y<0){i.y=0,i.vy=i.vy<-1?-i.vy*.3:0;let s=Math.pow(.08,e);i.vx*=s,i.vz*=s,i.wx*=s,i.wz*=s,Math.hypot(i.vx,i.vz)<.2&&i.vy===0&&(i.moved=!1)}i.obj.position.set(i.x,i.y,i.z),i.obj.rotation.x+=i.wx*e,i.obj.rotation.z+=i.wz*e,i.moved||(i.obj.rotation.x=Math.round(i.obj.rotation.x/(Math.PI/2))*Math.PI/2||Math.PI/2)}}}function rp(n){for(let t of n)t.x=t.x0,t.z=t.z0,t.y=0,t.vx=t.vy=t.vz=0,t.moved=!1,t.obj.position.set(t.x,0,t.z),t.obj.rotation.set(0,t.h0,0)}var fe=null,yn=null,vs=!1,Yh=null,Zh=null,jl=null,tc=null;function ec(n){let t=n.createBuffer(1,n.sampleRate*2,n.sampleRate),e=t.getChannelData(0);for(let i=0;i<e.length;i++)e[i]=Math.random()*2-1;return t}function ey(n,t=6){let e=n.createWaveShaper(),i=1024,s=new Float32Array(i);for(let r=0;r<i;r++){let a=r/i*2-1;s[r]=Math.tanh(t*a)/Math.tanh(t)}return e.curve=s,e}function ap(n,t,e){let i=n.createOscillator();i.type="sawtooth";let s=n.createOscillator();s.type="square";let r=n.createOscillator();r.type="triangle";let a=n.createGain(),o=n.createGain(),c=n.createGain();a.gain.value=.5,o.gain.value=.25,c.gain.value=.35;let l=n.createGain();i.connect(a).connect(l),s.connect(o).connect(l),r.connect(c).connect(l);let h=ey(n,3),u=n.createBiquadFilter();u.type="lowpass",u.Q.value=2.5;let f=n.createGain();return f.gain.value=0,l.connect(h).connect(u).connect(f).connect(t),[i,s,r].forEach(d=>d.start()),{o1:i,o2:s,o3:r,lp:u,g:f,vol:e}}function op(n,t,e,i){if(!n)return;let s=fe.currentTime,r=t/60*3;n.o1.frequency.setTargetAtTime(r,s,.02),n.o2.frequency.setTargetAtTime(r*.5,s,.02),n.o3.frequency.setTargetAtTime(r*2.01,s,.02),n.lp.frequency.setTargetAtTime(500+e*2600+t*.12,s,.03),n.g.gain.setTargetAtTime(i*n.vol*(.35+.65*e),s,.04)}var un={init(){if(fe){fe.state==="suspended"&&fe.resume();return}try{fe=new(window.AudioContext||window.webkitAudioContext)}catch{return}yn=fe.createGain(),yn.gain.value=vs?0:.55;let n=fe.createDynamicsCompressor();yn.connect(n).connect(fe.destination),Yh=ap(fe,yn,.32),Zh=ap(fe,yn,.22);let t=ec(fe),e=(i,s,r)=>{let a=fe.createBufferSource();a.buffer=t,a.loop=!0;let o=fe.createBiquadFilter();o.type=i,o.frequency.value=s,o.Q.value=r;let c=fe.createGain();return c.gain.value=0,a.connect(o).connect(c).connect(yn),a.start(),{g:c,fl:o}};jl=e("bandpass",1300,9),tc=e("lowpass",420,.7)},get muted(){return vs},toggle(){return vs=!vs,yn&&(yn.gain.value=vs?0:.55),vs},update(n,t,e){if(!fe)return;let i=fe.currentTime;if(n){op(Yh,n.rpm,n.shiftT>0?.1:n.thr,1);let s=Math.max(0,Math.max(...n.use)-.95),r=n.surf.every(o=>o<2);jl.g.gain.setTargetAtTime(r?Math.min(.22,s*.25)*Math.min(1,Math.abs(n.vx)/8):0,i,.05),jl.fl.frequency.setTargetAtTime(1100+s*300,i,.1);let a=Math.hypot(n.vx,n.vy);tc.g.gain.setTargetAtTime(Math.min(.25,a*a/3e4)+(r?0:Math.min(.2,a/120)),i,.1),tc.fl.frequency.setTargetAtTime(r?420+a*4:260,i,.1)}else Yh.g.gain.setTargetAtTime(0,i,.1),jl.g.gain.setTargetAtTime(0,i,.1),tc.g.gain.setTargetAtTime(0,i,.1);t&&e<120?op(Zh,t.rpm||9e3,t.thr??1,Math.max(0,1-e/120)**2):Zh.g.gain.setTargetAtTime(0,i,.1)},blip(n){if(!fe||vs)return;let t=fe.currentTime;if(n==="beep"||n==="go"){let e=fe.createOscillator(),i=fe.createGain();e.type="sine",e.frequency.value=n==="go"?1320:880,i.gain.setValueAtTime(.25,t),i.gain.exponentialRampToValueAtTime(.001,t+(n==="go"?.5:.18)),e.connect(i).connect(yn),e.start(t),e.stop(t+.6)}else if(n==="hit"){let e=fe.createBufferSource();e.buffer=ec(fe);let i=fe.createBiquadFilter();i.type="lowpass",i.frequency.value=600;let s=fe.createGain();s.gain.setValueAtTime(.6,t),s.gain.exponentialRampToValueAtTime(.001,t+.35),e.connect(i).connect(s).connect(yn),e.start(t),e.stop(t+.4)}else if(n==="crash"){let e=fe.createBufferSource();e.buffer=ec(fe);let i=fe.createBiquadFilter();i.type="lowpass",i.frequency.setValueAtTime(1800,t),i.frequency.exponentialRampToValueAtTime(200,t+.6);let s=fe.createGain();s.gain.setValueAtTime(.9,t),s.gain.exponentialRampToValueAtTime(.001,t+.8),e.connect(i).connect(s).connect(yn),e.start(t),e.stop(t+.9);let r=fe.createOscillator(),a=fe.createGain();r.type="triangle",r.frequency.setValueAtTime(90,t),r.frequency.exponentialRampToValueAtTime(40,t+.3),a.gain.setValueAtTime(.5,t),a.gain.exponentialRampToValueAtTime(.001,t+.35),r.connect(a).connect(yn),r.start(t),r.stop(t+.4)}else if(n==="pop"){let e=fe.createBufferSource();e.buffer=ec(fe);let i=fe.createBiquadFilter();i.type="bandpass",i.frequency.value=700,i.Q.value=.8;let s=fe.createGain();s.gain.setValueAtTime(.35,t),s.gain.exponentialRampToValueAtTime(.001,t+.5),e.connect(i).connect(s).connect(yn),e.start(t),e.stop(t+.6)}else if(n==="shift"){let e=fe.createOscillator(),i=fe.createGain();e.type="square",e.frequency.setValueAtTime(140,t),e.frequency.exponentialRampToValueAtTime(60,t+.06),i.gain.setValueAtTime(.08,t),i.gain.exponentialRampToValueAtTime(.001,t+.08),e.connect(i).connect(yn),e.start(t),e.stop(t+.1)}else n==="fanfare"&&[523,659,784,1047].forEach((e,i)=>{let s=fe.createOscillator(),r=fe.createGain();s.type="triangle",s.frequency.value=e,r.gain.setValueAtTime(0,t+i*.12),r.gain.linearRampToValueAtTime(.18,t+i*.12+.02),r.gain.exponentialRampToValueAtTime(.001,t+i*.12+.6),s.connect(r).connect(yn),s.start(t+i*.12),s.stop(t+i*.12+.7)})}};var Tt=n=>document.getElementById(n);function ny(n){try{return!!localStorage.getItem(n)}catch{return!1}}var Ii=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window;Ii&&document.body.classList.add("touch");var lp=ny("f1:autopilot"),hu=[{n:"F\xE1cil",k:.87},{n:"Normal",k:.925},{n:"Dif\xEDcil",k:.97}],iy=[1,3,5,8],_p=["Rossetti","Lindqvist","Okafor","Tanaka","Moreau","Duarte","Kowalski","Hayes","Navarro","Brandt","Ferreira","Sato"],Ms=22.2,ai=n=>{if(n==null||!isFinite(n))return"\u2014";let t=Math.floor(n/60),e=n-t*60;return t+":"+(e<10?"0":"")+e.toFixed(3)},vp={get(n,t){try{let e=localStorage.getItem(n);return e?JSON.parse(e):t}catch{return t}},set(n,t){try{localStorage.setItem(n,JSON.stringify(t))}catch{}}},De=Object.assign({liv:Math.floor(Math.random()*10),num:2+Math.floor(Math.random()*97),auto:!0,abs:!0,tc:!0,steer:!0,brakeA:!0,line:!1,cam:0},vp.get("f1:prefs",{}));Ii&&(De.auto=!0);var sc=()=>vp.set("f1:prefs",De),Zn=new kl({antialias:!Ii,powerPreference:"high-performance"});Zn.setPixelRatio(Math.min(devicePixelRatio,Ii?1.25:1.75));Zn.outputColorSpace=ke;Zn.toneMapping=ps;Zn.shadowMap.enabled=!0;Zn.shadowMap.type=$o;Tt("view").appendChild(Zn.domElement);var sn=new gn(62,1,.1,6e3),Pi=null,rc=null,eu=null;Ii||(Pi=new ql(Zn),eu=new Yl(new ki,sn),Pi.addPass(eu),rc=new ar(new pt(512,512),.3,.35,.92),Pi.addPass(rc),Pi.addPass(new Zl));function yp(){Zn.setSize(innerWidth,innerHeight),sn.aspect=innerWidth/innerHeight,sn.updateProjectionMatrix(),Pi&&(Pi.setSize(innerWidth,innerHeight),Pi.setPixelRatio(Zn.getPixelRatio()))}addEventListener("resize",yp);yp();function cp(){Pi?(eu.scene=Me.scene,Pi.render()):Zn.render(Me.scene,sn)}var fn="local",Mn=!1,Te=!0,oi=[],Ae="boot",xt=null,Me=null,nu=-1,$h={},he={track:0,laps:3,bots:5,diff:1,cars:{}},me=[],ft=null,Ut=null,iu=null,En=null,Yn=null,su=null,lc=null;function uu(n){return $h[n]||($h[n]=Xd(Nh[n])),$h[n]}function sy(n){n.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&[].concat(t.material).forEach(e=>{e.map&&e.map.dispose(),e.dispose()})})}function fu(n){nu===n&&Me||(Me&&sy(Me.scene),nu=n,xt=uu(n),Me=Qd(xt,Zn),rc&&(rc.strength=Me.theme.bloom),iu=null,En=null,Yn=ep(),Me.scene.add(Yn.obj),su=np(Me.scene),lc=ip(Me.scene),Mp.prep())}var Mp={cv:Tt("mini"),pts:null,prep(){let n=this.cv,t=n.width,e=22,i=1e9,s=-1e9,r=1e9,a=-1e9;for(let h=0;h<xt.N;h++)i=Math.min(i,xt.px[h]),s=Math.max(s,xt.px[h]),r=Math.min(r,xt.pz[h]),a=Math.max(a,xt.pz[h]);let o=(t-e*2)/Math.max(s-i,a-r),c=(t-(s-i)*o)/2,l=(t-(a-r)*o)/2;this.map=(h,u)=>[c+(s-h)*o,l+(u-r)*o],this.pts=[];for(let h=0;h<xt.N;h+=2)this.pts.push(this.map(xt.px[h],xt.pz[h]))},draw(){let n=this.cv,t=n.getContext("2d");if(t.clearRect(0,0,n.width,n.height),!this.pts)return;t.lineJoin="round",t.lineCap="round";let e=()=>{t.beginPath(),this.pts.forEach((r,a)=>a?t.lineTo(r[0],r[1]):t.moveTo(r[0],r[1])),t.closePath()};e(),t.strokeStyle="rgba(0,0,0,.6)",t.lineWidth=9,t.stroke(),e(),t.strokeStyle="#e8e8ee",t.lineWidth=4.5,t.stroke();for(let r of cr){let[a,o]=this.map(...Xe(xt,r,0));t.beginPath(),t.arc(a,o,7,0,7),t.fillStyle="rgba(255,210,26,.6)",t.fill()}let[i,s]=this.map(xt.px[0],xt.pz[0]);t.fillStyle="#e10600",t.fillRect(i-4,s-4,8,8);for(let r of me){if(r===ft)continue;let[a,o]=this.map(r.c.x,r.c.z);t.beginPath(),t.arc(a,o,5,0,7),t.fillStyle=si[r.liv].c1,t.fill(),t.lineWidth=1.5,t.strokeStyle="#000",t.stroke()}if(ft){let[r,a]=this.map(ft.c.x,ft.c.z);t.beginPath(),t.arc(r,a,7.5,0,7),t.fillStyle=si[ft.liv].c1,t.fill(),t.lineWidth=3,t.strokeStyle="#fff",t.stroke()}}};function ry(n,t){let e=uu(t),i=n.getContext("2d"),s=n.width=240,r=n.height=160,a=16,o=1e9,c=-1e9,l=1e9,h=-1e9;for(let m=0;m<e.N;m++)o=Math.min(o,e.px[m]),c=Math.max(c,e.px[m]),l=Math.min(l,e.pz[m]),h=Math.max(h,e.pz[m]);let u=Math.min((s-a*2)/(c-o),(r-a*2)/(h-l)),f=(s-(c-o)*u)/2,d=(r-(h-l)*u)/2;i.lineJoin="round",i.beginPath();for(let m=0;m<=e.N;m+=3){let v=m%e.N,p=f+(c-e.px[v])*u,g=d+(e.pz[v]-l)*u;m?i.lineTo(p,g):i.moveTo(p,g)}i.closePath(),i.strokeStyle="#e10600",i.lineWidth=7,i.stroke(),i.strokeStyle="#fff",i.lineWidth=3,i.stroke()}var On={},lr={l:!1,r:!1,gas:!1,brk:!1},Da=!1,ac=!1,oc=!1;addEventListener("keydown",n=>{n.target&&n.target.tagName==="INPUT"&&n.target.type==="number"||(On[n.code]=!0,n.code==="Space"&&(Da=!0,n.preventDefault()),(n.code==="KeyE"||n.code==="ShiftLeft"||n.code==="ShiftRight")&&(ac=!0),(n.code==="KeyQ"||n.code==="ControlLeft"||n.code==="ControlRight")&&(oc=!0),n.code==="KeyC"&&Ae!=="lobby"&&du(),n.code==="KeyR"&&Ae==="race"&&!n.repeat&&dc(),n.code==="KeyP"&&Ae==="race"&&!n.repeat&&fc(),n.code==="KeyM"&&Ae!=="lobby"&&Sp(),["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(n.code)&&n.preventDefault(),un.init())});addEventListener("keyup",n=>{On[n.code]=!1});addEventListener("pointerdown",()=>un.init());addEventListener("blur",()=>{for(let n in On)On[n]=!1});function cc(n,t){let e=Tt(n),i=r=>{r.preventDefault(),lr[t]=!0,e.classList.add("on"),un.init()},s=r=>{r.preventDefault(),lr[t]=!1,e.classList.remove("on")};e.addEventListener("pointerdown",i),e.addEventListener("pointerup",s),e.addEventListener("pointercancel",s),e.addEventListener("pointerleave",s)}cc("tL","l");cc("tR","r");cc("tGas","gas");cc("tBrk","brk");Tt("tDrs").addEventListener("pointerdown",n=>{n.preventDefault(),Da=!0});Tt("tReset").addEventListener("pointerdown",n=>{n.preventDefault(),Ae==="race"&&dc()});Tt("tBox").addEventListener("pointerdown",n=>{n.preventDefault(),Ae==="race"&&fc()});Tt("camBtn").addEventListener("click",()=>du());Tt("muteBtn").addEventListener("click",()=>Sp());function Sp(){un.init(),Tt("muteBtn").textContent=un.toggle()?"\u{1F507}":"\u{1F50A}"}var nc=0,Jh={};function ay(n){let t=0,e=0,i=0,s=!1;(On.KeyW||On.ArrowUp||lr.gas)&&(t=1),(On.KeyS||On.ArrowDown||lr.brk)&&(e=1);let r=On.KeyA||On.ArrowLeft||lr.l,a=On.KeyD||On.ArrowRight||lr.r,o=(r?1:0)-(a?1:0),c=o===0||Math.sign(o)!==Math.sign(nc)?8:4.5;nc+=Math.max(-c*n,Math.min(c*n,o-nc)),i=nc;let l=navigator.getGamepads?[...navigator.getGamepads()].find(h=>h&&h.connected):null;if(l){let h=l.axes[0]||0;Math.abs(h)>.08&&(i=-Math.sign(h)*Math.pow((Math.abs(h)-.08)/.92,1.4),s=!0);let u=l.buttons[7]?l.buttons[7].value:0,f=l.buttons[6]?l.buttons[6].value:0;u>.03&&(t=Math.max(t,u)),f>.03&&(e=Math.max(e,f)),l.buttons[0]&&l.buttons[0].value>.03&&(t=Math.max(t,l.buttons[0].value));let d=m=>l.buttons[m]&&l.buttons[m].pressed&&!Jh[m];d(5)&&(ac=!0),d(4)&&(oc=!0),d(2)&&(Da=!0),d(3)&&du(),d(8)&&Ae==="race"&&dc(),d(1)&&Ae==="race"&&fc(),Jh={},l.buttons.forEach((m,v)=>Jh[v]=m.pressed)}return{thr:t,brk:e,st:i,analog:s}}function oy(n,t,e){if(De.steer)return Vd(n,t,e);let i=Math.max(0,n.vx);return t*bt.maxSteer/(1+i/(e?60:40))}var hp=["Persecuci\xF3n","Persecuci\xF3n lejana","Sobre el casco","Cockpit"],Qi=De.cam||0,ys=0,or=new O,ru=!1,Ia=0;function du(){Qi=(Qi+1)%hp.length,De.cam=Qi,sc(),dn("\u{1F3A5} "+hp[Qi],"",900)}function ly(n,t){let e=n.c,i=qn(e);Ia=Math.max(0,Ia-t*3);let s=e.surf&&e.surf.some(l=>l===1)?.6:0,r=e.surf&&e.surf.some(l=>l===2||l===3)?1:0,a=Ia+s*.04*Math.min(1,i/30)+r*.06*Math.min(1,i/20),o=(Math.random()-.5)*a,c=(Math.random()-.5)*a;if(Qi>=2&&!n.pit){let l=n.mesh;l.updateMatrixWorld();let u=(Qi===2?new O(0,1.22,-.3):new O(0,.82,.1)).applyMatrix4(l.matrixWorld);sn.position.set(u.x+o*.3,u.y+c*.3,u.z),sn.lookAt(new O(0,Qi===2?.9:.75,12).applyMatrix4(l.matrixWorld)),sn.fov=72+Math.min(10,i*.09)}else{let l=Qi===1,h=e.h;if(i>6&&e.vx>0){let[m,v]=Ki(e);h=au(e.h,Math.atan2(m,v),.35)}ru||(ys=h,ru=!0),ys=au(ys,h,Math.min(1,t*(l?4:6)));let u=(l?9.5:6.4)+Math.min(1.6,i*.012),f=l?3.4:2.15,d=new O(e.x-Math.sin(ys)*u,f,e.z-Math.cos(ys)*u);or.lerp(d,Math.min(1,t*14)),or.distanceTo(d)>30&&or.copy(d),sn.position.set(or.x+o,or.y+c,or.z),sn.lookAt(e.x+Math.sin(ys)*4,1,e.z+Math.cos(ys)*4),sn.fov=60+Math.min(14,i*.12)}sn.updateProjectionMatrix()}function au(n,t,e){let i=t-n;for(;i>Math.PI;)i-=2*Math.PI;for(;i<-Math.PI;)i+=2*Math.PI;return n+i*e}var ic=[[bt.a,.8],[bt.a,-.8],[-bt.b,.8],[-bt.b,-.8]];function cy(n,t){let e=n.c,i=qn(e),s=Math.sin(e.h),r=Math.cos(e.h),a=Math.cos(e.h),o=-Math.sin(e.h),c=t*60;for(let l=0;l<4;l++){let h=e.x+s*ic[l][0]+a*ic[l][1],u=e.z+r*ic[l][0]+o*ic[l][1],f=e.surf?e.surf[l]:0,d=e.dmg&&e.dmg[4+l]>=1,m=0;n.own&&e.kap?m=Math.max(-e.kap[l]*2.2,e.kap[l]*1.4,(e.use[l]-1.05)*1.6):m=(e.brk>.9&&i>15?.6:0)+Math.max(0,Math.abs(e.vy)-2.5)*.25,(f===0||f===1||f===4)&&i>4&&m>.45&&!d?su.add(n.id+l,h,u,s,r,l<2?.34:.42,(m-.4)*.7):su.cut(n.id+l),!(i<3)&&(d&&Math.random()<.9*c?Yn.emit(h,.1,u,(Math.random()-.5)*6,1+Math.random()*3,(Math.random()-.5)*6,1,.7,.25,.25,.4,1,1):(f===2||f===3)&&Math.random()<.2*c?Yn.emit(h,.3,u,(Math.random()-.5)*3+s*i*.2,1+Math.random(),(Math.random()-.5)*3+r*i*.2,f===3?.78:.45,f===3?.66:.4,f===3?.5:.25,.8,.9,.3):m>.7&&Math.random()<.45*c&&Yn.emit(h,.3,u,(Math.random()-.5)*2,.8+Math.random(),(Math.random()-.5)*2,.86,.86,.9,1,1.5,.32))}e.dmg&&e.dmg[10]>.35&&Math.random()<e.dmg[10]*.7*c&&Yn.emit(e.x-s*2,.9,e.z-r*2,Math.random()-.5,1.5,Math.random()-.5,.3,.3,.32,1.4,2.2,.45),i>55&&e.surf&&e.surf.some(l=>l===1)&&Math.random()<.3*c&&Yn.emit(e.x-s*1.5,.08,e.z-r*1.5,-s*6+(Math.random()-.5)*4,1+Math.random()*2,-r*6+(Math.random()-.5)*4,1,.75,.3,.18,.35,1,1)}function ou(n,t,e){for(let i=0;i<e;i++)Yn.emit(n,.4,t,(Math.random()-.5)*14,2+Math.random()*5,(Math.random()-.5)*14,1,.75,.25,.28,.6,1,1)}function hy(n,t){let e=[[1,.2,.2],[1,.85,.2],[.3,.6,1],[.3,1,.5],[1,.4,.9]];for(let i=0;i<6;i++)setTimeout(()=>{if(!Yn)return;let s=n+(Math.random()-.5)*40,r=28+Math.random()*18,a=t+(Math.random()-.5)*40,o=e[i%e.length];for(let c=0;c<45;c++){let l=Math.random()*Math.PI*2,h=Math.random()*Math.PI-Math.PI/2,u=10+Math.random()*6;Yn.emit(s,r,a,Math.cos(l)*Math.cos(h)*u,Math.sin(h)*u,Math.sin(l)*Math.cos(h)*u,o[0],o[1],o[2],.7,1.6,1,.25)}un.blip("pop")},i*380)}for(let n=0;n<15;n++){let t=document.createElement("i");t.className=n<5?"g":n<10?"r":"b",Tt("leds").appendChild(t)}var up=0;function dn(n,t="",e=1800){let i=Tt("msg");i.textContent=n,i.className="show "+t,clearTimeout(up),up=setTimeout(()=>i.className=t,e)}function uy(n,t=9e3){let e=Tt("hint");e.textContent=n,e.classList.remove("out"),setTimeout(()=>e.classList.add("out"),t)}function Ss(n){return n.finTime!=null?n.finTime+(n.pen||0):null}function hc(){let n=me.slice();return n.sort((t,e)=>{let i=Ss(t),s=Ss(e);return i!=null||s!=null?i!=null&&s!=null?i-s:i!=null?-1:1:(e.c.prog??-1e9)-(t.c.prog??-1e9)}),n}var fy=n=>n>=1?"#555":n<.05?"#2bd46a":n<.4?"#c7e43a":n<.75?"#ffb020":"#ff3030",Kh=0;function dy(n,t){let e=ft?ft.c:null,i=uc(t);if(e){Tt("spd").textContent=Math.round(Math.abs(e.vx)*3.6),Tt("gear").textContent=e.gear===-1?"R":e.gear===0?"N":e.gear;let s=Tt("leds").children,r=Math.max(0,Math.min(1,(e.rpm-9e3)/(bt.upRpm-9e3))),a=Math.round(r*15);for(let c=0;c<15;c++)s[c].classList.toggle("on",c<a);Tt("leds").classList.toggle("flash",!e.assist.auto&&e.rpm>bt.upRpm+100&&(t/80|0)%2===0),Tt("pThr").style.setProperty("--v",e.thr.toFixed(2)),Tt("pBrk").style.setProperty("--v",e.brk.toFixed(2)),Tt("drs").className=e.drs?"on":ft.drsAvail?"avail":"",Tt("tDrs").classList.toggle("avail",!!ft.drsAvail),Tt("tow").className=e.tow>.15?"on":"",Tt("bas").className=e.bAssist?"on":"",Tt("lim").className=e.limiter?"on":"";for(let c=0;c<11;c++){let l=Tt("d"+c);l&&(l.style.fill=fy(e.dmg[c]))}let o=e.dmg[4]>=1||e.dmg[5]>=1||e.dmg[6]>=1||e.dmg[7]>=1||e.dmg[2]>=1;Tt("dmgWarn").hidden=!(o&&!ft.pit&&ft.finTime==null)}if(Ut&&ft){let s=Math.max(1,Math.min(Ut.laps,ft.c.lap||0));Tt("lapN").textContent=(ft.finTime!=null?Ut.laps:s)+"/"+Ut.laps;let r=Ae==="race"&&ft.finTime==null&&i>0?i-ft.lapStart:0;Tt("clock").textContent=ft.finTime!=null?ai(ft.finTime):ai(Math.max(0,r)),Tt("tLast").textContent=ai(ft.last);let a=Tt("tBest");a.textContent=ai(ft.best),a.className=ft.best!=null&&Ut.fastest&&Ut.fastest.id===ft.id?"pb":"";let o=Tt("tDelta");if(ft.bestTrace&&ft.curTrace&&ft.c.lap>=2&&ft.finTime==null&&!ft.pit){let h=Math.floor(li(ft.c.ts)/50),u=ft.curTrace[h],f=ft.bestTrace[h];if(u!=null&&f!=null){let d=u-f;o.textContent=(d>=0?"+":"\u2212")+Math.abs(d).toFixed(2),o.className=d<0?"neg":"pos"}}else o.textContent="\u2014",o.className="";Tt("pen").hidden=!ft.pen,Tt("pen").textContent="+"+(ft.pen||0)+" s";for(let h=0;h<3;h++){let u=Tt("s"+h),f=ft.secCur[h]??(ft.secShow?ft.secShow[h]:null);u.textContent=f!=null?f.toFixed(1):"S"+(h+1),u.className=f==null?"":Ut.bestSec[h]!=null&&f<=Ut.bestSec[h]+1e-6?"purple":ft.secBest[h]!=null&&f<=ft.secBest[h]+1e-6?"green":"yellow"}let c=Tt("pitbox");if(ft.pit){c.hidden=!1;let h=ft.pit;h.phase==="stop"?(Tt("pitTxt").textContent=h.wait>.05?`EN BOXES \xB7 reparando ${h.wait.toFixed(1)} s`:"SALIENDO DE BOXES",Tt("pitBar").style.width=(100*(1-h.wait/h.total)).toFixed(1)+"%"):(Tt("pitTxt").textContent=h.phase==="in"?"ENTRANDO A BOXES \xB7 limitador 80 km/h":"SALIDA DE BOXES \xB7 limitador 80 km/h",Tt("pitBar").style.width="0%")}else c.hidden=!0;Tt("boxReq").hidden=!ft.boxReq||!!ft.pit;let l=!1;for(let h of cr){let u=h-li(ft.c.ts);u<0&&(u+=xt.L),u<400&&u>5&&(l=!0)}Tt("flagY").hidden=!l||Ae!=="race"}if(Kh-=n,Kh<=0&&Ut){Kh=.25;let s=hc(),r=s[0],a=`<div class="th"><span>${xt.def.name.toUpperCase()}</span><span>${Ae==="grid"?"LARGADA":"V"+Math.max(1,Math.min(Ut.laps,r&&r.c.lap||1))}</span></div>`;s.forEach((o,c)=>{let l="";if(o.pit)l="BOX";else if(c===0)l=o.finTime!=null?"\u{1F3C1}":"L\xEDder";else if(o.finTime!=null&&r.finTime!=null)l="+"+(Ss(o)-Ss(r)).toFixed(3);else if(r.c.prog-o.c.prog>xt.L)l="+"+Math.floor((r.c.prog-o.c.prog)/xt.L)+" V";else{let f=Math.floor((o.c.prog||0)/100),d=o.cp[f],m=r.cp[f];l=d!=null&&m!=null?"+"+Math.max(0,d-m).toFixed(1):""}let h=si[o.liv],u=o.c.dmg&&o.c.dmg.some(f=>f>=1)?" \u{1F527}":"";a+=`<div class="tr ${o===ft?"me":""} ${o.finTime!=null?"fin":""}" style="--c1:${h.c1}"><span class="p">${c+1}</span><span class="bar"></span><span class="n">${o.abbr}${u}${o.pen?" <em>+"+o.pen+"</em>":""}</span><span class="g">${l}</span></div>`}),Tt("tower").innerHTML=a}}function py(){let n=Tt("tracks");n.innerHTML="",Nh.forEach((i,s)=>{let r=document.createElement("button");r.className="tcard",r.dataset.i=s;let a=document.createElement("canvas");r.appendChild(a),ry(a,s),r.insertAdjacentHTML("beforeend",`<b>${i.name}</b><small>${i.desc} \xB7 ${(uu(s).L/1e3).toFixed(2)} km</small>`),r.onclick=()=>{Te&&(he.track=s,ri())},n.appendChild(r)}),Tt("laps").innerHTML=iy.map(i=>`<button data-n="${i}">${i}</button>`).join(""),Tt("laps").onclick=i=>{let s=+i.target.dataset.n;!s||!Te||(he.laps=s,ri())},Tt("diff").innerHTML=hu.map((i,s)=>`<button data-i="${s}">${i.n}</button>`).join(""),Tt("diff").onclick=i=>{let s=i.target.dataset.i;s==null||!Te||(he.diff=+s,ri())},Tt("botMinus").onclick=()=>{Te&&(he.bots=Math.max(0,he.bots-1),ri())},Tt("botPlus").onclick=()=>{Te&&(he.bots=Math.min(8-bp(),he.bots+1),ri())};let t=Tt("swatches");t.innerHTML="",si.forEach((i,s)=>{let r=document.createElement("button");r.className="sw",r.style.setProperty("--c1",i.c1),r.style.setProperty("--c2",i.c2),r.title=i.name,r.onclick=()=>{De.liv=s,sc(),fp()},t.appendChild(r)}),Tt("num").value=De.num,Tt("num").onchange=()=>{De.num=Math.max(1,Math.min(99,Math.round(+Tt("num").value||1))),Tt("num").value=De.num,sc(),fp()};let e={aAuto:"auto",aAbs:"abs",aTc:"tc",aSteer:"steer",aBrake:"brakeA",aLine:"line"};for(let[i,s]of Object.entries(e)){let r=Tt(i);r.checked=!!De[s],r.onchange=()=>{De[s]=r.checked,sc()}}Ii&&(Tt("aAuto").checked=!0,Tt("aAuto").disabled=!0),Tt("goBtn").onclick=my}function bp(){return oi.length}function pu(){return{liv:De.liv,num:De.num,ready:!!(he.cars[fn]&&he.cars[fn].ready)}}function fp(){let n=pu();he.cars[fn]=n,Te?ri():(Arcade.send("car",n,{to:Arcade.ctx.hostId}),hr()),En&&(Me.scene.remove(En),En=null)}function ri(){he.bots=Math.max(0,Math.min(8-bp(),he.bots)),Mn&&Arcade.send("lobby",he),hr()}function hr(){if(Ae!=="lobby")return;fu(he.track),document.querySelectorAll(".tcard").forEach(e=>{e.classList.toggle("sel",+e.dataset.i===he.track),e.disabled=!Te}),document.querySelectorAll("#laps button").forEach(e=>{e.classList.toggle("sel",+e.dataset.n===he.laps),e.disabled=!Te}),document.querySelectorAll("#diff button").forEach(e=>{e.classList.toggle("sel",+e.dataset.i===he.diff),e.disabled=!Te}),Tt("botN").textContent=he.bots,Tt("botMinus").disabled=Tt("botPlus").disabled=!Te,Tt("hostNote").hidden=Te,document.querySelectorAll(".sw").forEach((e,i)=>e.classList.toggle("sel",i===De.liv)),Tt("livName").textContent=si[De.liv].name;let n="";oi.forEach(e=>{let i=he.cars[e.id]||{liv:0,num:"?"},s=si[i.liv||0],r=e.id===(Mn?Arcade.ctx.hostId:fn),a=r||i.ready;n+=`<div class="prow ${e.id===fn?"me":""}" style="--c1:${s.c1};--c2:${s.c2}"><span class="num">${i.num}</span><span class="nm">${Ep(e.name)}${r?" \u{1F451}":""}</span><span class="st ${a?"ok":""}">${r?"HOST":a?"LISTO":"ELIGIENDO"}</span></div>`});for(let e=0;e<he.bots;e++)n+=`<div class="prow bot" style="--c1:#444;--c2:#666"><span class="num">\u{1F916}</span><span class="nm">${_p[e]} (bot)</span><span class="st">${hu[he.diff].n}</span></div>`;Tt("plist").innerHTML=n,Tt("pCount").textContent=`${oi.length+he.bots}/8`;let t=Tt("goBtn");if(Te){let e=oi.filter(i=>i.id!==fn&&!(he.cars[i.id]&&he.cars[i.id].ready));t.disabled=e.length>0,t.className="go",t.textContent=e.length?`ESPERANDO A ${e.length}\u2026`:"\u{1F3C1} LARGAR CARRERA",Tt("lbSub").textContent=Mn?"Eleg\xED el circuito y larg\xE1 cuando est\xE9n todos listos":"Modo pr\xE1ctica contra bots"}else{let e=he.cars[fn]&&he.cars[fn].ready;t.disabled=!1,t.className="go"+(e?" wait":""),t.textContent=e?"\u2714 LISTO \u2014 ESPERANDO AL HOST":"LISTO",Tt("lbSub").textContent="Eleg\xED tu auto y marc\xE1 Listo"}}var Ep=n=>String(n).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);function my(){if(un.init(),Te){gy();return}let n=pu();n.ready=!n.ready,he.cars[fn]=n,Arcade.send("car",n,{to:Arcade.ctx.hostId}),hr()}function gy(){let n=[];oi.forEach(s=>{let r=he.cars[s.id]||{liv:0,num:1};n.push({id:s.id,name:s.name,liv:r.liv,num:r.num,bot:!1})});let t=new Set(n.map(s=>s.liv)),e=new Set(n.map(s=>+s.num));for(let s=0;s<he.bots;s++){let r=s%10;for(let o=0;o<10&&t.has(r);o++)r=(r+1)%10;t.add(r);let a=3+Math.floor(Math.random()*95);for(;e.has(a);)a=3+Math.floor(Math.random()*95);e.add(a),n.push({id:"bot"+s,name:_p[s],liv:r,num:a,bot:!0,skill:hu[he.diff].k+(Math.random()-.5)*.035})}for(let s=n.length-1;s>0;s--){let r=Math.floor(Math.random()*(s+1));[n[s],n[r]]=[n[r],n[s]]}let i={track:he.track,laps:he.laps,grid:n,out:400+Math.floor(Math.random()*1800)};Mn&&Arcade.send("start",i),wp(i)}function wp(n,t=!1){Ae="grid",fu(n.track),Tt("lobby").hidden=!0,Tt("hud").hidden=!1,Tt("touch").hidden=!Ii,Tt("results").hidden=!0,me.forEach(i=>Me.scene.remove(i.mesh)),me=[],En&&(Me.scene.remove(En),En=null),rp(Me.props),lc.clear();let e=performance.now();Ut={laps:n.laps,start:e,outAt:e+5e3+n.out,t0:null,lights:0,fastest:null,finishes:{},closeAt:null,done:!1,grid:n.grid,bestSec:[null,null,null]},cr=[],n.grid.forEach((i,s)=>{let r=Hh(xt,s),[a,o]=Xe(xt,r.s,r.off),c=Fd(a,o,ii(xt,r.s));Ri(xt,c),c.lap=0,c.prevS=c.ts,c.half=!1,c.gridLap=!0,c.prog=c.ts-xt.L;let l=i.id===fn||i.bot&&Te;i.id===fn&&(c.assist={abs:De.abs,tc:De.tc,auto:De.auto||Ii}),i.bot&&(c.dmgScale=.6);let h=Wh(i.liv,i.num);Me.scene.add(h);let u={...i,slot:s,abbr:i.name.replace(/[^\p{L}\p{N}]/gu,"").slice(0,3).toUpperCase()||"P"+(s+1),c,mesh:h,own:l,snaps:[],cp:{},lapStart:0,last:null,best:null,finTime:null,brain:i.bot?Ql(i.skill||.92):null,ghost:0,stuck:0,pen:0,warn:0,secCur:[null,null,null],secBest:[null,null,null],secStart:0,pit:null};qh(h,c),me.push(u),i.id===fn&&(ft=u)}),me.includes(ft)||(ft=null),ru=!1,De.line&&ft&&xy(),uy(Ii?"\u25C0 \u25B6 doblar \xB7 ACEL / FRENO \xB7 DRS en las rectas \xB7 BOX = entrar a boxes \xB7 \u21BA = auxilio":"W/S acelerar y frenar \xB7 A/D doblar \xB7 Espacio DRS \xB7 P entrar a boxes \xB7 R auxilio \xB7 C c\xE1mara"),Tt("lights").className="",[...Tt("lights").children].forEach(i=>i.className=""),Me.setLights(0),t&&(Ut.outAt=e)}function xy(){let n=[],t=[],e=new kt("#ff2a2a"),i=new kt("#2bd46a"),s=new kt("#ffd21a");for(let a=0;a<xt.N;a++){let o=(a+1)%xt.N,c=xt.vmax[(a+3)%xt.N]<xt.vmax[a]-.15,l=xt.vmax[a]<60&&!c,h=c?e:l?s:i,u=(p,g)=>[xt.px[p]+xt.nx[p]*(xt.line[p]+g),xt.pz[p]+xt.nz[p]*(xt.line[p]+g)],f=u(a,-.22),d=u(a,.22),m=u(o,-.22),v=u(o,.22);n.push(f[0],.02,f[1],d[0],.02,d[1],m[0],.02,m[1],d[0],.02,d[1],v[0],.02,v[1],m[0],.02,m[1]);for(let p=0;p<6;p++)t.push(h.r,h.g,h.b)}let r=new we;r.setAttribute("position",new $t(n,3)),r.setAttribute("color",new $t(t,3)),iu=new Ht(r,new ze({vertexColors:!0,transparent:!0,opacity:.55,side:He,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3})),Me.scene.add(iu)}var uc=n=>Ut&&Ut.t0!=null?(n-Ut.t0)/1e3:0,li=n=>(n%xt.L+xt.L)%xt.L,lu=[];function _y(){lu=[];let n=xt.N,t=-1,e=s=>xt.vmax[s]>=90,i=0;for(;e(i)&&i<n;)i++;for(let s=0;s<=n;s++){let r=(i+s)%n;e(r)&&s<n?t<0&&(t=i+s):t>=0&&((i+s-t)*xt.ds>380&&lu.push({a:(t*xt.ds+90)%xt.L,b:((i+s)*xt.ds-40)%xt.L,det:li(t*xt.ds-160)}),t=-1)}}var vy=(n,t,e)=>t<=e?n>=t&&n<=e:n>=t||n<=e;function Tp(n){let t=[3,3,4,5,4,4,4,4,2,2,6];return 2.4+n.dmg.reduce((e,i,s)=>e+Math.min(1,i)*t[s],0)}function fc(){!ft||ft.pit||ft.finTime!=null||(ft.boxReq=!ft.boxReq,dn(ft.boxReq?"\u{1F4FB} BOX, BOX \u2014 entr\xE1 a boxes en esta vuelta":"Entrada a boxes cancelada",ft.boxReq?"gold":"",2e3))}function dc(){if(!ft||ft.pit||ft.finTime!=null)return;let n=cu(ft,!0);Tt("fade").classList.add("on"),setTimeout(()=>Tt("fade").classList.remove("on"),650),dn(`\u{1F69B} Auxilio: volv\xE9s a boxes (+${Math.round(n)} s)`,"gold",3200)}function cu(n,t){let e=n.c,i=xt.pit,s=i.boxes[n.slot%i.boxes.length],r=li(s),a=0;if(t){let o=li(e.ts);a=6+(o<=r?r-o:0)/50;let[l,h]=Xe(xt,s,i.lane+1.2);Object.assign(e,{x:l,z:h,h:ii(xt,s),vx:0,vy:0,r:0,steer:0,drs:!1});for(let f=0;f<4;f++)e.w[f]=0;Ri(xt,e),e.prevS=e.ts,e.half=!0;let u=Tp(e)+a;n.pit={phase:"stop",s,wait:u,total:u}}else n.pit={phase:"in",s:e.ts,d0:e.td,v:Math.max(Ms,e.vx)};return n.boxReq=!1,n.drsZone=null,Mn&&Arcade.send("pit",{id:n.id}),a}function yy(n,t){let e=n.c,i=xt.pit,s=n.pit,r=i.boxes[n.slot%i.boxes.length];if(s.phase==="in"||s.phase==="out"){let a=xt.rel(s.s);if(s.phase==="in"){let d=r-a,m=a<i.limitA?Math.max(Ms,s.v-12*t):Ms;d<30&&(m=Math.min(m,Math.max(1.5,d*.75))),s.v=Math.min(s.v,Math.max(m,s.v-12*t)),s.v>m&&(s.v=Math.max(m,s.v-12*t))}else s.v=Math.min(Ms,s.v+6*t);s.s+=s.v*t;let o=d=>{let m=xt.rel(d);return s.phase==="in"?m>r-25?i.lane+1.2*Math.min(1,(m-(r-25))/25):i.offsetAt(d,s.d0):m<r+25?i.lane+1.2*Math.max(0,1-(m-r)/25):i.offsetAt(d,i.lane)},[c,l]=Xe(xt,s.s,o(s.s)),[h,u]=Xe(xt,s.s+2,o(s.s+2));e.x=c,e.z=l,e.h=Math.atan2(h-c,u-l),e.vx=s.v,e.vy=0,e.r=0,e.steer=0,e.limiter=Ms,e.thr=.3,e.brk=s.phase==="in"&&s.v<15?.5:0,e.gear=Math.max(1,Math.min(3,Math.round(s.v/9))),e.rpm=6e3+s.v*120;for(let d=0;d<4;d++)e.w[d]=s.v/bt.R,e.rot[d]+=e.w[d]*t;let f=xt.rel(s.s);if(s.phase==="in"&&f>=r-.3){let d=Tp(e);n.pit={phase:"stop",s:r,wait:d,total:d},e.vx=0}else if(s.phase==="out"&&f>=i.outS){e.limiter=0,e.vx=Ms,n.pit=null,n.ghost=1;for(let d=0;d<4;d++)e.w[d]=e.vx/bt.R}}else s.phase==="stop"&&(e.vx=0,e.vy=0,e.thr=0,e.brk=0,e.rpm=4200+Math.random()*200,e.limiter=Ms,s.wait-=t,s.wait<=0&&(Gd(e),tp(n.mesh),n.pit={phase:"out",s:s.s,v:0},n===ft&&dn("\u{1F527} Auto reparado \u2014 \xA1sal\xED!","green",1600)));Ri(xt,e),kh(xt,e)&&Rp(n,performance.now())}function My(n){let t=n.c;if(n.bot||n.pit||n.finTime!=null||xt.street)return;let e=Math.abs(t.td)>xt.hw+2.3&&t.vx>15,i=Math.abs(hn(xt,xt.curv,t.ts))>1/350;e&&i&&!n.outNow?(n.outNow=!0,n.warn++,n.warn>=3&&(n.warn-3)%2===0?Ap(n,5,"L\xEDmites de pista"):n===ft&&dn(`\u26A0 L\xEDmites de pista (${Math.min(n.warn,3)}/3)`,"gold",1800)):!e&&Math.abs(t.td)<xt.hw&&(n.outNow=!1)}function Ap(n,t,e){n.penCd&&performance.now()<n.penCd||(n.penCd=performance.now()+4e3,n.pen=(n.pen||0)+t,n===ft&&(dn(`\u26D4 +${t} s de penalizaci\xF3n \xB7 ${e}`,"red",3e3),un.blip("hit")),Mn&&Arcade.send("pen",{id:n.id,pen:n.pen}))}var cr=[];function Sy(n){if(cr=[],!(Ae!=="race"||uc(n)<8)){for(let t of me){if(t.pit||t.finTime!=null)continue;let e=t.c,i=qn(e)<9,s=t.hitT&&n-t.hitT<3e3;(i||s)&&cr.push(li(e.ts))}if(Me.panels)for(let t of Me.panels){let e=!1;for(let i of cr){let s=i-t.s;s<0&&(s+=xt.L),s<320&&(e=!0)}t.m.emissiveIntensity=e?(n/300|0)%2?3:.4:0}}}function dp(n){let t=n.c,e=s=>Math.round(s*100)/100,i=t.dmg.map(s=>s>=1?9:Math.min(8,Math.floor(s*9))).join("");return[e(t.x),e(t.z),Math.round(t.h*1e3)/1e3,e(t.vx),e(t.vy),Math.round(t.steer*1e3)/1e3,Math.round(t.rpm),e(t.thr),e(t.brk),t.gear,e(t.prog||0),t.lap||0,n.ghost>0?1:0,i,n.pit?1:0]}function pp(n,t,e){n.snaps.push({t:e,x:t[0],z:t[1],h:t[2],vx:t[3],vy:t[4],st:t[5],rpm:t[6],thr:t[7],brk:t[8],gear:t[9],prog:t[10],lap:t[11],ghost:t[12],dm:t[13],pit:t[14]}),n.snaps.length>30&&n.snaps.shift()}function by(n,t,e){let i=n.snaps;if(!i.length)return;let s=t-110,r=i[0],a=null;for(let h=i.length-1;h>=0;h--)if(i[h].t<=s){r=i[h],a=i[h+1]||null;break}let o=n.c;if(a&&Math.hypot(a.x-r.x,a.z-r.z)<60){let h=(s-r.t)/Math.max(1,a.t-r.t);o.x=r.x+(a.x-r.x)*h,o.z=r.z+(a.z-r.z)*h,o.h=au(r.h,a.h,h),o.vx=r.vx+(a.vx-r.vx)*h,o.vy=r.vy+(a.vy-r.vy)*h}else{r=i[i.length-1];let h=Math.min(.25,(s-r.t)/1e3),u=Math.sin(r.h),f=Math.cos(r.h),d=Math.cos(r.h),m=-Math.sin(r.h);o.x=r.x+(r.vx*u+r.vy*d)*h,o.z=r.z+(r.vx*f+r.vy*m)*h,o.h=r.h,o.vx=r.vx,o.vy=r.vy}let c=a||r;if(o.steer=r.st,o.rpm=r.rpm,o.thr=r.thr,o.brk=r.brk,o.gear=r.gear,o.prog=c.prog,o.lap=c.lap,n.ghost=r.ghost?1:0,n.pit=c.pit?{phase:"remote"}:null,typeof c.dm=="string")for(let h=0;h<11;h++){let u=+c.dm[h];o.dmg[h]=u===9?1:u/9}for(let h=0;h<4;h++)o.w[h]=o.vx/bt.R,o.rot[h]+=o.w[h]*e;let l=Ri(xt,o);zh(xt,o,l)}function Ey(n,t){if(n.pit||n.c.lap<1){n.secIdx=null;return}let e=li(n.c.ts),i=e<xt.sectors[0]?0:e<xt.sectors[1]?1:2;if(n.secIdx==null){n.secIdx=i,n.secStart=t,n.secValid=i===0&&e<30;return}if(i!==n.secIdx){if(i===(n.secIdx+1)%3){let s=n.secIdx,r=t-n.secStart;n.secValid&&(n.secCur[s]=r,(n.secBest[s]==null||r<n.secBest[s])&&(n.secBest[s]=r),(Ut.bestSec[s]==null||r<Ut.bestSec[s])&&(Ut.bestSec[s]=r,Mn&&Arcade.send("sec",{k:s,t:r}))),i===0&&(n.secShow=n.secCur.slice(),n.secCur=[null,null,null])}n.secValid=i===(n.secIdx+1)%3,n.secIdx=i,n.secStart=t}}function Rp(n,t){let e=n.c,i=uc(t);if(e.lap>=2){let s=i-n.lapStart;n.lapStart=i,n.last=s;let r=n.best==null||s<n.best;r&&(n.best=s,n===ft&&(ft.bestTrace=ft.curTrace)),n===ft&&(ft.curTrace=[]);let a={id:n.id,lap:e.lap,last:s,best:n.best};if(Mn&&Arcade.send("lap",a),Cp(a),n===ft&&e.lap<=Ut.laps&&(Ut.fastest&&Ut.fastest.id===ft.id&&Ut.fastest.t===s?dn("VUELTA R\xC1PIDA  "+ai(s),"purple",2600):r?dn("MEJOR VUELTA PERSONAL  "+ai(s),"green",2400):dn(ai(s),"",1800),e.lap===Ut.laps&&Ut.laps>1&&setTimeout(()=>dn("\xDALTIMA VUELTA","gold",2e3),2700)),e.lap>Ut.laps&&n.finTime==null){n.finTime=i;let o={id:n.id,time:i,best:n.best,pen:n.pen||0};Mn&&Arcade.send("fin",o),Pp(o)}}else n.lapStart=0,n===ft&&(ft.curTrace=[])}function Cp(n){let t=me.find(e=>e.id===n.id);t&&(t.last=n.last,t.best=n.best,(!Ut.fastest||n.last<Ut.fastest.t)&&(Ut.fastest={id:n.id,t:n.last},t!==ft&&Ut.t0!=null&&n.lap>2&&dn(`\u{1F7E3} Vuelta r\xE1pida: ${t.abbr} ${ai(n.last)}`,"purple",2e3)))}function Pp(n){let t=me.find(i=>i.id===n.id);if(!t)return;t.finTime=n.time,t.best=n.best??t.best,t.pen=n.pen??t.pen,Ut.finishes[n.id]=n.time,Object.keys(Ut.finishes).length===1?(hy(xt.px[0],xt.pz[0]),t===ft?(dn("\u{1F3C1} \xA1CRUZASTE PRIMERO!","gold",4e3),un.blip("fanfare")):dn(`\u{1F3C1} ${t.name} cruza primero`,"gold",3e3),Te&&Ut.closeAt==null&&(Ut.closeAt=performance.now()+45e3)):t===ft&&dn(`\u{1F3C1} Terminaste P${hc().indexOf(ft)+1}`,"gold",3500)}function wy(n){if(!Te||!Ut||Ut.done)return;let t=me.filter(a=>!a.bot),e=me.filter(a=>a.bot),i=t.every(a=>a.finTime!=null);i&&Ut.lastHuman==null&&(Ut.lastHuman=n),t.length&&!i&&(Ut.lastHuman=null);let s=Object.keys(Ut.finishes).length>0,r=e.every(a=>a.finTime!=null);(s&&i&&(r||n-Ut.lastHuman>8e3)||Ut.closeAt&&n>Ut.closeAt)&&Ty()}function Ty(){Ut.done=!0;let n=hc(),t=n[0],e=n.map(a=>{let o;if(a.finTime!=null)o=a===t?ai(Ss(a)):"+"+(Ss(a)-Ss(t)).toFixed(3);else{let c=Math.max(1,Math.ceil(((t.c.prog||0)-(a.c.prog||0))/xt.L));o="+"+c+(c===1?" vuelta":" vueltas")}return{id:a.id,name:a.name,liv:a.liv,num:a.num,bot:a.bot,res:o,best:a.best,pen:a.pen||0}}),i={rows:e,fastest:Ut.fastest};Mn&&Arcade.send("res",i),La(i);let s=e[0],r=s&&!s.bot?[s.id]:[];setTimeout(()=>Arcade.end({winners:r,text:s?s.bot?`\u{1F3C1} Gan\xF3 ${s.name} (bot) en ${xt.def.name}`:`\u{1F3C1} ${s.name} gan\xF3 en ${xt.def.name}`:""}),12e3)}function La(n){Ae="done",Ut&&(Ut.done=!0),Tt("rsTable").innerHTML=n.rows.map((e,i)=>{let s=si[e.liv],r=n.fastest&&n.fastest.id===e.id;return`<tr class="p${i+1} ${e.id===fn?"me":""}" style="--c1:${s.c1}"><td>${i+1}</td><td class="nm"><i></i>${Ep(e.name)}${e.bot?" \u{1F916}":""} <small style="color:#888">#${e.num}</small>${e.pen?` <em class="penT">+${e.pen} s</em>`:""}</td><td class="t">${e.res}</td><td class="b ${r?"fl":""}">${e.best!=null?(r?"\u{1F7E3} ":"")+ai(e.best):""}</td></tr>`}).join(""),Tt("results").hidden=!1;let t=12;Tt("rsCount").textContent=`Volviendo al men\xFA en ${t}\u2026`,clearInterval(La.iv),La.iv=setInterval(()=>{t--,Tt("rsCount").textContent=t>0?`Volviendo al men\xFA en ${t}\u2026`:"Volviendo al men\xFA\u2026",t<=0&&clearInterval(La.iv)},1e3)}function Ay(n){let t=n.c,e=t.ts,[i,s]=Xe(xt,e,Math.max(-xt.hw+2,Math.min(xt.hw-2,hn(xt,xt.line,e))));t.x=i,t.z=s,t.h=ii(xt,e),t.vx=4,t.vy=0,t.r=0,t.steer=0,t.gear=1,t.tcCut=1;for(let r=0;r<4;r++)t.w[r]=4/bt.R;n.ghost=2.5,n.stuck=0,Ri(xt,t)}function Ry(n){let t=null;for(let e of me){if(e===n||e.pit)continue;let i=(e.c.prog||0)-(n.c.prog||0);i>0&&(!t||i<t.gap)&&(t={car:e,gap:i})}return t?(t.gapT=t.gap/Math.max(10,n.c.vx),t):null}var mp=performance.now(),Qh=0,jh=0,tu=0,gp=new ge;function Ip(n){requestAnimationFrame(Ip);let t=Math.min(.1,(n-mp)/1e3);if(mp=n,!Me)return;if(Ae==="lobby"||Ae==="boot"){Cy(t),cp();return}if(Ae==="grid"){let l=n-Ut.start,h=Math.max(0,Math.min(5,Math.floor(l/1e3)));h!==Ut.lights&&(Ut.lights=h,Me.setLights(h),[...Tt("lights").children].forEach((u,f)=>u.classList.toggle("on",f<h)),h>0&&un.blip("beep")),n>=Ut.outAt&&(Ae="race",Ut.t0=n,Me.setLights(0),Tt("lights").className="go",un.blip("go"),setTimeout(()=>Tt("lights").classList.add("hide"),1200),_y())}let e=Ae==="race"||Ae==="done",i=ay(t),s=uc(n);for(let l of me){if(!l.own)continue;let h=l.c;if(l.pit&&e){yy(l,t);continue}let u;if(l===ft&&l.finTime==null&&!lp)if(u={thr:i.thr,brk:i.brk,steer:oy(h,i.st,i.analog)},h.gear===-1){let p=u.thr;u.thr=u.brk,u.brk=p}else De.brakeA&&e&&Zd(xt,h,u);else l.brain||(l.brain=Ql(.85)),u=$d(xt,h,l.brain,me.map(p=>p.c),t),l.finTime!=null&&!l.bot&&(u.thr*=.6);if(u.dt=t,u.up=l===ft&&ac,u.down=l===ft&&oc,!e){h.thr+=(u.thr-h.thr)*Math.min(1,t*10),h.rpm+=(4e3+h.thr*7e3-h.rpm)*Math.min(1,t*8);continue}if(l.drsAvail=!1,Ut.laps>1&&(h.lap||0)>=2&&l.finTime==null)for(let p of lu){if(Math.abs(li(h.ts)-p.det)<25&&l.drsZone!==p){l.drsZone=null;let g=Ry(l);g&&g.gapT<1&&(l.drsZone=p)}l.drsZone===p&&vy(li(h.ts),p.a,p.b)&&(l.drsAvail=!0)}l.drsAvail&&h.dmg[3]<1&&(l===ft&&Da||l.bot&&h.thr>.95)&&(h.drs=!0),(!l.drsAvail||h.brk>.1)&&(h.drs=!1);let f=0;for(let p of me){if(p===l||p.pit)continue;let g=(p.c.prog||0)-(h.prog||0);g>0&&g<45&&Math.abs((p.c.td||0)-(h.td||0))<2.2&&(f=Math.max(f,1-g/45))}h.tow+=(f-h.tow)*Math.min(1,t*3),Bd(h,u)&&l===ft&&un.blip("shift"),h.broke=null;let m=h.ts,v=qd(xt,h,u,t);if(v>4){let p=h.lastHit||h;ou(p.x,p.z,Math.min(40,v*2|0)),l.hitT=n,l===ft&&(un.blip(v>14?"crash":"hit"),Ia=Math.min(1.4,v*.06))}if(h.broke&&h.broke.length&&xp(l,h.broke),kh(xt,h)&&Rp(l,n),Ey(l,s),My(l),l.boxReq&&l.finTime==null){let p=xt.rel(m),g=xt.rel(h.ts);p<xt.pit.inS&&g>=xt.pit.inS&&g-p<50&&cu(l,!1)}if(l.ghost>0&&(l.ghost-=t),l.hitDebris>0&&(l.hitDebris-=t),l!==ft||l.finTime!=null||lp){l.stuck=Math.abs(h.vx)<3||Math.abs(h.td)>xt.hw+6?l.stuck+t:0;let p=h.dmg[4]>=1||h.dmg[5]>=1||h.dmg[6]>=1||h.dmg[7]>=1||h.dmg[2]>=1;l.bot&&p&&l.finTime==null?cu(l,!0):l.stuck>3&&Ay(l)}}ac=oc=Da=!1;for(let l of me)l.own||by(l,n,t);if(e)for(let l=0;l<me.length;l++)for(let h=l+1;h<me.length;h++){let u=me[l],f=me[h];if(!u.own&&!f.own||u.ghost>0||f.ghost>0||u.pit||f.pit)continue;u.c.broke=null,f.c.broke=null;let d=Yd(u.c,f.c,u.own,f.own);if(d>3){(u===ft||f===ft)&&(un.blip(d>12?"crash":"hit"),Ia=Math.min(1,d*.05)),ou((u.c.x+f.c.x)/2,(u.c.z+f.c.z)/2,Math.min(30,d*2|0));for(let[m,v]of[[u,f],[f,u]])m.own&&!m.bot&&d>9&&(m.c.prog||0)<(v.c.prog||0)-1&&Ap(m,5,"Provocar un choque")}for(let m of[u,f])m.c.broke&&m.c.broke.length&&xp(m,m.c.broke)}for(let l of me){let h=Math.floor((l.c.prog||0)/100);if(e&&l.cp[h]==null&&h>=0&&(l.cp[h]=s),l===ft&&ft.curTrace&&e&&!ft.pit){let u=Math.floor(li(ft.c.ts)/50);ft.curTrace[u]==null&&(ft.curTrace[u]=s-ft.lapStart)}}if(Qh+=t,Mn&&Qh>=.05&&(Qh=0,ft&&ft.own&&Arcade.send("p",dp(ft),{volatile:!0}),Te)){let l=me.filter(h=>h.bot).map(h=>[h.id,...dp(h)]);l.length&&Arcade.send("b",l,{volatile:!0})}wy(n),Sy(n);let r=null;for(let l of me){qh(l.mesh,l.c);let h=Xh(l.mesh,l.c.dmg);for(let u of h)Lp(l,u);l.mesh.visible=!(l.ghost>0&&!l.pit&&(n/120|0)%2===0),l.mesh.userData.rain.material.emissiveIntensity=l.c.brk>.2?4:l.c.dmg[10]>.5||l.pit?(n/250|0)%2*3:.6,e&&!l.pit&&cy(l,t),l.pit&&qn(l.c)<.5&&(!r||l===ft)&&(r=l)}if(r){let l=Me.crew;l.visible=!0,l.position.set(r.c.x,0,r.c.z),l.rotation.y=r.c.h,l.children.forEach((h,u)=>{h.position.y=Math.abs(Math.sin(n/140+u))*.08})}else Me.crew.visible=!1;if(sp(Me.props,me,t),lc.update(t,me),Yn.update(t),tu+=t,Me.crowd&&tu>.08){tu=0;let l=Me.crowd,h=l.userData.pos,u=n/1e3,f=Ae==="done"?1:.35;for(let d=0;d<h.length;d++)gp.makeTranslation(h[d][0],h[d][1]+Math.max(0,Math.sin(u*7+d*1.7))*.25*f,h[d][2]),l.setMatrixAt(d,gp);l.instanceMatrix.needsUpdate=!0}let a=ft||hc()[0];if(a&&(ly(a,t),Me.followSun(a.c.x,a.c.z)),ft&&e&&ft.finTime==null&&!ft.pit){let l=ft.c.ti??0,h=Math.sin(ft.c.h)*xt.tx[l]+Math.cos(ft.c.h)*xt.tz[l];ft.wrongT=h<-.3&&qn(ft.c)>3?(ft.wrongT||0)+t:0,Tt("wrong").hidden=ft.wrongT<1}else Tt("wrong").hidden=!0;let o=null,c=1e9;for(let l of me)if(l!==ft){let h=Math.hypot(l.c.x-sn.position.x,l.c.z-sn.position.z);h<c&&(c=h,o=l.c)}un.update(ft?ft.c:null,o,c),dy(t,n),Mp.draw(),cp()}function xp(n,t){if(n===ft)for(let i of t)dn(`\u{1F4A5} ${kd[i]} ${i>=4&&i<=7?"\u2014 perdiste la rueda":"roto"}`,"red",2200);let e=Xh(n.mesh,n.c.dmg);for(let i of e)Lp(n,i)}function Lp(n,t){let e=n.mesh.userData.parts[t];e&&(e.visible=!0,lc.spawn(n.mesh,e,n.c),e.visible=!1,ou(n.c.x,n.c.z,10))}function Cy(n){if(jh+=n*.12,!En&&xt){En=Wh(De.liv,De.num);let t=Hh(xt,0),[e,i]=Xe(xt,t.s+6,0);En.position.set(e,0,i),En.rotation.y=ii(xt,t.s),Me.scene.add(En)}if(En){let t=En.position;sn.position.set(t.x+Math.cos(jh)*7.5,2.3,t.z+Math.sin(jh)*7.5),sn.fov=50,sn.updateProjectionMatrix(),sn.lookAt(t.x,.5,t.z),Me.followSun(t.x,t.z)}}function Py(){Arcade.on("lobby",n=>{Dp=!0,!(Te||Ae!=="lobby")&&(he=n,hr())}),Arcade.on("car",(n,t)=>{!Te||Ae!=="lobby"||!n||(he.cars[t]={liv:Math.max(0,Math.min(9,n.liv|0)),num:Math.max(1,Math.min(99,n.num|0)),ready:!!n.ready},ri())}),Arcade.on("hi",(n,t)=>{Te&&(n&&n.car&&(he.cars[t]={liv:Math.max(0,Math.min(9,n.car.liv|0)),num:Math.max(1,Math.min(99,n.car.num|0)),ready:!1}),Ae==="lobby"?ri():Ut&&Ut.grid&&Arcade.send("start",{track:nu,laps:Ut.laps,grid:Ut.grid,out:0,late:!0},{to:t}))}),Arcade.on("start",n=>{Te&&!n.late||wp(n,!!n.late)}),Arcade.on("p",(n,t)=>{let e=me.find(i=>i.id===t);e&&!e.own&&pp(e,n,performance.now())}),Arcade.on("b",n=>{if(Te)return;let t=performance.now();for(let e of n){let i=me.find(s=>s.id===e[0]);i&&!i.own&&pp(i,e.slice(1),t)}}),Arcade.on("lap",n=>{Ut&&Cp(n)}),Arcade.on("sec",n=>{Ut&&(Ut.bestSec[n.k]==null||n.t<Ut.bestSec[n.k])&&(Ut.bestSec[n.k]=n.t)}),Arcade.on("pen",n=>{let t=me.find(e=>e.id===n.id);t&&(t.pen=n.pen)}),Arcade.on("pit",n=>{let t=me.find(e=>e.id===n.id);t&&!t.own&&(t.snaps.length=0)}),Arcade.on("fin",n=>{Ut&&Pp(n)}),Arcade.on("res",n=>{Te||La(n)}),Arcade.onPlayerLeft(n=>{oi=oi.filter(e=>e.id!==n),delete he.cars[n];let t=me.find(e=>e.id===n);t&&(Me.scene.remove(t.mesh),me=me.filter(e=>e!==t),dn(`${t.name} abandon\xF3`,"",1800)),Ae==="lobby"&&(Te?ri():hr())}),Arcade.onHostChanged(()=>{let n=Te;if(Te=Arcade.isHost(),!n&&Te){for(let t of me)if(t.bot){t.own=!0,t.brain=Ql(t.skill||.92),t.pit=null;let e=t.snaps[t.snaps.length-1];e&&(Object.assign(t.c,{x:e.x,z:e.z,h:e.h,vx:e.vx,vy:e.vy,lap:e.lap,prog:e.prog}),Ri(xt,t.c),t.c.prevS=t.c.ts,t.c.half=!1)}Ae==="lobby"&&ri(),Ut&&!Ut.done&&Object.keys(Ut.finishes).length&&Ut.closeAt==null&&(Ut.closeAt=performance.now()+3e4)}})}var Dp=!1;Arcade.ready().then(n=>{if(Mn=!!n.online,fn=n.me.id,Te=Mn?!!n.isHost:!0,oi=n.players&&n.players.length?n.players.slice():[{id:fn,name:n.me.name||"Vos"}],he.cars[fn]={liv:De.liv,num:De.num,ready:!1},he.bots=Math.max(0,Math.min(8-oi.length,Mn?6-oi.length:5)),py(),Ae="lobby",fu(he.track),Tt("lobby").hidden=!1,hr(),Py(),Mn&&!Te){let t=()=>Arcade.send("hi",{car:pu()},{to:n.hostId});t();let e=0,i=setInterval(()=>{Ae!=="lobby"||++e>6?clearInterval(i):Dp||t()},1500)}setTimeout(()=>Tt("loading").classList.add("out"),200),requestAnimationFrame(Ip),window.__f1={get cars(){return me},get me(){return ft},get race(){return Ut},get T(){return xt},place(t,e,i=0){let s=ft.c,[r,a]=Xe(xt,t,i);Object.assign(s,{x:r,z:a,h:ii(xt,t),vx:e,vy:0,r:0});for(let o=0;o<4;o++)s.w[o]=e/bt.R;s.gear=6,s.ti=-1,Ri(xt,s),s.prevS=s.ts},rescue:()=>dc(),box:()=>fc()}});
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
