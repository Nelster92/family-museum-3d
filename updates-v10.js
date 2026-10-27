(function(){
  const SRC={
    malagasyBaptism:'https://sarecords.eggsa.org/index.php/church-registers/cape-town-baptisms-1695-1712/159-burgher-slave-baptisms-1696-1712',
    lijsbetFS:'https://ancestors.familysearch.org/en/LBVY-8MW/lijsbet-van-malagasij-1676',
    sarahGretna:'https://www.devilsporridge.org.uk/hm-factory-gretna-workers-database/name/sarah-moore',
    sydneyRoll:'https://www.roll-of-honour.com/Yorkshire/Swinton.html',
    whitney:'https://www.jefferies.id.au/g1/p740.htm',
    barnard:'https://www.greeff.info/tng01/familygroup.php?familyID=F159&tree=PedigreeJMGreeff',
    barnardAdam:'https://greeff.info/tng01/getperson.php?personID=I314&tree=PedigreeJMGreeff',
    boyceCase:'https://www.nationalarchives.gov.za/search-the-collections/repository/2760/type_of_archive/Correspondence%20File-260/repository/2664?field_end_date_date=&field_start_date_date=&items_per_page=10&page=293226&search_api_views_fulltext=&search_api_views_fulltext_op=AND',
    ivy:'https://www.jefferies.id.au/g1/p740.htm'
  };
  function room(id){return rooms.find(r=>r.id===id)}
  function item(roomId,name){const r=room(roomId);return r&&r.items.find(i=>i.name===name)}
  function insertBefore(targetId,newRoom){if(rooms.some(r=>r.id===newRoom.id))return;const i=rooms.findIndex(r=>r.id===targetId);if(i<0)rooms.push(newRoom);else rooms.splice(i,0,newRoom)}

  // --- New maternal-origin room: strong evidence, careful about the one unnamed-child bridge.
  insertBefore('women-cape',{
    id:'women-madagascar',
    name:'Women of the Family · Madagascar to the Cape',
    era:'1670s–1700s · coerced migration, baptism & a maternal line under reconstruction',
    accent:'#8f735f',
    hero:IMG.cape,
    credit:'Historic Table Bay context · Nationaal Archief / Wikimedia Commons',
    context:'This is one of the most significant new research leads in the museum. A 1698 Cape baptism register names a mother as “Lysbet van Malagasij” — Lysbet from Madagascar. Later genealogies connect the unnamed child in that entry to Elisabeth/Lijsbeth Vion or Villion “van de Caep”, wife of Jan Human. Because the child is unnamed in the original entry, the final identity bridge is shown as strong/probable rather than fully closed.',
    guide:'Read this room as an evidence trail, not a finished legend. The original baptism proves the parents and Malagasy maternal origin. The later Human connection is highly plausible and repeatedly reconstructed, but the missing child-name in 1698 means one documentary handoff still needs to be found.',
    items:[
      {name:'Lysbet van Malagasij',dates:'born c.1670s · Madagascar → Cape',evidence:'Named in 1698 Cape baptism register',type:'Probable direct maternal ancestor',occupation:'Colonial-status history still being reconstructed',story:'The Cape baptism register records “Lysbet van Malagasij” as mother of a child baptised on 26 December 1698. The origin-name points directly to Madagascar. This matters because a line that later appears under European surnames may preserve the ancestry of a woman brought into the early Cape colonial world from the western Indian Ocean.',connection:'Probable route: Lysbet van Malagasij → Elisabeth/Lijsbeth Vion/Villion van de Caep → Human line → Johanna Christina Human → Swart line. The first mother-to-daughter identity bridge remains to be closed with an explicit record.',places:['Madagascar','Cape of Good Hope'],objects:['1698 baptism register','Burgher/slave baptism book','Witness names'],sources:[['Cape baptism transcription — 26 Dec 1698',SRC.malagasyBaptism],['FamilySearch profile used only as a compiled lead',SRC.lijsbetFS]]},
      {name:'The unnamed child — 26 December 1698',dates:'Cape Town baptism register',evidence:'Near-primary transcription; child not named',type:'Key evidence gap',occupation:'—',story:'The surviving transcription states that a child of Dirk van Amersfoort and Lysbet van Malagasij was baptised under witnesses Jacob Pleunis and Willemijntie de Wit, but the child’s name is absent. This is precisely why the museum does not yet label the later Elisabeth Vion identity as fully proven.',connection:'Finding an original image, duplicate register, marriage entry or later record explicitly naming the child would turn this from a strong reconstruction into a closed documentary chain.',places:['Cape Town'],objects:['Baptism entry','Witness network','Duplicate-register search target'],sources:[['South African Records Transcribed',SRC.malagasyBaptism]]},
      {name:'Elisabeth / Lijsbeth Vion “van de Caep”',dates:'c.1698 · Cape-born generation',evidence:'Strong compiled genealogy; primary bridge still sought',type:'Maternal-line reconstruction',occupation:'Cape household / family role',story:'Later genealogical reconstructions identify Elisabeth or Lijsbeth Vion/Villion “van de Caep” as the daughter linked to the 1698 baptism and as the wife of Jan Human. “Van de Caep” is an origin-label — from the Cape — rather than simply a European family surname.',connection:'Elisabeth/Lijsbeth Vion → Human descendants → Johanna Christina Human → Gerhardus Paulus Swart → later Swart branch.',places:['Cape Colony'],objects:['Marriage/baptism target','Human family records','Cape-origin naming'],sources:[['1698 parent evidence',SRC.malagasyBaptism],['Compiled identity lead',SRC.lijsbetFS]]},
      {name:'Why the name disappeared',dates:'18th–19th century',evidence:'Genealogical interpretation',type:'Women, status & surnames',occupation:'Maternal ancestry obscured by later surnames',story:'Once a woman entered the Human line, the visible pedigree became Human and later Swart. A conventional surname-first tree therefore makes this maternal origin almost disappear. The Women of the Family wing restores that hidden line while keeping the uncertain documentary step visible.',connection:'Human → Swart is already present in the main tree; this room explains what may lie behind the maternal side of that Human ancestry.',places:['Cape Colony','later South Africa'],objects:['Church registers','Marriage naming','Maternal-line map'],sources:[['Cape baptism evidence',SRC.malagasyBaptism]]}
    ]
  });

  // --- Correct Sarah's role everywhere it appears.
  let x=item('yorkshire','Sarah Ann Hartley');
  if(x){
    x.occupation='Canteen worker / assistant at HM Factory Gretna';
    x.evidence='Family link + Gretna worker research';
    x.story='During the First World War Sarah went to Gretna, where the worker research places her assisting in a canteen within the vast HM Factory complex. That still put her inside one of Britain’s most unusual wartime industrial communities, but current evidence does not justify calling her a cordite-production worker.';
    x.objects=['Gretna worker research','Canteen life','Marriage/court records target'];
    x.sources=[['Devil’s Porridge Museum — Sarah Moore worker record',SRC.sarahGretna]];
  }
  x=item('yorkshire-life','Sarah at Gretna');
  if(x){
    x.occupation='Canteen worker / assistant inside HM Factory Gretna';
    x.story='The Gretna worker research places Sarah at the factory in 1917 assisting in a canteen, rather than proving direct explosives manufacture. The move gave her paid work and separation from her marital home within a vast wartime workplace dominated numerically by women.';
    x.connection='Directly relevant to Sarah Ann Hartley’s wartime life; this corrects the museum’s earlier overstatement that she was necessarily a munitions-production worker.';
    x.sources=[['Sarah Moore — HM Factory Gretna workers database',SRC.sarahGretna]];
  }
  x=item('women-gretna','Sarah Ann Hartley');
  if(x){
    x.dates='b. 8 Jul 1873 · Castleford · Gretna from 1917';
    x.evidence='Gretna worker research + family link';
    x.occupation='Canteen worker / assistant at HM Factory Gretna';
    x.story='Research on Sarah Moore identifies her as Sarah Ann Hartley, born 8 July 1873 at Castleford, daughter of Richard and Elizabeth Hartley. She married Sidney/Sydney John Moore on 31 October 1891 at Pontefract Register Office. In 1917 she went to Gretna and assisted in a canteen within HM Factory Gretna. A 1918 court report preserved in the same research records marital violence and a maintenance order after she left Sydney, making Gretna part of a documented story of work, separation and survival — not merely wartime novelty.';
    x.places=['Castleford','Pontefract','Rotherham/Swinton','Gretna'];
    x.objects=['Marriage certificate target','Gretna worker record','1918 court report'];
    x.sources=[['Devil’s Porridge Museum — Sarah Moore worker record',SRC.sarahGretna]];
  }
  x=item('women-gretna','Freedom under supervision');
  if(x){x.connection='This was the institutional world around Sarah at Gretna, while her own documented role was in canteen work rather than proven cordite production.'}

  // Replace the least evidence-rich Raunds exhibit with a named family woman from the 1939 Register.
  const wr=room('women-raunds');
  if(wr && !wr.items.some(i=>i.name==='Dorothy Merrill Whitney')){
    const keep=wr.items.filter(i=>i.name!=='Female-line continuity');
    keep.splice(1,0,{name:'Dorothy Merrill Whitney',dates:'10 Dec 1917–Nov 1985 · Raunds',evidence:'1939 Register cited',type:'Named working woman',occupation:'Coat machinist',story:'Dorothy, Ernest Whitney’s sister, was recorded in the 1939 Register as a coat machinist while living at 68 Marshalls Road, Raunds. In the same household Ernest was a boot-and-shoe stitcher and Peter a boot-and-shoe clicker. This gives the museum a documented family example of women’s machine work alongside the better-known footwear trades.',connection:'Dorothy was a daughter of William Whitney and Elsie Harriet Merrill and sister of Ernest James Merrill Whitney.',places:['68 Marshalls Road, Raunds'],objects:['1939 Register','Machinist work','Shared industrial household'],sources:[['Whitney household / 1939 Register citations',SRC.whitney]]});
    wr.items=keep.slice(0,4);
  }

  // Add archival Barnard-Boyce evidence to the archive room without pretending the modern parent-child bridge is solved.
  const ar=room('archive');
  if(ar){
    const ev=ar.items.find(i=>i.name==='Evidence scale');
    const repl={name:'Barnard → Boyce archival bridge',dates:'1960 archive case · modern link still being proved',evidence:'South African National Archives catalogue',type:'Strong archival lead',occupation:'Family relationship evidence',story:'The Pietermaritzburg Archives catalogue contains a 1960 divorce action titled “John Boyce versus Johannes Nicolaas Boyce (born Barnard) and Phillip Snyman”, reference ZA NAB RSC_1/5/618_I301/1960_1. This independently proves that a Barnard-born person entered the Boyce family. It does not by itself prove that this person is the exact child/descendant currently placed beneath Anna Maria Swart and Marthinus Gerhardus Barnard, so that modern bridge remains under verification.',connection:'This is powerful evidence for the Barnard → Boyce transition while keeping the precise parentage question open.',places:['Pietermaritzburg Archives Repository','South Africa'],objects:['1960 court-file catalogue','Archive reference I301/1960','Modern-generation parentage target'],sources:[['NARSSA catalogue — John Boyce case',SRC.boyceCase]]};
    if(ev) ar.items[ar.items.indexOf(ev)]=repl; else if(!ar.items.some(i=>i.name===repl.name)) ar.items.push(repl);
  }

  // Strengthen only the Barnard generations supported by church-register citations.
  const bb=treeBranches.find(b=>b.title==='Barnard line');
  if(bb){
    let p=bb.people.find(p=>p.name==='Johannes Barnard / Bernard');
    if(p){p.life='Cape marriage 2 Mar 1710 · d. 1727';p.spouse='Sara Pietersz Strand';p.note='Early Cape Barnard progenitor. Greeff genealogy cites the NG Kerk Cape Town marriage register for the 2 Mar 1710 marriage.';p.proof='supported'}
    p=bb.people.find(p=>p.name==='Adam Barnard');
    if(p){p.life='bapt. 2 Sep 1714 · Cape Town';p.spouse='Lea le Roux';p.note='Baptism and 20 Jun 1734 Stellenbosch marriage are cited to Cape/Stellenbosch church registers in the Greeff genealogy.';p.proof='supported'}
    p=bb.people.find(p=>p.name==='Nicolaas J Barnard');
    if(p){p.note='Modern bridge still being resolved. A 1960 archive file independently names Johannes Nicolaas Boyce (born Barnard) in a case brought by John Boyce, but the exact parent-child link to this Barnard line must still be demonstrated.';p.proof='provisional'}
  }

  // Add a cautious tree branch for the Malagasy/Human route.
  if(!treeBranches.some(b=>b.title==='Malagasy → Vion → Human → Swart — maternal research line')){
    treeBranches.push({title:'Malagasy → Vion → Human → Swart — maternal research line',people:[
      {name:'Lysbet / Lijsbet van Malagasij',life:'17th century · Madagascar → Cape',spouse:'Dirk van Amersfoort / Vion',note:'Named as the mother in a 26 Dec 1698 Cape baptism entry. Malagasy origin is explicit in the record transcription.',proof:'supported'},
      {name:'Unnamed child baptised 26 Dec 1698',life:'Cape Town',spouse:'—',note:'Parents are named as Dirk and Lysbet; the child’s name is absent in the surviving transcription. This is the key unresolved identity bridge.',proof:'open'},
      {name:'Elisabeth / Lijsbeth Vion “van de Caep”',life:'c.1698 · Cape-born',spouse:'Jan / Johann Human',note:'Later genealogies identify her with the 1698 child and place her in the Human line; explicit record joining the identities still sought.',proof:'provisional'},
      {name:'Hans Jurgen Human',life:'baptised 1719 · Cape Town',spouse:'Johanna Christina Blom',note:'Human descendant generation already represented in the main family tree.',proof:'supported'},
      {name:'Johanna Christina Human',life:'1789–1844',spouse:'Gerhardus Paulus Swart',note:'Human ancestry enters the Swart branch here.',proof:'supported'}
    ]});
  }

  // Make the Sydney Moore research target more precise.
  const moore=treeBranches.find(b=>b.title==='Moore → Adamson');
  if(moore){
    let p=moore.people.find(p=>p.name==='Sydney John Moore');
    if(p){p.note='Coal-mining identity under active reconstruction. The highest-value target is his 31 Oct 1891 Pontefract Register Office marriage to Sarah Ann Hartley, which should name his father and help connect the Somerset-born Moore line.';p.proof='open'}
    p=moore.people.find(p=>p.name==='Ethel May / Mae Adamson');
    if(p){p.note='Ivy’s 1924 birth index independently confirms mother’s maiden surname Adamson. Ethel/Ethal May/Mae’s exact forenames and parentage still require the full birth certificate or another primary record.';p.proof='provisional'}
  }

  // A few research milestones for the timeline.
  if(typeof timelineData!=='undefined'){
    if(!timelineData.some(e=>e[1]==='Lysbet from Madagascar in the Cape register')) timelineData.push(['1698','Lysbet from Madagascar in the Cape register','A Cape baptism entry names Lysbet van Malagasij as mother of a child baptised on 26 December. Later genealogy may connect that child into the Human → Swart line; one identity bridge remains open.']);
    if(!timelineData.some(e=>e[1]==='Sarah moves to Gretna')) timelineData.push(['1917','Sarah moves to Gretna','Sarah Ann Hartley/Moore is placed at HM Factory Gretna assisting in a canteen; later court reporting makes this part of a documented separation and survival story.']);
    if(!timelineData.some(e=>e[1]==='Barnard → Boyce archive evidence')) timelineData.push(['1960','Barnard → Boyce archive evidence','A Pietermaritzburg archive catalogue independently records John Boyce versus Johannes Nicolaas Boyce (born Barnard), strengthening the modern Barnard/Boyce transition while exact parentage remains under research.']);
  }

  // Environment for the new maternal-origin room.
  const style=document.createElement('style');
  style.textContent=`
    .room[data-room="women-madagascar"] .back{background:linear-gradient(180deg,#ddd0b9 0 66%,#9d7d5e 66% 69%,#b69a78 69%);box-shadow:inset 0 0 110px rgba(61,39,24,.25)}
    .room[data-room="women-madagascar"] .side{background:linear-gradient(90deg,#b89e79,#ddd0b9 38%,#b89e79);}
    .room[data-room="women-madagascar"] .floor{background:repeating-linear-gradient(90deg,#5f4633 0 58px,#493525 58px 62px)}
    .room[data-room="women-madagascar"] .artifact{border-radius:50% 45% 52% 48%;background:radial-gradient(circle at 40% 35%,#d9c39b,#75543b 62%,#3f2b1f);}
    .room[data-room="women-madagascar"] .hero-frame{border-color:#563d2b}
  `;
  document.head.appendChild(style);

  const ft=document.querySelector('footer');
  if(ft) ft.textContent='Version 1.0 · deep-research update · Malagasy maternal lead · Sarah correction · Whitney women · Barnard/Boyce archive evidence';
})();
