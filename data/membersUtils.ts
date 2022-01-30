const members = [
  {
    name: "Anders Nordbø",
    memberInfo:
      "Anders er en reflektert og strukturert person som gjennom sin periode i Abakus har bidratt mye i Bedkom, Hovedstyret og backup. I sin periode som leder for Bedkom tok Anders initiativ for å forbedre komiteens rutiner, og slik gjøre Abakus’ kontakt med bedriftene mer profesjonell. Etter aktiv periode i komitéen, også mens han var i utlandet, fortsatte Anders å være en stor ressursperson for Bedkom. Mens han satt i Hovedstyret var han med å starte Interkom som gav grunnlag for bedre intern og helhetlig samarbeid ut mot næringslivet, og i tillegg økte inntekter til Abakus gjennom nye salgsmuligheter.",
    profilePic: "/AndersNordbø.jpg",
    reverse: false,
    appointed: "2012",
    position: "Leder av Bedkom",
    committee: ["backup", "bedkom"],
  },
  {
    name: "Åsmund Eldhuset",
    memberInfo:
      "Svært kjent fjes i Abakus i alle sine år her. Har reddet mange fra død, fordervelse og stryk i diverse eksamener gjennom eksamenskurs og øvingsforelesninger. Selv etter at han ble ferdig på NTNU og startet i BEKK fortsetter han å være en prominent abakule. I Webkom har han vært en stor ressurs både i forbindelse med kompetanse, utvikling og opplæring av nye medlemmer. Han har gjennom sitt arbeid og tilstedeværelse i Abakus bidratt langt utover det som forventes.",
    profilePic: "/AsmundE.png",
    reverse: true,
    appointed: "2009",
    position: '"Øvingsforeleser", allvitende',
    committee: ["webkom"],
  },
  {
    name: "Vegard Hellem",
    memberInfo:
      "Gjennom sin tid i Abakus har han rukket å være med i to komiteer, vært økonomiansvarlig for foreningen og primus motor bak Abakus’ første revy, i tillegg til deltidsjobber som studentassistent, undervisningsassistent og vitenskapelig assistent i flere fag. Han har holdt flere eksamensforelesninger, og har også vært økonomiansvarlig i itDAGENE. Vegard står bak digitaliseringen av Abakus’ regnskap, samt samarbeidsforumet Forente IT-foreninger, som kobler sammen linjeforeninger på tvers av universitetene i Norge.",
    profilePic: "/VegardHellem.png",
    reverse: false,
    appointed: "2019",
    position: "Økonomiansvarlig for Abakus og Backup",
    committee: ["fagkom", "backup"],
  },
  {
    name: "Eirik Martiniussen Sylliaas",
    memberInfo:
      "Eirik ble tatt opp i Webkom sitt første år. I andre klasse ble han leder, og året etter med i backup. I utviklingen av nye abakus.no laget han en tjeneste for analyse og statistikk, som vil være nyttig for Bedkom og prosjekt BI mange år fremover. Han var webansvarlig for itDAGENE, hvor han står med nest flest commits siden nettsiden ble skrevet. Totalt har han nærmere 2000 commits for Webkom, som betyr at han har et gjennomsnitt på nesten 1.2 commits per dag siden han ble tatt opp, inkludert ferier. Han sikret også Webkom 11 nye servere, noe som gjør at Webkom nå har et bedre system enn de fleste mellomstore bedrifter.",
    profilePic: "/default_male_avatar.png",
    reverse: true,
    appointed: "2018",
    position: "Leder av Webkom",
    committee: ["webkom", "backup"],
  },
  {
    name: "Emilie Engen",
    memberInfo:
      "Emilie har vært aktiv i Abakus siden 2011, da hun ble medlem i Bedkom. Hun viste tidlig at hun er en strukturert og engasjert person, og ble allerede i 2012 valgt til nestleder og økonomiansvarlig i Hovedstyret. Som nestleder var Emilie sentral i opprettelsen av Abakus’ fond og i den store oppryddingen i Abakus’ statutter. Hun ble senere med i backup, og tok i 2015 over som leder. I backup tok Emilie initiativ til opprettelsen av Baksida, et prosjekt som følger opp trivsel blant de frivillige i Abakus. ",
    profilePic: "/default_female_avatar.png",
    reverse: false,
    appointed: "2016",
    position: "Leder av backup",
    committee: ["bedkom", "backup"],
  },
  {
    name: "Erik Drolshammer",
    memberInfo:
      "Medlemmet har siden 2002 vært med i Abakus. I denne perioden har han vært nestleder og leder for LaBamba, hvor han var en foregangsperson i restruktureringen av komiteens organisasjon og økonomi. I senere tid har han vært aktiv i Webkom i rollen som hardwareansvarlig, utvikler og altmuligmann. Han har med engasjement utenfor det vanlige ledet arbeidet med NAUT. Medlemmet er aktivt i hele linjeforeningens arbeid, og er synlig på de fleste arrangementer. Han gjøres til æresmedlem grunnet hans arbeid som går langt utover de grenser som forventes av et medlem.",
    profilePic: "/default_male_avatar.png",
    reverse: true,
    appointed: "2007",
    position: "Leder av Labamba",
    committee: ["labamba", "webkom"],
  },
  {
    name: "Erik Harg",
    memberInfo:
      "Erik Harg satt i HS fra 2001-2003, og var med i webkom fra 2000-2005. Harg var en særdeles aktiv skikkelse. Denne karen svarte folk på epost innen et minutt selv når han var på stranda, han stilte alltid opp, ga mye av seg selv og kunne svært, svært mye. Selv etter at han sluttet på NTNU har han kommet tilbake og vist hvor generøs han er. Han fikk tittelen under Genfors høsten 2003 (dengang Anne Siri Korsen satt som leder).",
    profilePic: "/default_male_avatar.png",
    reverse: false,
    appointed: "2003",
    position: "I HS 2001-2003",
    committee: ["webkom"],
  },
  {
    name: "Espen Herseth Halvorsen",
    memberInfo:
      "Først var han medlem og journalist i readme, og senere ble han også redaktør, layout- og altmuligmann og primus motor. Da han satt som redaktør og hovedstyremedlem i 2007/2008 fikk readme farge, sterk økonomi og en mer gjennomført layout. Han har siden vært den viktigste støttespilleren for sittende redaktør, og sier aldri nei om noen trenger hjelp. Dette er også gjeldende for hans engasjement i resten av Abakus. Han har vært med å defnere backup som ny komité gjennom sitt toårige engasjement her, og har stort sett hatt en viktig rolle i de fleste vellykkede prosjekter.",
    profilePic: "/default_male_avatar.png",
    reverse: true,
    appointed: "2010",
    position: "readme-redaktør",
    committee: ["readme", "backup"],
  },
  {
    name: "Fredrik Nygård Carlsen",
    memberInfo:
      "Fredrik har gjennom hele sin tid i Abakus vært et forbilde for alle Abakusere, både faglig og sosialt. Denne unge herren startet sin Abakuskarriere i Webkom i 2009. Videre ble han i 2011 valgt som leder av Webkom. Som Hovedstyremedlem skal det nevnes at han gjorde en enestående innsats på immatrikuleringsball og diverse andre arrangementer. På sine senere dager i Abakus var han fortsatt et ivrig medlem av Webkom, backup og Den Gyldne Kuleramme.",
    profilePic: "/default_male_avatar.png",
    reverse: false,
    appointed: "2014",
    position: "Leder av Webkom",
    committee: ["webkom"],
  },
  {
    name: "Håkon Erichsen",
    memberInfo:
      "Håkon Erichsen har vært et svært aktivt medlem av Abakus i alle sine år på NTNU. Han tok sine første steg inn i Abakus som medlem av Webkom i 2008 og ble i 2009 leder av Webkom. Etter et år i Hovedstyret ble Håkon valgt til leder av Abakus. Han har skrevet store deler av nye abakus.no og nyitrondheim.no, hvor han også var initiativtager. Håkon har også vært en uvurderlig ressurs for Webkom i de senere årene og er alltid deltagende og behjelpelig på arbeidskvelder og møter. I tillegg til dette har Håkon vært behjelpelig i forbindelse med Hovedstyrearbeid. I 2011 ble han tatt opp i backup. Her har han hatt prosjekter som StartIT og Abakus Utland.",
    profilePic: "/HakonE.png",
    reverse: true,
    appointed: "2013",
    position: "Leder av Webkom og Abakus",
    committee: ["webkom", "backup"],
  },
  {
    name: "Hege Krokås Borge",
    memberInfo:
      "Hege Krokås Borge ble som førsteklassing tatt opp i LaBamba, der hun et halvt år senere ble valgt inn som Kjellersjef. I løpet av sitt år som leder var hun ansvarlig for gjennomføringen av både LaBamba sitt 30 års-jubileum og oppussingen av kjelleren vår. Etter to år i LaBamba, ble Hege tatt opp i backup, hvor hun nå er inne i sin andre periode som leder. Da kjellerne ble stengt stod Hege i spissen for opprettelsen av organisasjonen Reddkjellerne. Hun har ikke bare tatt kampen for å beholde kjellerkulturen på vegne av Abakus, men alle studentene i hele Trondheim.",
    profilePic: "/default_female_avatar.png",
    reverse: false,
    appointed: "2017",
    position: "Leder av Labamba og Backup",
    committee: ["labamba", "backup"],
  },
  {
    name: "Ingjard Tore Sandhei",
    memberInfo:
      "Ingjard har hatt veldig mange jern i ilden i løpet av sin periode som medlem av Abakus, og har gjort mange tiltak som har gjort Abakus til en bedre organisasjon. Han var svært aktiv som medlem av LaBamba og var der alltid med på å ta initiativ og dra opp stemningen. Ingjard var nestleder i Hovedstyret 2009/2010, og gjorde også her en solid innsats. Rett etter Ingjard var ferdig i Hovedstyret ble han med i backup, hvor han har gjort en god jobb som medlem og en fantastisk jobb som komitéens første leder. Som leder har Ingjard gjort tiltak og styrt komitéen til å utvikle seg til å bli mer profesjonell og effektiv organisert.",
    profilePic: "/default_male_avatar.png",
    reverse: true,
    appointed: "2012",
    position: "Leder av Backup",
    committee: ["labamba", "backup"],
  },
  {
    name: "Joakim Christiansen",
    memberInfo:
      "Medlemmet har siden 2002 vært med i Abakus. Han har i denne perioden vært leder av Abakus, der han gjennomførte arbeidet med å renske opp i Abakus' økonomi. Han har gjennom hele perioden som medlem vært med i Bedkom, hvor han har vært en stor ressurs. Medlemmet har hatt ansvar for utviklingen av BDB og bedcard, verktøy som har vært svært verdifulle for komiteenes arbeid. Han har også hatt ansvar for å utarbeide den årlige spørreundersøkelsen for avgangsklassene.",
    profilePic: "/default_male_avatar.png",
    reverse: false,
    appointed: "2007",
    position: "Leder av Abakus",
    committee: ["bedkom"],
  },
  {
    name: "Karoline Bonnerud",
    memberInfo:
      "Karoline Bonnerud har fra første stund vært en stor bidragsyter for Abakus. Gjennom sitt eksempel for god lederskap, økonomistyring, struktur og vennlighet vil hun for alltid være en betydelig bidragsyter for Abakus. I løpet av sine fem år i Abakus har hun vært økonomiansvarlig i tre komiteer, leder for Abakus, studentassistent i flere fag og holdt utallige eksamensforelesninger. Hun gjort mye, men mest av alt er det den skyhøye kvaliteten som gjør henne helt unik.  Karoline er eksempelet på en god abakule som fremtidige generasjoner vil strekke seg etter.",
    profilePic:
      "/Hennes Umenneskelige Dyktighet Thatcher, Karoline Bonnerud.JPG",
    reverse: true,
    appointed: "2021",
    position: "Leder av Abakus",
    committee: ["pr", "backup"],
  },
  {
    name: "Marte Berg Innset",
    memberInfo:
      "Marte har en unik innsikt i Abakus’ økonomi og har vært med på hele fire budsjettkvelder med Abakus. Hun har vært en utrolig stor ressurs i Hovedstyret og har bidratt enormt til erfaringsoverføringen mellom nye og gamle hovedstyrer. Etter sitt andre år i Hovedstyret ble hun medlem av backup, som hun ble leder av i 2013. Her har hun arbeidet med fadderperioden for 4. klasse, BI-prosjektet, rekruttering til backup og seniornett og hun har bidratt mye i arbeidet med stiftelsen av Abakus’ fond.",
    profilePic: "/default_female_avatar.png",
    reverse: false,
    appointed: "2013",
    position: "Leder av Backup",
    committee: ["labamba", "backup"],
  },
  {
    name: "Michael Brendås",
    memberInfo:
      "Medlemmet ble tatt opp i Abakus høsten 2002, etter å ha fullført listingløpet. Han har altså en fartstid på imponerende 7 år i foreningen. Etter et aktivt år i Hovedstyret, som leder av Arrkom, begynte han jobben med å samle Abakus sin historie i en wiki, som senere har blitt overført til Confluence.  Siden starten på backup har medlemmet vært et trofast og engasjert medlem, som den dag i dag bidrar med verdifulle innspill til alle i Abakus.",
    profilePic: "/default_male_avatar.png",
    reverse: true,
    appointed: "2009",
    position: "Leder av Arrkom",
    committee: ["arrkom", "backup"],
  },
  {
    name: "Michael Sars Norum",
    memberInfo:
      'Kjent som "han som fikk KomTek med i Abakus", jobbet med alumni-prosjekt med HS i 04-05, begynte arbeidet med å få skrevet historien til Abakus.',
    profilePic: "/default_male_avatar.png",
    reverse: false,
    appointed: "2004",
    position: "Leder av Abakus",
    committee: ["labamba", "webkom"],
  },
  {
    name: "Patrick Skjennum",
    memberInfo:
      "Etter første semester tok han stadig på seg mer ansvar for layout, og med tiden ble han layoutansvarlig. Han satte av enormt mye tid for å fullføre hver enkelt utgave, og kom stadig med nye ideer til hvordan man kunne bli enda bedre. Da det nærmet seg readme sitt femtenårsjubileum og man vurderte å bytte trykkeri, var det Patrick som på eget initiativ fant frem til det beste trykkeriet til den beste prisen. I samme slengen redesignet han hele magasinet, og gav det et helt nytt uttrykk.",
    profilePic: "/default_male_avatar.png",
    reverse: true,
    appointed: "2016",
    position: "Layoutansvarlig readme",
    committee: ["readme"],
  },
  {
    name: "Rolf Erik Lekang",
    memberInfo:
      "Han var hoveddrivkraften bak opprettelsen av fotoarkivet til Abakus. I tillegg var han aktiv i jubileumsgruppen i 2012 og webansvarlig for itDAGENE 2012. Han kvier seg aldri for å hjelpe til med både små og store oppgaver. Han er alltid ydmyk, selv om han som oftest er den med både mest kunnskap og erfaring i rommet. Han er en skikkelig ildsjel og en alle i Abakus kan se opp til.",
    profilePic: "/default_male_avatar.png",
    reverse: false,
    appointed: "2015",
    position: "Leder av PR",
    committee: ["pr", "webkom", "backup"],
  },
  {
    name: "Snorre Gylterud",
    memberInfo:
      "I 2005 ble han valgt til sjef for LaBamba hvor han var initiativtaker til den store oppussingen som fant sted og som gjorde kjelleren til den trivelige samlingsplassen den er i dag. Påfølgende år ble medlemmet valgt til leder for Abakus, og har bidratt mye til utvilklingen av Abakus som en mer samlet og profesjonell organisasjon. Samtidig spilte han en viktig rolle i arrangeringen av Abakus' 30‐års‐jubileum. Medlemmet var en av initiativtakerne for å opprette en alumni‐komité, backup, som fikk komitéstatus på Generalforsamlingen våren 2008.",
    profilePic: "/default_male_avatar.png",
    reverse: true,
    appointed: "2009",
    position: "Leder av Labamba og Abakus",
    committee: ["labamba", "backup"],
  },
  {
    name: "Brage Strand",
    memberInfo:
      "Abakus har stått nært Brage sitt hjerte helt fra starten av hans studietid i Trondheim. Som fersk student gjorde han en solid innsats i Fagkom, og viste et engasjement som fikk ham valgt til leder for Abakus som førsteklassing. Han har gjennom hele sin tid i Abakus utmerket seg som en som har meninger og bryr seg om alt som skjer i linjeforeningen. Brage har gjort en særdeles god jobb innen prosjekter som har vært viktig for hvilken retning Abakus har gått i, heriblant strategi-, business intelligence-, innovasjon- og AbaWikiprosjektet. Han har vært med 3 år i backup, og som koordinator før backup fikk lederrolle har han sammen med andre vært med å forme komitéen til den effektive og strukturerte gjengen de er i dag.",
    profilePic: "/default_male_avatar.png",
    reverse: false,
    appointed: "2012",
    position: "Leder av Abakus",
    committee: ["fagkom", "backup"],
  },
  {
    name: "Ørjan Bøe Thygesen",
    memberInfo:
      "Denne personen har vært aktiv i Abakus i alle årene han har vært på NTNU. Han har vært leder av Arrkom og leder av Abakus. Under hans lederskap gikk Abakus’ statutter gjennom en solid opprydning, nestleder- og økonomiansvarligstillingen i Hovedstyret ble splittet og Abakus’ fond ble opprettet. Etter å ha troppet av som leder av Hovedstyret ble han leder av backup, der han fortsatte å bidra med god kunnskap til Hovedstyret.",
    profilePic: "/default_male_avatar.png",
    reverse: true,
    appointed: "2015",
    position: "Leder av Arrkom, Abakus og Backup",
    committee: ["arrkom", "backup"],
  },
];

const info = {
  aresMedlemmer:
    "Har noen innlagt seg særlige fortjenester for foreningen, ellerutmerket seg på annet vis, kan Hovedstyret innby vedkommende som æresmedlem av Abakus. Et æresmedlem skal ha vært, eller fortsatt være en stor ressurs for foreningen og skal ha lagt mer jobb enn det som er forventet i foreningens arbeid.",
  orden: `Skjult i, bak, foran og inne i kullissene har Abakus klart å etablere sin egen Orden: Ordo Abaci Aurei (lat. Den Gyldne Kulerammes Orden). Den er stiftet for å hedre og belønne særlig utmerkede fortjenester for linjeforeningen Abakus og dens medlemmer. 

  I likhet med andre studenterordenener, som for eksempel Studentersamfundets «Det Sorte Faars Ridderskap», har også Den Gyldne Kulerammes Orden fått sine egne sære tradisjoner; med pomp og prakt, ironi og tull, dysterhet og dårskap, og håp og savn. Opp til flere av disse vil man kunne beskue under en Ordenspromosjon. Promosjonen holdes fortrinnsvis under Abakus sin årlige Vaargalla. 
  
  Det er Hovedstyret som innstiller medlemmer til Ordenen. Disse vil annonseres på Generalforsamlingen og bli slått inn i Ordenen under Promosjonen.
  
  1. november 2013 ble Ordenens første Promosjon holdt der 12 personer, blant andre 7 Æresmedlemmer, ble innviet i Ordenen. Senere, 15. mars 2014, ble det inviet ytterligere 5 personer. I 2015 ble 6 personer innviet i Ordenen. 
  
  På Ordenens Promosjoner vil nye Ordensmedlemmer hedres og slåes inn i Ordenen og det nyvalgte Hovedstyret vil få utdelt sine utmerkelser.`,
};

export { members };
export { info };
