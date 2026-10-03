(() => {
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const pages=[
['İlk Anlar','...','Bazen bir bakış bütün hikâyeyi değiştirebilir…\n\nO gün, hayatımın en güzel tesadüfünü yaşıyordum, haberim yoktu.\n\nİyi ki o gün oradaydın…','O gün seni ilk kez gördüğümde, sadece güzel biri olduğunu düşündüm. Ama zamanla tüm hayatımın en güzel kısmı olacağını anladım…\n\nİyi ki varsın ♡'],
['İlk Gülüş','...','Bazı anlar çok kısa sürer ama insanın içinde uzun uzun kalır. Senin gülüşün de onlardan biri oldu.','Sen gülünce, dünyanın sesi biraz kısılıyor.'],
['Birlikte','...','Birlikte geçirdiğimiz her gün, birbirimizi biraz daha tanıdığımız başka bir sayfaya dönüştü.','En güzel tesadüf: aynı hikâyede buluşmak.'],
['Küçük Mutluluklar','...','Büyük şeylerden çok, kimsenin fark etmediği küçük anları seviyorum. Çünkü bizim hikâyemiz biraz da onlardan oluşuyor.','Mutluluk bazen sadece yanında oturmaktır.'],
['Bir Akşam','...','Şehir ışıkları uzakta, gökyüzü üstümüzdeydi. Yanımda sen vardın. O an başka hiçbir şeye ihtiyacım yoktu.','Bazı gecelerin adı hatıradır.'],
['Gülüşün','...','Ne kadar yorulmuş olursam olayım, senin gülüşünde bütün günün ağırlığını unutabiliyorum.','Sen gülünce dünya biraz daha güzel.'],
['Bizim Şarkımız','...','Bazı şarkılar artık sadece şarkı değildir. Birkaç nota duyarsın ve bir anda başka bir zamana dönersin.','Bu şarkı artık biraz da bizim.'],
['Yeni Bir Yıl','...','Takvim değişti. Ama dileğim hiç değişmedi: daha çok anı, daha çok kahkaha, daha çok sen.','Yeni yılın en güzel tarafı: sen.'],
['Birbirimizi Öğrenirken','...','Birbirimizi tanırken dinlemeyi, anlamayı ve bazen hiçbir şey söylemeden sarılmanın yeterli olduğunu öğrendik.','Her gün senden yeni bir şey öğreniyorum.'],
['Uzakta Bile','...','Aynı yerde olmadığımız zamanlarda bile aramızdaki bağın mesafeden çok daha büyük olduğunu gördüm.','Mesafe, özlemenin başka bir adı.'],
['Bir Bahar Günü','...','Hava değişti, şehir renk değiştirdi. Biz de yeni mevsime birlikte girdik.','Mevsimler değişir, biz kalırız.'],
['Sürprizler','...','Beklemediğimiz anda gelen küçük sürprizler, sonradan en çok hatırladığımız anlara dönüştü.','En güzel şeyler plansız gelir.'],
['Bir Fotoğraf','...','Bir fotoğrafa bakınca sadece görüntüyü değil; o saniyedeki sesi, kokuyu ve kalp çarpıntısını da hatırlıyorum.','Bir kareye koskoca bir gün sığar.'],
['Yaz Akşamı','...','Güneş geç battı, akşam uzadı. Konuştuk, güldük, sustuk. Sessizlik bile güzel geldi.','Seninle sessizlik bile sohbet.'],
['Kahkahalar','...','Bazen neye güldüğümüzü bile hatırlamıyorum. Sadece çok güldüğümüzü hatırlıyorum.','En sevdiğim anılar: birlikte güldüklerimiz.'],
['Bir Yolculuk','...','Yolun kendisi kadar yan koltukta kimin olduğu da önemli. Bizim yollarımız birlikte güzelleşti.','Nereye gittiğimizden çok, kiminle gittiğimiz.'],
['Gün Batımı','...','Bir an durup etrafa baktım. İyi ki bu hikâyenin içindeyim dedim.','Bazı manzaraların bir adı vardır: sen.'],
['Bir Sonbahar','...','Yapraklar dökülürken bile içimizde yeni şeyler büyüyordu. Zaman geçtikçe hikâyemiz derinleşti.','Değişen mevsimler, değişmeyen biz.'],
['Bir Yıl','...','Bir yıl… Ne kadar çok anı, ne kadar çok gülüş, ne kadar çok “iyi ki”.','İlk yılın özeti: iyi ki sen.'],
['İkinci Bahar','...','Artık bazı cümleleri tamamlamana gerek yok. Bir bakışın yetiyor.','Seni anlamanın en güzel yolu seni tanımaya devam etmek.'],
['Bugün','...','Bugün geriye baktığımda tek bir şey görüyorum: birlikte biriktirdiğimiz hayatı.','Daha yazılacak çok sayfa var.'],
['İyi Ki','...','Hayatın bütün ihtimalleri arasında seninle karşılaşmış olmak, benim en sevdiğim tesadüf.','İyi ki varsın. İyi ki biz varız.'],
['İki Yıl','...','İki yıl önce bir tarih başladı. Bugün o tarihin içine yüzlerce küçük anı sığdı.','09.10.2024 → sonsuza kadar'],
['Bizim Sayfamız','Bugün','Bundan sonrası boş bir sayfa gibi önümüzde. İçine daha çok fotoğraf, daha çok video, daha çok kahkaha sığacak.','Hikâyenin en güzel kısmı: daha bitmemiş olması.'],
['Devamı…','∞','Bu son sayfa değil. Sadece şimdiye kadar yazdığımız kısmın son satırı.','Gerisini birlikte yazacağız. ∞']
];
let current=0;

/* Lock */
$('#showPass').onclick=()=>$('#pass').type=$('#pass').type==='password'?'text':'password';
$('#lockForm').onsubmit=e=>{e.preventDefault();if($('#pass').value==='09102024'){startCinema()}else{$('#wrong').classList.add('show');$('#pass').animate([{transform:'translateX(-8px)'},{transform:'translateX(8px)'},{transform:'translateX(0)'}],{duration:300})}};

/* Post-password: romantic night sky + fireworks + live relationship counter. */
const mc=$('#meteorCanvas'),ctx=mc.getContext('2d');
let W,H,dpr,skyRAF,skyStars=[],dust=[],fireworks=[],launchers=[],cinemaTimer;
function size(){
  dpr=Math.min(devicePixelRatio||1,2); W=innerWidth; H=innerHeight;
  mc.width=W*dpr; mc.height=H*dpr; mc.style.width=W+'px'; mc.style.height=H+'px';
  ctx.setTransform(dpr,0,0,dpr,0,0);
  skyStars=Array.from({length:Math.min(520,Math.floor(W*H/3600))},()=>({
    x:Math.random()*W,y:Math.random()*H,r:Math.random()*1.5+.12,
    a:.18+Math.random()*.72,tw:.6+Math.random()*1.8,ph:Math.random()*Math.PI*2,
    drift:(Math.random()-.5)*.018
  }));
  dust=Array.from({length:110},()=>({x:Math.random()*W,y:Math.random()*H*.82,r:.2+Math.random()*1.6,a:.025+Math.random()*.12}));
}
addEventListener('resize',size); size();

function burst(x,y){
  const palettes=[['#fff4dc','#efb27b','#e9a3bb'],['#fff7e8','#dca06b','#f4c5d2'],['#ffffff','#f0b56f','#d998b2']];
  const colors=palettes[Math.floor(Math.random()*palettes.length)];
  const count=65+Math.floor(Math.random()*45), speed=1.6+Math.random()*2.7;
  for(let i=0;i<count;i++){
    const a=Math.random()*Math.PI*2, sp=speed*(.55+Math.random()*.75);
    fireworks.push({x,y,vx:Math.cos(a)*sp,vy:Math.sin(a)*sp,life:1,decay:.010+Math.random()*.008,size:.7+Math.random()*1.35,color:colors[i%colors.length],trail:[]});
  }
}
function launch(){
  const x=W*(.13+Math.random()*.74), target=H*(.18+Math.random()*.35);
  launchers.push({x,y:H+10,vx:(Math.random()-.5)*.5,vy:-7.5-Math.random()*2.5,target,life:1,color:['#efb27b','#e9a3bb','#fff1cf'][Math.floor(Math.random()*3)]});
}
function drawFireworks(){
  ctx.save();ctx.globalCompositeOperation='lighter';
  for(let i=launchers.length-1;i>=0;i--){
    const l=launchers[i];
    ctx.globalAlpha=.9*l.life;ctx.fillStyle=l.color;ctx.beginPath();ctx.arc(l.x,l.y,2.1,0,Math.PI*2);ctx.fill();
    ctx.strokeStyle=l.color;ctx.globalAlpha=.28;ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(l.x,l.y);ctx.lineTo(l.x-l.vx*5,l.y-l.vy*5);ctx.stroke();
    l.x+=l.vx;l.y+=l.vy;l.vy+=.035;
    if(l.y<=l.target){burst(l.x,l.y);launchers.splice(i,1)}
  }
  for(let i=fireworks.length-1;i>=0;i--){
    const p=fireworks[i];
    p.trail.push([p.x,p.y]); if(p.trail.length>5)p.trail.shift();
    for(let j=1;j<p.trail.length;j++){
      ctx.globalAlpha=p.life*(j/p.trail.length)*.24;ctx.strokeStyle=p.color;ctx.lineWidth=p.size*(j/p.trail.length);ctx.beginPath();ctx.moveTo(p.trail[j-1][0],p.trail[j-1][1]);ctx.lineTo(p.trail[j][0],p.trail[j][1]);ctx.stroke();
    }
    ctx.globalAlpha=p.life;ctx.fillStyle=p.color;ctx.shadowBlur=9;ctx.shadowColor=p.color;ctx.beginPath();ctx.arc(p.x,p.y,p.size,0,Math.PI*2);ctx.fill();ctx.shadowBlur=0;
    p.x+=p.vx;p.y+=p.vy;p.vy+=.018;p.vx*=.995;p.vy*=.995;p.life-=p.decay;
    if(p.life<=0)fireworks.splice(i,1);
  }
  ctx.restore();
}
let lastLaunch=0;
function drawSky(ms){
  const t=ms*.001;
  ctx.clearRect(0,0,W,H);
  const bg=ctx.createRadialGradient(W*.5,H*.38,0,W*.5,H*.55,Math.max(W,H)*.85);
  bg.addColorStop(0,'#18213a');bg.addColorStop(.28,'#0b1429');bg.addColorStop(.62,'#040916');bg.addColorStop(1,'#010207');
  ctx.fillStyle=bg;ctx.fillRect(0,0,W,H);
  ctx.save();ctx.translate(W*.53,H*.38);ctx.rotate(-.34);
  const mw=ctx.createRadialGradient(0,0,0,0,0,W*.65);
  mw.addColorStop(0,'rgba(203,211,239,.13)');mw.addColorStop(.28,'rgba(103,127,182,.065)');mw.addColorStop(1,'transparent');
  ctx.fillStyle=mw;ctx.fillRect(-W*.7,-H*.45,W*1.4,H*.9);ctx.restore();
  for(const d of dust){ctx.globalAlpha=d.a*(.75+.25*Math.sin(t*.2+d.x));ctx.fillStyle='#dce4f5';ctx.beginPath();ctx.arc(d.x,d.y,d.r,0,Math.PI*2);ctx.fill()}
  for(const s of skyStars){
    s.x+=s.drift;if(s.x<0)s.x=W;if(s.x>W)s.x=0;
    const tw=.62+.38*Math.sin(t*s.tw+s.ph),a=Math.max(.035,s.a*tw);
    if(s.r>1.02){const g=ctx.createRadialGradient(s.x,s.y,0,s.x,s.y,s.r*6);g.addColorStop(0,`rgba(255,249,229,${a})`);g.addColorStop(1,'rgba(255,249,229,0)');ctx.fillStyle=g;ctx.beginPath();ctx.arc(s.x,s.y,s.r*6,0,Math.PI*2);ctx.fill()}
    ctx.globalAlpha=a;ctx.fillStyle='#fff8e6';ctx.beginPath();ctx.arc(s.x,s.y,s.r,0,Math.PI*2);ctx.fill();
  }
  ctx.globalAlpha=1;
  if(ms-lastLaunch>1150+Math.random()*1700){launch();lastLaunch=ms}
  drawFireworks();
  skyRAF=requestAnimationFrame(drawSky);
}
function startCinema(){
  $('#lock').style.transition='opacity 1s,transform 1.1s';$('#lock').style.opacity=0;$('#lock').style.transform='scale(1.025)';
  setTimeout(()=>{
    $('#lock').classList.remove('active');$('#cinema').classList.add('active');
    cancelAnimationFrame(skyRAF);fireworks=[];launchers=[];lastLaunch=0;
    startCounter();requestAnimationFrame(drawSky);
    clearTimeout(cinemaTimer);cinemaTimer=setTimeout(()=>openJournal(),14000);
  },850);
}
function openJournal(){
  clearTimeout(cinemaTimer);$('#cinema').style.transition='opacity 1.2s';$('#cinema').style.opacity=0;
  setTimeout(()=>{$('#cinema').classList.remove('active');$('#cinema').style.opacity='';cancelAnimationFrame(skyRAF);$('#journal').classList.add('active');render()},1200);
}

/* Live relationship counter — calendar-aware years / months / days + clock. */
const startDate=new Date('2024-10-09T00:00:00+03:00');let counterTimer;
function counter(){
  const now=new Date();let y=now.getFullYear()-startDate.getFullYear(),m=now.getMonth()-startDate.getMonth(),d=now.getDate()-startDate.getDate();
  if(d<0){m--;const prevMonth=new Date(now.getFullYear(),now.getMonth(),0).getDate();d+=prevMonth}
  if(m<0){y--;m+=12}
  const base=new Date(now.getFullYear(),now.getMonth(),now.getDate(),startDate.getHours(),startDate.getMinutes(),startDate.getSeconds());
  let ms=now-base;if(ms<0){d--;ms+=86400000}
  let total=Math.floor(ms/1000); const sec=total%60; total=Math.floor(total/60); const mins=total%60; total=Math.floor(total/60); const hrs=total;
  if(d<0){d+=30; m=Math.max(0,m-1)}
  $('#counter').textContent=`${y} yıl · ${m} ay · ${d} gün · ${hrs} saat · ${mins} dk · ${sec} sn`;
}
function startCounter(){clearInterval(counterTimer);counter();counterTimer=setInterval(counter,1000)}
$('#openJournal').onclick=openJournal;

/* Journal */
const DB_NAME='semih-enise-v5-media',DB_VERSION=2,STORE='photos',VIDEO_STORE='videos';
let mediaDBPromise;
function openMediaDB(){
  if(mediaDBPromise)return mediaDBPromise;
  mediaDBPromise=new Promise((resolve,reject)=>{
    const r=indexedDB.open(DB_NAME,DB_VERSION);
    r.onupgradeneeded=()=>{if(!r.result.objectStoreNames.contains(STORE))r.result.createObjectStore(STORE);if(!r.result.objectStoreNames.contains(VIDEO_STORE))r.result.createObjectStore(VIDEO_STORE)};
    r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error);
  });
  return mediaDBPromise;
}
async function getSavedPhoto(pageIndex,slot){
  try{const db=await openMediaDB();return await new Promise((resolve,reject)=>{const q=db.transaction(STORE,'readonly').objectStore(STORE).get(`${pageIndex}-${slot}`);q.onsuccess=()=>resolve(q.result||null);q.onerror=()=>reject(q.error)})}catch(e){return null}
}
async function savePhoto(pageIndex,slot,blob){const db=await openMediaDB();return new Promise((resolve,reject)=>{const q=db.transaction(STORE,'readwrite').objectStore(STORE).put(blob,`${pageIndex}-${slot}`);q.onsuccess=resolve;q.onerror=()=>reject(q.error)})}
async function deletePhoto(pageIndex,slot){const db=await openMediaDB();return new Promise((resolve,reject)=>{const q=db.transaction(STORE,'readwrite').objectStore(STORE).delete(`${pageIndex}-${slot}`);q.onsuccess=resolve;q.onerror=()=>reject(q.error)})}
async function clearPagePhotos(pageIndex){const db=await openMediaDB();return new Promise((resolve,reject)=>{const tx=db.transaction(STORE,'readwrite'),st=tx.objectStore(STORE);for(let i=0;i<3;i++)st.delete(`${pageIndex}-${i}`);tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error)})}
async function getSavedVideo(pageIndex,slot=0){try{const db=await openMediaDB();return await new Promise((resolve,reject)=>{const q=db.transaction(VIDEO_STORE,'readonly').objectStore(VIDEO_STORE).get(`${pageIndex}-${slot}`);q.onsuccess=()=>resolve(q.result||null);q.onerror=()=>reject(q.error)})}catch(e){return null}}
async function saveVideo(pageIndex,slot,blob){const db=await openMediaDB();return new Promise((resolve,reject)=>{const q=db.transaction(VIDEO_STORE,'readwrite').objectStore(VIDEO_STORE).put(blob,`${pageIndex}-${slot}`);q.onsuccess=resolve;q.onerror=()=>reject(q.error)})}
async function clearPageVideos(pageIndex){const db=await openMediaDB();return new Promise((resolve,reject)=>{const tx=db.transaction(VIDEO_STORE,'readwrite'),st=tx.objectStore(VIDEO_STORE);for(let i=0;i<10;i++)st.delete(`${pageIndex}-${i}`);tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error)})}
async function deleteVideo(pageIndex,slot=0){const db=await openMediaDB();return new Promise((resolve,reject)=>{const q=db.transaction(VIDEO_STORE,'readwrite').objectStore(VIDEO_STORE).delete(`${pageIndex}-${slot}`);q.onsuccess=resolve;q.onerror=()=>reject(q.error)})}

const STATIC_PHOTOS=["media/pages/01/photo1.png", null, "media/pages/03/photo1.jpeg", "media/pages/04/photo1.jpeg", null, "media/pages/06/photo1.jpeg", null, "media/pages/08/photo1.jpeg", "media/pages/09/photo1.jpeg", "media/pages/10/photo1.jpeg", "media/pages/11/photo1.jpeg", null, null, null, null, "media/pages/16/photo1.jpeg", null, "media/pages/18/photo1.jpeg", "media/pages/19/photo1.jpeg", null, "media/pages/21/photo1.jpeg", "media/pages/22/photo1.jpeg", "media/pages/23/photo1.jpeg", "media/pages/24/photo1.jpeg", "media/pages/25/photo1.jpg"];
const STATIC_VIDEOS=[null, "media/pages/02/video.mp4", null, null, "media/pages/05/video.mp4", null, "media/pages/07/video.mp4", null, null, null, null, "media/pages/12/video.mp4", "media/pages/13/video.mp4", "media/pages/14/video.mp4", "media/pages/15/video.mp4", null, "media/pages/17/video.mp4", null, null, "media/pages/20/video.mp4", null, null, null, null, null];
function mediaFor(i){
  const src=STATIC_PHOTOS[i];
  return [src, null, null];
}
function showPlaceholder(slot=0){$('#photoWrap').classList.remove('has-photo');$('#photoPlaceholder small').textContent=`Fotoğraf eklemek için “＋ Fotoğraf Ekle” butonuna bas. (Fotoğraf ${slot+1}/3)`}
function loadMainPhoto(src){const img=$('#mainPhoto');img.onload=()=>$('#photoWrap').classList.add('has-photo');img.onerror=()=>{img.removeAttribute('src');showPlaceholder()};img.src=src}
async function slotSource(pageIndex,slot){const saved=await getSavedPhoto(pageIndex,slot);if(saved)return URL.createObjectURL(saved);return mediaFor(pageIndex)[slot]}
const EDIT_KEY='semih-enise-v5-page-texts';
function getPageData(i){
  try{const all=JSON.parse(localStorage.getItem(EDIT_KEY)||'{}'); const o=all[i]||{}; const p=pages[i]; return [o.title ?? p[0],o.date ?? p[1],o.left ?? p[2],o.secret ?? p[3]];}catch(e){return pages[i];}
}
function savePageData(i,data){
  let all={}; try{all=JSON.parse(localStorage.getItem(EDIT_KEY)||'{}')}catch(e){}
  all[i]={title:data[0],date:data[1],left:data[2],secret:data[3]}; localStorage.setItem(EDIT_KEY,JSON.stringify(all));
}
function openEdit(){
  const p=getPageData(current); $('#editTitle').value=p[0]; $('#editDate').value=p[1]; $('#editLeft').value=p[2]; $('#editSecret').value=p[3];
  $('#editModal').classList.add('open'); $('#editModal').setAttribute('aria-hidden','false'); setTimeout(()=>$('#editTitle').focus(),50);
}
function closeEdit(){$('#editModal').classList.remove('open');$('#editModal').setAttribute('aria-hidden','true');}
$('#editPage').onclick=openEdit; $('#closeEdit').onclick=closeEdit; $('#cancelEdit').onclick=closeEdit;
$('#editModal').onclick=e=>{if(e.target.id==='editModal')closeEdit()};
$('#saveEdit').onclick=async()=>{
  const data=[$('#editTitle').value.trim()||pages[current][0],$('#editDate').value.trim()||pages[current][1],$('#editLeft').value.trim()||pages[current][2],$('#editSecret').value.trim()||pages[current][3]];
  savePageData(current,data); closeEdit(); await render();
};
async function render(){
  const p=getPageData(current);$('#pageNum').textContent=current+1;$('#photoDate').textContent=p[1];$('#leftText').textContent=p[2];$('#rightText').textContent=p[3];$('#clickHint').textContent='↳ Fotoğrafa tıklayınca sürpriz bir not belirir...';
  await renderThumbs();
  const first=await slotSource(current,0);loadMainPhoto(first);await renderVideo();renderIndex();
}
async function renderVideo(){
  const v=await getSavedVideo(current,0);
  const wrap=$('#videoWrap'),el=$('#mainVideo');
  const photo=$('#mainPhoto'), placeholder=$('#photoPlaceholder');
  const staticVideo=STATIC_VIDEOS[current];

  if(v){
    wrap.hidden=false;
    photo.style.visibility='hidden';
    placeholder.style.visibility='hidden';
    if(el.src && el.src.startsWith('blob:')) URL.revokeObjectURL(el.src);
    el.src=URL.createObjectURL(v);
  }else if(staticVideo){
    // GitHub/static version: use the numbered video committed inside the page folder.
    el.src=staticVideo;
    el.onerror=()=>{
      el.removeAttribute('src'); el.load(); wrap.hidden=true;
      photo.style.visibility=''; placeholder.style.visibility='';
    };
    wrap.hidden=false;
    photo.style.visibility='hidden';
    placeholder.style.visibility='hidden';
    el.load();
  }else{
    el.removeAttribute('src'); el.load(); wrap.hidden=true;
    photo.style.visibility=''; placeholder.style.visibility='';
  }
}
async function renderThumbs(){
  const wrap=$('#thumbs');wrap.innerHTML='';
  for(let i=0;i<3;i++){
    const b=document.createElement('button');b.className='thumb'+(i===0?' active':'');const im=document.createElement('img');im.alt=`Fotoğraf ${i+1}`;
    const saved=await getSavedPhoto(current,i);
    if(saved){im.src=URL.createObjectURL(saved);im.onload=()=>URL.revokeObjectURL(im.src)}
    else {im.src=mediaFor(current)[i];im.onerror=()=>{im.style.display='none';b.classList.add('empty');b.setAttribute('data-slot',String(i+1))}}
    b.appendChild(im);b.onclick=async()=>{const src=await slotSource(current,i);loadMainPhoto(src);$$('.thumb').forEach(x=>x.classList.remove('active'));b.classList.add('active')};wrap.appendChild(b);
  }
}
function renderIndex(){
  const g=$('#indexGrid');g.innerHTML='';
  pages.forEach((_,i)=>{const p=getPageData(i);const b=document.createElement('button');b.className='index-item'+(i===current?' current':'');b.innerHTML=`<b>${String(i+1).padStart(2,'0')}</b><span>${p[0]}</span>`;b.onclick=()=>{current=i;$('#indexPanel').classList.remove('open');render()};g.appendChild(b)})
}
async function flip(dir){current=Math.max(0,Math.min(24,current+dir));const page=$('#photoWrap');page.animate([{transform:`rotate(${dir>0?1:-1}deg) translateX(${dir>0?30:-30}px)`,opacity:.25},{transform:'rotate(-1deg) translateX(0)',opacity:1}],{duration:650,easing:'cubic-bezier(.2,.8,.25,1)'});render()}
$('#next').onclick=()=>flip(1);$('#prev').onclick=()=>flip(-1);addEventListener('keydown',e=>{if(!$('#journal').classList.contains('active'))return;if(e.key==='ArrowRight')flip(1);if(e.key==='ArrowLeft')flip(-1);if(e.key==='Escape'){$('#indexPanel').classList.remove('open');$('#secretNote').classList.remove('open')}});
$('#photoWrap').onclick=()=>{const p=getPageData(current);$('#secretText').textContent=p[3];$('#secretNote').classList.add('open')};$('#closeSecret').onclick=()=>$('#secretNote').classList.remove('open');$('#index').onclick=()=>$('#indexPanel').classList.add('open');$('#closeIndex').onclick=()=>$('#indexPanel').classList.remove('open');
const photoInput=$('#photoInput');
photoInput.onchange=async()=>{
  const files=[...photoInput.files].filter(f=>f.type.startsWith('image/'));
  for(const file of files){
    let slot=-1;for(let i=0;i<3;i++){if(!(await getSavedPhoto(current,i))){slot=i;break}}
    if(slot<0)slot=0;
    await savePhoto(current,slot,file);
  }
  photoInput.value='';await render();
};
$('#clearPhotos').onclick=async()=>{if(confirm('Bu sayfadaki eklediğin fotoğraf ve videolar silinsin mi?')){await clearPagePhotos(current);await clearPageVideos(current);await render()}};
async function removeCurrentVideo(){
  try{
    const v=$('#mainVideo');
    v.pause();
    v.removeAttribute('src');
    v.load();
    await deleteVideo(current,0);
    $('#videoWrap').hidden=true;
    await render();
  }catch(err){
    console.error(err);
    alert('Video silinemedi. Lütfen sayfayı yenileyip tekrar deneyin.');
  }
}
window.removeCurrentVideo=removeCurrentVideo;
['deleteVideo','deleteVideo2'].forEach(id=>{
  const b=$('#'+id);
  if(b)b.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();removeCurrentVideo()});
});
$('#videoWrap').addEventListener('click',e=>e.stopPropagation());
const videoInput=$('#videoInput');videoInput.onchange=async()=>{const files=[...videoInput.files].filter(f=>f.type.startsWith('video/'));for(const file of files){await saveVideo(current,0,file);break;}videoInput.value='';await render();};

let tx=0;$('#journal').addEventListener('touchstart',e=>tx=e.changedTouches[0].clientX,{passive:true});$('#journal').addEventListener('touchend',e=>{const dx=e.changedTouches[0].clientX-tx;if(Math.abs(dx)>50)flip(dx<0?1:-1)},{passive:true});
})();
