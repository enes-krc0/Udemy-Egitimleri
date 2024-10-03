let vize1=70
let vize2=80
let final=40
let ortalama=(vize1+vize2+final)/3
let sonuc=ortalama
console.log(sonuc)

if(final>=70){
    console.log("final notunden dolayı geçti")
}
if(ortalama>=50){
   if(final>=50){
    console.log("geçti")
   }
   else{
    console.log("final notu düşük kaldı")
   }

}
else{
    console.log("kaldı")
}