/* v1.1: interactive story atlas and inspectable corrections. Loaded after app-core.js. */
(function(){
  const cfg=window.MUSEUM_V11;
  if(!cfg){console.warn('Story atlas data missing');return;}
  const shell=document.querySelector('.shell'),intro=shell&&shell.querySelector('.intro'),museum=shell&&shell.querySelector('.museum');
  if(!shell||!intro||!museum)return;
  const section=document.createElement('section');
  section.className='story-atlas';section.id='storyAtlas';section.setAttribute('aria-labelledby','storyAtlasTitle');
  section.innerHTML='<div class="story-atlas-head"><div><span class="eyebrow">The lives behind the lineage</span><h2 id="storyAtlasTitle">Stories worth stepping into</h2><p>Explore refugee mothers, businesswomen, teachers, wartime workers and the symbols that followed the family. Every photograph is captioned as a real place, a museum reconstruction or a historical context image — never an invented portrait.</p></div><div class="stamp">Museum edition 1.1<br>Women · work · migration<br>Sources & amendments</div></div><div class="story-filters" role="group" aria-label="Filter stories"><button class="story-filter" data-filter="All" aria-pressed="true">All stories</button><button class="story-filter" data-filter="Cape" aria-pressed="false">The Cape</button><button class="story-filter" data-filter="Britain" aria-pressed="false">Britain</button><button class="story-filter" data-filter="Symbols" aria-pressed="false">Heraldry</button></div><div class="story-grid" id="storyGrid"></div><div class="story-interpretation"><strong>How to read the pictures:</strong> these are documented photographs of places, sites, historic workplaces or later museum reconstructions. A photographed site is not necessarily an ancestor’s own house or workplace. Individual ancestry claims and material culture are kept separate in each source drawer.</div>';
  intro.insertAdjacentElement('afterend',section);
  const grid=section.querySelector('#storyGrid');
  function elt(tag,cls,text){const x=document.createElement(tag);if(cls)x.className=cls;if(text)x.textContent=text;return x;}
  const cards=[];
  for(let i=0;i<cfg.storyCards.length;i++){
    const s=cfg.storyCards[i];
    const card=elt('article','story-card');card.dataset.region=s.region;
    const photo=elt('div','story-image');
    const img=elt('img');img.src=s.image;img.alt=s.credit+' — contextual illustration of the history, not a family portrait';img.loading='lazy';img.decoding='async';img.referrerPolicy='no-referrer';img.onerror=()=>{img.style.display='none'};
    photo.append(img,elt('span','photo-label',s.region==='Britain'?'Historic livelihood / place':s.region==='Symbols'?'Symbolic context':'Cape history / place'));
    photo.appendChild(elt('div','photo-credit',s.credit));
    const body=elt('div','story-card-main');
    body.append(elt('div','story-meta',s.caption),elt('h3','',s.title),elt('p','',s.hook));
    const b=elt('button','story-action','Enter this story →');b.type='button';b.addEventListener('click',()=>{
      const room=rooms.find(r=>r.id===s.id),item=room&&room.items.find(x=>x.name===s.item);
      if(!room||!item)return;
      showRoom(room.id);
      openItem(item,room);
      museum.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'start'});
    });
    const l=elt('a','photo-source','View photo provenance');l.href=s.photoPage;l.rel='noopener noreferrer';l.target='_blank';l.setAttribute('aria-label','Open photo source and licence for '+s.title);
    body.append(b,l);card.append(photo,body);grid.append(card);cards.push(card);
  }
  section.querySelectorAll('.story-filter').forEach(b=>b.addEventListener('click',()=>{
    const filter=b.dataset.filter;
    section.querySelectorAll('.story-filter').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));
    cards.forEach(x=>{x.hidden=filter!=='All'&&x.dataset.region!==filter});
  }));
  const ledger=document.createElement('details');ledger.className='research-ledger';ledger.id='researchLedger';
  const summary=elt('summary','', 'Research diary · what changed and why');
  const inner=elt('div','ledger-inside');inner.appendChild(elt('p','','Every substantive correction is recorded here. Previous readings are shown for comparison, not silently replaced. Linked sources document the basis for an amendment; some still need original record images.'));
  const tab=elt('table','ledger-table');tab.innerHTML='<thead><tr><th scope="col">Exhibit</th><th scope="col">Earlier reading</th><th scope="col">Current interpretation</th><th scope="col">Evidence</th></tr></thead>';
  const tbody=document.createElement('tbody');
  cfg.amendments.forEach(([name,oldValue,newValue,url])=>{
    const tr=document.createElement('tr');tr.append(elt('td','',name),elt('td','',oldValue),elt('td','',newValue));
    const td=document.createElement('td');const a=elt('a','','Source / research →');a.href=url;a.rel='noopener noreferrer';a.target='_blank';td.appendChild(a);tr.appendChild(td);tbody.appendChild(tr);
  });
  tab.appendChild(tbody);inner.appendChild(tab);ledger.append(summary,inner);
  museum.insertAdjacentElement('afterend',ledger);
  // A graceful way to jump to the research diary from the museum’s existing navigation.
  const goto=elt('button','btn ghost','Research notes');goto.type='button';goto.addEventListener('click',()=>{ledger.open=true;ledger.scrollIntoView({behavior:'smooth',block:'start'})});
  const header=document.querySelector('.header-actions');if(header)header.insertBefore(goto,header.lastElementChild);
  // Keep any pre-existing footer, but offer a useful explanatory note.
  const footer=document.querySelector('footer');if(footer){footer.title='Historic photographs are place or occupation context unless the particular ancestor is independently identified. See photo source links.'}
})();
