const url1='https://api.agify.io/?name[]=';
const url2='https://api.nationalize.io/?name=';
const url3='https://gist.githubusercontent.com/erhan/74771d87a9707cde94b13417c1460537/raw/e48de9e790182baa85de1c3f1a4d43770a2372b9/ulke.json'



var yasiniz= document.getElementById('age');
var ülkeniz= document.getElementById('nation');




const input= document.getElementById('a');
input.addEventListener('keypress', function enter(e) {
if(e.keyCode == 13){
var newurl1= `${url1}${input.value}`;
var newurl2=`${url2}${input.value}`;
getResult(newurl1,newurl2);}
})

function getResult(newurl1,newurl2){
let data = fetch(newurl1)
.then(response => response.json())
.then(data => yasiniz.innerHTML= "Yaşınız: " + data[0].age )


let data2 = fetch(newurl2)
.then(cevap => cevap.json())
.then( data2 => a= data2.country[0].country_id)
.then( kaydet => ülke_adı(a))


}


function ülke_adı (a) {

var data = fetch('https://gist.githubusercontent.com/erhan/74771d87a9707cde94b13417c1460537/raw/e48de9e790182baa85de1c3f1a4d43770a2372b9/ulke.json')
.then(response => response.json())
.then( data3 => searchResult = data3.find(s=> s.code == String(a)))
.then( yazdır => ülkeniz.innerHTML= "Ülkeniz: " + searchResult.name )

}
getResult();
ülke_adı();

