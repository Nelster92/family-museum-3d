(function(){
  function load(src){return new Promise((resolve,reject)=>{const s=document.createElement('script');s.src=src;s.onload=resolve;s.onerror=reject;document.body.appendChild(s);});}
  load('updates-v06.js')
    .catch(err=>console.warn('v0.6 enrichment failed; continuing with stable data',err))
    .then(()=>load('updates-v07.js').catch(err=>console.warn('v0.7 notable-relations layer failed; continuing',err)))
    .then(()=>load('updates-v08.js').catch(err=>console.warn('v0.8 anthropology layer failed; continuing',err)))
    .finally(()=>load('app-core.js').then(()=>{
      const rc=document.getElementById('roomCount');if(rc)rc.textContent='Gallery 1 of '+rooms.length;
      const tl=document.getElementById('timelineBtn');if(tl&&!document.getElementById('drawer').classList.contains('open'))tl.textContent='Timeline';
    }).catch(err=>{console.error(err);const st=document.getElementById('status');if(st)st.textContent='Museum core failed to load';}));
})();
