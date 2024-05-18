const countries = [
    { id: 1, name: "Afghanistan", flag: "https://flagcdn.com/256x192/af.png", capital: "Kabul", mostSpokenLanguage: "Pashto" },
    { id: 2, name: "Albania", flag: "https://flagcdn.com/256x192/al.png", capital: "Tirana", mostSpokenLanguage: "Albanian" },
    { id: 3, name: "Algeria", flag: "https://flagcdn.com/256x192/dz.png", capital: "Algiers", mostSpokenLanguage: "Arabic" },
    { id: 4, name: "Andorra", flag: "https://flagcdn.com/256x192/ad.png", capital: "Andorra la Vella", mostSpokenLanguage: "Catalan" },
    { id: 5, name: "Angola", flag: "https://flagcdn.com/256x192/ao.png", capital: "Luanda", mostSpokenLanguage: "Portuguese" },
    { id: 6, name: "Antigua and Barbuda", flag: "https://flagcdn.com/256x192/ag.png", capital: "St. John's", mostSpokenLanguage: "English" },
    { id: 7, name: "Argentina", flag: "https://flagcdn.com/256x192/ar.png", capital: "Buenos Aires", mostSpokenLanguage: "Spanish" },
    { id: 8, name: "Armenia", flag: "https://flagcdn.com/256x192/am.png", capital: "Yerevan", mostSpokenLanguage: "Armenian" },
    { id: 9, name: "Australia", flag: "https://flagcdn.com/256x192/au.png", capital: "Canberra", mostSpokenLanguage: "English" },
    { id: 10, name: "Austria", flag: "https://flagcdn.com/256x192/at.png", capital: "Vienna", mostSpokenLanguage: "German" },
    { id: 11, name: "Azerbaijan", flag: "https://flagcdn.com/256x192/az.png", capital: "Baku", mostSpokenLanguage: "Azerbaijani" },
    { id: 12, name: "Bahamas", flag: "https://flagcdn.com/256x192/bs.png", capital: "Nassau", mostSpokenLanguage: "English" },
    { id: 13, name: "Bahrain", flag: "https://flagcdn.com/256x192/bh.png", capital: "Manama", mostSpokenLanguage: "Arabic" },
    { id: 14, name: "Bangladesh", flag: "https://flagcdn.com/256x192/bd.png", capital: "Dhaka", mostSpokenLanguage: "Bengali" },
    { id: 15, name: "Barbados", flag: "https://flagcdn.com/256x192/bb.png", capital: "Bridgetown", mostSpokenLanguage: "English" },
    { id: 16, name: "Belarus", flag: "https://flagcdn.com/256x192/by.png", capital: "Minsk", mostSpokenLanguage: "Belarusian" },
    { id: 17, name: "Belgium", flag: "https://flagcdn.com/256x192/be.png", capital: "Brussels", mostSpokenLanguage: "Dutch" },
    { id: 18, name: "Belize", flag: "https://flagcdn.com/256x192/bz.png", capital: "Belmopan", mostSpokenLanguage: "English" },
    { id: 19, name: "Benin", flag: "https://flagcdn.com/256x192/bj.png", capital: "Porto-Novo", mostSpokenLanguage: "French" },
    { id: 20, name: "Bhutan", flag: "https://flagcdn.com/256x192/bt.png", capital: "Thimphu", mostSpokenLanguage: "Dzongkha" },
    { id: 21, name: "Bolivia", flag: "https://flagcdn.com/256x192/bo.png", capital: "Sucre", mostSpokenLanguage: "Spanish" },
    { id: 22, name: "Bosnia and Herzegovina", flag: "https://flagcdn.com/256x192/ba.png", capital: "Sarajevo", mostSpokenLanguage: "Bosnian" },
    { id: 23, name: "Botswana", flag: "https://flagcdn.com/256x192/bw.png", capital: "Gaborone", mostSpokenLanguage: "Setswana" },
    { id: 24, name: "Brazil", flag: "https://flagcdn.com/256x192/br.png", capital: "Brasília", mostSpokenLanguage: "Portuguese" },
    { id: 25, name: "Brunei", flag: "https://flagcdn.com/256x192/bn.png", capital: "Bandar Seri Begawan", mostSpokenLanguage: "Malay" },
    { id: 26, name: "Bulgaria", flag: "https://flagcdn.com/256x192/bg.png", capital: "Sofia", mostSpokenLanguage: "Bulgarian" },
    { id: 27, name: "Burkina Faso", flag: "https://flagcdn.com/256x192/bf.png", capital: "Ouagadougou", mostSpokenLanguage: "French" },
    { id: 28, name: "Burundi", flag: "https://flagcdn.com/256x192/bi.png", capital: "Gitega", mostSpokenLanguage: "Kirundi" },
    { id: 29, name: "Cabo Verde", flag: "https://flagcdn.com/256x192/cv.png", capital: "Praia", mostSpokenLanguage: "Portuguese" },
    { id: 30, name: "Cambodia", flag: "https://flagcdn.com/256x192/kh.png", capital: "Phnom Penh", mostSpokenLanguage: "Khmer" },
    { id: 31, name: "Cameroon", flag: "https://flagcdn.com/256x192/cm.png", capital: "Yaoundé", mostSpokenLanguage: "French" },
    { id: 32, name: "Canada", flag: "https://flagcdn.com/256x192/ca.png", capital: "Ottawa", mostSpokenLanguage: "English" },
    { id: 33, name: "Central African Republic", flag: "https://flagcdn.com/256x192/cf.png", capital: "Bangui", mostSpokenLanguage: "French" },
    { id: 34, name: "Chad", flag: "https://flagcdn.com/256x192/td.png", capital: "N'Djamena", mostSpokenLanguage: "French" },
    { id: 35, name: "Chile", flag: "https://flagcdn.com/256x192/cl.png", capital: "Santiago", mostSpokenLanguage: "Spanish" },
    { id: 36, name: "China", flag: "https://flagcdn.com/256x192/cn.png", capital: "Beijing", mostSpokenLanguage: "Mandarin" },
    { id: 37, name: "Colombia", flag: "https://flagcdn.com/256x192/co.png", capital: "Bogotá", mostSpokenLanguage: "Spanish" },
    { id: 38, name: "Comoros", flag: "https://flagcdn.com/256x192/km.png", capital: "Moroni", mostSpokenLanguage: "Comorian" },
    { id: 39, name: "Congo (Congo-Brazzaville)", flag: "https://flagcdn.com/256x192/cg.png", capital: "Brazzaville", mostSpokenLanguage: "French" },
    { id: 40, name: "Costa Rica", flag: "https://flagcdn.com/256x192/cr.png", capital: "San José", mostSpokenLanguage: "Spanish" },
    { id: 41, name: "Croatia", flag: "https://flagcdn.com/256x192/hr.png", capital: "Zagreb", mostSpokenLanguage: "Croatian" },
    { id: 42, name: "Cuba", flag: "https://flagcdn.com/256x192/cu.png", capital: "Havana", mostSpokenLanguage: "Spanish" },
    { id: 43, name: "Cyprus", flag: "https://flagcdn.com/256x192/cy.png", capital: "Nicosia", mostSpokenLanguage: "Greek" },
    { id: 44, name: "Czech Republic", flag: "https://flagcdn.com/256x192/cz.png", capital: "Prague", mostSpokenLanguage: "Czech" },
    { id: 45, name: "Democratic Republic of the Congo", flag: "https://flagcdn.com/256x192/cd.png", capital: "Kinshasa", mostSpokenLanguage: "French" },
    { id: 46, name: "Denmark", flag: "https://flagcdn.com/256x192/dk.png", capital: "Copenhagen", mostSpokenLanguage: "Danish" },
    { id: 47, name: "Djibouti", flag: "https://flagcdn.com/256x192/dj.png", capital: "Djibouti", mostSpokenLanguage: "French" },
    { id: 48, name: "Dominica", flag: "https://flagcdn.com/256x192/dm.png", capital: "Roseau", mostSpokenLanguage: "English" },
    { id: 49, name: "Dominican Republic", flag: "https://flagcdn.com/256x192/do.png", capital: "Santo Domingo", mostSpokenLanguage: "Spanish" },
    { id: 50, name: "East Timor (Timor-Leste)", flag: "https://flagcdn.com/256x192/tl.png", capital: "Dili", mostSpokenLanguage: "Tetum" },
    { id: 51, name: "Ecuador", flag: "https://flagcdn.com/256x192/ec.png", capital: "Quito", mostSpokenLanguage: "Spanish" },
    { id: 52, name: "Egypt", flag: "https://flagcdn.com/256x192/eg.png", capital: "Cairo", mostSpokenLanguage: "Arabic" },
    { id: 53, name: "El Salvador", flag: "https://flagcdn.com/256x192/sv.png", capital: "San Salvador", mostSpokenLanguage: "Spanish" },
    { id: 54, name: "Equatorial Guinea", flag: "https://flagcdn.com/256x192/gq.png", capital: "Malabo", mostSpokenLanguage: "Spanish" },
    { id: 55, name: "Eritrea", flag: "https://flagcdn.com/256x192/er.png", capital: "Asmara", mostSpokenLanguage: "Tigrinya" },
    { id: 56, name: "Estonia", flag: "https://flagcdn.com/256x192/ee.png", capital: "Tallinn", mostSpokenLanguage: "Estonian" },
    { id: 57, name: "Eswatini (fmr. Swaziland)", flag: "https://flagcdn.com/256x192/sz.png", capital: "Mbabane", mostSpokenLanguage: "Swazi" },
    { id: 58, name: "Ethiopia", flag: "https://flagcdn.com/256x192/et.png", capital: "Addis Ababa", mostSpokenLanguage: "Amharic" },
    { id: 59, name: "Fiji", flag: "https://flagcdn.com/256x192/fj.png", capital: "Suva", mostSpokenLanguage: "English" },
    { id: 60, name: "Finland", flag: "https://flagcdn.com/256x192/fi.png", capital: "Helsinki", mostSpokenLanguage: "Finnish" },
    { id: 61, name: "France", flag: "https://flagcdn.com/256x192/fr.png", capital: "Paris", mostSpokenLanguage: "French" },
    { id: 62, name: "Gabon", flag: "https://flagcdn.com/256x192/ga.png", capital: "Libreville", mostSpokenLanguage: "French" },
    { id: 63, name: "Gambia", flag: "https://flagcdn.com/256x192/gm.png", capital: "Banjul", mostSpokenLanguage: "English" },
    { id: 64, name: "Georgia", flag: "https://flagcdn.com/256x192/ge.png", capital: "Tbilisi", mostSpokenLanguage: "Georgian" },
    { id: 65, name: "Germany", flag: "https://flagcdn.com/256x192/de.png", capital: "Berlin", mostSpokenLanguage: "German" },
    { id: 66, name: "Ghana", flag: "https://flagcdn.com/256x192/gh.png", capital: "Accra", mostSpokenLanguage: "English" },
    { id: 67, name: "Greece", flag: "https://flagcdn.com/256x192/gr.png", capital: "Athens", mostSpokenLanguage: "Greek" },
    { id: 68, name: "Grenada", flag: "https://flagcdn.com/256x192/gd.png", capital: "St. George's", mostSpokenLanguage: "English" },
    { id: 69, name: "Guatemala", flag: "https://flagcdn.com/256x192/gt.png", capital: "Guatemala City", mostSpokenLanguage: "Spanish" },
    { id: 70, name: "Guinea", flag: "https://flagcdn.com/256x192/gn.png", capital: "Conakry", mostSpokenLanguage: "French" },
    { id: 71, name: "Guinea-Bissau", flag: "https://flagcdn.com/256x192/gw.png", capital: "Bissau", mostSpokenLanguage: "Portuguese" },
    { id: 72, name: "Guyana", flag: "https://flagcdn.com/256x192/gy.png", capital: "Georgetown", mostSpokenLanguage: "English" },
    { id: 73, name: "Haiti", flag: "https://flagcdn.com/256x192/ht.png", capital: "Port-au-Prince", mostSpokenLanguage: "Haitian Creole" },
    { id: 74, name: "Honduras", flag: "https://flagcdn.com/256x192/hn.png", capital: "Tegucigalpa", mostSpokenLanguage: "Spanish" },
    { id: 75, name: "Hungary", flag: "https://flagcdn.com/256x192/hu.png", capital: "Budapest", mostSpokenLanguage: "Hungarian" },
    { id: 76, name: "Iceland", flag: "https://flagcdn.com/256x192/is.png", capital: "Reykjavik", mostSpokenLanguage: "Icelandic" },
    { id: 77, name: "India", flag: "https://flagcdn.com/256x192/in.png", capital: "New Delhi", mostSpokenLanguage: "Hindi" },
    { id: 78, name: "Indonesia", flag: "https://flagcdn.com/256x192/id.png", capital: "Jakarta", mostSpokenLanguage: "Indonesian" },
    { id: 79, name: "Iran", flag: "https://flagcdn.com/256x192/ir.png", capital: "Tehran", mostSpokenLanguage: "Persian" },
    { id: 80, name: "Iraq", flag: "https://flagcdn.com/256x192/iq.png", capital: "Baghdad", mostSpokenLanguage: "Arabic" },
    { id: 81, name: "Ireland", flag: "https://flagcdn.com/256x192/ie.png", capital: "Dublin", mostSpokenLanguage: "Irish" },
    { id: 82, name: "Israel", flag: "https://flagcdn.com/256x192/il.png", capital: "Jerusalem", mostSpokenLanguage: "Hebrew" },
    { id: 83, name: "Italy", flag: "https://flagcdn.com/256x192/it.png", capital: "Rome", mostSpokenLanguage: "Italian" },
    { id: 84, name: "Ivory Coast", flag: "https://flagcdn.com/256x192/ci.png", capital: "Yamoussoukro", mostSpokenLanguage: "French" },
    { id: 85, name: "Jamaica", flag: "https://flagcdn.com/256x192/jm.png", capital: "Kingston", mostSpokenLanguage: "English" },
    { id: 86, name: "Japan", flag: "https://flagcdn.com/256x192/jp.png", capital: "Tokyo", mostSpokenLanguage: "Japanese" },
    { id: 87, name: "Jordan", flag: "https://flagcdn.com/256x192/jo.png", capital: "Amman", mostSpokenLanguage: "Arabic" },
    { id: 88, name: "Kazakhstan", flag: "https://flagcdn.com/256x192/kz.png", capital: "Nur-Sultan", mostSpokenLanguage: "Kazakh" },
    { id: 89, name: "Kenya", flag: "https://flagcdn.com/256x192/ke.png", capital: "Nairobi", mostSpokenLanguage: "Swahili" },
    { id: 90, name: "Kiribati", flag: "https://flagcdn.com/256x192/ki.png", capital: "Tarawa", mostSpokenLanguage: "English" },
    { id: 91, name: "Kosovo", flag: "https://flagcdn.com/256x192/xk.png", capital: "Pristina", mostSpokenLanguage: "Albanian" },
    { id: 92, name: "Kuwait", flag: "https://flagcdn.com/256x192/kw.png", capital: "Kuwait City", mostSpokenLanguage: "Arabic" },
    { id: 93, name: "Kyrgyzstan", flag: "https://flagcdn.com/256x192/kg.png", capital: "Bishkek", mostSpokenLanguage: "Kyrgyz" },
    { id: 94, name: "Laos", flag: "https://flagcdn.com/256x192/la.png", capital: "Vientiane", mostSpokenLanguage: "Lao" },
    { id: 95, name: "Latvia", flag: "https://flagcdn.com/256x192/lv.png", capital: "Riga", mostSpokenLanguage: "Latvian" },
    { id: 96, name: "Lebanon", flag: "https://flagcdn.com/256x192/lb.png", capital: "Beirut", mostSpokenLanguage: "Arabic" },
    { id: 97, name: "Lesotho", flag: "https://flagcdn.com/256x192/ls.png", capital: "Maseru", mostSpokenLanguage: "English" },
    { id: 98, name: "Liberia", flag: "https://flagcdn.com/256x192/lr.png", capital: "Monrovia", mostSpokenLanguage: "English" },
    { id: 99, name: "Libya", flag: "https://flagcdn.com/256x192/ly.png", capital: "Tripoli", mostSpokenLanguage: "Arabic" },
    { id: 100, name: "Liechtenstein", flag: "https://flagcdn.com/256x192/li.png", capital: "Vaduz", mostSpokenLanguage: "German" },
    { id: 101, name: "Lithuania", flag: "https://flagcdn.com/256x192/lt.png", capital: "Vilnius", mostSpokenLanguage: "Lithuanian" },
    { id: 102, name: "Luxembourg", flag: "https://flagcdn.com/256x192/lu.png", capital: "Luxembourg", mostSpokenLanguage: "Luxembourgish" },
    { id: 103, name: "Madagascar", flag: "https://flagcdn.com/256x192/mg.png", capital: "Antananarivo", mostSpokenLanguage: "Malagasy" },
    { id: 104, name: "Malawi", flag: "https://flagcdn.com/256x192/mw.png", capital: "Lilongwe", mostSpokenLanguage: "Chichewa" },
    { id: 105, name: "Malaysia", flag: "https://flagcdn.com/256x192/my.png", capital: "Kuala Lumpur", mostSpokenLanguage: "Malay" },
    { id: 106, name: "Maldives", flag: "https://flagcdn.com/256x192/mv.png", capital: "Malé", mostSpokenLanguage: "Dhivehi" },
    { id: 107, name: "Mali", flag: "https://flagcdn.com/256x192/ml.png", capital: "Bamako", mostSpokenLanguage: "French" },
    { id: 108, name: "Malta", flag: "https://flagcdn.com/256x192/mt.png", capital: "Valletta", mostSpokenLanguage: "Maltese" },
    { id: 109, name: "Marshall Islands", flag: "https://flagcdn.com/256x192/mh.png", capital: "Majuro", mostSpokenLanguage: "Marshallese" },
    { id: 110, name: "Mauritania", flag: "https://flagcdn.com/256x192/mr.png", capital: "Nouakchott", mostSpokenLanguage: "Arabic" },
    { id: 111, name: "Mauritius", flag: "https://flagcdn.com/256x192/mu.png", capital: "Port Louis", mostSpokenLanguage: "Mauritian Creole" },
    { id: 112, name: "Mexico", flag: "https://flagcdn.com/256x192/mx.png", capital: "Mexico City", mostSpokenLanguage: "Spanish" },
    { id: 113, name: "Micronesia", flag: "https://flagcdn.com/256x192/fm.png", capital: "Palikir", mostSpokenLanguage: "English" },
    { id: 114, name: "Moldova", flag: "https://flagcdn.com/256x192/md.png", capital: "Chisinau", mostSpokenLanguage: "Moldovan" },
    { id: 115, name: "Monaco", flag: "https://flagcdn.com/256x192/mc.png", capital: "Monaco", mostSpokenLanguage: "French" },
    { id: 116, name: "Mongolia", flag: "https://flagcdn.com/256x192/mn.png", capital: "Ulaanbaatar", mostSpokenLanguage: "Mongolian" },
    { id: 117, name: "Montenegro", flag: "https://flagcdn.com/256x192/me.png", capital: "Podgorica", mostSpokenLanguage: "Montenegrin" },
    { id: 118, name: "Morocco", flag: "https://flagcdn.com/256x192/ma.png", capital: "Rabat", mostSpokenLanguage: "Arabic" },
    { id: 119, name: "Mozambique", flag: "https://flagcdn.com/256x192/mz.png", capital: "Maputo", mostSpokenLanguage: "Portuguese" },
    { id: 120, name: "Myanmar (formerly Burma)", flag: "https://flagcdn.com/256x192/mm.png", capital: "Naypyidaw", mostSpokenLanguage: "Burmese" },
    { id: 121, name: "Namibia", flag: "https://flagcdn.com/256x192/na.png", capital: "Windhoek", mostSpokenLanguage: "English" },
    { id: 122, name: "Nauru", flag: "https://flagcdn.com/256x192/nr.png", capital: "Yaren", mostSpokenLanguage: "Nauruan" },
    { id: 123, name: "Nepal", flag: "https://flagcdn.com/256x192/np.png", capital: "Kathmandu", mostSpokenLanguage: "Nepali" },
    { id: 124, name: "Netherlands", flag: "https://flagcdn.com/256x192/nl.png", capital: "Amsterdam", mostSpokenLanguage: "Dutch" },
    { id: 125, name: "New Zealand", flag: "https://flagcdn.com/256x192/nz.png", capital: "Wellington", mostSpokenLanguage: "English" },
    { id: 126, name: "Nicaragua", flag: "https://flagcdn.com/256x192/ni.png", capital: "Managua", mostSpokenLanguage: "Spanish" },
    { id: 127, name: "Niger", flag: "https://flagcdn.com/256x192/ne.png", capital: "Niamey", mostSpokenLanguage: "French" },
    { id: 128, name: "Nigeria", flag: "https://flagcdn.com/256x192/ng.png", capital: "Abuja", mostSpokenLanguage: "English" },
    { id: 129, name: "North Korea", flag: "https://flagcdn.com/256x192/kp.png", capital: "Pyongyang", mostSpokenLanguage: "Korean" },
    { id: 130, name: "North Macedonia", flag: "https://flagcdn.com/256x192/mk.png", capital: "Skopje", mostSpokenLanguage: "Macedonian" },
    { id: 131, name: "Norway", flag: "https://flagcdn.com/256x192/no.png", capital: "Oslo", mostSpokenLanguage: "Norwegian" },
    { id: 132, name: "Oman", flag: "https://flagcdn.com/256x192/om.png", capital: "Muscat", mostSpokenLanguage: "Arabic" },
    { id: 133, name: "Pakistan", flag: "https://flagcdn.com/256x192/pk.png", capital: "Islamabad", mostSpokenLanguage: "Urdu" },
    { id: 134, name: "Palau", flag: "https://flagcdn.com/256x192/pw.png", capital: "Ngerulmud", mostSpokenLanguage: "Palauan" },
    { id: 135, name: "Palestine State", flag: "https://flagcdn.com/256x192/ps.png", capital: "Jerusalem", mostSpokenLanguage: "Arabic" },
    { id: 136, name: "Panama", flag: "https://flagcdn.com/256x192/pa.png", capital: "Panama City", mostSpokenLanguage: "Spanish" },
    { id: 137, name: "Papua New Guinea", flag: "https://flagcdn.com/256x192/pg.png", capital: "Port Moresby", mostSpokenLanguage: "Tok Pisin" },
    { id: 138, name: "Paraguay", flag: "https://flagcdn.com/256x192/py.png", capital: "Asunción", mostSpokenLanguage: "Spanish" },
    { id: 139, name: "Peru", flag: "https://flagcdn.com/256x192/pe.png", capital: "Lima", mostSpokenLanguage: "Spanish" },
    { id: 140, name: "Philippines", flag: "https://flagcdn.com/256x192/ph.png", capital: "Manila", mostSpokenLanguage: "Filipino" },
    { id: 141, name: "Poland", flag: "https://flagcdn.com/256x192/pl.png", capital: "Warsaw", mostSpokenLanguage: "Polish" },
    { id: 142, name: "Portugal", flag: "https://flagcdn.com/256x192/pt.png", capital: "Lisbon", mostSpokenLanguage: "Portuguese" },
    { id: 143, name: "Qatar", flag: "https://flagcdn.com/256x192/qa.png", capital: "Doha", mostSpokenLanguage: "Arabic" },
    { id: 144, name: "Romania", flag: "https://flagcdn.com/256x192/ro.png", capital: "Bucharest", mostSpokenLanguage: "Romanian" },
    { id: 145, name: "Russia", flag: "https://flagcdn.com/256x192/ru.png", capital: "Moscow", mostSpokenLanguage: "Russian" },
    { id: 146, name: "Rwanda", flag: "https://flagcdn.com/256x192/rw.png", capital: "Kigali", mostSpokenLanguage: "Kinyarwanda" },
    { id: 147, name: "Saint Kitts and Nevis", flag: "https://flagcdn.com/256x192/kn.png", capital: "Basseterre", mostSpokenLanguage: "English" },
    { id: 148, name: "Saint Lucia", flag: "https://flagcdn.com/256x192/lc.png", capital: "Castries", mostSpokenLanguage: "English" },
    { id: 149, name: "Saint Vincent and the Grenadines", flag: "https://flagcdn.com/256x192/vc.png", capital: "Kingstown", mostSpokenLanguage: "English" },
    { id: 150, name: "Samoa", flag: "https://flagcdn.com/256x192/ws.png", capital: "Apia", mostSpokenLanguage: "Samoan" },
    { id: 151, name: "San Marino", flag: "https://flagcdn.com/256x192/sm.png", capital: "San Marino", mostSpokenLanguage: "Italian" },
    { id: 152, name: "Sao Tome and Principe", flag: "https://flagcdn.com/256x192/st.png", capital: "São Tomé", mostSpokenLanguage: "Portuguese" },
    { id: 153, name: "Saudi Arabia", flag: "https://flagcdn.com/256x192/sa.png", capital: "Riyadh", mostSpokenLanguage: "Arabic" },
    { id: 154, name: "Senegal", flag: "https://flagcdn.com/256x192/sn.png", capital: "Dakar", mostSpokenLanguage: "French" },
    { id: 155, name: "Serbia", flag: "https://flagcdn.com/256x192/rs.png", capital: "Belgrade", mostSpokenLanguage: "Serbian" },
    { id: 156, name: "Seychelles", flag: "https://flagcdn.com/256x192/sc.png", capital: "Victoria", mostSpokenLanguage: "French" },
    { id: 157, name: "Sierra Leone", flag: "https://flagcdn.com/256x192/sl.png", capital: "Freetown", mostSpokenLanguage: "English" },
    { id: 158, name: "Singapore", flag: "https://flagcdn.com/256x192/sg.png", capital: "Singapore", mostSpokenLanguage: "English" },
    { id: 159, name: "Slovakia", flag: "https://flagcdn.com/256x192/sk.png", capital: "Bratislava", mostSpokenLanguage: "Slovak" },
    { id: 160, name: "Slovenia", flag: "https://flagcdn.com/256x192/si.png", capital: "Ljubljana", mostSpokenLanguage: "Slovenian" },
    { id: 161, name: "Solomon Islands", flag: "https://flagcdn.com/256x192/sb.png", capital: "Honiara", mostSpokenLanguage: "English" },
    { id: 162, name: "Somalia", flag: "https://flagcdn.com/256x192/so.png", capital: "Mogadishu", mostSpokenLanguage: "Somali" },
    { id: 163, name: "South Africa", flag: "https://flagcdn.com/256x192/za.png", capital: "Pretoria", mostSpokenLanguage: "Zulu" },
    { id: 164, name: "South Korea", flag: "https://flagcdn.com/256x192/kr.png", capital: "Seoul", mostSpokenLanguage: "Korean" },
    { id: 165, name: "South Sudan", flag: "https://flagcdn.com/256x192/ss.png", capital: "Juba", mostSpokenLanguage: "English" },
    { id: 166, name: "Spain", flag: "https://flagcdn.com/256x192/es.png", capital: "Madrid", mostSpokenLanguage: "Spanish" },
    { id: 167, name: "Sri Lanka", flag: "https://flagcdn.com/256x192/lk.png", capital: "Colombo", mostSpokenLanguage: "Sinhala" },
    { id: 168, name: "Sudan", flag: "https://flagcdn.com/256x192/sd.png", capital: "Khartoum", mostSpokenLanguage: "Arabic" },
    { id: 169, name: "Suriname", flag: "https://flagcdn.com/256x192/sr.png", capital: "Paramaribo", mostSpokenLanguage: "Dutch" },
    { id: 170, name: "Sweden", flag: "https://flagcdn.com/256x192/se.png", capital: "Stockholm", mostSpokenLanguage: "Swedish" },
    { id: 171, name: "Switzerland", flag: "https://flagcdn.com/256x192/ch.png", capital: "Bern", mostSpokenLanguage: "German" },
    { id: 172, name: "Syria", flag: "https://flagcdn.com/256x192/sy.png", capital: "Damascus", mostSpokenLanguage: "Arabic" },
    { id: 173, name: "Taiwan", flag: "https://flagcdn.com/256x192/tw.png", capital: "Taipei", mostSpokenLanguage: "Mandarin" },
    { id: 174, name: "Tajikistan", flag: "https://flagcdn.com/256x192/tj.png", capital: "Dushanbe", mostSpokenLanguage: "Tajik" },
    { id: 175, name: "Tanzania", flag: "https://flagcdn.com/256x192/tz.png", capital: "Dodoma", mostSpokenLanguage: "Swahili" },
    { id: 176, name: "Thailand", flag: "https://flagcdn.com/256x192/th.png", capital: "Bangkok", mostSpokenLanguage: "Thai" },
    { id: 177, name: "Togo", flag: "https://flagcdn.com/256x192/tg.png", capital: "Lomé", mostSpokenLanguage: "French" },
    { id: 178, name: "Tonga", flag: "https://flagcdn.com/256x192/to.png", capital: "Nuku'alofa", mostSpokenLanguage: "Tongan" },
    { id: 179, name: "Trinidad and Tobago", flag: "https://flagcdn.com/256x192/tt.png", capital: "Port of Spain", mostSpokenLanguage: "English" },
    { id: 180, name: "Tunisia", flag: "https://flagcdn.com/256x192/tn.png", capital: "Tunis", mostSpokenLanguage: "Arabic" },
    { id: 181, name: "Turkey", flag: "https://flagcdn.com/256x192/tr.png", capital: "Ankara", mostSpokenLanguage: "Turkish" },
    { id: 182, name: "Turkmenistan", flag: "https://flagcdn.com/256x192/tm.png", capital: "Ashgabat", mostSpokenLanguage: "Turkmen" },
    { id: 183, name: "Tuvalu", flag: "https://flagcdn.com/256x192/tv.png", capital: "Funafuti", mostSpokenLanguage: "Tuvaluan" },
    { id: 184, name: "Uganda", flag: "https://flagcdn.com/256x192/ug.png", capital: "Kampala", mostSpokenLanguage: "English" },
    { id: 185, name: "Ukraine", flag: "https://flagcdn.com/256x192/ua.png", capital: "Kyiv", mostSpokenLanguage: "Ukrainian" },
    { id: 186, name: "United Arab Emirates", flag: "https://flagcdn.com/256x192/ae.png", capital: "Abu Dhabi", mostSpokenLanguage: "Arabic" },
    { id: 187, name: "United Kingdom", flag: "https://flagcdn.com/256x192/gb.png", capital: "London", mostSpokenLanguage: "English" },
    { id: 188, name: "United States", flag: "https://flagcdn.com/256x192/us.png", capital: "Washington, D.C.", mostSpokenLanguage: "English" },
    { id: 189, name: "Uruguay", flag: "https://flagcdn.com/256x192/uy.png", capital: "Montevideo", mostSpokenLanguage: "Spanish" },
    { id: 190, name: "Uzbekistan", flag: "https://flagcdn.com/256x192/uz.png", capital: "Tashkent", mostSpokenLanguage: "Uzbek" },
    { id: 191, name: "Vanuatu", flag: "https://flagcdn.com/256x192/vu.png", capital: "Port Vila", mostSpokenLanguage: "Bislama" },
    { id: 192, name: "Vatican City", flag: "https://flagcdn.com/256x192/va.png", capital: "Vatican City", mostSpokenLanguage: "Italian" },
    { id: 193, name: "Venezuela", flag: "https://flagcdn.com/256x192/ve.png", capital: "Caracas", mostSpokenLanguage: "Spanish" },
    { id: 194, name: "Vietnam", flag: "https://flagcdn.com/256x192/vn.png", capital: "Hanoi", mostSpokenLanguage: "Vietnamese" },
    { id: 195, name: "Yemen", flag: "https://flagcdn.com/256x192/ye.png", capital: "Sana'a", mostSpokenLanguage: "Arabic" },
    { id: 196, name: "Zambia", flag: "https://flagcdn.com/256x192/zm.png", capital: "Lusaka", mostSpokenLanguage: "English" },
    { id: 197, name: "Zimbabwe", flag: "https://flagcdn.com/256x192/zw.png", capital: "Harare", mostSpokenLanguage: "English" }
  ];

let score=0;
let options, correctAnswerIndex;
const buttons = document.querySelectorAll('.option-button');
let iteration=1;
let questionsArray=[];

function optionSelection(){
    const optionsArray=[];
    while(optionsArray.length<5){
      let index=Math.floor(Math.random()* countries.length);
      if(!optionsArray.includes(index)){
        optionsArray.push(index);
      }
    }
    return optionsArray;
  }

function updatingButtons(buttons){
    for(let i=0;i<5;i++){
      buttons[i].textContent= countries[options[i]].capital;
    }
  }
  function displayFlag(){
    const correctAnswerFlag=countries[options[correctAnswerIndex]].flag;
    questionsArray.push(countries[options[correctAnswerIndex]].id);
  
    document.getElementById("flag_image").src=correctAnswerFlag;
  }
  function handleButtonClick(event){
    const selectedButtonIndex=Array.from(buttons).indexOf(event.target);
    console.log("Selected Index: "+selectedButtonIndex);
  
    if(selectedButtonIndex===correctAnswerIndex){
      console.log("Correct answer");
      event.target.classList.add('correctanswer');
      
      score++;
    }
    else{
      console.log("False answer");
      event.target.classList.add('incorrectanswer');
  
    }
    buttons.forEach((btn,index) => {
      if(index===correctAnswerIndex){
        btn.classList.add('correctanswer');
      }    
    });
    console.log("New score="+score);
    document.getElementById("score").innerHTML=score;
    buttons.forEach(btn=>btn.removeEventListener('click',handleButtonClick));
    if(selectedButtonIndex===correctAnswerIndex){
      setTimeout(resetButtonStyles,500);
    }
    else{
      setTimeout(resetButtonStyles,2000);
    }
   
  
  }

  function resetButtonStyles() {
    buttons.forEach(btn => {
      btn.classList.remove('correctanswer', 'incorrectanswer');
    });
  if(iteration<10){
    initializeGame();
  iteration++;
  
  }
  else{
    localStorage.setItem('Score',score);
    window.location.href='/html/scoredisplay.html';
  }
  }

  function initializeGame(){
    options=optionSelection();
    correctAnswerIndex=Math.floor(Math.random()*5);
    if(questionsArray.includes(countries[correctAnswerIndex].id)){
      while(questionsArray.includes(countries[correctAnswerIndex].id)){
        correctAnswerIndex=Math.floor(Math.random()*5);
      }
    }
    updatingButtons(buttons);
    displayFlag();
    buttons.forEach(btn=>btn.addEventListener('click',handleButtonClick));
    console.log("Current ids asked already "+questionsArray);
 document.querySelector('.question').innerHTML="What is the capital of "+countries[options[correctAnswerIndex]].name+" ?";
 document.querySelector('.question').style.color='white';
 document.querySelector('.question').style.fontSize='18px';


  }
  initializeGame();
