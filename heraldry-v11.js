/* Heraldic interpretation plates. These are modern schematics, never claims of personal armorial ownership. */
(function(){
  const details=document.getElementById('details');if(!details||typeof window.openItem!=='function')return;
  const emblemText={
    'Swart Family Association arms':{type:'swart',title:'SWART FAMILY ASSOCIATION',status:'Registered association arms • 15 June 1984',caption:'Modern schematic drawn from the official South African blazon. Not an archival image of the certificate and not personal hereditary arms.'},
    'Clan MacMillan crest badge':{type:'macmillan',title:'CLAN MACMILLAN',status:'Clan crest badge • chief’s arms remain personal',caption:'Stylised sword motif inspired by the clan description. This is not a facsimile of the badge or a family-owned coat of arms.'},
    'Malan family-associated shield':{type:'malan',title:'MALAN FAMILY SYMBOL',status:'Historically associated emblem • descent unproved',caption:'Decorative heraldic evocation only; the Malan Family Association notes the hereditary-right problem.'},
    'Whitney arms — unrelated until proved':{type:'whitney',title:'WHITNEY HERALDRY',status:'Historic Herefordshire arms • lineage unconnected',caption:'The question mark is deliberate. No armorial design is claimed for the Raunds Whitney family.'}
  };
  function art(type){
    const shield='M24 12H196V136Q196 182 110 220Q24 182 24 136Z';
    if(type==='swart')return '<svg viewBox="0 0 220 230" aria-hidden="true"><path d="'+shield+'" fill="#151515" stroke="#e9d49f" stroke-width="5"/><path d="M27 17H193V47H27Z M27 101H193V125H27Z" fill="#efefe9"/><g fill="none" stroke="#ddb85b" stroke-width="7" stroke-linecap="round"><path d="M49 61Q53 88 79 86Q95 85 94 67"/><path d="M130 67Q129 88 146 86Q169 86 170 61"/><path d="M60 64L49 56M158 64L170 56"/></g><g fill="#ddb85b"><path d="M107 157Q96 149 95 160C92 177 105 190 110 192C115 190 128 177 125 160Q123 149 112 157Z"/><path d="M106 149Q96 139 89 144Q97 150 106 151ZM114 149Q127 139 136 144Q127 150 114 151Z"/></g></svg>';
    if(type==='macmillan')return '<svg viewBox="0 0 220 230" aria-hidden="true"><circle cx="110" cy="111" r="87" fill="#1e3941" stroke="#deb778" stroke-width="15"/><circle cx="110" cy="111" r="71" fill="none" stroke="#f1d8a6" stroke-width="2"/><path d="M111 45L123 71L117 164H103L98 71Z" fill="#d3dce1" stroke="#8ca2a8" stroke-width="2"/><path d="M72 151H148V164H72Z M107 164H113V191H107Z" fill="#e1b765" stroke="#6f4c21" stroke-width="3"/><path d="M70 151Q84 134 99 150 M150 151Q136 134 121 150" stroke="#ecbe8c" stroke-width="9" fill="none"/><text x="110" y="25" text-anchor="middle" fill="#efcf91" font-size="10" letter-spacing="2">MACMILLAN</text></svg>';
    if(type==='malan')return '<svg viewBox="0 0 220 230" aria-hidden="true"><path d="'+shield+'" fill="#21555d" stroke="#d9bf82" stroke-width="5"/><path d="M66 109H154V158H66Z" fill="#efede2"/><path d="M58 100V90H70V83H83V90H96V82H107V90H120V82H133V90H145V83H158V100Z" fill="#f1eee2"/><rect x="104" y="125" width="17" height="33" fill="#27525a"/><path d="M30 172Q64 140 103 174Q138 149 189 174" fill="none" stroke="#91b18c" stroke-width="8"/><g fill="#d9b75b"><text x="52" y="67" font-size="24">⚜</text><text x="99" y="67" font-size="24">⚜</text><text x="144" y="67" font-size="24">⚜</text></g></svg>';
    return '<svg viewBox="0 0 220 230" aria-hidden="true"><path d="'+shield+'" fill="#48515a" stroke="#c5bca8" stroke-width="5" stroke-dasharray="8 5"/><text x="110" y="152" text-anchor="middle" font-size="104" font-family="Georgia,serif" fill="#f8e8cb">?</text></svg>';
  }
  const box=document.createElement('figure');box.className='heraldic-plate';box.id='heraldicPlate';box.hidden=true;
  const anchor=document.getElementById('dImageWrap');anchor.insertAdjacentElement('afterend',box);
  function setPlate(item){
    const entry=emblemText[item.name];box.hidden=!entry;if(!entry)return;
    box.innerHTML='<div class="plate-art">'+art(entry.type)+'</div><figcaption><strong>'+entry.title+'</strong><span>'+entry.status+'</span><small>'+entry.caption+'</small></figcaption>';
  }
  const base=window.openItem;
  window.openItem=function(item,room){base(item,room);setPlate(item)};
  const iconText=['✧','⚔','⚜','?'];
  document.querySelectorAll('.room[data-room="heraldry-hall"] .exhibit').forEach((b,i)=>{
    const stamp=document.createElement('span');stamp.className='heraldry-stamp';stamp.textContent=iconText[i]||'✦';stamp.setAttribute('aria-hidden','true');b.prepend(stamp);
  });
  const card=document.querySelector('.story-card[data-region="Symbols"]');
  if(card){
    const visual=card.querySelector('.story-image');if(visual){
      const img=visual.querySelector('img');if(img)img.style.display='none';
      visual.classList.add('heraldry-card-visual');
      const wrap=document.createElement('div');wrap.className='heraldry-card-symbol';wrap.innerHTML=art('swart');visual.insertBefore(wrap,visual.querySelector('.photo-label'));
      const label=visual.querySelector('.photo-label');if(label)label.textContent='Schematic • association arms';
      const credit=visual.querySelector('.photo-credit');if(credit)credit.textContent='Modern diagram of official blazon; not personal heraldry';
    }
    const provenance=card.querySelector('.photo-source');if(provenance){provenance.href='https://www.nationalarchives.gov.za/node/3110767';provenance.textContent='View official heraldic registration';}
  }
})();
