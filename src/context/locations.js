const allLocations = {
  Abia: [
    "Aba North",
    "Aba South",
    "Arochukwu",
    "Bende",
    "Ikwuano",
    "Isiala Ngwa North",
    "Isiala Ngwa South",
    "Isuikwuato",
    "Obi Ngwa",
    "Ohafia",
    "Osisioma",
    "Ugwunagbo",
    "Ukwa East",
    "Ukwa West",
    "Umuahia North",
    "Umuahia South",
    "Umu Nneochi",
  ],
  Adamawa: [
    "Demsa",
    "Fufore",
    "Ganye",
    "Gayuk",
    "Gombi",
    "Grie",
    "Hong",
    "Jada",
    "Lamurde",
    "Madagali",
    "Maiha",
    "Mayo-Belwa",
    "Michika",
    "Mubi North",
    "Mubi South",
    "Numan",
    "Shelleng",
    "Song",
    "Toungo",
    "Yola North",
    "Yola South",
  ],
  "Akwa Ibom": [
    "Abak",
    "Eastern Obolo",
    "Eket",
    "Esit Eket",
    "Essien Udim",
    "Etim Ekpo",
    "Etinan",
    "Ibeno",
    "Ibesikpo Asutan",
    "Ibiono-Ibom",
    "Ika",
    "Ikono",
    "Ikot Abasi",
    "Ikot Ekpene",
    "Ini",
    "Itu",
    "Mbo",
    "Mkpat-Enin",
    "Nsit-Atai",
    "Nsit-Ibom",
    "Nsit-Ubium",
    "Obot Akara",
    "Okobo",
    "Onna",
    "Oron",
    "Oruk Anam",
    "Udung-Uko",
    "Ukanafun",
    "Uruan",
    "Urue-Offong/Oruko",
    "Uyo",
  ],
  Anambra: [
    "Aguata",
    "Anambra East",
    "Anambra West",
    "Anaocha",
    "Awka North",
    "Awka South",
    "Ayamelum",
    "Dunukofia",
    "Ekwusigo",
    "Idemili North",
    "Idemili South",
    "Ihiala",
    "Njikoka",
    "Nnewi North",
    "Nnewi South",
    "Ogbaru",
    "Onitsha North",
    "Onitsha South",
    "Orumba North",
    "Orumba South",
    "Oyi",
  ],
  Bauchi: [
    "Alkaleri",
    "Bauchi",
    "Bogoro",
    "Damban",
    "Darazo",
    "Dass",
    "Gamawa",
    "Ganjuwa",
    "Giade",
    "Itas/Gadau",
    "Jama'are",
    "Katagum",
    "Kirfi",
    "Misau",
    "Ningi",
    "Shira",
    "Tafawa Balewa",
    "Toro",
    "Warji",
    "Zaki",
  ],
  Bayelsa: [
    "Brass",
    "Ekeremor",
    "Kolokuma/Opokuma",
    "Nembe",
    "Ogbia",
    "Sagbama",
    "Southern Ijaw",
    "Yenagoa",
  ],
  Benue: [
    "Ado",
    "Agatu",
    "Apa",
    "Buruku",
    "Gboko",
    "Guma",
    "Gwer East",
    "Gwer West",
    "Katsina-Ala",
    "Konshisha",
    "Kwande",
    "Logo",
    "Makurdi",
    "Obi",
    "Ogbadibo",
    "Ohimini",
    "Oju",
    "Okpokwu",
    "Otukpo",
    "Tarka",
    "Ukum",
    "Ushongo",
    "Vandeikya",
  ],
  Borno: [
    "Abadam",
    "Askira/Uba",
    "Bama",
    "Bayo",
    "Biu",
    "Chibok",
    "Damboa",
    "Dikwa",
    "Gubio",
    "Guzamala",
    "Gwoza",
    "Hawul",
    "Jere",
    "Kaga",
    "Kala/Balge",
    "Konduga",
    "Kukawa",
    "Kwaya Kusar",
    "Mafa",
    "Magumeri",
    "Maiduguri",
    "Marte",
    "Mobbar",
    "Monguno",
    "Ngala",
    "Nganzai",
    "Shani",
  ],
  "Cross River": [
    "Abi",
    "Akamkpa",
    "Akpabuyo",
    "Bakassi",
    "Bekwarra",
    "Biase",
    "Boki",
    "Calabar Municipal",
    "Calabar South",
    "Etung",
    "Ikom",
    "Obanliku",
    "Obubra",
    "Obudu",
    "Odukpani",
    "Ogoja",
    "Yakuur",
    "Yala",
    "Yarkur",
  ],
  Delta: [
    "Aniocha North",
    "Aniocha South",
    "Asaba",
    "Bomadi",
    "Burutu",
    "Central Ijaw",
    "Delta State",
    "Ika North East",
    "Ika South",
    "Isoko North",
    "Isoko South",
    "Ndokwa East",
    "Ndokwa West",
    "Okpe",
    "Oshimili North",
    "Oshimili South",
    "Patani",
    "Sapele",
    "Udu",
    "Ughelli North",
    "Ughelli South",
    "Warri North",
    "Warri South",
    "Warri South-West",
  ],
  Ebonyi: [
    "Abakaliki",
    "Afikpo North",
    "Afikpo South",
    "Ebonyi",
    "Ezza North",
    "Ezza South",
    "Ikwo",
    "Ishielu",
    "Ivo",
    "Ohaozara",
    "Ohaukwu",
    "Onicha",
  ],
  Edo: [
    "Akoko-Edo",
    "Egor",
    "Esan Central",
    "Esan North-East",
    "Esan South-East",
    "Esan West",
    "Igueben",
    "Ikpoba Okha",
    "Oredo",
    "Orhionmwon",
    "Ovia North-East",
    "Ovia South-West",
    "Uhunmwonde",
  ],
  Ekiti: [
    "Ado Ekiti",
    "Efon",
    "Ekiti East",
    "Ekiti South-West",
    "Ekiti West",
    "Emure",
    "Irepodun/Ifelodun",
    "Ise/Orun",
    "Moba",
    "Oye",
  ],
  Enugu: [
    "Awgu",
    "Enugu East",
    "Enugu North",
    "Enugu South",
    "Ezeagu",
    "Igbo Etiti",
    "Igbo Eze North",
    "Igbo Eze South",
    "Isi Uzo",
    "Nkanu East",
    "Nkanu West",
    "Oji River",
    "Udi",
    "Uzo Uwani",
  ],
  Gombe: [
    "Akko",
    "Balanga",
    "Billiri",
    "Dukku",
    "Gombe",
    "Kaltungo",
    "Kwami",
    "Nafada",
    "Shongom",
    "Yamaltu/Deba",
  ],
  Imo: [
    "Aboh Mbaise",
    "Ahiazu Mbaise",
    "Ekiti",
    "Emekuku",
    "Ezinihitte",
    "Ideato North",
    "Ideato South",
    "Ihitte/Uboma",
    "Isiala Mbano",
    "Isu",
    "Mbaitoli",
    "Ngor Okpala",
    "Njaba",
    "Nkwerre",
    "Obowo",
    "Oguta",
    "Ohaji/Egbema",
    "Orlu",
    "Orsu",
    "Owerri Municipal",
    "Owerri North",
    "Owerri West",
    "Ukwuani",
  ],
  Jigawa: [
    "Auyo",
    "Babura",
    "Bade",
    "Birnin Kudu",
    "Dutse",
    "Garki",
    "Gumel",
    "Hadejia",
    "Kazaure",
    "Kiyawa",
    "Maigatari",
    "Malam Madori",
    "Miga",
    "Ringim",
    "Sule Tankarkar",
    "Taura",
    "Yankwashi",
  ],
  Kaduna: [
    "Birnin Gwari",
    "Chikun",
    "Giwa",
    "Igabi",
    "Jaba",
    "Jema'a",
    "Kachia",
    "Kaduna North",
    "Kaduna South",
    "Kagarko",
    "Kaura",
    "Kubau",
    "Kudan",
    "Lere",
    "Makarfi",
    "Sabon Gari",
    "Sanga",
    "Soba",
    "Zaria",
  ],
  Kano: [
    "Ajingi",
    "Albasu",
    "Bagwai",
    "Bebeji",
    "Bichi",
    "Dala",
    "Dawakin Kudu",
    "Dawakin Tofa",
    "Gaya",
    "Garko",
    "Karaye",
    "Kibiya",
    "Kano Municipal",
    "Kano South",
    "Kumbotso",
    "Madobi",
    "Makoda",
    "Minjibir",
    "Nasarawa",
    "Rano",
    "Rimin Gado",
    "Tarauni",
    "Tofa",
    "Tsanyawa",
    "Warawa",
    "Wudil",
  ],
  Kogi: [
    "Adavi",
    "Ajaokuta",
    "Ankpa",
    "Bassa",
    "Dekina",
    "Ibaji",
    "Idah",
    "Igalamela-Odolu",
    "Ijumu",
    "Lokoja",
    "Mopa-Muro",
    "Ofu",
    "Ogori/Magongo",
    "Okehi",
    "Okene",
    "Olamaboro",
    "Yagba East",
    "Yagba West",
  ],
  Kwara: [
    "Asa",
    "Baruten",
    "Ekiti",
    "Ifelodun",
    "Ilorin East",
    "Ilorin South",
    "Ilorin West",
    "Irepodun",
    "Isin",
    "Kaiama",
    "Moro",
    "Offa",
    "Oke Ero",
    "Oyun",
    "Patigi",
  ],
  Lagos: [
    "Agege",
    "Ajeromi-Ifelodun",
    "Alimosho",
    "Amuwo-Odofin",
    "Apapa",
    "Badagry",
    "Ikorodu",
    "Ikeja",
    "Lagos Island",
    "Lagos Mainland",
    "Mushin",
    "Oshodi-Isolo",
    "Somolu",
    "Surulere",
    "Eti-Osa",
    "Ibeju-Lekki",
    "Kosofe",
    "Ikorodu",
    "Agbado-Oke Odo",
    "Epe",
    "Ikorodu",
    "Ojo",
  ],
  Nasarawa: [
    "Akwanga",
    "Doma",
    "KarU",
    "Keana",
    "Keffi",
    "Lafia",
    "Nasarawa",
    "Nasarawa Eggon",
    "Obi",
    "Toto",
    "Wamba",
  ],
  Niger: [
    "Agwara",
    "Bida",
    "Borgu",
    "Bosso",
    "Chanchaga",
    "Edati",
    "Gbako",
    "Gurara",
    "Katcha",
    "Lapai",
    "Lavun",
    "Mokwa",
    "Muya",
    "Paikoro",
    "Rafi",
    "Rijau",
    "Shiroro",
    "Suleja",
    "Tafa",
    "Wushishi",
  ],
  Ogun: [
    "Abeokuta North",
    "Abeokuta South",
    "Ado-Odo/Ota",
    "Ewekoro",
    "Ifo",
    "Ijebu East",
    "Ijebu North",
    "Ijebu North East",
    "Ijebu Ode",
    "Obafemi-Owode",
    "Odogbolu",
    "Remo North",
    "Sagamu",
    "Yewa North",
    "Yewa South",
  ],
  Ondo: [
    "Akoko North East",
    "Akoko North West",
    "Akoko South East",
    "Akoko South West",
    "Akure North",
    "Akure South",
    "Ese Odo",
    "Idanre",
    "Ifedore",
    "Ilaje",
    "Odigbo",
    "Ondo East",
    "Ondo West",
    "Ose",
    "Owo",
  ],
  Osun: [
    "Aiyedade",
    "Aiyedire",
    "Atakunmosa East",
    "Atakunmosa West",
    "Boluwaduro",
    "Boripe",
    "Ede North",
    "Ede South",
    "Egbedore",
    "Ife East",
    "Ife North",
    "Ife South",
    "Ilesa East",
    "Ilesa West",
    "Isokan",
    "Odo Otin",
    "Oluyole",
    "Olorunda",
    "Osogbo",
    "Olaoluwa",
    "Irepodun",
  ],
  Oyo: [
    "Akinyele",
    "Atiba",
    "Afijio",
    "Ibadan North",
    "Ibadan North East",
    "Ibadan South East",
    "Ibadan South West",
    "Ibarapa Central",
    "Ibarapa East",
    "Ibarapa North",
    "Ido",
    "Iseyin",
    "Itesiwaju",
    "Ogbomosho North",
    "Ogbomosho South",
    "Oyo East",
    "Oyo West",
    "Saki East",
    "Saki West",
    "Surulere",
  ],
  Plateau: [
    "Bokkos",
    "Jos East",
    "Jos North",
    "Jos South",
    "Kanam",
    "Kanke",
    "Langtang North",
    "Langtang South",
    "Mangu",
    "Pankshin",
    "Quaan Pan",
    "Riyom",
    "Shendam",
    "Wase",
  ],
  Rivers: [
    "Abua/Odual",
    "Ahoada East",
    "Ahoada West",
    "Akuku-Toru",
    "Andoni",
    "Asari-Toru",
    "Bonny",
    "Degema",
    "Eleme",
    "Emohua",
    "Etche",
    "Gokana",
    "Ikwerre",
    "Khana",
    "Obio/Akpor",
    "Ogba/Egbema/Ndoni",
    "Ogu/Bolo",
    "Okrika",
    "Opobo/Nkoro",
    "Port Harcourt",
    "Tai",
  ],
  Sokoto: [
    "Bodinga",
    "Dange/Shuni",
    "Gada",
    "Goronyo",
    "Gudu",
    "Illela",
    "Kebbe",
    "Kware",
    "Rabah",
    "Sokoto East",
    "Sokoto South",
    "Tambuwal",
    "Wamako",
    "Wurno",
    "Yabo",
  ],
  Taraba: [
    "Ardo Kola",
    "Bali",
    "Donga",
    "Gashaka",
    "Gassol",
    "Ibi",
    "Jalingo",
    "Karim Lamido",
    "Kumi",
    "Lau",
    "Sardauna",
    "Takum",
    "Ussa",
    "Wukari",
    "Yoro",
  ],
  Yobe: [
    "Bade",
    "Bursari",
    "Damaturu",
    "Fika",
    "Fune",
    "Geidam",
    "Gujba",
    "Gulde",
    "Jakusko",
    "Karasuwa",
    "Machina",
    "Nangere",
    "Nguru",
    "Potiskum",
    "Tarmuwa",
    "Yunusari",
  ],
  Zamfara: [
    "Anka",
    "Bakura",
    "Birnin Magaji",
    "Bukkuyum",
    "Dansadau",
    "Gummi",
    "Gusau",
    "Kaura Namoda",
    "Maradun",
    "Shinkafi",
    "Talata Mafara",
    "Zamfara East",
    "Zamfara West",
  ],
};

export default allLocations;
