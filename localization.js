const languageNames = {
  en: "English",
  lv: "Latviešu",
  lt: "Lietuvių",
  et: "Eesti"
};
const translationRows = [
  ["Select language", "Izvēlieties valodu", "Pasirinkite kalbą", "Vali keel"],
  ["FitSchool AI — Move smarter. Live healthier.", "FitSchool AI — kusties gudrāk, dzīvo veselīgāk.", "FitSchool AI — judėk išmaniau, gyvenk sveikiau.", "FitSchool AI — liigu targemalt, ela tervislikumalt."],
  ["FitSchool AI makes school physical education more personal, engaging, and accessible.", "FitSchool AI padara skolu sporta stundas personiskākas, aizraujošākas un pieejamākas.", "FitSchool AI padeda mokyklų kūno kultūros pamokas padaryti asmeniškesnes, įtraukiančias ir prieinamesnes.", "FitSchool AI muudab kooli kehalise kasvatuse personaalsemaks, kaasahaaravamaks ja kättesaadavamaks."],
  ["FitSchool AI home", "FitSchool AI sākumlapa", "FitSchool AI pradžia", "FitSchool AI avaleht"],
  ["Main navigation", "Galvenā navigācija", "Pagrindinė navigacija", "Peamenüü"],
  ["Home", "Sākums", "Pradžia", "Avaleht"],
  ["Cafeteria", "Ēdnīca", "Valgykla", "Söökla"],
  ["Music", "Mūzika", "Muzika", "Muusika"],
  ["Teacher", "Skolotājs", "Mokytojas", "Õpetaja"],
  ["Student", "Skolēns", "Mokinys", "Õpilane"],
  ["About", "Par mums", "Apie mus", "Meist"],
  ["Features", "Iespējas", "Funkcijos", "Funktsioonid"],
  ["Technology", "Tehnoloģijas", "Technologija", "Tehnoloogia"],
  ["Login", "Pieteikties", "Prisijungti", "Logi sisse"],
  ["Explore App", "Izpētīt lietotni", "Išbandyti programėlę", "Tutvu rakendusega"],
  ["Open navigation", "Atvērt navigāciju", "Atidaryti meniu", "Ava menüü"],
  ["Open profile", "Atvērt profilu", "Atidaryti profilį", "Ava profiil"],
  ["Change page zoom", "Mainīt lapas mērogu", "Keisti puslapio mastelį", "Muuda lehe suumi"],
  ["PAGE ZOOM", "LAPAS MĒROGS", "PUSLAPIO MASTELIS", "LEHE SUUM"],
  ["Zoom out", "Tālināt", "Mažinti mastelį", "Suumi välja"],
  ["Zoom in", "Tuvināt", "Didinti mastelį", "Suumi sisse"],
  ["RESET TO 100%", "ATIESTATĪT UZ 100%", "ATKURTI 100 %", "LÄHTESTA 100%-LE"],
  ["Page zoom", "Lapas mērogs", "Puslapio mastelis", "Lehe suum"],
  ["Meal photo for the selected school menu", "Izvēlētās skolas ēdienkartes attēls", "Pasirinkto mokyklos meniu nuotrauka", "Valitud koolimenüü pilt"],
  ["squat illustration", "Pietupiena ilustrācija", "Pritūpimo iliustracija", "Küki illustratsioon"],
  ["pushup illustration", "Atspiešanās ilustrācija", "Atsispaudimo iliustracija", "Kätekõverduse illustratsioon"],
  ["jumping-jacks illustration", "Lēcienu ar roku vēzieniem ilustrācija", "Šuoliukų išskėtus rankas iliustracija", "Käteviibutusega hüpete illustratsioon"],
  ["teacher illustration", "Skolotāja ilustrācija", "Mokytojo iliustracija", "Õpetaja illustratsioon"],
  ["THE FUTURE OF SCHOOL FITNESS", "SKOLU SPORTA NĀKOTNE", "MOKYKLINIO SPORTO ATEITIS", "KOOLISPORDI TULEVIK"],
  ["MOVE SMARTER.", "KUSTIES GUDRĀK.", "JUDĖK IŠMANIAU.", "LIIGU TARGEMALT."],
  ["LIVE HEALTHIER.", "DZĪVO VESELĪGĀK.", "GYVENK SVEIKIAU.", "ELA TERVISLIKUMALT."],
  ["An AI-powered platform designed to make school physical education more personalized, engaging and accessible.", "Ar mākslīgo intelektu darbināta platforma, kas padara skolu sporta stundas personalizētākas, aizraujošākas un pieejamākas.", "Dirbtiniu intelektu pagrįsta platforma, kuri padeda mokyklų kūno kultūros pamokas padaryti asmeniškesnes, įtraukiančias ir prieinamesnes.", "Tehisintellektil põhinev platvorm muudab kooli kehalise kasvatuse personaalsemaks, kaasahaaravamaks ja kättesaadavamaks."],
  ["Discover FitSchool AI", "Atklāj FitSchool AI", "Atrask FitSchool AI", "Avasta FitSchool AI"],
  ["Explore the app", "Izpētīt lietotni", "Išbandyti programėlę", "Tutvu rakendusega"],
  ["Made for every student", "Radīts ikvienam skolēnam", "Skirta kiekvienam mokiniui", "Loodud igale õpilasele"],
  ["Movement that meets you where you are.", "Kustība, kas pielāgojas tev.", "Judėjimas, prisitaikantis prie tavęs.", "Liikumine, mis arvestab sinuga."],
  ["AI MOVEMENT COACH", "MI KUSTĪBU TRENERIS", "DI JUDESIO TRENERIS", "TI LIIKUMISTREENER"],
  ["Personalized in every rep", "Personalizēts katrā atkārtojumā", "Asmeniška kiekviename pakartojime", "Personaalne igal kordusel"],
  ["MONDAY, OCTOBER 26", "PIRMDIENA, 26. OKTOBRIS", "PIRMADIENIS, SPALIO 26 D.", "ESMASPÄEV, 26. OKTOOBER"],
  ["MONDAY, OCTOBER 26 · 10 B", "PIRMDIENA, 26. OKTOBRIS · 10. B", "PIRMADIENIS, SPALIO 26 D. · 10 B", "ESMASPÄEV, 26. OKTOOBER · 10. B"],
  ["Hey, Mark", "Sveiks, Mark!", "Labas, Markai!", "Tere, Mark!"],
  ["Ready to move today?", "Vai esi gatavs šodien kustēties?", "Ar pasiruošęs šiandien pajudėti?", "Kas oled valmis täna liikuma?"],
  ["FITPOINTS BALANCE", "FITPOINTS BILANCE", "FITPOINTS BALANSAS", "FITPOINTSI SALDO"],
  ["+50 this week", "+50 šonedēļ", "+50 šią savaitę", "+50 sel nädalal"],
  ["TODAY'S GOAL", "ŠODIENAS MĒRĶIS", "ŠIANDIENOS TIKSLAS", "TÄNANE EESMÄRK"],
  ["AI Squats", "MI pietupieni", "DI pritūpimai", "TI kükid"],
  ["AI SQUATS.", "MI PIETUPIENI.", "DI PRITŪPIMAI.", "TI KÜKID."],
  ["AI SQUATS", "MI PIETUPIENI", "DI PRITŪPIMAI", "TI KÜKID"],
  ["START →", "SĀKT →", "PRADĖTI →", "ALUSTA →"],
  ["Workouts", "Treniņi", "Treniruotės", "Treeningud"],
  ["Rewards", "Balvas", "Apdovanojimai", "Preemiad"],
  ["Profile", "Profils", "Profilis", "Profiil"],
  ["Form looks great!", "Lieliska tehnika!", "Puiki technika!", "Väga hea tehnika!"],
  ["AI posture check", "MI stājas pārbaude", "DI laikysenos patikra", "TI rühikontroll"],
  ["7 day streak", "7 dienu sērija", "7 dienų serija", "7-päevane seeria"],
  ["You're on a roll", "Tev lieliski izdodas!", "Tau puikiai sekasi!", "Sul läheb suurepäraselt!"],
  ["YOUR PERSONAL MOVEMENT COMPANION", "TAVS PERSONĪGAIS KUSTĪBU PAVADONIS", "TAVO ASMENINIS JUDĖJIMO PARTNERIS", "SINU ISIKLIK LIIKUMISKAASLANE"],
  ["Platform highlights", "Platformas galvenās priekšrocības", "Platformos privalumai", "Platvormi eelised"],
  ["BUILT FOR THE NEXT GENERATION", "RADĪTS NĀKAMAJAI PAAUDZEI", "SUKURTA NAUJAI KARTAI", "LOODUD JÄRGMISELE PÕLVKONNALE"],
  ["STUDENT FIRST", "SKOLĒNS PIRMAJĀ VIETĀ", "PIRMIAUSIA – MOKINYS", "ÕPILANE ENNEKÕIKE"],
  ["PRIVACY BY DESIGN", "PRIVĀTUMS JAU DIZAINĀ", "PRIVATUMAS – DIZAINO DALIS", "PRIVAATSUS ON DISAINI OSA"],
  ["MADE FOR SCHOOLS", "RADĪTS SKOLĀM", "SKIRTA MOKYKLOMS", "LOODUD KOOLIDELE"],
  ["THE CHALLENGE", "IZAICINĀJUMS", "IŠŠŪKIS", "VÄLJAKUTSE"],
  ["PHYSICAL EDUCATION", "SPORTA STUNDĀM", "FIZINIAM UGDYMUI", "KEHALISELE KASVATUSELE"],
  ["NEEDS AN", "VAJAG", "REIKIA", "VAJAB"],
  ["UPGRADE.", "UZLABOJUMU.", "POKYČIŲ.", "UUT LÄHENEMIST."],
  ["Every student deserves the attention, confidence and motivation to build healthy habits that last.", "Ikviens skolēns ir pelnījis uzmanību, pārliecību un motivāciju, lai veidotu noturīgus veselīgus ieradumus.", "Kiekvienas mokinys nusipelno dėmesio, pasitikėjimo ir motyvacijos kurti ilgalaikius sveikus įpročius.", "Iga õpilane väärib tähelepanu, enesekindlust ja motivatsiooni, et kujundada püsivaid tervislikke harjumusi."],
  ["01 / ATTENTION", "01 / UZMANĪBA", "01 / DĖMESYS", "01 / TÄHELEPANU"],
  ["Limited individual attention", "Nepietiekama individuālā uzmanība", "Trūksta individualaus dėmesio", "Piiratud individuaalne tähelepanu"],
  ["One teacher, a whole class. It's hard to give every student personal guidance at the same time.", "Viens skolotājs un visa klase. Vienlaikus sniegt katram skolēnam personīgu atbalstu ir grūti.", "Vienas mokytojas ir visa klasė. Sunku vienu metu skirti asmeninį dėmesį kiekvienam mokiniui.", "Üks õpetaja ja terve klass. Iga õpilast on korraga raske personaalselt juhendada."],
  ["02 / TECHNIQUE", "02 / TEHNIKA", "02 / TECHNIKA", "02 / TEHNIKA"],
  ["Small mistakes go unnoticed", "Nelielas kļūdas paliek nepamanītas", "Smulkios klaidos lieka nepastebėtos", "Väikesed vead jäävad märkamata"],
  ["Without timely feedback, movement habits can become harder to correct over time.", "Bez savlaicīgas atgriezeniskās saites kustību ieradumus ar laiku var būt grūtāk labot.", "Be savalaikio grįžtamojo ryšio judėjimo įpročius ilgainiui gali būti sunkiau koreguoti.", "Õigeaegse tagasisideta võib liikumisharjumusi olla aja jooksul raskem parandada."],
  ["03 / MOTIVATION", "03 / MOTIVĀCIJA", "03 / MOTYVACIJA", "03 / MOTIVATSIOON"],
  ["Progress is easy to miss", "Progresu ir viegli nepamanīt", "Pažangą lengva pražiūrėti", "Edusamme on lihtne mitte märgata"],
  ["When growth isn't visible, it can be difficult for students to stay curious and keep moving.", "Ja izaugsme nav redzama, skolēniem var būt grūtāk saglabāt interesi un turpināt kustēties.", "Kai pažanga nematoma, mokiniams gali būti sunkiau išlaikyti smalsumą ir norą judėti.", "Kui areng pole nähtav, võib õpilastel olla raskem huvi säilitada ja edasi liikuda."],
  ["ONE CONNECTED ECOSYSTEM", "VIENOTA EKOSISTĒMA", "VIENINGA EKOSISTEMA", "ÜHENDATUD ÖKOSÜSTEEM"],
  ["INTRODUCING", "IEPAZĪSTIES AR", "PRISTATOME", "TUTVUSTAME"],
  ["STUDENT", "SKOLĒNS", "MOKINYS", "ÕPILANE"],
  ["TEACHER", "SKOLOTĀJS", "MOKYTOJAS", "ÕPETAJA"],
  ["AI COACH", "MI TRENERIS", "DI TRENERIS", "TI TREENER"],
  ["A smarter school fitness experience connecting students, teachers and thoughtful technology — turning every movement into an opportunity to grow.", "Gudrāka skolu sporta pieredze, kas savieno skolēnus, skolotājus un pārdomātas tehnoloģijas, pārvēršot katru kustību izaugsmes iespējā.", "Išmanesnė mokyklinio sporto patirtis, jungianti mokinius, mokytojus ir apgalvotas technologijas – kiekvienas judesys tampa galimybe augti.", "Nutikam koolispordi kogemus ühendab õpilased, õpetajad ja läbimõeldud tehnoloogia, muutes iga liigutuse võimaluseks areneda."],
  ["AI-powered movement analysis", "Ar MI analizētas kustības", "DI pagrįsta judesių analizė", "TI-põhine liikumisanalüüs"],
  ["Helpful technique cues, right when you need them.", "Noderīgi tehnikas ieteikumi tieši tad, kad tie vajadzīgi.", "Naudingi technikos patarimai būtent tada, kai jų reikia.", "Kasulikud tehnikasoovitused just siis, kui neid vajad."],
  ["Personalized physical education", "Personalizētas sporta stundas", "Asmeninis fizinis ugdymas", "Personaalne kehaline kasvatus"],
  ["Progress that reflects each student's journey.", "Progress, kas atspoguļo katra skolēna ceļu.", "Pažanga, atspindinti kiekvieno mokinio kelią.", "Edusammud, mis peegeldavad iga õpilase teekonda."],
  ["A smarter school ecosystem", "Gudrāka skolas ekosistēma", "Išmanesnė mokyklos ekosistema", "Nutikam kooli ökosüsteem"],
  ["Fitness, food, music and motivation in one place.", "Sports, ēdiens, mūzika un motivācija vienuviet.", "Sportas, maistas, muzika ir motyvacija vienoje vietoje.", "Sport, toit, muusika ja motivatsioon ühes kohas."],
  ["A BETTER WAY TO MOVE", "LABĀKS VEIDS, KĀ KUSTĒTIES", "GERESNIS BŪDAS JUDĖTI", "PAREM VIIS LIIKUDA"],
  ["SMALL STEPS.", "MAZI SOĻI.", "MAŽI ŽINGSNIAI.", "VÄIKESED SAMMUD."],
  ["BIG ENERGY.", "LIELA ENERĢIJA.", "DAUG ENERGIJOS.", "SUUR ENERGIA."],
  ["Everything students need to feel supported, stay motivated and make movement their own.", "Viss, kas skolēniem vajadzīgs atbalstam, motivācijai un savam kustību ceļam.", "Viskas, ko mokiniams reikia, kad jaustų palaikymą, išliktų motyvuoti ir atrastų savo judėjimo būdą.", "Kõik, mida õpilased vajavad toetuse ja motivatsiooni tundmiseks ning liikumise enda omaks muutmiseks."],
  ["01 — MOVEMENT", "01 — KUSTĪBA", "01 — JUDĖJIMAS", "01 — LIIKUMINE"],
  ["AI Workout Analysis", "MI treniņu analīze", "DI treniruočių analizė", "TI-treeninguanalüüs"],
  ["Friendly, real-time guidance helps students build confidence in every movement.", "Draudzīgi ieteikumi reāllaikā palīdz skolēniem justies pārliecinātiem katrā kustībā.", "Draugiški patarimai realiuoju laiku padeda mokiniams labiau pasitikėti savimi atliekant kiekvieną judesį.", "Sõbralik reaalajas juhendamine aitab õpilastel iga liigutuse juures enesekindlust kasvatada."],
  ["Learn more", "Uzzināt vairāk", "Sužinoti daugiau", "Loe lähemalt"],
  ["02 — CLASSROOM", "02 — KLASE", "02 — KLASĖ", "02 — KLASSIRUUM"],
  ["Teacher Dashboard", "Skolotāja panelis", "Mokytojo skydelis", "Õpetaja töölaud"],
  ["See class progress and create activities that keep everyone moving.", "Pārraugi klases progresu un veido aktivitātes, kas mudina kustēties.", "Stebėkite klasės pažangą ir kurkite veiklas, kurios skatina visus judėti.", "Jälgi klassi arengut ja loo tegevusi, mis panevad kõiki liikuma."],
  ["03 — WELLBEING", "03 — LABSAJŪTA", "03 — GERA SAVIJAUTA", "03 — HEAOLU"],
  ["Smart Cafeteria", "Gudrā ēdnīca", "Išmanioji valgykla", "Nutikas söökla"],
  ["Explore school meals and simple, helpful nutrition insights.", "Iepazīsti skolas ēdienkarti un vienkāršus, noderīgus uztura ieteikumus.", "Susipažinkite su mokyklos meniu ir paprastais, naudingais mitybos patarimais.", "Tutvu koolitoidu ja lihtsate, kasulike toitumissoovitustega."],
  ["04 — RHYTHM", "04 — RITMS", "04 — RITMAS", "04 — RÜTM"],
  ["Offline Music Player", "Mūzikas atskaņotājs bezsaistē", "Muzikos grotuvas be interneto", "Võrguühenduseta muusikapleier"],
  ["Take your favorite workout soundtrack wherever you go.", "Ņem līdzi savu iecienītāko treniņu mūziku, lai kurp tu dotos.", "Pasiimkite mėgstamą treniruočių muziką, kad ir kur eitumėte.", "Võta oma lemmiktreeningumuusika kõikjale kaasa."],
  ["05 — MOTIVATION", "05 — MOTIVĀCIJA", "05 — MOTYVACIJA", "05 — MOTIVATSIOON"],
  ["Gamification & Rewards", "Spēļošana un balvas", "Žaidybinimas ir apdovanojimai", "Mängustamine ja preemiad"],
  ["Celebrate milestones and turn consistency into something rewarding.", "Atzīmē sasniegumus un pārvērt regularitāti vērtīgās balvās.", "Švęskite pasiekimus ir paverskite nuoseklumą apdovanojimais.", "Tähista saavutusi ja muuda järjepidevus tasuvaks."],
  ["06 — YOUR STORY", "06 — TAVS STĀSTS", "06 — TAVO ISTORIJA", "06 — SINU LUGU"],
  ["Fit Wrapped", "Fit Wrapped", "Fit Wrapped", "Fit Wrapped"],
  ["A year of effort, progress and proud moments — all in one shareable recap.", "Gads, pilns pūļu, progresa un lepnuma — vienā kopsavilkumā, ar ko dalīties.", "Metai pastangų, pažangos ir džiugių akimirkų vienoje apžvalgoje, kuria galima dalytis.", "Aasta pingutusi, edusamme ja uhkeid hetki ühes jagatavas kokkuvõttes."],
  ["THOUGHTFUL BY DESIGN", "PĀRDOMĀTS DIZAINS", "APGALVOTAS DIZAINAS", "LÄBIMÕELDUD DISAIN"],
  ["TECHNOLOGY", "TEHNOLOĢIJA", "TECHNOLOGIJA", "TEHNOLOOGIA"],
  ["BUILT AROUND", "RADĪTA, DOMĀJOT PAR", "SUKURTA GALVOJANT APIE", "LOODUD, ARVESTADES"],
  ["STUDENTS.", "SKOLĒNIEM.", "MOKINIUS.", "ÕPILASI."],
  ["Technology should make students feel supported — never exposed or left behind.", "Tehnoloģijām jāsniedz skolēniem atbalsts, nevis jāliek justies neaizsargātiem vai atstumtiem.", "Technologijos turėtų padėti mokiniams jaustis palaikomiems, o ne atskleistiems ar paliktiems nuošalyje.", "Tehnoloogia peaks õpilasi toetama, mitte neid paljastama või kõrvale jätma."],
  ["01 / PRIVACY FIRST", "01 / PRIVĀTUMS PIRMAJĀ VIETĀ", "01 / PIRMAUSIA PRIVATUMAS", "01 / PRIVAATSUS ENNEKÕIKE"],
  ["Your movement. Your device.", "Tavas kustības. Tava ierīce.", "Tavo judesiai. Tavo įrenginys.", "Sinu liikumine. Sinu seade."],
  ["Movement analysis is designed to happen on the smartphone. Source video isn't meant to be continuously sent to a server.", "Kustību analīze paredzēta veikšanai viedtālrunī. Sākotnējo video nav paredzēts nepārtraukti sūtīt uz serveri.", "Judesių analizė turėtų vykti išmaniajame telefone. Vaizdo įrašas nesiunčiamas į serverį nuolat.", "Liikumisanalüüs toimub nutitelefonis. Algset videot ei saadeta pidevalt serverisse."],
  ["ON-DEVICE BY DESIGN", "PRIVĀTUMS IERĪCĒ", "PRIVATUMAS ĮRENGINYJE", "PRIVAATSUS SEADMES"],
  ["02 / OFFLINE FIRST", "02 / VISPIRMS BE INTERNETA", "02 / PIRMAUSIA BE INTERNETO", "02 / VÕRGUÜHENDUSETA ESMALT"],
  ["Ready when you are.", "Gatavs, kad esi tu.", "Paruošta, kai būsite jūs.", "Valmis, kui sina oled."],
  ["Download core training materials ahead of time and keep moving, even when the connection drops.", "Lejupielādē treniņu materiālus iepriekš un turpini kustēties arī bez interneta savienojuma.", "Iš anksto atsisiųskite pagrindinę treniruočių medžiagą ir judėkite toliau net nutrūkus ryšiui.", "Laadi treeningmaterjalid ette alla ja jätka liikumist ka siis, kui ühendus katkeb."],
  ["MOVE WITHOUT LIMITS", "KUSTIES BEZ IEROBEŽOJUMIEM", "JUDĖKITE BE RIBŲ", "LIIKU PIIRANGUTETA"],
  ["YOUR NEXT REP STARTS HERE", "TAVS NĀKAMAIS ATKĀRTOJUMS SĀKAS ŠEIT", "TAVO KITAS KARTOJIMAS PRASIDEDA ČIA", "SINU JÄRGMINE KORDUS ALGAB SIIT"],
  ["READY TO EXPLORE", "GATAVS IZPĒTĪT", "PASIRUOŠĘ ATRASTI", "VALMIS AVASTAMA"],
  ["Discover how the future of physical education could look.", "Uzzini, kāda varētu būt sporta stundu nākotne.", "Sužinokite, kaip galėtų atrodyti fizinio ugdymo ateitis.", "Avasta, milline võiks olla kehalise kasvatuse tulevik."],
  ["Open the app demo", "Atvērt lietotnes demonstrāciju", "Atidaryti programėlės demonstraciją", "Ava rakenduse demo"],
  ["Movement made personal.", "Kustība, kas pielāgota tev.", "Judėjimas pagal tave.", "Liikumine sinu järgi."],
  ["© 2026 FitSchool AI · Concept demo", "© 2026 FitSchool AI · Koncepta demonstrācija", "© 2026 FitSchool AI · Koncepcijos demonstracija", "© 2026 FitSchool AI · Kontseptsiooni demo"],
  ["Back to website", "Atpakaļ uz vietni", "Grįžti į svetainę", "Tagasi veebilehele"],
  ["Switch role", "Mainīt lomu", "Keisti vaidmenį", "Vaheta rolli"],
  ["APP PREVIEW", "LIETOTNES PRIEKŠSKATĪJUMS", "PROGRAMĖLĖS PERŽIŪRA", "RAKENDUSE EELVAADE"],
  ["A closer look at a more personal kind of PE.", "Ielūkojies personiskākā sporta stundu pieredzē.", "Pažvelkite į asmeniškesnę fizinio ugdymo patirtį.", "Lähem pilk personaalsemale kehalisele kasvatusele."],
  ["Choose your language", "Izvēlies valodu", "Pasirinkite kalbą", "Vali keel"],
  ["Select the language you would like to use on the website.", "Izvēlies valodu, kurā vēlies izmantot vietni.", "Pasirinkite kalbą, kuria norite naudotis svetainėje.", "Vali keel, milles soovid veebilehte kasutada."],
  ["FITSCHOOL AI · WELCOME", "FITSCHOOL AI · LAIPNI LŪDZAM", "FITSCHOOL AI · SVEIKI", "FITSCHOOL AI · TERE TULEMAST"],
  ["Continue in English", "Turpināt latviešu valodā", "Tęsti lietuvių kalba", "Jätka eesti keeles"],
  ["A NEW WAY TO MOVE", "JAUNS VEIDS, KĀ KUSTĒTIES", "NAUJAS BŪDAS JUDĖTI", "UUS VIIS LIIKUDA"],
  ["WELCOME TO", "LAIPNI LŪDZAM", "SVEIKI ATVYKĘ Į", "TERE TULEMAST"],
  ["Your smarter school fitness experience starts here.", "Tava gudrākā skolu sporta pieredze sākas šeit.", "Tavo išmanesnė mokyklinio sporto patirtis prasideda čia.", "Sinu nutikam koolispordi kogemus algab siit."],
  ["STUDENT", "SKOLĒNS", "MOKINYS", "ÕPILANE"],
  ["Workouts, progress", "Treniņi, progress", "Treniruotės, pažanga", "Treeningud, areng"],
  ["and rewards.", "un balvas.", "ir apdovanojimai.", "ja preemiad."],
  ["Exercises and", "Vingrinājumi un", "Pratimai ir", "Harjutused ja"],
  ["class progress.", "klases progress.", "klasės pažanga.", "klassi areng."],
  ["SIGN IN", "PIETEIKTIES", "PRISIJUNGTI", "LOGI SISSE"],
  ["EXPLORE AS STUDENT", "IZPĒTĪT KĀ SKOLĒNAM", "IŠBANDYTI KAIP MOKINIUI", "AVASTA ÕPILASENA"],
  ["EXPLORE AS TEACHER", "IZPĒTĪT KĀ SKOLOTĀJAM", "IŠBANDYTI KAIP MOKYTOJUI", "AVASTA ÕPETAJANA"],
  ["DEMO MODE · NO ACCOUNT NEEDED", "DEMONSTRĀCIJAS REŽĪMS · KONTS NAV NEPIECIEŠAMS", "DEMO REŽIMAS · PASKYRA NEBŪTINA", "DEMOVERSIOON · KONTO POLE VAJA"],
  ["Back to role selection", "Atpakaļ pie lomas izvēles", "Grįžti prie vaidmens pasirinkimo", "Tagasi rolli valiku juurde"],
  ["DEMO SIGN IN", "DEMO PIETEIKŠANĀS", "DEMO PRISIJUNGIMAS", "DEMO SISSELOGIMINE"],
  ["GOOD TO SEE", "PRIEKS TEVI", "SMAGU TAVE", "TORE SIND"],
  ["YOU AGAIN.", "ATKAL REDZĒT.", "VĖL MATYTI.", "JÄLLE NÄHA."],
  ["Sign in is a visual preview. Use any details or explore the demo without an account.", "Pieteikšanās ir tikai vizuāls priekšskats. Ievadi jebkādus datus vai izpēti demonstrāciju bez konta.", "Prisijungimas yra tik vizualus pavyzdys. Įveskite bet kokius duomenis arba išbandykite demonstraciją be paskyros.", "Sisselogimine on vaid visuaalne eelvaade. Sisesta suvalised andmed või tutvu demoga kontota."],
  ["EMAIL OR STUDENT ID", "E-PASTS VAI SKOLĒNA ID", "EL. PAŠTAS ARBA MOKINIO ID", "E-POST VÕI ÕPILASE ID"],
  ["Enter any password", "Ievadi jebkuru paroli", "Įveskite bet kokį slaptažodį", "Sisesta suvaline parool"],
  ["PASSWORD", "PAROLE", "SLAPTAŽODIS", "PAROOL"],
  ["CONTINUE TO DEMO", "TURPINĀT DEMONSTRĀCIJU", "TĘSTI DEMONSTRACIJĄ", "JÄTKA DEMOT"],
  ["EXPLORE WITHOUT SIGNING IN", "IZPĒTĪT BE PIETEIKŠANĀS", "IŠBANDYTI NEPRISIJUNGUS", "AVASTA ILMA SISSE LOGIMATA"],
  ["NO CREDENTIALS ARE SAVED OR SENT ANYWHERE.", "PIETEIKŠANĀS DATI NETIEK SAGLABĀTI VAI NEKUR NOSŪTĪTI.", "PRISIJUNGIMO DUOMENYS NEIŠSAUGOMI IR NIEKUR NESIUNČIAMI.", "SISSELOGIMISANDMEID EI SALVESTATA EGA EDASTATA."],
  ["Hello,", "Sveiks,", "Labas,", "Tere,"],
  ["Ready to move today?", "Vai esi gatavs šodien kustēties?", "Ar pasiruošęs šiandien pajudėti?", "Kas oled valmis täna liikuma?"],
  ["YOUR FITPOINTS BALANCE", "TAVA FITPOINTS BILANCE", "TAVO FITPOINTS BALANSAS", "SINU FITPOINTSI SALDO"],
  ["YOUR DAILY GOAL", "TAVS DIENAS MĒRĶIS", "TAVO DIENOS TIKSLAS", "SINU PÄEVAEESMÄRK"],
  ["VIEW ALL ↗", "SKATĪT VISU ↗", "ŽIŪRĖTI VISKĄ ↗", "VAATA KÕIKI ↗"],
  ["TODAY'S TRAINING", "ŠODIENAS TRENIŅŠ", "ŠIANDIENOS TRENIRUOTĖ", "TÄNANE TREENING"],
  ["3 Exercises", "3 vingrinājumi", "3 pratimai", "3 harjutust"],
  ["Estimated time: 8 min · Move at your own pace.", "Paredzamais laiks: 8 min · Kusties savā tempā.", "Numatoma trukmė: 8 min. Judėkite savo tempu.", "Eeldatav aeg: 8 min · Liigu omas tempos."],
  ["YOUR EXERCISES", "TAVI VINGRINĀJUMI", "TAVO PRATIMAI", "SINU HARJUTUSED"],
  ["3 TOTAL", "KOPĀ 3", "IŠ VISO 3", "KOKKU 3"],
  ["30 reps · Medium", "30 atkārtojumi · Vidēji", "30 pakartojimų · Vidutinis", "30 kordust · Keskmine"],
  ["20 reps · Medium", "20 atkārtojumi · Vidēji", "20 pakartojimų · Vidutinis", "20 kordust · Keskmine"],
  ["20 reps · Easy", "20 atkārtojumi · Viegli", "20 pakartojimų · Lengva", "20 kordust · Kerge"],
  ["AI Push-ups", "MI atspiešanās", "DI atsispaudimai", "TI kätekõverdused"],
  ["AI PUSH-UPS.", "MI ATspiešanās.", "DI ATSISPAUDIMAI.", "TI KÄTEKÕVERDUSED."],
  ["Jumping Jacks", "Lēcieni ar roku vēzieniem", "Šuoliukai išskėtus rankas", "Hüpped käteviibetega"],
  ["JUMPING JACKS.", "LĒCIENI AR ROKU VĒZIENIEM.", "ŠUOLIUKAI IŠSKĖTUS RANKAS.", "HÜPPED KÄTEVIIBETEGA."],
  ["Form analysis", "Tehnikas analīze", "Technikos analizė", "Tehnika analüüs"],
  ["Your own pace", "Savā tempā", "Savo tempu", "Omas tempos"],
  ["YOUR STREAK", "TAVA SĒRIJA", "TAVO SERIJA", "SINU SEERIA"],
  ["7 DAYS 🔥", "7 DIENAS 🔥", "7 DIENOS 🔥", "7 PÄEVA 🔥"],
  ["You're building a great habit. Keep showing up for yourself.", "Tu veido lielisku ieradumu. Turpini rūpēties par sevi.", "Kuri puikų įprotį. Ir toliau skirk laiko sau.", "Oled kujundamas head harjumust. Jätka enda jaoks tegutsemist."],
  ["YOUR PERSONAL TRAINING PLAN", "TAVS PERSONĪGAIS TRENIŅU PLĀNS", "TAVO ASMENINIS TRENIRUOČIŲ PLANAS", "SINU ISIKLIK TREENINGUKAVA"],
  ["AI WORKOUTS.", "MI TRENIŅI.", "DI TRENIRUOTĖS.", "TI TREENINGUD."],
  ["Movement made for you. One rep at a time.", "Kustība tev. Pa vienam atkārtojumam.", "Judėjimas tau. Po vieną pakartojimą.", "Liikumine sinu jaoks. Üks kordus korraga."],
  ["YOUR DAILY GOAL", "TAVS DIENAS MĒRĶIS", "TAVO DIENOS TIKSLAS", "SINU PÄEVAEESMÄRK"],
  ["CLASS RANKING", "KLASES REITINGS", "KLASĖS REITINGAS", "KLASSI PAREMUSJÄRJESTUS"],
  ["Your class is #2", "Tava klase ir 2. vietā", "Tavo klasė yra 2-a", "Sinu klass on 2. kohal"],
  ["You're moving up — keep going!", "Tu kāp augstāk — turpini!", "Kylate aukštyn – taip ir toliau!", "Liigud ülespoole – jätka samas vaimus!"],
  ["YOUR PROGRESS", "TAVS PROGRESS", "TAVO PAŽANGA", "SINU ARENG"],
  ["THIS MONTH", "ŠOMĒNES", "ŠĮ MĖNESĮ", "SEL KUUL"],
  ["Workouts completed", "Pabeigti treniņi", "Atliktos treniruotės", "Läbitud treeningud"],
  ["Time in motion", "Kustībā pavadītais laiks", "Judėjimo laikas", "Liikumisaeg"],
  ["RECENT ACHIEVEMENTS", "NESENIE SASNIEGUMI", "NAUJAUSI PASIEKIMAI", "HILJUTISED SAAVUTUSED"],
  ["SEE ALL", "SKATĪT VISU", "ŽIŪRĖTI VISKĄ", "VAATA KÕIKI"],
  ["First Workout", "Pirmais treniņš", "Pirmoji treniruotė", "Esimene treening"],
  ["Just getting started", "Tas ir tikai sākums", "Tai tik pradžia", "See on alles algus"],
  ["Consistency", "Regularitāte", "Nuoseklumas", "Järjepidevus"],
  ["7-day streak", "7 dienu sērija", "7 dienų serija", "7-päevane seeria"],
  ["Back", "Atpakaļ", "Atgal", "Tagasi"],
  ["TODAY'S EXERCISE", "ŠODIENAS VINGRINĀJUMS", "ŠIANDIENOS PRATIMAS", "TÄNANE HARJUTUS"],
  ["OF 03", "NO 03", "IŠ 03", "03-ST"],
  ["Build strength with a steady, confident movement.", "Veido spēku ar vienmērīgām un pārliecinātām kustībām.", "Stiprinkite jėgą atlikdami tolygius ir užtikrintus judesius.", "Kasvata jõudu ühtlaste ja enesekindlate liigutustega."],
  ["HOW TO PERFORM", "KĀ VEIKT", "KAIP ATLIKTI", "SOORITAMINE"],
  ["Stand with feet shoulder-width apart.", "Nostājies, kājas plecu platumā.", "Atsistokite, pėdos pečių plotyje.", "Seisa, jalad õlgade laiuselt."],
  ["Lower your hips while keeping your chest lifted.", "Nolaid gurnus, turot krūtis paceltu.", "Leiskite klubus žemyn, laikydami krūtinę pakeltą.", "Lasku puusad alla, hoides rindkere üleval."],
  ["Press through your feet and stand tall.", "Atspiedies ar pēdām un iztaisnojies.", "Atsispirkite pėdomis ir atsistokite.", "Surudes läbi taldade, tõuse püsti."],
  ["Place your hands just wider than your shoulders.", "Novieto rokas nedaudz platāk par pleciem.", "Padėkite rankas šiek tiek plačiau nei pečiai.", "Aseta käed õlgadest veidi laiemale."],
  ["Lower your chest with your body in one straight line.", "Nolaid krūtis, turot ķermeni taisnā līnijā.", "Leiskite krūtinę žemyn, išlaikydami tiesią kūno liniją.", "Langeta rindkere, hoides keha sirgjoonelisena."],
  ["Press the floor away to return to the start.", "Atspiedies no grīdas un atgriezies sākuma pozīcijā.", "Atsistumkite nuo grindų ir grįžkite į pradinę padėtį.", "Lükka põrand endast eemale ja naase algasendisse."],
  ["Stand tall with your feet together and arms at your sides.", "Nostājies taisni, pēdas kopā, rokas gar sāniem.", "Atsistokite tiesiai, suglauskite pėdas, rankas laikykite prie šonų.", "Seisa sirgelt, jalad koos ja käed külgedel."],
  ["Jump your feet apart as you raise your arms overhead.", "Lecot izvērs kājas un pacel rokas virs galvas.", "Šokdami praskėskite kojas ir pakelkite rankas virš galvos.", "Hüppa jalad harki ja tõsta käed pea kohale."],
  ["Jump back to the starting position with control.", "Kontrolēti lec atpakaļ sākuma pozīcijā.", "Kontroliuojamai grįžkite į pradinę padėtį.", "Hüppa kontrollitult tagasi algasendisse."],
  ["Knee alignment", "Ceļu novietojums", "Kelių padėtis", "Põlvede asend"],
  ["Knee Alignment", "Ceļu novietojums", "Kelių padėtis", "Põlvede asend"],
  ["Squat depth", "Pietupiena dziļums", "Pritūpimo gylis", "Küki sügavus"],
  ["Squat Depth", "Pietupiena dziļums", "Pritūpimo gylis", "Küki sügavus"],
  ["Body stability", "Ķermeņa stabilitāte", "Kūno stabilumas", "Keha stabiilsus"],
  ["Body Stability", "Ķermeņa stabilitāte", "Kūno stabilumas", "Keha stabiilsus"],
  ["Body alignment", "Ķermeņa novietojums", "Kūno padėtis", "Keha joondus"],
  ["Body Alignment", "Ķermeņa novietojums", "Kūno padėtis", "Keha joondus"],
  ["Elbow control", "Elkoņu kontrole", "Alkūnių kontrolė", "Küünarnukkide kontroll"],
  ["Elbow Control", "Elkoņu kontrole", "Alkūnių kontrolė", "Küünarnukkide kontroll"],
  ["Core stability", "Vēdera korsetes stabilitāte", "Korpuso stabilumas", "Kerelihaste stabiilsus"],
  ["Core Stability", "Vēdera korsetes stabilitāte", "Korpuso stabilumas", "Kerelihaste stabiilsus"],
  ["Arm extension", "Roku iztaisnošana", "Rankų ištiesimas", "Käte sirutus"],
  ["Arm Extension", "Roku iztaisnošana", "Rankų ištiesimas", "Käte sirutus"],
  ["Landing control", "Nosēšanās kontrole", "Nusileidimo kontrolė", "Maandumise kontroll"],
  ["Landing Control", "Nosēšanās kontrole", "Nusileidimo kontrolė", "Maandumise kontroll"],
  ["Movement rhythm", "Kustību ritms", "Judesių ritmas", "Liikumisrütm"],
  ["Movement Rhythm", "Kustību ritms", "Judesių ritmas", "Liikumisrütm"],
  ["POSE DETECTED", "POZA NOTEIKTA", "POZA NUSTATYTA", "POOS TUVASTATUD"],
  ["● POSE DETECTED", "● POZA NOTEIKTA", "● POZA NUSTATYTA", "● POOS TUVASTATUD"],
  ["FORM CHECK ACTIVE", "TEHNIKAS PĀRBAUDE AKTĪVA", "TECHNIKOS PATIKRA AKTYVI", "TEHNIKAKONTROLL AKTIIVNE"],
  ["✳ FORM CHECK ACTIVE", "✳ TEHNIKAS PĀRBAUDE AKTĪVA", "✳ TECHNIKOS PATIKRA AKTYVI", "✳ TEHNIKAKONTROLL AKTIIVNE"],
  ["WHAT AI CHECKS", "KO PĀRBAUDA MI", "KĄ TIKRINA DI", "MIDA TI KONTROLLIB"],
  ["ON-DEVICE", "IERĪCĒ", "ĮRENGINYJE", "SEADMES"],
  ["START WORKOUT", "SĀKT TRENIŅU", "PRADĖTI TRENIRUOTĘ", "ALUSTA TREENINGUT"],
  ["POSE DETECTED", "POZA NOTEIKTA", "POZA NUSTATYTA", "POOS TUVASTATUD"],
  ["FORM CHECK ACTIVE", "TEHNIKAS PĀRBAUDE AKTĪVA", "TECHNIKOS PATIKRA AKTYVI", "TEHNIKAKONTROLL AKTIIVNE"],
  ["TIME ELAPSED", "PAGĀJUŠAIS LAIKS", "PRAĖJĘS LAIKAS", "AEG KULUNUD"],
  ["REP QUALITY", "ATKĀRTOJUMA KVALITĀTE", "PAKARTOJIMO KOKYBĖ", "KORDUSE KVALITEET"],
  ["✓ GOOD", "✓ LABI", "✓ GERAI", "✓ HEA"],
  ["VIEW FORM TIP", "SKATĪT TEHNIKAS IETEIKUMU", "PERŽIŪRĖTI TECHNIKOS PATARIMĄ", "VAATA TEHNIKANÕUANNET"],
  ["AI FEEDBACK · REP 12", "MI ATGRIEZENISKĀ SAITE · 12. ATKĀRTOJUMS", "DI ATSILIEPIMAS · 12 PAKARTOJIMAS", "TI TAGASISIDE · 12. KORDUS"],
  ["A QUICK FORM TIP.", "ĪSS TEHNIKAS IETEIKUMS.", "TRUMPAS TECHNIKOS PATARIMAS.", "LÜHIKE TEHNIKANÕUANNE."],
  ["Every rep is a chance to learn. Take a look at this movement.", "Katrs atkārtojums ir iespēja mācīties. Apskati šo kustību.", "Kiekvienas pakartojimas – galimybė mokytis. Pažvelkite į šį judesį.", "Iga kordus on võimalus õppida. Vaata seda liigutust."],
  ["YOUR FORM", "TAVA TEHNIKA", "TAVO TECHNIKA", "SINU TEHNIKA"],
  ["CORRECT FORM", "PAREIZA TEHNIKA", "TAISYKLINGA TECHNIKA", "ÕIGE TEHNIKA"],
  ["KNEES CAVING IN", "CEĻI VIRZĀS UZ IEKŠU", "KELIAI KRYPTA Į VIDŲ", "PÕLVED VAJUVAD SISSEPOOLE"],
  ["↘ KNEES CAVING IN", "↘ CEĻI VIRZĀS UZ IEKŠU", "↘ KELIAI KRYPTA Į VIDŲ", "↘ PÕLVED VAJUVAD SISSEPOOLE"],
  ["Your knees are moving inward. Try to maintain a more stable position and track your knees over your toes.", "Tavi ceļi virzās uz iekšu. Centies saglabāt stabilāku pozīciju un virzi ceļus pēdu pirkstu virzienā.", "Jūsų keliai krypsta į vidų. Stenkitės išlaikyti stabilesnę padėtį ir kelius laikyti virš pėdų pirštų.", "Põlved liiguvad sissepoole. Püüa hoida stabiilsemat asendit ja suunata põlved varvaste kohale."],
  ["Press your knees gently outward as you lower.", "Nolaižoties viegli virzi ceļus uz āru.", "Leisdamiesi švelniai stumkite kelius į išorę.", "Alla laskudes suuna põlvi õrnalt väljapoole."],
  ["HIPS OUT OF LINE", "GURNI NAV TAISNĀ LĪNIJĀ", "KLUBAI NELYGIOJE PADĖTYJE", "PUUSAD POLE SIRGES JOONES"],
  ["↘ HIPS OUT OF LINE", "↘ GURNI NAV TAISNĀ LĪNIJĀ", "↘ KLUBAI NELYGIOJE PADĖTYJE", "↘ PUUSAD POLE SIRGES JOONES"],
  ["Your hips are dropping out of line. Keep your shoulders, hips and heels steady throughout each push-up.", "Tavi gurni noslīd no taisnās līnijas. Atspiešanās laikā turi plecus, gurnus un papēžus vienā līnijā.", "Jūsų klubai nukrypsta nuo tiesios linijos. Atsispaudimų metu išlaikykite pečius, klubus ir kulnus vienoje linijoje.", "Puusad vajuvad sirgest joonest välja. Hoia õlad, puusad ja kannad kogu kätekõverduse ajal ühel joonel."],
  ["Brace your core and squeeze your glutes.", "Sasprindzini vēdera un sēžas muskuļus.", "Įtempkite pilvo ir sėdmenų raumenis.", "Pinguta kerelihaseid ja tuharaid."],
  ["FULL RANGE OF MOTION", "PILNS KUSTĪBU APJOMS", "PILNA JUDESIO AMPLITUDĖ", "TÄIELIK LIIKUMISULATUS"],
  ["↘ FULL RANGE OF MOTION", "↘ PILNS KUSTĪBU APJOMS", "↘ PILNA JUDESIO AMPLITUDĖ", "↘ TÄIELIK LIIKUMISULATUS"],
  ["Your arms and feet aren't reaching the full jumping-jack position. Open your stance and extend your arms overhead with each jump.", "Tavas rokas un pēdas nesasniedz pilnu lēciena pozīciju. Lecot izvērs kājas un iztaisno rokas virs galvas.", "Jūsų rankos ir kojos nepasiekia visos šuoliuko padėties. Šokdami plačiau išskėskite kojas ir ištieskite rankas virš galvos.", "Käed ja jalad ei jõua hüppe täisasendisse. Hüpates vii jalad harki ja siruta käed pea kohale."],
  ["Land softly with your feet apart as you reach both arms overhead.", "Nosēdies viegli ar izvērstām kājām, paceļot abas rokas virs galvas.", "Švelniai nusileiskite praskėstomis kojomis ir pakelkite abi rankas virš galvos.", "Maandu pehmelt, jalad harkis, ja siruta mõlemad käed pea kohale."],
  ["TRY THIS", "IZMĒĢINI ŠO", "IŠBANDYKITE TAI", "PROOVI SEDA"],
  ["TRY AGAIN", "MĒĢINĀT VĒLREIZ", "BANDYTI DAR KARTĄ", "PROOVI UUESTI"],
  ["CONTINUE", "TURPINĀT", "TĘSTI", "JÄTKA"],
  ["WORKOUT COMPLETED!", "TRENIŅŠ PABEIGTS!", "TRENIRUOTĖ BAIGTA!", "TREENING LÄBITUD!"],
  ["You showed up for yourself. That's what counts.", "Tu parūpējies par sevi. Tas ir pats svarīgākais.", "Skyrėte laiko sau. Tai ir svarbiausia.", "Sa tulid enda jaoks kohale. See ongi oluline."],
  ["Repetitions", "Atkārtojumi", "Pakartojimai", "Kordused"],
  ["Duration", "Ilgums", "Trukmė", "Kestus"],
  ["Form Check", "Tehnikas pārbaude", "Technikos patikra", "Tehnikakontroll"],
  ["+50 FitPoints earned!", "Iegūti +50 FitPoints!", "Gauta +50 FitPoints!", "Teenitud +50 FitPointsi!"],
  ["Added to your balance · 1,290 total", "Pievienoti bilancei · kopā 1290", "Pridėta prie balanso · iš viso 1290", "Lisatud saldole · kokku 1290"],
  ["GREAT JOB!", "LIELISKS DARBS!", "PUIKIAI PADIRBĖTA!", "TUBLI TÖÖ!"],
  ["Every rep made you a little stronger.", "Katrs atkārtojums tevi padarīja nedaudz spēcīgāku.", "Kiekvienas pakartojimas padarė jus šiek tiek stipresnius.", "Iga kordus muutis sind veidi tugevamaks."],
  ["BACK TO DASHBOARD", "ATPAKAĻ UZ PANELI", "GRĮŽTI Į SKYDELĮ", "TAGASI TÖÖLAUALE"],
  ["GOOD FOOD, GOOD ENERGY", "LABS ĒDIENS, LABA ENERĢIJA", "GERAS MAISTAS, GERA ENERGIJA", "HEA TOIT, HEA ENERGIA"],
  ["SMART", "GUDRĀ", "IŠMANIOJI", "NUTIKAS"],
  ["CAFETERIA.", "ĒDNĪCA.", "VALGYKLA.", "SÖÖKLA."],
  ["School №40 · Riga, Latvia", "Skola Nr. 40 · Rīga, Latvija", "Mokykla Nr. 40 · Ryga, Latvija", "Kool nr 40 · Riia, Läti"],
  ["OCT", "OKT", "SPAL", "OKT"],
  ["OCT 2026", "OKT 2026", "SPAL 2026", "OKT 2026"],
  ["MON", "PIR", "PR", "E"],
  ["TUE", "OTR", "AN", "T"],
  ["WED", "TRE", "TR", "K"],
  ["THU", "CET", "KT", "N"],
  ["FRI", "PIE", "PN", "R"],
  ["ON THE MENU", "ĒDIENKARTĒ", "MENIU", "MENÜÜS"],
  ["Chicken Cutlet", "Vistas kotlete", "Vištienos kotletas", "Kanakotlett"],
  ["Mashed Potatoes", "Kartupeļu biezenis", "Bulvių košė", "Kartulipuder"],
  ["Vegetable Salad", "Dārzeņu salāti", "Daržovių salotos", "Köögiviljasalat"],
  ["Water", "Ūdens", "Vanduo", "Vesi"],
  ["Baked Fish", "Cepta zivs", "Kepta žuvis", "Küpsetatud kala"],
  ["Brown Rice", "Brūnie rīsi", "Rudieji ryžiai", "Pruun riis"],
  ["Garden Salad", "Dārzeņu salāti", "Šviežių daržovių salotos", "Värske salat"],
  ["Turkey Pasta", "Makaroni ar tītaru", "Makaronai su kalakutiena", "Pasta kalkunilihaga"],
  ["Steamed Vegetables", "Tvaicēti dārzeņi", "Garintos daržovės", "Aurutatud köögiviljad"],
  ["Fresh Apple", "Svaigs ābols", "Šviežias obuolys", "Värske õun"],
  ["Chicken Soup", "Vistas zupa", "Vištienos sriuba", "Kanasupp"],
  ["Wholegrain Bread", "Pilngraudu maize", "Viso grūdo duona", "Täisteraleib"],
  ["Cucumber Salad", "Gurķu salāti", "Agurkų salotos", "Kurgisalat"],
  ["Oven Chicken", "Krāsnī cepta vista", "Orkaitėje kepta vištiena", "Ahjukana"],
  ["Potato Wedges", "Kartupeļu daiviņas", "Bulvių skiltelės", "Kartuliviilud"],
  ["Seasonal Fruit", "Sezonas augļi", "Sezoniniai vaisiai", "Hooajalised puuviljad"],
  ["Main", "Pamatēdiens", "Pagrindinis patiekalas", "Põhiroog"],
  ["Drink", "Dzēriens", "Gėrimas", "Jook"],
  ["Side", "Piedeva", "Garnyras", "Lisand"],
  ["A CLOSER LOOK", "TUVĀK", "IŠ ARČIAU", "LÄHEMALT"],
  ["DEMO RECOGNITION", "DEMO ATPAZĪŠANA", "DEMO ATPAŽINIMAS", "DEMO TUVASTUS"],
  ["✓ MENU MATCH", "✓ ATBILST ĒDIENKARTEI", "✓ ATITINKA MENIU", "✓ VASTAB MENÜÜLE"],
  ["Protein", "Olbaltumvielas", "Baltymai", "Valgud"],
  ["Fat", "Tauki", "Riebalai", "Rasvad"],
  ["Carbs", "Ogļhidrāti", "Angliavandeniai", "Süsivesikud"],
  ["MATCHED WITH SCHOOL MENU · ESTIMATES FOR DEMO", "SALĪDZINĀTS AR SKOLAS ĒDIENKARTI · DEMO APTUVENIE DATI", "SUSIETA SU MOKYKLOS MENIU · DEMO ĮVERTIS", "VÕRRELDUD KOOLI MENÜÜGA · DEMO HINNANG"],
  ["LIVE RADIO · BALTICS", "RADIO TIEŠRAIDE · BALTIJA", "TIESIOGINIS RADIJAS · BALTIJOS ŠALYS", "OTSEÜLEKANDEGA RAADIO · BALTI RIIGID"],
  ["Choose a station and listen while you explore.", "Izvēlies staciju un klausies, kamēr iepazīsti vietni.", "Pasirinkite stotį ir klausykitės naršydami.", "Vali raadiojaam ja kuula veebilehega tutvudes."],
  ["European Hit Radio", "European Hit Radio", "European Hit Radio", "European Hit Radio"],
  ["Mix FM 102.7", "Mix FM 102.7", "Mix FM 102.7", "Mix FM 102.7"],
  ["Radio SWH Latvia", "Radio SWH Latvija", "Radio SWH Latvija", "Radio SWH Läti"],
  ["Radio SWH Spin FM", "Radio SWH Spin FM", "Radio SWH Spin FM", "Radio SWH Spin FM"],
  ["Power Hit Radio Lithuania", "Power Hit Radio Lietuva", "Power Hit Radio Lietuva", "Power Hit Radio Leedu"],
  ["Sky Plus Estonia", "Sky Plus Igaunija", "Sky Plus Estija", "Sky Plus Eesti"],
  ["READY TO PLAY", "GATAVS ATSKAŅOŠANAI", "PARUOŠTA GROTI", "VALMIS ESITAMISEKS"],
  ["LIVE NOW", "TIEŠRAIDE", "TIESIOGIAI", "OTSE EETRIS"],
  ["LIVE RADIO", "RADIO TIEŠRAIDE", "TIESIOGINIS RADIJAS", "OTSEÜLEKANDEGA RAADIO"],
  ["CONNECTING", "SAVIENOJAS", "JUNGIAMASI", "ÜHENDAMINE"],
  ["RADIO PAUSED", "RADIO APTURĒTS", "RADIJAS PRISTABDYTAS", "RAADIO PAUSIL"],
  ["STREAM UNAVAILABLE", "STRAUME NAV PIEEJAMA", "SRAUTAS NEPASIEKIAMAS", "VOOG POLE SAADAVAL"],
  ["VOLUME", "SKAĻUMS", "GARSUMAS", "HELITUGEVUS"],
  ["OPEN ↗", "ATVĒRT ↗", "ATIDARYTI ↗", "AVA ↗"],
  ["YOUR EFFORT, REWARDED", "TAVAS PIEPŪLES TIEK NOVĒRTĒTAS", "TAVO PASTANGOS ĮVERTINTOS", "SINU PINGUTUSI TASUSTATAKSE"],
  ["REWARDS.", "BALVAS.", "APDOVANOJIMAI.", "PREEMIAD."],
  ["Small wins add up to something great.", "Mazie panākumi veido ko lielu.", "Maži laimėjimai virsta dideliais.", "Väikesed võidud viivad suurte saavutusteni."],
  ["YOUR BALANCE", "TAVA BILANCE", "TAVO BALANSAS", "SINU SALDO"],
  ["Earn more with every workout", "Iegūsti vairāk ar katru treniņu", "Uždirbkite daugiau su kiekviena treniruote", "Teeni iga treeninguga juurde"],
  ["REWARDS FOR YOU", "BALVAS TEV", "APDOVANOJIMAI TAU", "PREEMIAD SINULE"],
  ["3 AVAILABLE", "PIEEJAMAS 3", "PRIEINAMI 3", "SAADAVAL 3"],
  ["20% OFF · Sportswear", "20% ATLAIDE · Sporta apģērbs", "20 % NUOLAIDA · Sportinė apranga", "20% SOODUSTUST · Spordiriided"],
  ["10% OFF · Your next visit", "10% ATLAIDE · Nākamajam apmeklējumam", "10 % NUOLAIDA · Kitam apsilankymui", "10% SOODUSTUST · Järgmiselt külastuselt"],
  ["FREE TRIAL · 1 week", "BEZMAKSAS IZMĒĢINĀJUMS · 1 nedēļa", "NEMOKAMAS IŠBANDYMAS · 1 savaitė", "TASUTA PROOV · 1 nädal"],
  ["REDEEM", "IZMANTOT", "PANAUDOTI", "VAHETA VÄLJA"],
  ["HOW TO EARN", "KĀ PELNĪT", "KAIP UŽDIRBTI", "KUIDAS TEENIDA"],
  ["KEEP MOVING", "TURPINI KUSTĒTIES", "JUDĖK TOLIAU", "JÄTKA LIIGUTAMIST"],
  ["Complete a workout", "Pabeidz treniņu", "Atlikite treniruotę", "Läbi treening"],
  ["Keep your weekly streak", "Saglabā nedēļas sēriju", "Išlaikykite savaitės seriją", "Hoia oma nädalaseeriat"],
  ["Workouts", "Treniņi", "Treniruotės", "Treeningud"],
  ["Tasks finished", "Pabeigtie uzdevumi", "Atliktos užduotys", "Lõpetatud ülesanded"],
  ["Achievements", "Sasniegumi", "Pasiekimai", "Saavutused"],
  ["Active time", "Aktīvais laiks", "Aktyvus laikas", "Aktiivne aeg"],
  ["YOUR ACHIEVEMENTS", "TAVI SASNIEGUMI", "TAVO PASIEKIMAI", "SINU SAAVUTUSED"],
  ["Unlocked", "Atbloķēts", "Atrakinta", "Avatud"],
  ["YOUR YEAR, IN MOTION", "TAVS GADS KUSTĪBĀ", "TAVO JUDĖJIMO METAI", "SINU LIIKUMISAASTA"],
  ["OPEN RECAP →", "ATVĒRT KOPSAVILKUMU →", "ATIDARYTI APŽVALGĄ →", "AVA KOKKUVÕTE →"],
  ["BACK TO TEACHER DASHBOARD", "ATPAKAĻ UZ SKOLOTĀJA PANELI", "GRĮŽTI Į MOKYTOJO SKYDELĮ", "TAGASI ÕPETAJA TÖÖLAUALE"],
  ["SWITCH ROLE / EXIT DEMO", "MAINĪT LOMU / IZIET NO DEMO", "KEISTI VAIDMENĮ / IŠEITI IŠ DEMO", "VAHETA ROLLI / VÄLJU DEMOST"],
  ["YOUR SCHOOL · SCHOOL №40", "TAVA SKOLA · SKOLA NR. 40", "TAVO MOKYKLA · MOKYKLA NR. 40", "SINU KOOL · KOOL NR 40"],
  ["TEACHER", "SKOLOTĀJS", "MOKYTOJAS", "ÕPETAJA"],
  ["DASHBOARD.", "PANELIS.", "SKYDELIS.", "TÖÖLAUD."],
  ["Welcome back, Ms. Carter.", "Prieks tevi atkal redzēt, skolotāj Kārtere!", "Smagu jus vėl matyti, mokytoja Karter!", "Tere tulemast tagasi, õpetaja Carter!"],
  ["Overview", "Pārskats", "Apžvalga", "Ülevaade"],
  ["My Classes", "Manas klases", "Mano klasės", "Minu klassid"],
  ["Exercises", "Vingrinājumi", "Pratimai", "Harjutused"],
  ["Assignments", "Uzdevumi", "Užduotys", "Ülesanded"],
  ["Analytics", "Analītika", "Analitika", "Analüütika"],
  ["CREATE EXERCISE", "IZVEIDOT VINGRINĀJUMU", "KURTI PRATIMĄ", "LOO HARJUTUS"],
  ["NEW ACTIVITY", "JAUNA AKTIVITĀTE", "NAUJA VEIKLA", "UUS TEGEVUS"],
  ["EXERCISE NAME", "VINGRINĀJUMA NOSAUKUMS", "PRATIMO PAVADINIMAS", "HARJUTUSE NIMI"],
  ["e.g. Standing lunges", "piem., izklupieni stāvus", "pvz., įtūpstai stovint", "nt seistes väljaasted"],
  ["DESCRIPTION", "APRAKSTS", "APRAŠYMAS", "KIRJELDUS"],
  ["Add a few helpful instructions", "Pievieno dažus noderīgus norādījumus", "Pridėkite kelias naudingas instrukcijas", "Lisa mõned kasulikud juhised"],
  ["TARGET REPETITIONS", "MĒRĶA ATKĀRTOJUMU SKAITS", "TIKSLINIS PAKARTOJIMŲ SKAIČIUS", "EESMÄRGIKS SEATUD KORDUSTE ARV"],
  ["e.g. 20", "piem., 20", "pvz., 20", "nt 20"],
  ["DIFFICULTY", "GRŪTĪBA", "SUNKUMAS", "RASKUSASTE"],
  ["Easy", "Viegli", "Lengva", "Kerge"],
  ["Medium", "Vidēji", "Vidutinis", "Keskmine"],
  ["Challenging", "Izaicinoši", "Sudėtinga", "Väljakutsuv"],
  ["PUBLISH TO CLASS", "PUBLICĒT KLASEI", "PASKELBTI KLASEI", "AVALDA KLASSILE"],
  ["ACTIVE ASSIGNMENTS", "AKTĪVIE UZDEVUMI", "AKTYVIOS UŽDUOTYS", "AKTIIVSED ÜLESANDED"],
  ["2 ACTIVE", "2 AKTĪVI", "2 AKTYVIOS", "2 AKTIIVSET"],
  ["Today's Training", "Šodienas treniņš", "Šiandienos treniruotė", "Tänane treening"],
  ["● ACTIVE", "● AKTĪVS", "● AKTYVI", "● AKTIIVNE"],
  ["AI Squats · Push-ups · Jumping Jacks", "MI pietupieni · atspiešanās · lēcieni", "DI pritūpimai · atsispaudimai · šuoliukai", "TI kükid · kätekõverdused · hüpped"],
  ["16 of 24 students completed", "16 no 24 skolēniem pabeidza", "Užbaigė 16 iš 24 mokinių", "16 õpilast 24-st lõpetas"],
  ["Weekly Movement Challenge", "Nedēļas kustību izaicinājums", "Savaitės judėjimo iššūkis", "Nädala liikumisväljakutse"],
  ["Complete 3 workouts this week", "Šonedēļ pabeidz 3 treniņus", "Šią savaitę atlikite 3 treniruotes", "Läbi sel nädalal 3 treeningut"],
  ["10 of 24 students completed", "10 no 24 skolēniem pabeidza", "Užbaigė 10 iš 24 mokinių", "10 õpilast 24-st lõpetas"],
  ["+ CREATE ASSIGNMENT", "+ IZVEIDOT UZDEVUMU", "+ KURTI UŽDUOTĮ", "+ LOO ÜLESANNE"],
  ["CLASS ANALYTICS", "KLASES ANALĪTIKA", "KLASĖS ANALITIKA", "KLASSI ANALÜÜTIKA"],
  ["Class participation", "Klases dalība", "Klasės dalyvavimas", "Klassi osalus"],
  ["Active minutes", "Aktīvās minūtes", "Aktyvios minutės", "Aktiivsed minutid"],
  ["WEEKLY ACTIVITY", "NEDĒĻAS AKTIVITĀTE", "SAVAITĖS AKTYVUMAS", "NÄDALA TEGEVUS"],
  ["CLASS ENGAGEMENT", "KLASES IESAISTE", "KLASĖS ĮSITRAUKIMAS", "KLASSI KAASATUS"],
  ["Students active this week", "Šonedēļ aktīvie skolēni", "Šią savaitę aktyvūs mokiniai", "Sel nädalal aktiivsed õpilased"],
  ["MY CLASSES", "MANAS KLASES", "MANO KLASĖS", "MINU KLASSID"],
  ["CLASS PROGRESS", "KLASES PROGRESS", "KLASĖS PAŽANGA", "KLASSI ARENG"],
  ["24 STUDENTS", "24 SKOLĒNI", "24 MOKINIAI", "24 ÕPILAST"],
  ["CLASS 10 B", "10. B KLASE", "10 B KLASĖ", "10. B KLASS"],
  ["Grade 10 · Room 204", "10. klase · 204. kabinets", "10 klasė · 204 kabinetas", "10. klass · ruum 204"],
  ["24 students · Physical Education", "24 skolēni · sporta stundas", "24 mokiniai · fizinis ugdymas", "24 õpilast · kehaline kasvatus"],
  ["STUDENT PROGRESS", "SKOLĒNU PROGRESS", "MOKINIŲ PAŽANGA", "ÕPILASTE ARENG"],
  ["VIEW CLASS →", "SKATĪT KLASEI →", "PERŽIŪRĖTI KLASĘ →", "VAATA KLASSI →"],
  ["Active assignments", "Aktīvie uzdevumi", "Aktyvios užduotys", "Aktiivsed ülesanded"],
  ["Completed workouts", "Pabeigtie treniņi", "Atliktos treniruotės", "Läbitud treeningud"],
  ["QUICK ACTION", "ĀTRĀ DARBĪBA", "GREITASIS VEIKSMAS", "KIIRTOIMING"],
  ["REDEEM", "IZMANTOT", "PANAUDOTI", "VAHETA VÄLJA"],
  ["Your reward is ready", "Tava balva ir gatava", "Jūsų apdovanojimas paruoštas", "Sinu preemia on valmis"],
  ["coupon preview. This is a demo coupon and cannot be redeemed.", "kupona priekšskatījums. Šis ir demo kupons, ko nevar izmantot.", "kupono peržiūra. Tai demonstracinis kuponas, kurio negalima panaudoti.", "kupongi eelvaade. See on demokupong, mida ei saa kasutada."],
  ["DONE", "PABEIGTS", "ATLIKTA", "VALMIS"],
  ["Nice work!", "Lielisks darbs!", "Puikiai padirbėta!", "Tubli töö!"],
  ["GOT IT", "SAPRATU", "SUPRATAU", "SELGE"],
  ["Your reward is ready", "Tava balva ir gatava", "Jūsų apdovanojimas paruoštas", "Sinu preemia on valmis"],
  ["Welcome to the demo", "Laipni lūdzam demo versijā", "Sveiki atvykę į demonstraciją", "Tere tulemast demosse"],
  ["You're exploring FitSchool AI in student mode. No account was created and no details were saved.", "Tu iepazīsti FitSchool AI skolēna režīmā. Konts netika izveidots un dati netika saglabāti.", "Išbandote „FitSchool AI“ mokinio režimu. Paskyra nesukurta, duomenys neišsaugoti.", "Tutvud FitSchool AI-ga õpilasrežiimis. Kontot ei loodud ja andmeid ei salvestatud."],
  ["LET'S GO", "SĀKAM", "PIRMYN", "LÄHME"],
  ["Check your exercise details", "Pārbaudi vingrinājuma datus", "Patikrinkite pratimo duomenis", "Kontrolli harjutuse andmeid"],
  ["Add an exercise name and a whole-number repetition target greater than zero.", "Ievadi vingrinājuma nosaukumu un pozitīvu veselu atkārtojumu skaitu.", "Įrašykite pratimo pavadinimą ir teigiamą sveikąjį pakartojimų skaičių.", "Lisa harjutuse nimi ja positiivne täisarvuline korduste arv."],
  ["EDIT EXERCISE", "LABOT VINGRINĀJUMU", "REDAGUOTI PRATIMĄ", "MUUDA HARJUTUST"],
  ["Exercise published", "Vingrinājums publicēts", "Pratimas paskelbtas", "Harjutus avaldatud"],
  ["was added to the teacher's exercise library for the 10 B demo class. This preview doesn't send anything to a real class.", "pievienots skolotāja vingrinājumu bibliotēkai 10. B demo klasei. Demonstrācija nenosūta datus īstai klasei.", "pridėtas prie mokytojo pratimų bibliotekos 10 B demonstracinei klasei. Ši peržiūra nieko nesiunčia tikrai klasei.", "lisati õpetaja harjutuste kogusse 10. B demoklassi jaoks. See eelvaade ei saada midagi päris klassile."],
  ["GREAT", "LIELISKI", "PUIKU", "SUUREPÄRANE"],
  ["Choose radio station", "Izvēlēties radio staciju", "Pasirinkti radijo stotį", "Vali raadiojaam"],
  ["Play radio", "Atskaņot radio", "Leisti radiją", "Esita raadiot"],
  ["Pause radio", "Apturēt radio", "Pristabdyti radiją", "Peata raadio"],
  ["Stop radio", "Apturēt radio", "Sustabdyti radiją", "Peata raadio"],
  ["Radio volume", "Radio skaļums", "Radijo garsumas", "Raadio helitugevus"],
  ["Open", "Atvērt", "Atidaryti", "Ava"],
  ["Close", "Aizvērt", "Uždaryti", "Sulge"],
  ["Exit workout", "Iziet no treniņa", "Išeiti iš treniruotės", "Välju treeningust"],
  ["Back to workouts", "Atpakaļ pie treniņiem", "Grįžti į treniruotes", "Tagasi treeningute juurde"],
  ["App navigation", "Lietotnes navigācija", "Programėlės navigacija", "Rakenduse menüü"],
  ["Your year in motion", "Tavs gads kustībā", "Tavo judėjimo metai", "Sinu liikumisaasta"],
  ["YOUR YEAR IN MOTION", "TAVS GADS KUSTĪBĀ", "TAVO JUDĖJIMO METAI", "SINU LIIKUMISAASTA"],
  ["Your Year", "Tavs gads", "Tavo metai", "Sinu aasta"],
  ["in Motion", "kustībā", "judėjime", "liikumises"],
  ["LATVIAN SUMMER", "LATVIJAS VASARA", "LATVIŠKA VASARA", "LÄTI SUVI"],
  ["Every little step added up to something amazing.", "Katrs mazais solis kopā veidoja ko lielisku.", "Kiekvienas mažas žingsnis virto kažkuo nuostabiu.", "Iga väike samm viis millegi imeliseni."],
  ["Workouts", "Treniņi", "Treniruotės", "Treeningud"],
  ["Completed", "Pabeigti", "Atlikta", "Läbitud"],
  ["That's a whole lot of strength in the making.", "Tu esi kļuvis daudz stiprāks.", "Tai išties daug augančios jėgos.", "Oled kasvatanud kõvasti jõudu."],
  ["Tasks", "Uzdevumi", "Užduotys", "Ülesanded"],
  ["Finished", "Pabeigti", "Atlikta", "Lõpetatud"],
  ["You kept your promises to yourself.", "Tu turēji sev dotos solījumus.", "Laikėtės sau duotų pažadų.", "Pidasid endale antud lubadusi."],
  ["Favorite", "Iecienītākais", "Mėgstamiausias", "Lemmik"],
  ["Exercise", "Vingrinājums", "Pratimas", "Harjutus"],
  ["Strong legs, stronger confidence.", "Spēcīgas kājas, vēl lielāka pārliecība.", "Stiprios kojos, dar didesnis pasitikėjimas savimi.", "Tugevad jalad, veel tugevam enesekindlus."],
  ["Achievements", "Sasniegumi", "Pasiekimai", "Saavutused"],
  ["Unlocked", "Atbloķēts", "Atrakinta", "Avatud"],
  ["MOMENTS TO CELEBRATE", "BRĪŽI, KO SVINĒT", "AKIMIRKOS, KURIAS VERTA ŠVĘSTI", "HETKED, MIDA TÄHISTADA"],
  ["You earned every single one.", "Tu nopelnīji katru no tiem.", "Užsitarnavote kiekvieną iš jų.", "Oled need kõik välja teeninud."],
  ["UNTIL NEXT TIME", "LĪDZ NĀKAMAJAI REIZEI", "IKI KITO KARTO", "JÄRGMISE KORRANI"],
  ["See You", "Uz tikšanos", "Iki pasimatymo", "Näeme"],
  ["Next Year!", "Nākamgad!", "Kitais metais!", "Järgmisel aastal!"],
  ["Keep moving. Your next chapter is waiting.", "Turpini kustēties. Nākamā nodaļa jau gaida.", "Judėkite toliau. Jūsų laukia kitas etapas.", "Jätka liikumist. Järgmine peatükk ootab."],
  ["← BACK", "← ATPAKAĻ", "← ATGAL", "← TAGASI"],
  ["NEXT →", "TĀLĀK →", "TOLIAU →", "EDASI →"],
  ["FINISH ✦", "PABEIGT ✦", "BAIGTI ✦", "LÕPETA ✦"]
];

const translations = Object.fromEntries(
  ["lv", "lt", "et"].map((language, index) => [
    language,
    new Map(translationRows.map(([english, ...localized]) => [english, localized[index]]))
  ])
);
const originalText = new WeakMap();
const originalAttributes = new WeakMap();
const languageGate = document.getElementById("language-gate");
const languageControls = [...document.querySelectorAll(".language-control")];

function translateString(source, language) {
  const dictionary = translations[language];
  if (!dictionary) return source;
  if (dictionary.has(source)) return dictionary.get(source);
  const countTotal = source.match(/^(\d+) TOTAL$/);
  if (countTotal) return `${language === "lv" ? "KOPĀ" : language === "lt" ? "IŠ VISO" : "KOKKU"} ${countTotal[1]}`;
  const workoutCount = source.match(/^(\d+) workouts$/);
  if (workoutCount) {
    const noun = language === "lv" ? "treniņi" : language === "lt" ? "treniruotės" : "treeningut";
    return `${workoutCount[1]} ${noun}`;
  }
  const studentCount = source.match(/^(\d+) STUDENTS$/);
  if (studentCount) {
    const noun = language === "lv" ? "SKOLĒNI" : language === "lt" ? "MOKINIAI" : "ÕPILAST";
    return `${studentCount[1]} ${noun}`;
  }
  const exerciseCount = source.match(/^(\d+) Exercises$/);
  if (exerciseCount) {
    const noun = language === "lv" ? "vingrinājumi" : language === "lt" ? "pratimai" : "harjutust";
    return `${exerciseCount[1]} ${noun}`;
  }
  const repetitions = source.match(/^(\d+) repetitions$/);
  if (repetitions) {
    const noun = language === "lv" ? "atkārtojumi" : language === "lt" ? "pakartojimai" : "kordust";
    return `${repetitions[1]} ${noun}`;
  }
  const exerciseDetail = source.match(/^(\d+) reps · (Form analysis|Your own pace)$/);
  if (exerciseDetail) {
    const quantity = translateString(`${exerciseDetail[1]} reps`, language);
    const detail = translateString(exerciseDetail[2], language);
    return `${quantity} · ${detail}`;
  }
  const repetitionsDetail = source.match(/^(\d+) repetitions · (Form analysis|Your own pace)$/);
  if (repetitionsDetail) {
    const quantity = translateString(`${repetitionsDetail[1]} repetitions`, language);
    const detail = translateString(repetitionsDetail[2], language);
    return `${quantity} · ${detail}`;
  }
  const exerciseNumber = source.match(/^TODAY'S EXERCISE · (\d{2}) OF 03$/);
  if (exerciseNumber) {
    const exerciseLabel = language === "lv" ? "ŠODIENAS VINGRINĀJUMS" : language === "lt" ? "ŠIANDIENOS PRATIMAS" : "TÄNANE HARJUTUS";
    const of = language === "lv" ? "NO" : language === "lt" ? "IŠ" : "-ST";
    return `${exerciseLabel} · ${exerciseNumber[1]} ${of} 03`;
  }
  const repetitionTarget = source.match(/^(\d+) reps$/);
  if (repetitionTarget) {
    const noun = language === "lv" ? "atkārtojumi" : language === "lt" ? "pakartojimai" : "kordust";
    return `${repetitionTarget[1]} ${noun}`;
  }
  const publishedExercise = source.match(/^(.+) was added to the teacher's exercise library for the 10 B demo class\. This preview doesn't send anything to a real class\.$/);
  if (publishedExercise) {
    const message = language === "lv"
      ? "pievienots skolotāja vingrinājumu bibliotēkai 10. B demo klasei. Demonstrācija nenosūta datus īstai klasei."
      : language === "lt"
        ? "pridėtas prie mokytojo pratimų bibliotekos 10 B demonstracinei klasei. Ši peržiūra nieko nesiunčia tikrai klasei."
        : "lisati õpetaja harjutuste kogusse 10. B demoklassi jaoks. See eelvaade ei saada midagi päris klassile.";
    return `${publishedExercise[1]} ${message}`;
  }
  const coupon = source.match(/^(.+) coupon preview\. This is a demo coupon and cannot be redeemed\.$/);
  if (coupon) {
    const message = language === "lv"
      ? "kupona priekšskatījums. Šis ir demo kupons, ko nevar izmantot."
      : language === "lt"
        ? "kupono peržiūra. Tai demonstracinis kuponas, kurio negalima panaudoti."
        : "kupongi eelvaade. See on demokupong, mida ei saa kasutada.";
    return `${coupon[1]} ${message}`;
  }
  const radioConnection = source.match(/^CONNECTING TO (.+)\.\.\.$/);
  if (radioConnection) {
    const prefix = language === "lv" ? "SAVIENOJAS AR" : language === "lt" ? "JUNGIAMASI PRIE" : "ÜHENDUB JAAMAGA";
    return `${prefix} ${radioConnection[1]}...`;
  }
  const radioError = source.match(/^Couldn't (connect to|start) (.+?)\.\s(.+)$/);
  if (radioError) {
    const message = language === "lv"
      ? "Pārbaudi interneta savienojumu un mēģini vēlreiz."
      : language === "lt"
        ? "Patikrinkite interneto ryšį ir bandykite dar kartą."
        : "Kontrolli internetiühendust ja proovi uuesti.";
    const action = language === "lv" ? "Neizdevās pieslēgties" : language === "lt" ? "Nepavyko prisijungti prie" : "Ühendamine ebaõnnestus";
    return `${action} ${radioError[2]}. ${message}`;
  }
  const hello = source.match(/^Hello, (.+)!$/);
  if (hello) {
    const greeting = language === "lv" ? "Sveiks" : language === "lt" ? "Labas" : "Tere";
    return `${greeting}, ${hello[1]}!`;
  }
  const greetingName = source.match(/^Hey, (.+)$/);
  if (greetingName) {
    const greeting = language === "lv" ? "Sveiks" : language === "lt" ? "Labas" : "Tere";
    return `${greeting}, ${greetingName[1]}`;
  }
  const cafeteriaDate = source.match(/^(MON|TUE|WED|THU|FRI), OCT 2026$/);
  if (cafeteriaDate) {
    const weekday = translateString(cafeteriaDate[1], language);
    const month = language === "lt" ? "SPAL" : "OKT";
    return `${weekday}, ${month} 2026`;
  }
  return source;
}

function translateTree(root, language) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    if (!originalText.has(node)) originalText.set(node, node.nodeValue);
    const source = originalText.get(node);
    if (!source.trim()) continue;
    const leading = source.match(/^\s*/)[0];
    const trailing = source.match(/\s*$/)[0];
    const phrase = source.trim();
    const translated = translateString(phrase, language);
    const nextValue = `${leading}${translated}${trailing}`;
    if (node.nodeValue !== nextValue) node.nodeValue = nextValue;
  }

  const attributeNames = ["aria-label", "aria-labelledby", "aria-valuetext", "placeholder", "title", "alt"];
  const elements = root.nodeType === Node.ELEMENT_NODE ? [root, ...root.querySelectorAll("*")] : [...root.parentElement?.querySelectorAll("*") || []];
  for (const element of elements) {
    let originals = originalAttributes.get(element);
    if (!originals) {
      originals = new Map();
      originalAttributes.set(element, originals);
    }
    for (const name of attributeNames) {
      if (!element.hasAttribute(name)) continue;
      if (!originals.has(name)) originals.set(name, element.getAttribute(name));
      const source = originals.get(name);
      const translated = translateString(source, language);
      if (element.getAttribute(name) !== translated) element.setAttribute(name, translated);
    }
  }
}

function setLanguage(language) {
  if (!Object.hasOwn(languageNames, language)) return;
  document.documentElement.lang = language;
  for (const control of languageControls) {
    const label = control.querySelector("[data-current-language]");
    if (label) label.textContent = `${language.toUpperCase()} · ${languageNames[language]}`;
    for (const option of control.querySelectorAll("[data-language-menu-option]")) {
      const selected = option.dataset.languageMenuOption === language;
      option.setAttribute("aria-selected", String(selected));
    }
  }
  const dictionary = translations[language];
  const title = "FitSchool AI — Move smarter. Live healthier.";
  document.title = language === "en" ? title : translateString(title, language);
  translateTree(document.body, language);
  const description = document.querySelector('meta[name="description"]');
  if (description) {
    const source = "FitSchool AI makes school physical education more personal, engaging, and accessible.";
    description.content = language === "en" ? source : (dictionary.get(source) || source);
  }
  document.dispatchEvent(new CustomEvent("fitSchoolLanguageChange", { detail: { language } }));
}

function saveLanguage(language) {
  try {
    localStorage.setItem("fitschool-language", language);
  } catch (error) {
    console.warn("The language preference could not be saved.", error);
  }
}

function chooseLanguage(language) {
  if (!Object.hasOwn(languageNames, language)) return;
  saveLanguage(language);
  setLanguage(language);
  languageGate.hidden = true;
  document.body.style.overflow = "";
  closeLanguageMenus();
  for (const option of languageGate.querySelectorAll(".language-option")) {
    option.setAttribute("aria-pressed", String(option.dataset.language === language));
  }
}

function closeLanguageMenus(returnFocus = false) {
  for (const control of languageControls) {
    const trigger = control.querySelector(".language-switcher");
    const menu = control.querySelector(".language-menu");
    if (!trigger || !menu) continue;
    trigger.setAttribute("aria-expanded", "false");
    menu.hidden = true;
    if (returnFocus && document.activeElement && control.contains(document.activeElement)) {
      trigger.focus({ preventScroll: true });
    }
  }
}

let savedLanguage = null;
try {
  savedLanguage = localStorage.getItem("fitschool-language");
} catch (error) {
  console.warn("The saved language preference could not be read.", error);
}
setLanguage(Object.hasOwn(languageNames, savedLanguage) ? savedLanguage : "en");
languageGate.hidden = false;
document.body.style.overflow = "hidden";
languageGate.querySelector(`.language-option[data-language="${savedLanguage || "en"}"]`)?.focus({ preventScroll: true });

document.addEventListener("click", (event) => {
  const target = event.target instanceof Element ? event.target : null;
  const menuOption = target?.closest("[data-language-menu-option]");
  const gateOption = target?.closest("#language-gate [data-language]");
  if (menuOption) {
    chooseLanguage(menuOption.dataset.languageMenuOption);
    return;
  }
  if (gateOption) {
    chooseLanguage(gateOption.dataset.language);
    return;
  }

  const trigger = target?.closest(".language-switcher");
  if (trigger) {
    const control = trigger.closest(".language-control");
    const menu = control.querySelector(".language-menu");
    const isOpening = menu.hidden;
    closeLanguageMenus();
    menu.hidden = !isOpening;
    trigger.setAttribute("aria-expanded", String(isOpening));
    if (isOpening) {
      menu.querySelector(`[data-language-menu-option="${document.documentElement.lang}"]`)?.focus({ preventScroll: true });
    }
    return;
  }

  closeLanguageMenus();
});
document.addEventListener("keydown", (event) => {
  const target = event.target instanceof Element ? event.target : null;
  const option = target?.closest("[data-language-menu-option]");
  if (!option) {
    if (event.key === "Escape") closeLanguageMenus();
    return;
  }
  const options = [...option.closest(".language-menu").querySelectorAll("[data-language-menu-option]")];
  const index = options.indexOf(option);
  let nextIndex = index;
  if (event.key === "ArrowDown") nextIndex = (index + 1) % options.length;
  else if (event.key === "ArrowUp") nextIndex = (index - 1 + options.length) % options.length;
  else if (event.key === "Home") nextIndex = 0;
  else if (event.key === "End") nextIndex = options.length - 1;
  else if (event.key === "Escape") {
    closeLanguageMenus(true);
    return;
  } else return;
  event.preventDefault();
  options[nextIndex].focus();
});

const translationObserver = new MutationObserver((mutations) => {
  const language = document.documentElement.lang;
  for (const mutation of mutations) {
    for (const addedNode of mutation.addedNodes) {
      if (addedNode.nodeType === Node.ELEMENT_NODE || addedNode.nodeType === Node.TEXT_NODE) {
        translateTree(addedNode, language);
      }
    }
  }
});
translationObserver.observe(document.body, { childList: true, subtree: true });
