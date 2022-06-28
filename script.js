
let result
let result1
let i
let j
let arr1_1=[
  {
  	i:5,
  	j:0
  },
  {
  	i:6,
  	j:0
  },
  {
  	i:5,
  	j:2
  },
  {
  	i:5,
  	j:1
  }
]

let arr1_2=[
 {
 	i:3,
 	j:0
 },
 {
 	i:4,
 	j:0
 },
 {
 	i:5,
 	j:0
 },
 {
 	i:5,
 	j:1
 }
]
let arr1_3=[
 {
 	i:5,
 	j:0
 },
 {
 	i:5,
 	j:1
 },
 {
 	i:4,
 	j:2
 },
 {
 	i:5,
 	j:2
 }
]
let arr1_4=[
 {
 	i:3,
 	j:1
 },
 {
 	i:4,
 	j:1
 },
 {
 	i:5,
 	j:1
 },
 {
 	i:3,
 	j:0
 }
]
let arrL1=[arr1_1,arr1_2,arr1_3,arr1_4]
let arr2_1=[
 {
 	i:4,
 	j:0
 },
 {
 	i:5,
 	j:0
 },
 {
 	i:5,
 	j:1
 },
 {
 	i:5,
 	j:2
 }
]
let arr2_2=[
 {
 	i:4,
 	j:0
 },
 {
 	i:4,
 	j:1
 },
 {
 	i:5,
 	j:0
 },
 {
 	i:6,
 	j:0
 }
]
let arr2_3=[
 {
 	i:4,
 	j:1
 },
 {
 	i:4,
 	j:2
 },
 {
 	i:4,
 	j:0
 },
 {
 	i:5,
 	j:2
 }
]
let arr2_4=[
 {
 	i:6,
 	j:0
 },
 {
 	i:5,
 	j:1
 },
 {
 	i:4,
 	j:1
 },
 {
 	i:6,
 	j:1
 }
]
let arrL2=[arr2_1,arr2_2,arr2_3,arr2_4]
let arr3_1=[
 {
 	i:4,
 	j:0
 },
 {
 	i:5,
 	j:0
 },
 {
 	i:6,
 	j:0
 },
 {
 	i:5,
 	j:1
 }
]
let arr3_2=[
 {
 	i:5,
 	j:0
 },
 {
 	i:5,
 	j:1
 },
 {
 	i:5,
 	j:2
 },
 {
 	i:6,
 	j:1
 }
]
let arr3_3=[
 {
 	i:5,
 	j:0
 },
 {
 	i:5,
 	j:1
 },
 {
 	i:4,
 	j:1
 },
 {
 	i:6,
 	j:1
 }
]
let arr3_4=[
 {
 	i:5,
 	j:0
 },
 {
 	i:5,
 	j:1
 },
 {
 	i:5,
 	j:2
 },
 {
 	i:4,
 	j:1
 }
]
let arrT=[arr3_1,arr3_2,arr3_3,arr3_4]
let arrCubik=[[
{
 	i:4,
 	j:0
 },
 {
 	i:5,
 	j:0
 },
 {
 	i:4,
 	j:1
 },
 {
 	i:5,
 	j:1
 }
 ]
]
let arr4_1=[
{
 	i:4,
 	j:0
 },
 {
 	i:5,
 	j:0
 },
 {
 	i:5,
 	j:1
 },
 {
 	i:6,
 	j:1
 }
]
let arr4_2=[
{
 	i:5,
 	j:0
 },
 {
 	i:5,
 	j:1
 },
 {
 	i:4,
 	j:1
 },
 {
 	i:4,
 	j:2
 }
]
let arrZ1=[arr4_1,arr4_2]
let arr5_1=[
{
 	i:5,
 	j:0
 },
 {
 	i:5,
 	j:1
 },
 {
 	i:4,
 	j:1
 },
 {
 	i:6,
 	j:0
 }
]
let arr5_2=[
{
 	i:5,
 	j:1
 },
 {
 	i:5,
 	j:2
 },
 {
 	i:4,
 	j:1
 },
 {
 	i:4,
 	j:0
 }
]
let arrZ2=[arr5_1,arr5_2];
let arr6_1=[
{
 	i:5,
 	j:0
 },
 {
 	i:5,
 	j:1
 },
 {
 	i:5,
 	j:2
 },
 {
 	i:5,
 	j:3
 }
]
let arr6_2=[
 {
 	i:4,
 	j:0
 },
 {
 	i:5,
 	j:0
 },
 {
 	i:6,
 	j:0
 },
 {
 	i:3,
 	j:0
 }
]
let arrI=[arr6_1,arr6_2]
let collec=[arrL1,arrL2,arrT,arrCubik,arrZ1,arrZ2,arrI]
function clon(arr){
	let newArr=[]
  for(let i=0;i<arr.length;i++){
  	let obj={};
  	for(let key in arr[i]){
  		obj[key]=arr[i][key]
  	}
  	newArr.push(obj)
  }
  return newArr
}
let n=Math.round(Math.random()*(collec.length-1))
let arrPar=collec[n][0]

let arr1=clon(arrPar)

function constructor(){
for(i=0;i<10;i++){
	for(j=0;j<15;j++){
		
		let div=document.createElement('div')
		div.classList.add('div');
		cont.append(div)
		div.i=i;
		div.j=j;
		div.id=`${i}${j}`
		if(i===arr1[0].i&&j===arr1[0].j||i===arr1[1].i&&j===arr1[1].j||i===arr1[2].i&&j===arr1[2].j||i===arr1[3].i&&j===arr1[3].j){
			div.classList.add('active')
			
		}
	}
 }
}
constructor()
i=5;
j=0

function down () {
  let paymanj=1;
	let paymanClass=1
for(let k=0;k<arr1.length;k++){
	if(arr1[k].j==14||document.getElementById(`${arr1[k].i}${arr1[k].j+1}`).className=='div static'){
		paymanClass=0
		paymanI=0
	 }
   }
   if(paymanClass&&paymanj){
   	let elem1=document.getElementsByClassName('active')
	 for(let k=0; k<arr1.length ;k++){
		elem1[0].classList.remove('active')		
	}
   }
   if(paymanClass&&paymanj){
   for(let k=0;k<arr1.length;k++){
   	arr1[k].j+=1
   let elem=document.getElementById(`${arr1[k].i}${arr1[k].j}`)
       elem.classList.add('active')
   }
}else{
  	for(let k=0;k<arr1.length;k++){
  		
  	let elem2=document.getElementById(`${arr1[k].i}${arr1[k].j}`)
  	elem2.classList.remove('active')
  	elem2.classList.add('static')
    }
     result= c()
 
  if(result){
  	resultGame.innerText=`${result1()}`
  }
    arr1=null
    n=Math.round(Math.random()*(collec.length-1))
    arrPar=collec[n][0]
    let startArr=clon(arrPar)
   for(let k=0;k<startArr.length;k++){
   	 let elem=document.getElementById(`${startArr[k].i}${startArr[k].j}`)
   	 elem.classList.add('active')
   }
   arr1=startArr
    
  }	 
}

function left(){
	let paymanI=1;
	let paymanClass=1
for(let k=0;k<arr1.length;k++){
	if(arr1[k].i<1||document.getElementById(`${arr1[k].i-1}${arr1[k].j}`).className=='div static'){
		paymanClass=0
		paymanI=0
	 }
   }
   if(paymanClass&&paymanI){
   	let elem1=document.getElementsByClassName('active')
	 for(let k=0; k<arr1.length ;k++){
		elem1[0].classList.remove('active')		
	}
   }
   if(paymanClass&&paymanI){
   for(let k=0;k<arr1.length;k++){
   	arr1[k].i-=1
   let elem=document.getElementById(`${arr1[k].i}${arr1[k].j}`)
       elem.classList.add('active')
    }
   }	
 }
function right(){
	let paymanI=1;
	let paymanClass=1
for(let k=0;k<arr1.length;k++){
	if(arr1[k].i>9||document.getElementById(`${arr1[k].i+1}${arr1[k].j}`).className=='div static'){
		paymanClass=0
		paymanI=0
	 }
   }
   if(paymanClass&&paymanI){
   	let elem1=document.getElementsByClassName('active')
	 for(let k=0; k<arr1.length ;k++){
		elem1[0].classList.remove('active')		
	}
   }
   if(paymanClass&&paymanI){
   for(let k=0;k<arr1.length;k++){
   	arr1[k].i+=1
   let elem=document.getElementById(`${arr1[k].i}${arr1[k].j}`)
       elem.classList.add('active')
    }
   }	
 }
 let m=0;
function up(){
	if(m<collec[n].length-1){
		m++;	
	}else{
		m=0
	}
	arrPar=collec[n][m];
	 arr1=clon(arrPar)
	 down()	
		return arr1
		
}

function c(){
	let arrStatic=document.getElementsByClassName('static')
	let num2=0
	let payman1=0
	let payman4=0 
	for(let row=14;row>0;row--){
		let num1=0
      for(let k=0;k<arrStatic.length;k++){
      	if(row==arrStatic[k].j){
           num1+=arrStatic[k].i
           if(arrStatic[k].i==0){
           	payman4=1
           }
      	}
      }
      if(num1==45&&payman4){
      	payman1=1
      	++num2
      	for(let k=0;k<10;k++){
      	 let elem=document.getElementById(`${k}${row}`);
      	 elem.classList.remove('static')
      	}
       }
	}
	if(payman1){
	let arrStatic1=document.getElementsByClassName('static')
      let arrIJ=[]
      let num3=arrStatic1.length
       for(let k=0;k<num3;k++){
         arrIJ.push(arrStatic1[0].i)
         arrIJ.push(arrStatic1[0].j)
         arrStatic1[0].classList.remove('static')
       }
       for(let i=0;i<arrIJ.length;i++){
       	let elem=document.getElementById(`${arrIJ[i]}${arrIJ[i+1]+num2}`)
       	elem.classList.add('static')
       	i++
       }
   }
   return num2
}  
function count(){
     let sum=0
  return function(){
  debugger	
  	if(result){
   sum+=result*10
	}
	return sum
  }
}
result1= count()
window.addEventListener('keydown',(evevnt)=>{
	if(event.key=='ArrowDown'){
		down()
	}
})
window.addEventListener('keydown',(evevnt)=>{
	if(event.key=='ArrowLeft'){
		left()
	}
})
window.addEventListener('keydown',(evevnt)=>{
	if(event.key=='ArrowRight'){
		right()
	}
})
window.addEventListener('keydown',(event)=>{
	if(event.key=="ArrowUp"){
		up()
	}
})

setInterval(()=>{
	down()
},1000)
