(function(){
  const SRC={
    huguenot:'https://huguenotsociety.org.za/history-of-the-huguenots/',
    huguenotResearch:'https://huguenotsociety.org.za/research/',
    cape:'https://sahistory.org.za/classroom/grade-7/colonisation-cape-17th-and-18th-centuries',
    capeCommunity:'https://sahistory.org.za/article/afrikaans-community-1652-1795',
    raundsWomen:'https://rushdenheritage.co.uk/shoetrade/shoemakingclosing.html',
    raundsHome:'https://rushdenheritage.co.uk/Villages/HF/HF-pack-co-op.html',
    gretna:'https://www.devilsporridge.org.uk/womens-work-in-world-war-one',
    gretnaPolice:'https://www.devilsporridge.org.uk/womens-police-service-at-hm-factory-gretna',
    sarahGretna:'https://www.devilsporridge.org.uk/hm-factory-gretna-workers-database/name/sarah-moore',
    pmb:'https://www.natalia.org.za/Files/50/5%20Article%20Merrett.pdf'
  };
  const addBeforeArchive=(room)=>{
    if(rooms.some(r=>r.id===room.id)) return;
    const i=rooms.findIndex(r=>r.id==='archive');
    if(i<0) rooms.push(room); else rooms.splice(i,0,room);
  };

  addBeforeArchive({
    id:'women-cape',
    name:'Women of the Family · Cape & Huguenots',
    era:'1660s–1700s · migration, household survival & kinship',
    accent:'#b78370',
    hero:IMG.huguenot,
    credit:'Huguenot Monument, Franschhoek · contextual memorial image',
    context:'Women appear less often in official records, but migration, marriage, baptism, inheritance and household survival depended on them. This room gives those women their own historical space rather than presenting them only as spouses in male lines.',
    guide:'Read the women as migrants and network-builders. In a small refugee and settler population, marriages, baptismal sponsorship, inheritance and household labour connected families across language, religion and geography.',
    items:[
      {name:'Sara Jacob',dates:'1677 · French Flanders → Cape',evidence:'Documented direct ancestor',type:'Refugee woman',occupation:'Refugee settler household · family-network builder',story:'Sara Jacob was born into a French/Flemish Protestant refugee family and later married Jean du Buis. Her life belongs inside the migration story in its own right: exile, voyage, resettlement and the work of rebuilding kin life in a new colony.',connection:'Pierre Jacob + Suzanne de Vos → Sara Jacob → Sara du Buis → Swart line.',places:['French Flanders','Dutch Republic','Cape'],objects:['Refugee registers','Marriage record','Baptismal networks'],sources:[['Huguenot Society history',SRC.huguenot]]},
      {name:'Isabeau le Long',dates:'1668–1736 · Provence → Cape',evidence:'Documented direct ancestral branch',type:'Refugee woman',occupation:'Refugee settler household',story:'Isabeau le Long left Provence as part of the Huguenot diaspora and established a family at the Cape with Jacques Malan. The later prosperity of the Malan household should not erase the precarity of the first generation: religious exile, a long sea journey and the need to rebuild social ties from almost nothing.',connection:'Isabeau le Long + Jacques Malan → Maria Malan → Louw line → later Swart/Barnard branch.',places:['Provence','Dutch Republic','Cape'],objects:['Passenger history','Church registers','Family wills'],sources:[['Huguenot Society research',SRC.huguenotResearch]]},
      {name:'Sara du Buis',dates:'1701–1766 · Cape-born',evidence:'Documented direct ancestor',type:'Kinship bridge',occupation:'Cape settler household',story:'Sara du Buis represents the next generation: born after the refugee migration, she carried the du Buis/Jacob ancestry into the Swart family through marriage to Pieter Swart. Women like Sara made the small Cape population into dense kin networks in which surnames, property and family alliances repeatedly crossed.',connection:'Jean du Buis + Sara Jacob → Sara du Buis → Pieter Swart → later Swart generations.',places:['Cape Colony'],objects:['Marriage register','Baptisms','Wills and inheritance'],sources:[['Cape community history',SRC.capeCommunity]]},
      {name:'The invisible archive',dates:'17th–18th century',evidence:'Historical interpretation',type:'Women & records',occupation:'Paid, unpaid and reproductive labour often under-recorded',story:'A woman may appear in surviving records at baptism, marriage, childbirth, widowhood or death while years of economic and household labour remain invisible. The museum therefore distinguishes direct facts from historically grounded context rather than assuming “no occupation” meant “no work.”',connection:'This principle applies across the Cape, Huguenot and later British branches.',places:['Cape Colony','France','Dutch Republic'],objects:['Church registers','Inventories','Wills','Baptismal witnesses'],sources:[['Cape settlement context',SRC.cape],['Huguenot Society history',SRC.huguenot]]}
    ]
  });

  addBeforeArchive({
    id:'women-raunds',
    name:'Women of the Family · Raunds Workroom',
    era:'1800s–1930s · paid work, home work & household labour',
    accent:'#8d8f68',
    hero:IMG.raunds,
    credit:'St Peter’s Church, Raunds · family-place context',
    context:'The shoe district depended on women as well as men. Closing, stitching, home work, schooling and unpaid household labour all kept working households functioning, even when the records gave the male trade greater visibility.',
    guide:'This room deliberately places the sewing machine, school book, wash tub and family ledger beside the shoemaker’s tools. Women’s paid and unpaid labour belonged to the same household economy.',
    items:[
      {name:'Sarah Webb',dates:'1813–1886',evidence:'Parish and census supported',type:'Direct ancestor',occupation:'Schoolmistress recorded in 1851',story:'Sarah Webb is one of the clearest named working women in this branch. Her recorded work as a schoolmistress, together with the Methodist trail around the family, places literacy, teaching and religious respectability inside a family otherwise strongly connected to manual trades.',connection:'Elizabeth Horn → Sarah Webb → Whitney descendants → Ernest Whitney → modern family.',places:['Raunds','Northamptonshire'],objects:['School books','Census','Methodist register'],sources:[]},
      {name:'Women in shoe closing',dates:'19th–20th century',evidence:'Regional trade history',type:'Paid female labour',occupation:'Closing and stitching shoe uppers',story:'Closing — sewing the upper parts of shoes — became strongly associated with female workers in the Northamptonshire footwear district. It could be factory work or work taken into the home, blurring the boundary between earning and domestic labour.',connection:'Regional context for women living inside the Whitney–Whiteman shoe-trade world; not assigned to a named ancestor without a record.',places:['Raunds','Rushden','Higham Ferrers'],objects:['Sewing machine','Upper leather','Needles and thread'],sources:[['Women in shoe closing',SRC.raundsWomen]]},
      {name:'The double working day',dates:'Working-class household economy',evidence:'Regional social history',type:'Home & labour',occupation:'Waged work plus cooking, washing, mending and care',story:'A woman who earned from shoe work did not stop running the household. Food, fires, washing, clothing repair and child care continued around piecework or factory hours. Local memories of women collecting and returning work by handcart show how directly women’s earnings could keep families fed and clothed.',connection:'A historically grounded reconstruction of the working world around this branch.',places:['Raunds district'],objects:['Handcart','Wash tub','Range','Work basket'],sources:[['Raunds-area homeworking memory',SRC.raundsHome]]},
      {name:'Female-line continuity',dates:'Whiteman → Horn → Webb → Whitney',evidence:'Documented genealogical chain',type:'Maternal transmission',occupation:'Names, faith, skills and kinship',story:'The family tree can look male because surnames change at marriage. Following Elizabeth Whiteman to Elizabeth Horn and then Sarah Webb shows the opposite: a continuous female ancestral chain remains present even when the surname disappears from the next generation.',connection:'Elizabeth Whiteman → Elizabeth Horn → Sarah Webb → Whitney branch.',places:['Raunds','Little Addington'],objects:['Baptism registers','Marriage records','Census households'],sources:[]}
    ]
  });

  addBeforeArchive({
    id:'women-gretna',
    name:'Women of the Family · Sarah at Gretna',
    era:'1914–1918 · danger, wages, separation & autonomy',
    accent:'#6d7b78',
    hero:IMG.yorkshire,
    credit:'Industrial Britain context image · the Gretna factory itself is described in the exhibits',
    context:'Sarah Ann Hartley’s wartime story is not a footnote to a miner’s biography. Gretna placed thousands of women inside dangerous industrial work, new wage independence and unusually close state supervision.',
    guide:'Treat Sarah as a historical actor: worker, Catholic woman, wife living separately, mother and participant in a wartime industrial system. Family memory and documentary context are labelled separately.',
    items:[
      {name:'Sarah Ann Hartley',dates:'First World War period',evidence:'Family link + Gretna worker research',type:'Direct family story',occupation:'Munitions worker at HM Factory Gretna',story:'Sarah worked in the vast wartime explosives complex at Gretna. This put her inside one of the largest concentrations of female industrial labour in Britain, where women handled dangerous processes while earning wages and living beyond the ordinary boundaries of the marital home.',connection:'Sarah was Sydney John Moore senior’s wife; her story also forms part of the family context around Ivy Moore’s later birth.',places:['Gretna','Longtown'],objects:['Factory badge','Cordite-production context','Worker records'],sources:[['HM Factory Gretna worker research',SRC.sarahGretna],['Women’s work at Gretna',SRC.gretna]]},
      {name:'Freedom under supervision',dates:'1914–1918',evidence:'Factory social history',type:'Gender & control',occupation:'Female industrial workforce',story:'Gretna offered wages, travel and new independence, but women were searched, subject to curfews and monitored by the Women’s Police Service. The same system that expanded women’s economic freedom also tried to regulate their behaviour and morality.',connection:'This is the institutional world Sarah entered at Gretna.',places:['Gretna'],objects:['Women’s Police badge','Curfew rules','Factory searches'],sources:[['Women’s Police Service at Gretna',SRC.gretnaPolice]]},
      {name:'Religion, marriage & separation',dates:'Family-confirmed context',evidence:'Family information',type:'Private life',occupation:'—',story:'Family information says Sarah was Catholic and that she and Sydney remained legally married while living separately because divorce could not be obtained. The museum keeps this as family-confirmed history rather than presenting an inferred legal explanation as a primary-record fact.',connection:'Explains the unusual family structure around Sydney senior, Sarah and Ivy’s later maternal household.',places:['Yorkshire','Gretna'],objects:['Marriage record target','Family testimony'],sources:[]},
      {name:'War inside the family',dates:'1918',evidence:'Family-confirmed relationship; record work continuing',type:'Loss & kinship',occupation:'—',story:'Family information identifies Sydney junior — Sarah and Sydney senior’s son — as Ivy’s older half-brother and records his death in 1918. His place in the tree makes the First World War a family event as well as national history.',connection:'Sarah + Sydney senior → Sydney junior; Sydney senior later fathered Ivy Moore with Ethel Adamson.',places:['Britain'],objects:['Military/death record target','Family tree'],sources:[]}
    ]
  });

  addBeforeArchive({
    id:'women-ivy',
    name:'Women of the Family · Ivy’s World',
    era:'1923–2007 · mobility, migration, home & property memory',
    accent:'#a87972',
    hero:'https://commons.wikimedia.org/wiki/Special:Redirect/file/1962-12-31_Pietermaritzburg_-_246_King_Edward_Ave.jpg?width=1200',
    credit:'Pietermaritzburg, 1962 · contextual period image · Guus Gorter / Wikimedia Commons · CC BY-SA 4.0',
    context:'Ivy’s life carries the family from inter-war Yorkshire into marriage, migration and a remembered rise in material circumstances. Where property ownership is still based on family memory rather than deeds, the museum says so plainly.',
    guide:'This is a room about social mobility without turning memory into proof. Follow what is secure — Ivy’s birth, marriage and South African family life — alongside the property and wealth story that still needs documentary confirmation.',
    items:[
      {name:'Ivy Moore',dates:'25 Dec 1923–7 Jul 2007',evidence:'Civil-registration supported',type:'Direct ancestor',occupation:'Household role and later life still being researched',story:'Born on Christmas Day in Rotherham, Ivy married Ernest James Merrill Whitney in 1947. Her life bridges Yorkshire and Northamptonshire into the family’s later South African chapter and is one of the strongest candidates for adding verified family photographs to the museum.',connection:'Sydney John Moore senior + Ethel Adamson → Ivy Moore + Ernest Whitney → modern family.',places:['Rotherham','Wellingborough','South Africa'],objects:['Birth registration','Marriage record','Family-photo leads'],sources:[["Possible Ancestry photo set",SOURCES.ivyProfile]]},
      {name:'The property story',dates:'Later 20th century · exact dates to establish',evidence:'Family memory — documentary verification pending',type:'Upward mobility',occupation:'Property / household management story under research',story:'Family memory describes Ivy as becoming relatively well-off and living in or owning large properties. That is historically important because it suggests a substantial change from the industrial working-class world of the previous generation. The museum will not convert that memory into a deed-based claim until addresses, title records or estate material are matched.',connection:'A research thread for understanding how the Whitney/Moore branch experienced social mobility after migration.',places:['South Africa — exact properties to verify'],objects:['Title deeds target','Directories','Estate papers','Family photographs'],sources:[]},
      {name:'Migration and opportunity',dates:'Post-war decades',evidence:'Family migration fact + historical context',type:'Migration & class',occupation:'Household relocation',story:'Moving from Britain to South Africa could offer white British migrants greater access to housing, work and material comfort than they had known at home. That opportunity existed inside apartheid, a system that distributed rights and property unequally by race. Both parts of the history belong in the same room.',connection:'Frames the possible upward mobility remembered around Ivy without assigning motives or politics that are not documented.',places:['Britain','Pietermaritzburg','South Africa'],objects:['Passenger lists target','Property records target','City directories'],sources:[['Pietermaritzburg social history',SRC.pmb]]},
      {name:'A woman becomes the family archive',dates:'20th century memory',evidence:'Family-history interpretation',type:'Memory & inheritance',occupation:'Keeper of photographs, objects and stories',story:'Women frequently become the people through whom family photographs, domestic objects, recipes, addresses and relationship stories survive. Ivy’s large set of possible attached photographs makes her a natural anchor for the museum’s move from public historical context toward verified family imagery.',connection:'Future verified portraits and property images can be attached here without losing the distinction between memory and proof.',places:['Family archive'],objects:['Photographs','Letters','Household objects','Address books'],sources:[]}
    ]
  });

  const link=document.createElement('link');
  link.rel='stylesheet';
  link.href='environment-v09.css';
  document.head.appendChild(link);

  const intro=document.querySelector('.intro p');
  if(intro) intro.textContent='Walk through reconstructed family environments rather than a neutral gallery: ship decks, workshops, miners’ homes, Cape households, wartime industry and mid-century migration. Context remains clearly separated from direct family evidence.';

  const headerActions=document.querySelector('.header-actions');
  if(headerActions && !document.getElementById('womenWingBtn')){
    const b=document.createElement('button');
    b.className='btn women-wing-btn';
    b.id='womenWingBtn';
    b.textContent='Women of the Family';
    b.addEventListener('click',()=>{ if(typeof showRoom==='function') showRoom('women-cape'); });
    headerActions.insertBefore(b,headerActions.firstChild);
  }

  const ft=document.querySelector('footer');
  if(ft) ft.textContent='Version 0.9 · environmental galleries · Women of the Family wing · research-led family archive';
})();
