
// notworking(){
//   function getRandomOptions(){
//     //   const min = 0;
//     //   const max = countries.length;
//     //   const answers=[];
//     //   const selected=[];
//     //   for(let i=0;i<5;i++){
//     //     answers[i]=countries[Math.floor(Math.random()*max)].id;
//     //     selected[i]=answers[i];
//     //     for(let j=0;j<i;j++){
//     //       if(answers[i]==selected[j]){
//     //         answers[i]=countries[Math.floor(Math.random()*max)].id;
//     //         selected[i]=answers[i];
//     //       }
//     //     }
//     //   }
//     //   const buttons= document.querySelectorAll('.option-button');
    
//     //   for( let i=0;i<5;i++){
//     //     buttons[i].textContent=countries[answers[i]].name;
//     //   }
    
    
    
//     //   const correctAnswerIndex = Math.floor(Math.random() * 4);
//     //   const correctAnswer = countries[correctAnswerIndex].id;
    
      
      
    
    
    
    
       
    
//     // }
    
//     // const options=[];
// }
let score=0;

const countries = [
  { id: 1, name: "Afghanistan", flag: "https://flagcdn.com/256x192/af.png" },
  { id: 2, name: "Albania", flag: "https://flagcdn.com/256x192/al.png" },
  { id: 3, name: "Algeria", flag: "https://flagcdn.com/256x192/dz.png" },
  { id: 4, name: "Andorra", flag: "https://flagcdn.com/256x192/ad.png" },
  { id: 5, name: "Angola", flag: "https://flagcdn.com/256x192/ao.png" },
  { id: 6, name: "Antigua and Barbuda", flag: "https://flagcdn.com/256x192/ag.png" },
  { id: 7, name: "Argentina", flag: "https://flagcdn.com/256x192/ar.png" },
  { id: 8, name: "Armenia", flag: "https://flagcdn.com/256x192/am.png" },
  { id: 9, name: "Australia", flag: "https://flagcdn.com/256x192/au.png" },
  { id: 10, name: "Austria", flag: "https://flagcdn.com/256x192/at.png" },
  { id: 11, name: "Azerbaijan", flag: "https://flagcdn.com/256x192/az.png" },
  { id: 12, name: "Bahamas", flag: "https://flagcdn.com/256x192/bs.png" },
  { id: 13, name: "Bahrain", flag: "https://flagcdn.com/256x192/bh.png" },
  { id: 14, name: "Bangladesh", flag: "https://flagcdn.com/256x192/bd.png" },
  { id: 15, name: "Barbados", flag: "https://flagcdn.com/256x192/bb.png" },
  { id: 16, name: "Belarus", flag: "https://flagcdn.com/256x192/by.png" },
  { id: 17, name: "Belgium", flag: "https://flagcdn.com/256x192/be.png" },
  { id: 18, name: "Belize", flag: "https://flagcdn.com/256x192/bz.png" },
  { id: 19, name: "Benin", flag: "https://flagcdn.com/256x192/bj.png" },
  { id: 20, name: "Bhutan", flag: "https://flagcdn.com/256x192/bt.png" },
  { id: 21, name: "Bolivia", flag: "https://flagcdn.com/256x192/bo.png" },
  { id: 22, name: "Bosnia and Herzegovina", flag: "https://flagcdn.com/256x192/ba.png" },
  { id: 23, name: "Botswana", flag: "https://flagcdn.com/256x192/bw.png" },
  { id: 24, name: "Brazil", flag: "https://flagcdn.com/256x192/br.png" },
  { id: 25, name: "Brunei", flag: "https://flagcdn.com/256x192/bn.png" },
  { id: 26, name: "Bulgaria", flag: "https://flagcdn.com/256x192/bg.png" },
  { id: 27, name: "Burkina Faso", flag: "https://flagcdn.com/256x192/bf.png" },
  { id: 28, name: "Burundi", flag: "https://flagcdn.com/256x192/bi.png" },
  { id: 29, name: "Cabo Verde", flag: "https://flagcdn.com/256x192/cv.png" },
  { id: 30, name: "Cambodia", flag: "https://flagcdn.com/256x192/kh.png" },
  { id: 31, name: "Cameroon", flag: "https://flagcdn.com/256x192/cm.png" },
  { id: 32, name: "Canada", flag: "https://flagcdn.com/256x192/ca.png" },
  { id: 33, name: "Central African Republic", flag: "https://flagcdn.com/256x192/cf.png" },
  { id: 34, name: "Chad", flag: "https://flagcdn.com/256x192/td.png" },
  { id: 35, name: "Chile", flag: "https://flagcdn.com/256x192/cl.png" },
  { id: 36, name: "China", flag: "https://flagcdn.com/256x192/cn.png" },
  { id: 37, name: "Colombia", flag: "https://flagcdn.com/256x192/co.png" },
  { id: 38, name: "Comoros", flag: "https://flagcdn.com/256x192/km.png" },
  { id: 39, name: "Congo (Democratic Republic of the)", flag: "https://flagcdn.com/256x192/cd.png" },
  { id: 40, name: "Congo (Republic of the)", flag: "https://flagcdn.com/256x192/cg.png" },
  { id: 41, name: "Costa Rica", flag: "https://flagcdn.com/256x192/cr.png" },
  { id: 42, name: "Croatia", flag: "https://flagcdn.com/256x192/hr.png" },
  { id: 43, name: "Cuba", flag: "https://flagcdn.com/256x192/cu.png" },
  { id: 44, name: "Cyprus", flag: "https://flagcdn.com/256x192/cy.png" },
  { id: 45, name: "Czech Republic", flag: "https://flagcdn.com/256x192/cz.png" },
  { id: 46, name: "Denmark", flag: "https://flagcdn.com/256x192/dk.png" },
  { id: 47, name: "Djibouti", flag: "https://flagcdn.com/256x192/dj.png" },
  { id: 48, name: "Dominica", flag: "https://flagcdn.com/256x192/dm.png" },
  { id: 49, name: "Dominican Republic", flag: "https://flagcdn.com/256x192/do.png" },
  { id: 50, name: "East Timor", flag: "https://flagcdn.com/256x192/tl.png" },
  { id: 51, name: "Ecuador", flag: "https://flagcdn.com/256x192/ec.png" },
  { id: 52, name: "Egypt", flag: "https://flagcdn.com/256x192/eg.png" },
  { id: 53, name: "El Salvador", flag: "https://flagcdn.com/256x192/sv.png" },
  { id: 54, name: "Equatorial Guinea", flag: "https://flagcdn.com/256x192/gq.png" },
  { id: 55, name: "Eritrea", flag: "https://flagcdn.com/256x192/er.png" },
  { id: 56, name: "Estonia", flag: "https://flagcdn.com/256x192/ee.png" },
  { id: 57, name: "Eswatini", flag: "https://flagcdn.com/256x192/sz.png" },
  { id: 58, name: "Ethiopia", flag: "https://flagcdn.com/256x192/et.png" },
  { id: 59, name: "Fiji", flag: "https://flagcdn.com/256x192/fj.png" },
  { id: 60, name: "Finland", flag: "https://flagcdn.com/256x192/fi.png" },
  { id: 61, name: "France", flag: "https://flagcdn.com/256x192/fr.png" },
  { id: 62, name: "Gabon", flag: "https://flagcdn.com/256x192/ga.png" },
  { id: 63, name: "Gambia", flag: "https://flagcdn.com/256x192/gm.png" },
  { id: 64, name: "Georgia", flag: "https://flagcdn.com/256x192/ge.png" },
  { id: 65, name: "Germany", flag: "https://flagcdn.com/256x192/de.png" },
  { id: 66, name: "Ghana", flag: "https://flagcdn.com/256x192/gh.png" },
  { id: 67, name: "Greece", flag: "https://flagcdn.com/256x192/gr.png" },
  { id: 68, name: "Grenada", flag: "https://flagcdn.com/256x192/gd.png" },
  { id: 69, name: "Guatemala", flag: "https://flagcdn.com/256x192/gt.png" },
  { id: 70, name: "Guinea", flag: "https://flagcdn.com/256x192/gn.png" },
  { id: 71, name: "Guinea-Bissau", flag: "https://flagcdn.com/256x192/gw.png" },
  { id: 72, name: "Guyana", flag: "https://flagcdn.com/256x192/gy.png" },
  { id: 73, name: "Haiti", flag: "https://flagcdn.com/256x192/ht.png" },
  { id: 74, name: "Honduras", flag: "https://flagcdn.com/256x192/hn.png" },
  { id: 75, name: "Hungary", flag: "https://flagcdn.com/256x192/hu.png" },
  { id: 76, name: "Iceland", flag: "https://flagcdn.com/256x192/is.png" },
  { id: 77, name: "India", flag: "https://flagcdn.com/256x192/in.png" },
  { id: 78, name: "Indonesia", flag: "https://flagcdn.com/256x192/id.png" },
  { id: 79, name: "Iran", flag: "https://flagcdn.com/256x192/ir.png" },
  { id: 80, name: "Iraq", flag: "https://flagcdn.com/256x192/iq.png" },
  { id: 81, name: "Ireland", flag: "https://flagcdn.com/256x192/ie.png" },
  { id: 82, name: "Israel", flag: "https://flagcdn.com/256x192/il.png" },
  { id: 83, name: "Italy", flag: "https://flagcdn.com/256x192/it.png" },
  { id: 84, name: "Ivory Coast", flag: "https://flagcdn.com/256x192/ci.png" },
  { id: 85, name: "Jamaica", flag: "https://flagcdn.com/256x192/jm.png" },
  { id: 86, name: "Japan", flag: "https://flagcdn.com/256x192/jp.png" },
  { id: 87, name: "Jordan", flag: "https://flagcdn.com/256x192/jo.png" },
  { id: 88, name: "Kazakhstan", flag: "https://flagcdn.com/256x192/kz.png" },
  { id: 89, name: "Kenya", flag: "https://flagcdn.com/256x192/ke.png" },
  { id: 90, name: "Kiribati", flag: "https://flagcdn.com/256x192/ki.png" },
  { id: 91, name: "Kosovo", flag: "https://flagcdn.com/256x192/xk.png" },
  { id: 92, name: "Kuwait", flag: "https://flagcdn.com/256x192/kw.png" },
  { id: 93, name: "Kyrgyzstan", flag: "https://flagcdn.com/256x192/kg.png" },
  { id: 94, name: "Laos", flag: "https://flagcdn.com/256x192/la.png" },
  { id: 95, name: "Latvia", flag: "https://flagcdn.com/256x192/lv.png" },
  { id: 96, name: "Lebanon", flag: "https://flagcdn.com/256x192/lb.png" },
  { id: 97, name: "Lesotho", flag: "https://flagcdn.com/256x192/ls.png" },
  { id: 98, name: "Liberia", flag: "https://flagcdn.com/256x192/lr.png" },
  { id: 99, name: "Libya", flag: "https://flagcdn.com/256x192/ly.png" },
  { id: 100, name: "Liechtenstein", flag: "https://flagcdn.com/256x192/li.png" },
  { id: 101, name: "Lithuania", flag: "https://flagcdn.com/256x192/lt.png" },
  { id: 102, name: "Luxembourg", flag: "https://flagcdn.com/256x192/lu.png" },
  { id: 103, name: "Madagascar", flag: "https://flagcdn.com/256x192/mg.png" },
  { id: 104, name: "Malawi", flag: "https://flagcdn.com/256x192/mw.png" },
  { id: 105, name: "Malaysia", flag: "https://flagcdn.com/256x192/my.png" },
  { id: 106, name: "Maldives", flag: "https://flagcdn.com/256x192/mv.png" },
  { id: 107, name: "Mali", flag: "https://flagcdn.com/256x192/ml.png" },
  { id: 108, name: "Malta", flag: "https://flagcdn.com/256x192/mt.png" },
  { id: 109, name: "Marshall Islands", flag: "https://flagcdn.com/256x192/mh.png" },
  { id: 110, name: "Mauritania", flag: "https://flagcdn.com/256x192/mr.png" },
  { id: 111, name: "Mauritius", flag: "https://flagcdn.com/256x192/mu.png" },
  { id: 112, name: "Mexico", flag: "https://flagcdn.com/256x192/mx.png" },
  { id: 113, name: "Micronesia", flag: "https://flagcdn.com/256x192/fm.png" },
  { id: 114, name: "Moldova", flag: "https://flagcdn.com/256x192/md.png" },
  { id: 115, name: "Monaco", flag: "https://flagcdn.com/256x192/mc.png" },
  { id: 116, name: "Mongolia", flag: "https://flagcdn.com/256x192/mn.png" },
  { id: 117, name: "Montenegro", flag: "https://flagcdn.com/256x192/me.png" },
  { id: 118, name: "Morocco", flag: "https://flagcdn.com/256x192/ma.png" },
  { id: 119, name: "Mozambique", flag: "https://flagcdn.com/256x192/mz.png" },
  { id: 120, name: "Myanmar", flag: "https://flagcdn.com/256x192/mm.png" },
  { id: 121, name: "Namibia", flag: "https://flagcdn.com/256x192/na.png" },
  { id: 122, name: "Nauru", flag: "https://flagcdn.com/256x192/nr.png" },
  { id: 123, name: "Nepal", flag: "https://flagcdn.com/256x192/np.png" },
  { id: 124, name: "Netherlands", flag: "https://flagcdn.com/256x192/nl.png" },
  { id: 125, name: "New Zealand", flag: "https://flagcdn.com/256x192/nz.png" },
  { id: 126, name: "Nicaragua", flag: "https://flagcdn.com/256x192/ni.png" },
  { id: 127, name: "Niger", flag: "https://flagcdn.com/256x192/ne.png" },
  { id: 128, name: "Nigeria", flag: "https://flagcdn.com/256x192/ng.png" },
  { id: 129, name: "North Korea", flag: "https://flagcdn.com/256x192/kp.png" },
  { id: 130, name: "North Macedonia", flag: "https://flagcdn.com/256x192/mk.png" },
  { id: 131, name: "Norway", flag: "https://flagcdn.com/256x192/no.png" },
  { id: 132, name: "Oman", flag: "https://flagcdn.com/256x192/om.png" },
  { id: 133, name: "Pakistan", flag: "https://flagcdn.com/256x192/pk.png" },
  { id: 134, name: "Palau", flag: "https://flagcdn.com/256x192/pw.png" },
  { id: 135, name: "Panama", flag: "https://flagcdn.com/256x192/pa.png" },
  { id: 136, name: "Papua New Guinea", flag: "https://flagcdn.com/256x192/pg.png" },
  { id: 137, name: "Paraguay", flag: "https://flagcdn.com/256x192/py.png" },
  { id: 138, name: "Peru", flag: "https://flagcdn.com/256x192/pe.png" },
  { id: 139, name: "Philippines", flag: "https://flagcdn.com/256x192/ph.png" },
  { id: 140, name: "Poland", flag: "https://flagcdn.com/256x192/pl.png" },
  { id: 141, name: "Portugal", flag: "https://flagcdn.com/256x192/pt.png" },
  { id: 142, name: "Qatar", flag: "https://flagcdn.com/256x192/qa.png" },
  { id: 143, name: "Romania", flag: "https://flagcdn.com/256x192/ro.png" },
  { id: 144, name: "Russia", flag: "https://flagcdn.com/256x192/ru.png" },
  { id: 145, name: "Rwanda", flag: "https://flagcdn.com/256x192/rw.png" },
  { id: 146, name: "Saint Kitts and Nevis", flag: "https://flagcdn.com/256x192/kn.png" },
  { id: 147, name: "Saint Lucia", flag: "https://flagcdn.com/256x192/lc.png" },
  { id: 148, name: "Saint Vincent and the Grenadines", flag: "https://flagcdn.com/256x192/vc.png" },
  { id: 149, name: "Samoa", flag: "https://flagcdn.com/256x192/ws.png" },
  { id: 150, name: "San Marino", flag: "https://flagcdn.com/256x192/sm.png" },
  { id: 151, name: "Sao Tome and Principe", flag: "https://flagcdn.com/256x192/st.png" },
  { id: 152, name: "Saudi Arabia", flag: "https://flagcdn.com/256x192/sa.png" },
  { id: 153, name: "Senegal", flag: "https://flagcdn.com/256x192/sn.png" },
  { id: 154, name: "Serbia", flag: "https://flagcdn.com/256x192/rs.png" },
  { id: 155, name: "Seychelles", flag: "https://flagcdn.com/256x192/sc.png" },
  { id: 156, name: "Sierra Leone", flag: "https://flagcdn.com/256x192/sl.png" },
  { id: 157, name: "Singapore", flag: "https://flagcdn.com/256x192/sg.png" },
  { id: 158, name: "Slovakia", flag: "https://flagcdn.com/256x192/sk.png" },
  { id: 159, name: "Slovenia", flag: "https://flagcdn.com/256x192/si.png" },
  { id: 160, name: "Solomon Islands", flag: "https://flagcdn.com/256x192/sb.png" },
  { id: 161, name: "Somalia", flag: "https://flagcdn.com/256x192/so.png" },
  { id: 162, name: "South Africa", flag: "https://flagcdn.com/256x192/za.png" },
  { id: 163, name: "South Korea", flag: "https://flagcdn.com/256x192/kr.png" },
  { id: 164, name: "South Sudan", flag: "https://flagcdn.com/256x192/ss.png" },
  { id: 165, name: "Spain", flag: "https://flagcdn.com/256x192/es.png" },
  { id: 166, name: "Sri Lanka", flag: "https://flagcdn.com/256x192/lk.png" },
  { id: 167, name: "Sudan", flag: "https://flagcdn.com/256x192/sd.png" },
  { id: 168, name: "Suriname", flag: "https://flagcdn.com/256x192/sr.png" },
  { id: 169, name: "Sweden", flag: "https://flagcdn.com/256x192/se.png" },
  { id: 170, name: "Switzerland", flag: "https://flagcdn.com/256x192/ch.png" },
  { id: 171, name: "Syria", flag: "https://flagcdn.com/256x192/sy.png" },
  { id: 172, name: "Taiwan", flag: "https://flagcdn.com/256x192/tw.png" },
  { id: 173, name: "Tajikistan", flag: "https://flagcdn.com/256x192/tj.png" },
  { id: 174, name: "Tanzania", flag: "https://flagcdn.com/256x192/tz.png" },
  { id: 175, name: "Thailand", flag: "https://flagcdn.com/256x192/th.png" },
  { id: 176, name: "Togo", flag: "https://flagcdn.com/256x192/tg.png" },
  { id: 177, name: "Tonga", flag: "https://flagcdn.com/256x192/to.png" },
  { id: 178, name: "Trinidad and Tobago", flag: "https://flagcdn.com/256x192/tt.png" },
  { id: 179, name: "Tunisia", flag: "https://flagcdn.com/256x192/tn.png" },
  { id: 180, name: "Turkey", flag: "https://flagcdn.com/256x192/tr.png" },
  { id: 181, name: "Turkmenistan", flag: "https://flagcdn.com/256x192/tm.png" },
  { id: 182, name: "Tuvalu", flag: "https://flagcdn.com/256x192/tv.png" },
  { id: 183, name: "Uganda", flag: "https://flagcdn.com/256x192/ug.png" },
  { id: 184, name: "Ukraine", flag: "https://flagcdn.com/256x192/ua.png" },
  { id: 185, name: "United Arab Emirates", flag: "https://flagcdn.com/256x192/ae.png" },
  { id: 186, name: "United Kingdom", flag: "https://flagcdn.com/256x192/gb.png" },
  { id: 187, name: "United States", flag: "https://flagcdn.com/256x192/us.png" },
  { id: 188, name: "Uruguay", flag: "https://flagcdn.com/256x192/uy.png" },
  { id: 189, name: "Uzbekistan", flag: "https://flagcdn.com/256x192/uz.png" },
  { id: 190, name: "Vanuatu", flag: "https://flagcdn.com/256x192/vu.png" },
  { id: 191, name: "Vatican City", flag: "https://flagcdn.com/256x192/va.png" },
  { id: 192, name: "Venezuela", flag: "https://flagcdn.com/256x192/ve.png" },
  { id: 193, name: "Vietnam", flag: "https://flagcdn.com/256x192/vn.png" },
  { id: 194, name: "Yemen", flag: "https://flagcdn.com/256x192/ye.png" },
  { id: 195, name: "Zambia", flag: "https://flagcdn.com/256x192/zm.png" },
  { id: 196, name: "Zimbabwe", flag: "https://flagcdn.com/256x192/zw.png" }
];

function optionSelection(){
  const options=[];
  while(options.length<5){
    let index=Math.floor(Math.random()*(countries.length-1));
    if(options.includes(index)==false){
      options.push(index);
    }
  }
  return options;
}


const options=optionSelection();
const correctAnswerIndex=Math.floor(Math.random()*4);
const correctAnswerName=countries[options[correctAnswerIndex]].name;

function updatingButtons(){

//Assigning values to buttons
const buttons=document.querySelectorAll('.option-button');
for(let i=0;i<5;i++){
  buttons[i].textContent=countries[options[i]].name;
}
}
function displayFlag(){
  const correctAnswerFlag=countries[options[correctAnswerIndex]].flag;
  document.getElementById("flag_image").src=correctAnswerFlag;
}

updatingButtons();
displayFlag();
console.log(correctAnswerName);
console.log(correctAnswerIndex);


