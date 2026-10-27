(function(){
  function load(src){return new Promise((resolve,reject)=>{const s=document.createElement('script');s.src=src;s.onload=resolve;s.onerror=reject;document.body.appendChild(s);});}
  load('updates-v06.js').catch(err=>console.warn('v0.6 enrichment failed; loading stable museum core',err)).finally(()=>load('app-core.js').catch(err=>{console.error(err);const st=document.getElementById('status');if(st)st.textContent='Museum core failed to load';}));
})();
