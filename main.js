// Translation data
const translations = {
  hr: {
    "header.logo": "FCT Lab",
    "header.tagline": "Functional test fixtures & verifikacija PCB-a",

    "nav.services": "Usluge",
    "nav.technologies": "Tehnologije",
    "nav.process": "Proces",
    "nav.use_cases": "Primjene",
    "nav.contact": "Kontakt",

    "hero.kicker": "FCT / ICT test fixtures · IoT / NB-IoT",
    "hero.title": "Funkcionalni testni sustavi za determinističku verifikaciju PCB-a",
    "hero.subtitle":
      "Projektiranje i izrada funkcionalnih testnih fixturea (FCT) i bed-of-nails sustava za serijsku provjeru električke i funkcionalne ispravnosti PCB-a. Fokus je na ponovljivim uvjetima testa, kontroliranim kontaktima i mjerljivim kriterijima prolaza/pada.",
    "hero.badge_1": "Pogo-pin bed-of-nails",
    "hero.badge_2": "NB-IoT / low-power uređaji",
    "hero.badge_3": "Definiran testni slijed",
    "hero.cta_primary": "Pošalji dokumentaciju za procjenu",
    "hero.cta_secondary": "Detalji o sustavu i granicama testa",
    "hero.note":
      "Ulazni podaci: shema, PCB (Gerber), ciljani testni scenariji, godišnji volumen.",
    "hero.card_title": "NB-IoT brojilo plina – sažetak testa",
    "hero.card_chip": "DUT: BC660 + MCU + magnetski senzori",
    "hero.m1_label": "Trajanje ciklusa",
    "hero.m1_value": "≈ 30 s, uključujući registraciju na mrežu",
    "hero.m2_label": "Operatersko sučelje",
    "hero.m2_value": "Jedan gumb / foot switch",
    "hero.m3_label": "Mjereni parametri",
    "hero.m3_value": "Sleep struja, naponi, odgovori modema",
    "hero.m4_label": "Tip fixturea",
    "hero.m4_value": "Manual clamp, donji bed-of-nails",
    "hero.card_footer":
      "Testni slijed reproducira nominalne uvjete rada brojila: ciklusi buđenja, NB-IoT prijava i obrada impulsa magnetskih senzora s različitim frekvencijama.",

    "services.title": "Područja rada",
    "services.subtitle":
      "Fokus je na funkcionalnom testiranju (FCT) i determinističkim postupcima verifikacije. Nema ad-hoc ručnih procedura; svi koraci testa definirani su u dokumentaciji i softveru.",
    "services.s1_title": "FCT/ICT test fixtures",
    "services.s1_body":
      "Projektiranje fixturea na temelju realnog layouta i dostupnih testnih točaka. Odabir pogo pinova, rastera, gornjeg/donjeg pristupa i mehaničkog vođenja za stabilan kontakt.",
    "services.s1_li1": "ponovljivost kontakta unutar tolerancija",
    "services.s1_li2": "kontrolirani uvjeti napajanja tijekom testa",

    "services.s2_title": "Automatizirani testni slijed",
    "services.s2_body":
      "Implementacija skripti koje inicijaliziraju DUT, primjenjuju pobude, mjere relevantne veličine i evaluiraju granice. Rezultat testa jednoznačno je definiran.",
    "services.s2_li1": "serijski protokoli, AT naredbe, digitalni I/O",
    "services.s2_li2": "logovi s vremenskim oznakama i statusom",

    "services.s3_title": "DFT analiza (Design for Testability)",
    "services.s3_body":
      "Provjera dizajna s aspekta testabilnosti. Detekcija nemjerljivih čvorova, neadekvatnih testnih točaka i neoptimalnih kombinacija signala.",
    "services.s3_li1": "identifikacija potrebnih dodatnih TP",
    "services.s3_li2": "preporuke za sljedeću PCB reviziju",

    "services.s4_title": "Prototip fixturea",
    "services.s4_body":
      "Izrada prvog funkcionalnog modela fixturea radi provjere kontakata, tolerancija poravnanja i trajnosti pinova.",
    "services.s4_li1": "3D print / CNC za iteracije",
    "services.s4_li2": "brza korekcija kritičnih mjesta",

    "services.s5_title": "Dokumentacija",
    "services.s5_body":
      "Sheme, nacrti, opis testnog slijeda i kriterija prolaza/pada, upute za operatere i osnovne dijagnostičke procedure.",
    "services.s5_li1": "jasno definirani ulazni i izlazni kriteriji",

    "services.s6_title": "Održavanje i prilagodbe",
    "services.s6_body":
      "Zamjena pogo pinova, mehaničke korekcije i prilagodba testnih scenarija promjenama firmwarea ili PCB revizija.",
    "services.s6_li1": "podrška kroz životni vijek proizvoda",

    "tech.title": "Tehnologije i testni opseg",
    "tech.subtitle":
      "Primarni fokus su NB-IoT i niskopotrošni uređaji, ali koncept je primjenjiv na većinu embedded sustava s jasnim električkim i funkcionalnim specifikacijama.",
    "tech.t1_title": "Tipovi uređaja",
    "tech.t1_li1": "NB-IoT / LTE-M moduli i modemi",
    "tech.t1_li2": "baterijski senzorski čvorovi (magnetni/Hall)",
    "tech.t1_li3": "embedded sustavi s digitalnim i analognim I/O",
    "tech.t1_li4": "IoT uređaji s integriranim RF modulima",

    "tech.t2_title": "Električki i funkcionalni test",
    "tech.t2_li1": "start-up, brown-out, sleep i wake-up scenariji",
    "tech.t2_li2": "struja mirovanja u µA području",
    "tech.t2_li3":
      "verifikacija komunikacije (UART/I²C/SPI, AT naredbe)",
    "tech.t2_li4": "simulacija ulaznih signala (impulsi, prekidači)",

    "tech.t3_title": "Fixturing i mehanika",
    "tech.t3_li1": "bed-of-nails s definiranim rasterom",
    "tech.t3_li2": "gornji/donji pristup, vođenje DUT-a",
    "tech.t3_li3": "RF i specifični konektori gdje je potrebno",

    "tech.t4_title": "Softver za test",
    "tech.t4_li1": "determinističke skripte s definiranom logikom",
    "tech.t4_li2": "logovi u strojno čitljivom formatu",
    "tech.t4_li3": "jednostavno operatersko sučelje (GUI/CLI)",

    "process.title": "Postupak",
    "process.subtitle":
      "Svaki projekt prolazi kroz iste osnovne faze. Rezultat je fixture i testni slijed koji odgovaraju stvarnim ograničenjima dizajna i proizvodnje.",
    "process.s1_title": "Analiza dokumentacije",
    "process.s1_body":
      "Pregled sheme, PCB-a i specifikacija. Identifikacija funkcionalnih blokova i kritičnih čvorova.",
    "process.s2_title": "DFT evaluacija",
    "process.s2_body":
      "Procjena testabilnosti postojećeg dizajna i izdvajanje točaka koje nije moguće pouzdano testirati.",
    "process.s3_title": "Koncept fixturea",
    "process.s3_body":
      "Odabir tipa fixturea, rasporeda pogo pinova, mehaničkog vođenja i potrebnih pomoćnih sklopova.",
    "process.s4_title": "Mehanički i električni dizajn",
    "process.s4_body":
      "Izrada 3D modela, nacrta i shema. Definicija ožičenja, konektora i mjernih točaka.",
    "process.s5_title": "Prototip i verifikacija",
    "process.s5_body":
      "Izrada prototipa fixturea i testiranje kontakata, stabilnosti mjerenja i robusnosti postupka.",
    "process.s6_title": "Implementacija testnog softvera",
    "process.s6_body":
      "Definiranje testnih koraka, granica tolerancije i strukture logova. Priprema za rad u serijskoj proizvodnji.",

    "cases.title": "Primjeri upotrebe",
    "cases.subtitle":
      "Tipične konfiguracije gdje je funkcionalni fixture prikladniji od ručnog testiranja ili generičkih rješenja.",
    "cases.c1_title": "NB-IoT brojilo plina",
    "cases.c1_body":
      "Uređaj s NB-IoT modemom, niskopotrošnim mikrokontrolerom i magnetskim senzorima za detekciju potrošnje.",
    "cases.c1_li1": "simulacija impulsa senzora s više frekvencija",
    "cases.c1_li2": "mjerenje sleep struje i tranzijenata",
    "cases.c1_li3": "verifikacija registracije na mrežu",

    "cases.c2_title": "Industrijski IoT senzor",
    "cases.c2_body":
      "Senzor s više digitalnih i analognih kanala, predviđen za rad u industrijskim uvjetima.",
    "cases.c2_li1": "test svih I/O linija pod opterećenjem",
    "cases.c2_li2": "tracing parametara za kasniju dijagnostiku",

    "cases.benefits_title": "Razlozi za uvođenje FCT fixturea",
    "cases.benefits_li1":
      "smanjena varijabilnost mjerenja u odnosu na ručne metode",
    "cases.benefits_li2": "jednoznačni kriteriji prolaza/pada",
    "cases.benefits_li3":
      "mogućnost kasnije analize kvarova preko logova",
    "cases.benefits_li4":
      "skalabilnost na veće serije bez promjene principa rada",

    "contact.tag": "Kontakt i ulazni podaci",
    "contact.title": "Slanje dokumentacije",
    "contact.body":
      "Za procjenu i prijedlog arhitekture fixturea potrebno je poslati osnovnu dokumentaciju uređaja i okvirne zahtjeve za testiranje.",
    "contact.li1": "shema u PDF formatu",
    "contact.li2": "PCB proizvodna dokumentacija (Gerber ili sličan format)",
    "contact.li3": "popis funkcionalnosti koje treba verificirati",
    "contact.li4": "očekivani godišnji volumen i takt linije",
    "contact.note":
      "Na temelju toga definira se realan opseg testa, tip fixturea i očekivana složenost implementacije.",
    "contact.email_label": "E-mail",
    "contact.email_value": "info@fct-lab.hr",
    "contact.subject_label": "Primjer subject linije",
    "contact.subject_example":
      "[FCT] Projekt – osnovni podaci i dokumentacija",

    "footer.text": "FCT Lab – functional test engineering"
  },

  en: {
    "header.logo": "FCT Lab",
    "header.tagline": "Functional test fixtures & PCB verification",

    "nav.services": "Services",
    "nav.technologies": "Technologies",
    "nav.process": "Process",
    "nav.use_cases": "Use cases",
    "nav.contact": "Contact",

    "hero.kicker": "FCT / ICT test fixtures · IoT / NB-IoT",
    "hero.title": "Functional test systems for deterministic PCB verification",
    "hero.subtitle":
      "Design and implementation of functional test fixtures (FCT) and bed-of-nails systems for series verification of electrical and functional correctness of PCBs. Focus is on repeatable test conditions, controlled contacts and measurable pass/fail criteria.",
    "hero.badge_1": "Pogo-pin bed-of-nails",
    "hero.badge_2": "NB-IoT / low-power devices",
    "hero.badge_3": "Defined test sequence",
    "hero.cta_primary": "Send documentation for assessment",
    "hero.cta_secondary": "Details on system and test limits",
    "hero.note":
      "Required input: schematic, PCB (Gerber), target test scenarios, yearly volume.",
    "hero.card_title": "NB-IoT gas meter – test summary",
    "hero.card_chip": "DUT: BC660 + MCU + magnetic sensors",
    "hero.m1_label": "Cycle time",
    "hero.m1_value": "≈ 30 s including network registration",
    "hero.m2_label": "Operator interface",
    "hero.m2_value": "Single button / foot switch",
    "hero.m3_label": "Measured parameters",
    "hero.m3_value": "Sleep current, voltages, modem responses",
    "hero.m4_label": "Fixture type",
    "hero.m4_value": "Manual clamp, bottom bed-of-nails",
    "hero.card_footer":
      "The test sequence reproduces nominal meter operation: wake-up cycles, NB-IoT registration and processing of magnetic sensor pulses at multiple frequencies.",

    "services.title": "Scope of work",
    "services.subtitle":
      "The focus is functional testing (FCT) and deterministic verification procedures. No ad-hoc manual steps; all test stages are defined in documentation and software.",
    "services.s1_title": "FCT/ICT test fixtures",
    "services.s1_body":
      "Fixture design based on real PCB layout and available test points. Selection of pogo pins, pitch, top/bottom access and mechanical guidance for stable contact.",
    "services.s1_li1":
      "contact repeatability within defined tolerances",
    "services.s1_li2":
      "controlled supply conditions during the test",

    "services.s2_title": "Automated test sequence",
    "services.s2_body":
      "Implementation of scripts that initialize the DUT, apply stimuli, measure relevant quantities and evaluate limits. The test result is unambiguous.",
    "services.s2_li1": "serial protocols, AT commands, digital I/O",
    "services.s2_li2": "logs with time stamps and status",

    "services.s3_title": "DFT analysis (Design for Testability)",
    "services.s3_body":
      "Design review from a testability perspective. Detection of non-measurable nodes, inadequate test points and non-optimal signal combinations.",
    "services.s3_li1":
      "identification of required additional test points",
    "services.s3_li2":
      "recommendations for the next PCB revision",

    "services.s4_title": "Fixture prototype",
    "services.s4_body":
      "First functional fixture model to verify contacts, alignment tolerances and pin durability.",
    "services.s4_li1":
      "3D printed / CNC parts for iterations",
    "services.s4_li2": "fast correction of critical areas",

    "services.s5_title": "Documentation",
    "services.s5_body":
      "Schematics, drawings, description of test sequence and pass/fail criteria, operator instructions and basic diagnostic procedures.",
    "services.s5_li1":
      "clearly defined input and output criteria",

    "services.s6_title": "Maintenance and adaptations",
    "services.s6_body":
      "Pogo pin replacement, mechanical corrections and adaptation of test scenarios to firmware or PCB changes.",
    "services.s6_li1":
      "support during the product life cycle",

    "tech.title": "Technologies and test coverage",
    "tech.subtitle":
      "Primary focus is NB-IoT and low-power devices, but the concept applies to most embedded systems with defined electrical and functional specifications.",
    "tech.t1_title": "Device types",
    "tech.t1_li1": "NB-IoT / LTE-M modules and modems",
    "tech.t1_li2":
      "battery powered sensor nodes (magnetic/Hall)",
    "tech.t1_li3":
      "embedded systems with digital and analog I/O",
    "tech.t1_li4":
      "IoT devices with integrated RF modules",

    "tech.t2_title": "Electrical and functional tests",
    "tech.t2_li1":
      "start-up, brown-out, sleep and wake-up scenarios",
    "tech.t2_li2": "standby current in the µA range",
    "tech.t2_li3":
      "communication verification (UART/I²C/SPI, AT commands)",
    "tech.t2_li4": "input stimulation (pulses, switches)",

    "tech.t3_title": "Fixturing and mechanics",
    "tech.t3_li1": "bed-of-nails with defined pitch",
    "tech.t3_li2": "top/bottom access, DUT guidance",
    "tech.t3_li3":
      "RF and special connectors where required",

    "tech.t4_title": "Test software",
    "tech.t4_li1": "deterministic scripts with defined logic",
    "tech.t4_li2": "machine-readable log formats",
    "tech.t4_li3": "simple operator interface (GUI/CLI)",

    "process.title": "Process",
    "process.subtitle":
      "Each project follows the same core phases. The result is a fixture and test sequence aligned with real design and production constraints.",
    "process.s1_title": "Documentation analysis",
    "process.s1_body":
      "Review of schematics, PCB and specifications. Identification of functional blocks and critical nodes.",
    "process.s2_title": "DFT evaluation",
    "process.s2_body":
      "Assessment of current design testability and detection of nodes that cannot be reliably tested.",
    "process.s3_title": "Fixture concept",
    "process.s3_body":
      "Selection of fixture type, pogo pin layout, mechanical guidance and auxiliary circuits.",
    "process.s4_title": "Mechanical and electrical design",
    "process.s4_body":
      "Creation of 3D model, drawings and schematics. Definition of wiring, connectors and measurement points.",
    "process.s5_title": "Prototype and verification",
    "process.s5_body":
      "Prototype fixture manufacturing and testing of contacts, measurement stability and robustness.",
    "process.s6_title": "Test software implementation",
    "process.s6_body":
      "Definition of test steps, tolerance limits and log structure. Preparation for operation in series production.",

    "cases.title": "Use cases",
    "cases.subtitle":
      "Typical configurations where a functional fixture is more appropriate than manual testing or generic solutions.",
    "cases.c1_title": "NB-IoT gas meter",
    "cases.c1_body":
      "Device with NB-IoT modem, low-power microcontroller and magnetic sensors for consumption detection.",
    "cases.c1_li1":
      "sensor pulse simulation at multiple frequencies",
    "cases.c1_li2":
      "sleep current and transient measurements",
    "cases.c1_li3":
      "network registration verification",

    "cases.c2_title": "Industrial IoT sensor",
    "cases.c2_body":
      "Sensor with multiple digital and analog channels for industrial environments.",
    "cases.c2_li1":
      "testing of all I/O lines under load",
    "cases.c2_li2":
      "parameter tracing for later diagnostics",

    "cases.benefits_title":
      "Reasons to introduce an FCT fixture",
    "cases.benefits_li1":
      "reduced measurement variability vs. manual methods",
    "cases.benefits_li2":
      "unambiguous pass/fail criteria",
    "cases.benefits_li3":
      "possibility of later fault analysis using logs",
    "cases.benefits_li4":
      "scalability to higher volumes without changing the principle of operation",

    "contact.tag": "Contact and input data",
    "contact.title": "Submitting documentation",
    "contact.body":
      "To estimate and propose a fixture architecture, basic device documentation and approximate test requirements are needed.",
    "contact.li1": "schematic in PDF format",
    "contact.li2": "PCB manufacturing data (Gerber or similar)",
    "contact.li3":
      "list of functionalities to be verified",
    "contact.li4":
      "expected yearly volume and line takt time",
    "contact.note":
      "Based on this, realistic test scope, fixture type and expected implementation complexity are defined.",
    "contact.email_label": "E-mail",
    "contact.email_value": "info@fct-lab.hr",
    "contact.subject_label": "Example subject line",
    "contact.subject_example":
      "[FCT] Project – basic data and documentation",

    "footer.text": "FCT Lab – functional test engineering"
  }
};

function applyLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  document.documentElement.lang = lang === "hr" ? "hr" : "en";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle(
      "active",
      btn.getAttribute("data-lang") === lang
    );
  });

  try {
    localStorage.setItem("fct_lang", lang);
  } catch (e) {
    // ignore
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // set year in footer
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // initial language
  let lang = "hr";
  try {
    const stored = localStorage.getItem("fct_lang");
    if (stored && translations[stored]) {
      lang = stored;
    }
  } catch (e) {
    // ignore
  }
  applyLanguage(lang);

  // language switch events
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetLang = btn.getAttribute("data-lang");
      if (translations[targetLang]) {
        applyLanguage(targetLang);
      }
    });
  });
});
