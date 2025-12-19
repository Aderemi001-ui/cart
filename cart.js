const img=document.querySelectorAll('.img')
const add=document.querySelectorAll('.add')
 const counter=document.querySelectorAll('.count')
const plus=document.querySelectorAll('.plus')
const minus=document.querySelectorAll('.minus')
const cartsum=document.getElementById('cartsum')
const container2=document.querySelector('.container2')
const price=document.querySelectorAll('.price')
const names=document.querySelectorAll('.name')
 const empty=document.getElementById('empty')
const empty2=document.getElementById('emptyp')
var thumb=document.querySelectorAll('.thumbnail')

 var newtotal=0
 var newtotal2=0
 var newtotal3=0
 var newtotal4=0
 var newtotal5=0
 var newtotal6=0
 var newtotal7=0
 var newtotal8=0
 var newtotal9=0

 const order=document.querySelectorAll('.order')
var dialog=document.querySelector('.dialog')
const ordertotal=document.querySelector('.ordertotal')

function neworder(){
    total=0
 total1=0
 total2=0
 total3=0
 total4=0
 total5=0
 total6=0
 total7=0
 total8=0
 total9=0

 array=[]
array2=[]
 array3=[]
array4=[]
array5=[]
array6=[]
array7=[]
array8=[]
array9=[]

counting=[]
counting2=[]
counting3=[]
counting4=[]
counting5=[]
counting6=[]
counting7=[]
counting8=[]
counting9=[]
   
count = 0
 count2 = 0
  count3 = 0
  count4 = 0
  count5 =  0
  count6 = 0
  count7 = 0
  count8 = 0
  count9 = 0
  sum=0
  location.reload()
}

function show(){
    dialog.showModal()
    dialog.style.display='block'
    
if(thumb[0].innerHTML==''){
    order[0].style.display='none'
}else{
    order[0].innerHTML=`
    <div class='ordercontain'>
  
    <img id='mini'  src="/images/image-waffle-thumbnail.jpg">
  
      <div class='outorder'>
      <h3>${names[0].innerHTML}</h3>
    <div class='params'>
    <h4>${count}x</h4>
    <h3>$${price[0].innerHTML}</h3>
    
    </div>
    </div>
    <h1 class='xadder1'>$${total1}</h1>
    </div>
    <hr>
    `
}

   if(thumb[1].innerHTML==''){
    order[1].style.display='none'
}else{
    order[1].innerHTML=`
    <div class='ordercontain'>
  
    <img id='mini'  src="/images/image-creme-brulee-thumbnail.jpg">
  
      <div class='outorder'>
      <h3>${names[1].innerHTML}</h3>
    <div class='params'>
    <h4>${count2}x</h4>
    <h3>$${price[1].innerHTML}</h3>
    
    </div>
    </div>
 <h1 class='xadder2'>$${total2}</h1>
    </div>
    <hr>
    `
}

   if(thumb[2].innerHTML==''){
    order[2].style.display='none'
}else{
    order[2].innerHTML=`
    <div class='ordercontain'>
  
    <img id='mini'  src="/images/image-macaron-thumbnail.jpg">
  
      <div class='outorder'>
      <h3>${names[2].innerHTML}</h3>
    <div class='params'>
    <h4>${count3}x</h4>
    <h3>$${price[2].innerHTML}</h3>
    
    </div>
    </div>
 <h1 class='xadder3'>$${total3}</h1>
    </div>
    <hr>
    `
}

    if(thumb[3].innerHTML==''){
    order[3].style.display='none'
}else{
    order[3].innerHTML=`
    <div class='ordercontain'>
  
    <img id='mini'  src="/images/image-tiramisu-thumbnail.jpg">
  
      <div class='outorder'>
      <h3>${names[3].innerHTML}</h3>
    <div class='params'>
    <h4>${count4}x</h4>
    <h3>$${price[3].innerHTML}</h3>
    
    </div>
    </div>
 <h1 class='xadder4'>$${total4}</h1>
    </div>
    <hr>
    `
}
  if(thumb[4].innerHTML==''){
    order[4].style.display='none'
}else{
    order[4].innerHTML=`
    <div class='ordercontain'>
  
    <img id='mini'  src="/images/image-baklava-thumbnail.jpg">
  
      <div class='outorder'>
      <h3>${names[4].innerHTML}</h3>
    <div class='params'>
    <h4>${count5}x</h4>
    <h3>$${price[4].innerHTML}</h3>
    
    </div>
    </div>
 <h1 class='xadder5'>$${total5}</h1>
    </div>
    <hr>
    `
}
  if(thumb[5].innerHTML==''){
    order[5].style.display='none'
}else{
    order[5].innerHTML=`
    <div class='ordercontain'>
  
    <img id='mini'  src="/images/image-meringue-thumbnail.jpg">
  
      <div class='outorder'>
      <h3>${names[5].innerHTML}</h3>
    <div class='params'>
    <h4>${count6}x</h4>
    <h3>$${price[5].innerHTML}</h3>
    
    </div>
    </div>
 <h1 class='xadder6'>$${total6}</h1>
    </div>
    <hr>
    `
}
   if(thumb[6].innerHTML==''){
    order[6].style.display='none'
}else{
    order[6].innerHTML=`
    <div class='ordercontain'>
  
    <img id='mini'  src="/images/image-cake-thumbnail.jpg">
  
      <div class='outorder'>
      <h3>${names[6].innerHTML}</h3>
    <div class='params'>
    <h4>${count7}x</h4>
    <h3>$${price[6].innerHTML}</h3>
    
    </div>
    </div>
 <h1 class='xadder7'>$${total7}</h1>
    </div>
    <hr>
    `
}
   if(thumb[7].innerHTML==''){
    order[7].style.display='none'
}else{
    order[7].innerHTML=`
    <div class='ordercontain'>
  
    <img id='mini'  src="/images/image-brownie-thumbnail.jpg">
  
      <div class='outorder'>
      <h3>${names[7].innerHTML}</h3>
    <div class='params'>
    <h4>${count8}x</h4>
    <h3>$${price[7].innerHTML}</h3>
    
    </div>
    </div>
 <h1 class='xadder8'>$${total8}</h1>
    </div>
    <hr>
    `
}
  if(thumb[8].innerHTML==''){
    order[8].style.display='none'
}else{
    order[8].innerHTML=`
    <div class='ordercontain'>
  
    <img id='mini'  src="/images/image-panna-cotta-thumbnail.jpg">
  
      <div class='outorder'>
      <h3>${names[8].innerHTML}</h3>
    <div class='params'>
    <h4>${count9}x</h4>
    <h3>$${price[8].innerHTML}</h3>
    
    </div>
    </div>
 <h1 class='xadder9'>$${total9}</h1>
    </div>
    <hr>
    `
}
   
    ordertotal.innerHTML=`
    <p style='margin-top:30px;margin-left:30px'>Order Total</p>
<h1 class='xadder2'>$${total}</h1>
    `
}



const carbon=document.querySelector('.carbon')

var total=0
var total1=0
var total2=0
var total3=0
var total4=0
var total5=0
var total6=0
var total7=0
var total8=0
var total9=0

var array=[]
var array2=[]
var array3=[]
var array4=[]
var array5=[]
var array6=[]
var array7=[]
var array8=[]
var array9=[]

var counting=[]
var counting2=[]
var counting3=[]
var counting4=[]
var counting5=[]
var counting6=[]
var counting7=[]
var counting8=[]
var counting9=[]
   
console.log(array,array2,array3,array4,array5,array6,array7,array8,array9)

var totalprice=document.querySelector('.totalprice')
var divtotal=document.querySelector('.totaldiv')
var buy=document.querySelector('.buydiv')

var count = 0
 var count2 = 0
 var count3 = 0
 var count4 = 0
 var count5 =  0
 var count6 = 0
 var count7 = 0
 var count8 = 0
 var count9 = 0
 var sum=0

function brownize1(){
    empty.style.display='none'
    empty2.style.display='none'
add[0].style.backgroundColor='brown'
add[0].innerHTML = `
<svg class='minus' onclick='removeItem1()' xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2"><path fill="#350303" d="M0 .375h10v1.25H0V.375Z"/></svg>
<h3 class='count'>${count}</h3>
<svg class='plus' onclick='addToCart1()' xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#350303" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/></svg>
`
counter[0].style.display='block'
divtotal.style.display='flex'
buy.style.display='block'
add[0].style.color='white'
carbon.innerHTML=`
<svg style='margin-top:13px' xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20"><path fill="#1EA575" d="M8 18.75H6.125V17.5H8V9.729L5.803 8.41l.644-1.072 2.196 1.318a1.256 1.256 0 0 1 .607 1.072V17.5A1.25 1.25 0 0 1 8 18.75Z"/><path fill="#1EA575" d="M14.25 18.75h-1.875a1.25 1.25 0 0 1-1.25-1.25v-6.875h3.75a2.498 2.498 0 0 0 2.488-2.747 2.594 2.594 0 0 0-2.622-2.253h-.99l-.11-.487C13.283 3.56 11.769 2.5 9.875 2.5a3.762 3.762 0 0 0-3.4 2.179l-.194.417-.54-.072A1.876 1.876 0 0 0 5.5 5a2.5 2.5 0 1 0 0 5v1.25a3.75 3.75 0 0 1 0-7.5h.05a5.019 5.019 0 0 1 4.325-2.5c2.3 0 4.182 1.236 4.845 3.125h.02a3.852 3.852 0 0 1 3.868 3.384 3.75 3.75 0 0 1-3.733 4.116h-2.5V17.5h1.875v1.25Z"/></svg>
<p>This is a <b>carbon-neutral</b> delivery</p>

`
carbon.style.display='flex'

}
function unbrownize1(){
    add[0].style.backgroundColor='white'
    add[0].style.border='1px solid grey'
    add[0].innerHTML=`
    <svg xmlns="http://www.w3.org/2000/svg" class="svg" width="21" height="20" fill="none" viewBox="0 0 21 20"><g fill="#C73B0F" clip-path="url(#a)"><path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z"/><path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M.333 0h20v20h-20z"/></clipPath></defs></svg>
              <p class="p1">Add to cart</p>
    `
    counter[0].style.display='none'
divtotal.style.display='none'
buy.style.display='none'
}
function brownize2(){
    empty.style.display='none'
        empty2.style.display='none'
add[1].style.backgroundColor='brown'
add[1].innerHTML=`
<svg class='minus' onclick='removeItem2()' xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2"><path fill="#350303" d="M0 .375h10v1.25H0V.375Z"/></svg>
<h3 class='count'>${count2}</h3>
<svg class='plus' onclick='addToCart2()' xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#350303" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/></svg>
`
counter[1].style.display='block'
divtotal.style.display='flex'
add[1].style.color='white'
buy.style.display='block'
carbon.innerHTML=`
<svg style='margin-top:13px' xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20"><path fill="#1EA575" d="M8 18.75H6.125V17.5H8V9.729L5.803 8.41l.644-1.072 2.196 1.318a1.256 1.256 0 0 1 .607 1.072V17.5A1.25 1.25 0 0 1 8 18.75Z"/><path fill="#1EA575" d="M14.25 18.75h-1.875a1.25 1.25 0 0 1-1.25-1.25v-6.875h3.75a2.498 2.498 0 0 0 2.488-2.747 2.594 2.594 0 0 0-2.622-2.253h-.99l-.11-.487C13.283 3.56 11.769 2.5 9.875 2.5a3.762 3.762 0 0 0-3.4 2.179l-.194.417-.54-.072A1.876 1.876 0 0 0 5.5 5a2.5 2.5 0 1 0 0 5v1.25a3.75 3.75 0 0 1 0-7.5h.05a5.019 5.019 0 0 1 4.325-2.5c2.3 0 4.182 1.236 4.845 3.125h.02a3.852 3.852 0 0 1 3.868 3.384 3.75 3.75 0 0 1-3.733 4.116h-2.5V17.5h1.875v1.25Z"/></svg>
<p>This is a <b>carbon-neutral</b> delivery</p>

`
carbon.style.display='flex'
}
function unbrownize2(){
    add[1].style.backgroundColor='white'
    add[1].style.border='1px solid grey'
    add[1].innerHTML=`
    <svg xmlns="http://www.w3.org/2000/svg" class="svg" width="21" height="20" fill="none" viewBox="0 0 21 20"><g fill="#C73B0F" clip-path="url(#a)"><path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z"/><path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M.333 0h20v20h-20z"/></clipPath></defs></svg>
              <p class="p1">Add to cart</p>
    `
    counter[1].style.display='none'
    counter[1].innerHTML=count2
    divtotal.style.display='none'
    
buy.style.display='none'
}
function brownize3(){
    empty.style.display='none'
        empty2.style.display='none'
add[2].style.backgroundColor='brown'
add[2].innerHTML=`
<svg class='minus' onclick='removeItem3()' xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2"><path fill="#350303" d="M0 .375h10v1.25H0V.375Z"/></svg>
<h3 class='count'>${count3}</h3>
<svg class='plus' onclick='addToCart3()' xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#350303" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/></svg>
`
counter[2].style.display='block'
divtotal.style.display='flex'
add[2].style.color='white'
buy.style.display='block'
carbon.innerHTML=`
<svg style='margin-top:13px' xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20"><path fill="#1EA575" d="M8 18.75H6.125V17.5H8V9.729L5.803 8.41l.644-1.072 2.196 1.318a1.256 1.256 0 0 1 .607 1.072V17.5A1.25 1.25 0 0 1 8 18.75Z"/><path fill="#1EA575" d="M14.25 18.75h-1.875a1.25 1.25 0 0 1-1.25-1.25v-6.875h3.75a2.498 2.498 0 0 0 2.488-2.747 2.594 2.594 0 0 0-2.622-2.253h-.99l-.11-.487C13.283 3.56 11.769 2.5 9.875 2.5a3.762 3.762 0 0 0-3.4 2.179l-.194.417-.54-.072A1.876 1.876 0 0 0 5.5 5a2.5 2.5 0 1 0 0 5v1.25a3.75 3.75 0 0 1 0-7.5h.05a5.019 5.019 0 0 1 4.325-2.5c2.3 0 4.182 1.236 4.845 3.125h.02a3.852 3.852 0 0 1 3.868 3.384 3.75 3.75 0 0 1-3.733 4.116h-2.5V17.5h1.875v1.25Z"/></svg>
<p>This is a <b>carbon-neutral</b> delivery</p>

`
carbon.style.display='flex'
}
function unbrownize3(){
    add[2].style.backgroundColor='white'
    add[2].style.border='1px solid grey'
    add[2].innerHTML=`
    <svg xmlns="http://www.w3.org/2000/svg" class="svg" width="21" height="20" fill="none" viewBox="0 0 21 20"><g fill="#C73B0F" clip-path="url(#a)"><path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z"/><path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M.333 0h20v20h-20z"/></clipPath></defs></svg>
              <p class="p1">Add to cart</p>
    `
    counter[2].style.display='none'
    counter[2].innerHTML=count3
    divtotal.style.display='none'
buy.style.display='none'
}
function brownize4(){
    empty.style.display='none'
        empty2.style.display='none'
add[3].style.backgroundColor='brown'
add[3].innerHTML=`
<svg class='minus' onclick='removeItem4()' xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2"><path fill="#350303" d="M0 .375h10v1.25H0V.375Z"/></svg>
<h3 class='count'>${count4}</h3>
<svg class='plus' onclick='addToCart4()' xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#350303" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/></svg>
`
counter[3].style.display='block'
divtotal.style.display='flex'
add[3].style.color='white'
buy.style.display='block'
carbon.innerHTML=`
<svg style='margin-top:13px' xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20"><path fill="#1EA575" d="M8 18.75H6.125V17.5H8V9.729L5.803 8.41l.644-1.072 2.196 1.318a1.256 1.256 0 0 1 .607 1.072V17.5A1.25 1.25 0 0 1 8 18.75Z"/><path fill="#1EA575" d="M14.25 18.75h-1.875a1.25 1.25 0 0 1-1.25-1.25v-6.875h3.75a2.498 2.498 0 0 0 2.488-2.747 2.594 2.594 0 0 0-2.622-2.253h-.99l-.11-.487C13.283 3.56 11.769 2.5 9.875 2.5a3.762 3.762 0 0 0-3.4 2.179l-.194.417-.54-.072A1.876 1.876 0 0 0 5.5 5a2.5 2.5 0 1 0 0 5v1.25a3.75 3.75 0 0 1 0-7.5h.05a5.019 5.019 0 0 1 4.325-2.5c2.3 0 4.182 1.236 4.845 3.125h.02a3.852 3.852 0 0 1 3.868 3.384 3.75 3.75 0 0 1-3.733 4.116h-2.5V17.5h1.875v1.25Z"/></svg>
<p>This is a <b>carbon-neutral</b> delivery</p>

`
carbon.style.display='flex'
}
function unbrownize4(){
    add[3].style.backgroundColor='white'
    add[3].style.border='1px solid grey'
    add[3].innerHTML=`
    <svg xmlns="http://www.w3.org/2000/svg" class="svg" width="21" height="20" fill="none" viewBox="0 0 21 20"><g fill="#C73B0F" clip-path="url(#a)"><path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z"/><path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M.333 0h20v20h-20z"/></clipPath></defs></svg>
              <p class="p1">Add to cart</p>
    `
    counter[3].style.display='none'
    counter[3].innerHTML=count4
    divtotal.style.display='none'
buy.style.display='none'
}
function brownize5(){
    empty.style.display='none'
        empty2.style.display='none'
add[4].style.backgroundColor='brown'
add[4].innerHTML=`
<svg class='minus' onclick='removeItem5()' xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2"><path fill="#350303" d="M0 .375h10v1.25H0V.375Z"/></svg>
<h3 class='count'>${count5}</h3>
<svg class='plus' onclick='addToCart5()' xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#350303" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/></svg>
`
counter[4].style.display='block'
divtotal.style.display='flex'
add[4].style.color='white'
buy.style.display='block'
carbon.innerHTML=`
<svg style='margin-top:13px' xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20"><path fill="#1EA575" d="M8 18.75H6.125V17.5H8V9.729L5.803 8.41l.644-1.072 2.196 1.318a1.256 1.256 0 0 1 .607 1.072V17.5A1.25 1.25 0 0 1 8 18.75Z"/><path fill="#1EA575" d="M14.25 18.75h-1.875a1.25 1.25 0 0 1-1.25-1.25v-6.875h3.75a2.498 2.498 0 0 0 2.488-2.747 2.594 2.594 0 0 0-2.622-2.253h-.99l-.11-.487C13.283 3.56 11.769 2.5 9.875 2.5a3.762 3.762 0 0 0-3.4 2.179l-.194.417-.54-.072A1.876 1.876 0 0 0 5.5 5a2.5 2.5 0 1 0 0 5v1.25a3.75 3.75 0 0 1 0-7.5h.05a5.019 5.019 0 0 1 4.325-2.5c2.3 0 4.182 1.236 4.845 3.125h.02a3.852 3.852 0 0 1 3.868 3.384 3.75 3.75 0 0 1-3.733 4.116h-2.5V17.5h1.875v1.25Z"/></svg>
<p>This is a <b>carbon-neutral</b> delivery</p>

`
carbon.style.display='flex'
}
function unbrownize5(){
    add[4].style.backgroundColor='white'
    add[4].style.border='1px solid grey'
    add[4].innerHTML=`
    <svg xmlns="http://www.w3.org/2000/svg" class="svg" width="21" height="20" fill="none" viewBox="0 0 21 20"><g fill="#C73B0F" clip-path="url(#a)"><path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z"/><path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M.333 0h20v20h-20z"/></clipPath></defs></svg>
              <p class="p1">Add to cart</p>
    `
    counter[4].style.display='none'
    counter[4].innerHTML=count5
    divtotal.style.display='none'
buy.style.display='none'
}
function brownize6(){
    empty.style.display='none'
        empty2.style.display='none'
add[5].style.backgroundColor='brown'
add[5].innerHTML=`
<svg class='minus' onclick='removeItem6()' xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2"><path fill="#350303" d="M0 .375h10v1.25H0V.375Z"/></svg>
<h3 class='count'>${count6}</h3>
<svg class='plus' onclick='addToCart6()' xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#350303" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/></svg>
`
counter[5].style.display='block'
divtotal.style.display='flex'
add[5].style.color='white'
buy.style.display='block'
carbon.innerHTML=`
<svg style='margin-top:13px' xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20"><path fill="#1EA575" d="M8 18.75H6.125V17.5H8V9.729L5.803 8.41l.644-1.072 2.196 1.318a1.256 1.256 0 0 1 .607 1.072V17.5A1.25 1.25 0 0 1 8 18.75Z"/><path fill="#1EA575" d="M14.25 18.75h-1.875a1.25 1.25 0 0 1-1.25-1.25v-6.875h3.75a2.498 2.498 0 0 0 2.488-2.747 2.594 2.594 0 0 0-2.622-2.253h-.99l-.11-.487C13.283 3.56 11.769 2.5 9.875 2.5a3.762 3.762 0 0 0-3.4 2.179l-.194.417-.54-.072A1.876 1.876 0 0 0 5.5 5a2.5 2.5 0 1 0 0 5v1.25a3.75 3.75 0 0 1 0-7.5h.05a5.019 5.019 0 0 1 4.325-2.5c2.3 0 4.182 1.236 4.845 3.125h.02a3.852 3.852 0 0 1 3.868 3.384 3.75 3.75 0 0 1-3.733 4.116h-2.5V17.5h1.875v1.25Z"/></svg>
<p>This is a <b>carbon-neutral</b> delivery</p>

`
carbon.style.display='flex'
}
function unbrownize6(){
    add[5].style.backgroundColor='white'
    add[5].style.border='1px solid grey'
    add[5].innerHTML=`
    <svg xmlns="http://www.w3.org/2000/svg" class="svg" width="21" height="20" fill="none" viewBox="0 0 21 20"><g fill="#C73B0F" clip-path="url(#a)"><path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z"/><path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M.333 0h20v20h-20z"/></clipPath></defs></svg>
              <p class="p1">Add to cart</p>
    `
    counter[5].style.display='none'
    counter[5].innerHTML=count6
    divtotal.style.display='none'
buy.style.display='none'
}
function brownize7(){
    empty.style.display='none'
        empty2.style.display='none'
add[6].style.backgroundColor='brown'
add[6].innerHTML=`
<svg class='minus' onclick='removeItem7()' xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2"><path fill="#350303" d="M0 .375h10v1.25H0V.375Z"/></svg>
<h3 class='count'>${count7}</h3>
<svg class='plus' onclick='addToCart7()' xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#350303" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/></svg>
`
counter[6].style.display='block'
divtotal.style.display='flex'
add[6].style.color='white'
buy.style.display='block'
carbon.innerHTML=`
<svg style='margin-top:13px' xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20"><path fill="#1EA575" d="M8 18.75H6.125V17.5H8V9.729L5.803 8.41l.644-1.072 2.196 1.318a1.256 1.256 0 0 1 .607 1.072V17.5A1.25 1.25 0 0 1 8 18.75Z"/><path fill="#1EA575" d="M14.25 18.75h-1.875a1.25 1.25 0 0 1-1.25-1.25v-6.875h3.75a2.498 2.498 0 0 0 2.488-2.747 2.594 2.594 0 0 0-2.622-2.253h-.99l-.11-.487C13.283 3.56 11.769 2.5 9.875 2.5a3.762 3.762 0 0 0-3.4 2.179l-.194.417-.54-.072A1.876 1.876 0 0 0 5.5 5a2.5 2.5 0 1 0 0 5v1.25a3.75 3.75 0 0 1 0-7.5h.05a5.019 5.019 0 0 1 4.325-2.5c2.3 0 4.182 1.236 4.845 3.125h.02a3.852 3.852 0 0 1 3.868 3.384 3.75 3.75 0 0 1-3.733 4.116h-2.5V17.5h1.875v1.25Z"/></svg>
<p>This is a <b>carbon-neutral</b> delivery</p>

`
carbon.style.display='flex'
}
function unbrownize7(){
    add[6].style.backgroundColor='white'
    add[6].style.border='1px solid grey'
    add[6].innerHTML=`
    <svg xmlns="http://www.w3.org/2000/svg" class="svg" width="21" height="20" fill="none" viewBox="0 0 21 20"><g fill="#C73B0F" clip-path="url(#a)"><path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z"/><path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M.333 0h20v20h-20z"/></clipPath></defs></svg>
              <p class="p1">Add to cart</p>
    `
    counter[6].style.display='none'
    counter[6].innerHTML=count7
    divtotal.style.display='none'
buy.style.display='none'
}
function brownize8(){
    empty.style.display='none'
        empty2.style.display='none'
add[7].style.backgroundColor='brown'
add[7].innerHTML=`
<svg class='minus' onclick='removeItem8()' xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2"><path fill="#350303" d="M0 .375h10v1.25H0V.375Z"/></svg>
<h3 class='count'>${count8}</h3>
<svg class='plus' onclick='addToCart8()' xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#350303" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/></svg>
`
counter[7].style.display='block'
divtotal.style.display='flex'
add[7].style.color='white'
buy.style.display='block'
carbon.innerHTML=`
<svg style='margin-top:13px' xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20"><path fill="#1EA575" d="M8 18.75H6.125V17.5H8V9.729L5.803 8.41l.644-1.072 2.196 1.318a1.256 1.256 0 0 1 .607 1.072V17.5A1.25 1.25 0 0 1 8 18.75Z"/><path fill="#1EA575" d="M14.25 18.75h-1.875a1.25 1.25 0 0 1-1.25-1.25v-6.875h3.75a2.498 2.498 0 0 0 2.488-2.747 2.594 2.594 0 0 0-2.622-2.253h-.99l-.11-.487C13.283 3.56 11.769 2.5 9.875 2.5a3.762 3.762 0 0 0-3.4 2.179l-.194.417-.54-.072A1.876 1.876 0 0 0 5.5 5a2.5 2.5 0 1 0 0 5v1.25a3.75 3.75 0 0 1 0-7.5h.05a5.019 5.019 0 0 1 4.325-2.5c2.3 0 4.182 1.236 4.845 3.125h.02a3.852 3.852 0 0 1 3.868 3.384 3.75 3.75 0 0 1-3.733 4.116h-2.5V17.5h1.875v1.25Z"/></svg>
<p>This is a <b>carbon-neutral</b> delivery</p>

`
carbon.style.display='flex'
}
function unbrownize8(){
    add[7].style.backgroundColor='white'
    add[7].style.border='1px solid grey'
    add[7].innerHTML=`
    <svg xmlns="http://www.w3.org/2000/svg" class="svg" width="21" height="20" fill="none" viewBox="0 0 21 20"><g fill="#C73B0F" clip-path="url(#a)"><path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z"/><path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M.333 0h20v20h-20z"/></clipPath></defs></svg>
              <p class="p1">Add to cart</p>
    `
    counter[7].style.display='none'
    counter[7].innerHTML=count8
    divtotal.style.display='none'
buy.style.display='none'
}
function brownize9(){
    empty.style.display='none'
        empty2.style.display='none'
add[8].style.backgroundColor='brown'
add[8].innerHTML=`
<svg class='minus' onclick='removeItem9()' xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2"><path fill="#350303" d="M0 .375h10v1.25H0V.375Z"/></svg>
<h3 class='count'>${count9}</h3>
<svg class='plus' onclick='addToCart9()' xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#350303" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/></svg>
`
counter[8].style.display='block'
divtotal.style.display='flex'
add[8].style.color='white'
buy.style.display='block'
carbon.innerHTML=`
<svg style='margin-top:13px' xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20"><path fill="#1EA575" d="M8 18.75H6.125V17.5H8V9.729L5.803 8.41l.644-1.072 2.196 1.318a1.256 1.256 0 0 1 .607 1.072V17.5A1.25 1.25 0 0 1 8 18.75Z"/><path fill="#1EA575" d="M14.25 18.75h-1.875a1.25 1.25 0 0 1-1.25-1.25v-6.875h3.75a2.498 2.498 0 0 0 2.488-2.747 2.594 2.594 0 0 0-2.622-2.253h-.99l-.11-.487C13.283 3.56 11.769 2.5 9.875 2.5a3.762 3.762 0 0 0-3.4 2.179l-.194.417-.54-.072A1.876 1.876 0 0 0 5.5 5a2.5 2.5 0 1 0 0 5v1.25a3.75 3.75 0 0 1 0-7.5h.05a5.019 5.019 0 0 1 4.325-2.5c2.3 0 4.182 1.236 4.845 3.125h.02a3.852 3.852 0 0 1 3.868 3.384 3.75 3.75 0 0 1-3.733 4.116h-2.5V17.5h1.875v1.25Z"/></svg>
<p>This is a <b>carbon-neutral</b> delivery</p>

`
carbon.style.display='flex'
}
function unbrownize9(){
    add[8].style.backgroundColor='white'
    add[8].style.border='1px solid grey'
    add[8].innerHTML=`
    <svg xmlns="http://www.w3.org/2000/svg" class="svg" width="21" height="20" fill="none" viewBox="0 0 21 20"><g fill="#C73B0F" clip-path="url(#a)"><path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z"/><path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M.333 0h20v20h-20z"/></clipPath></defs></svg>
              <p class="p1">Add to cart</p>
    `
    counter[8].style.display='none'
    counter[8].innerHTML=count9
    divtotal.style.display='none'
buy.style.display='none'
}

 
 const cancel=document.querySelectorAll('.cancel')
 var thumb=document.querySelectorAll('.thumbnail')
function cancel1(){
  thumb[0].remove() 
unbrownize1()
const newsum = sum-count
sum=newsum
cartsum.innerHTML=`Your Cart(${newsum})`
count=0
console.log(sum)


if(count==0 && count2==0 && count3==0 && count4==0 && count5==0 && count6==0 && count7==0 && count8==0 && count9==0){
totalprice.innerHTML=0
total1=0
carbon.remove()
total-=total1
console.log(total)
}else{

total-=total1
totalprice.innerHTML=' $'+total
}
} 



function cancel2(){
  thumb[1].remove() 
unbrownize2()
const newsum2=sum-count2
sum=newsum2
cartsum.innerHTML=`Your Cart(${newsum2})`
count2=0

if(count==0 && count2==0 && count3==0 && count4==0 && count5==0 && count6==0 && count7==0 && count8==0 && count9==0){
totalprice.innerHTML=0
total2=0
carbon.remove()
    total -= total2
    console.log(total)
}else{
    total -= total2
totalprice.innerHTML=' $'+total
}

}



function cancel3(){
  thumb[2].remove() 
unbrownize3()
const newsum3=sum-count3
sum=newsum3
cartsum.innerHTML=`Your Cart(${newsum3})`
count3=0

if(count==0 && count2==0 && count3==0 && count4==0 && count5==0 && count6==0 && count7==0 && count8==0 && count9==0){
totalprice.innerHTML=0
total3=0
carbon.remove()
total-=total3
console.log(total)
}else{
total -= total3
totalprice.innerHTML=' $'+(total)
}
} 
function cancel4(){
  thumb[3].remove() 
unbrownize4()
const newsum4=sum-count4
cartsum.innerHTML=`Your Cart(${newsum4})`
count4=0

if(count==0 && count2==0 && count3==0 && count4==0 && count5==0 && count6==0 && count7==0 && count8==0 && count9==0){
totalprice.innerHTML=0
total4=0
carbon.remove()
total-=total4
console.log(total)
}else{
total-=total4
totalprice.innerHTML=' $'+(total)
}
} 
function cancel5(){
  thumb[4].remove() 
unbrownize5()
const newsum5=sum-count5
cartsum.innerHTML=`Your Cart(${newsum5})`
count5=0

if(count==0 && count2==0 && count3==0 && count4==0 && count5==0 && count6==0 && count7==0 && count8==0 && count9==0){
totalprice.innerHTML=0
total5=0
carbon.remove()
total-=total5
console.log(total)
}else{
    total-=total5
totalprice.innerHTML=' $'+(total)
}
} 
function cancel6(){
  thumb[5].remove() 
unbrownize6()
const newsum6=sum-count6
cartsum.innerHTML=`Your Cart(${newsum6})`
count6=0

if(count==0 && count2==0 && count3==0 && count4==0 && count5==0 && count6==0 && count7==0 && count8==0 && count9==0){
totalprice.innerHTML=0
total6=0
carbon.remove()
total-=total6
console.log(total)
}else{
    total-=total6
totalprice.innerHTML=' $'+(total-total6)
}
} 
function cancel7(){
  thumb[6].remove() 
unbrownize7()
const newsum7=sum-count7
cartsum.innerHTML=`Your Cart(${newsum7})`
count7=0

if(count==0 && count2==0 && count3==0 && count4==0 && count5==0 && count6==0 && count7==0 && count8==0 && count9==0){
totalprice.innerHTML=0
total7=0
carbon.remove()
total-=total7
console.log(total)
}else{
    total-=total7
totalprice.innerHTML =' $'+(total)
}
} 
function cancel8(){
  thumb[7].remove() 
unbrownize8()
const newsum8=sum-count8
cartsum.innerHTML=`Your Cart(${newsum8})`
count8=0

if(count==0 && count2==0 && count3==0 && count4==0 && count5==0 && count6==0 && count7==0 && count8==0 && count9==0){
totalprice.innerHTML=0
total8=0
carbon.remove()
total-=total8
console.log(total)
}else{
    total-=total8
totalprice.innerHTML =' $'+(total)
}
} 
function cancel9(){
  thumb[8].remove() 
unbrownize9()
const newsum9=sum-count9
cartsum.innerHTML=`Your Cart(${newsum9})`
count9=0

if(count==0 && count2==0 && count3==0 && count4==0 && count5==0 && count6==0 && count7==0 && count8==0 && count9==0){
totalprice.innerHTML=0
total9=0
carbon.remove()
total-=total9
console.log(total)
}else{
if(count==0 && count2==0 && count3==0 && count4==0 && count5==0 && count6==0 && count7==0 && count8==0 && count9==0){
totalprice.innerHTML=0
}else{
    total-=total9
totalprice.innerHTML =' $'+(total)
}
}
} 

function addobject(){
    counting=[count,count2,count3,count4,count5,count6,count7,count8,count9]
     console.log(counting)
        const foodItem1={
        name:names[0].textContent,
counts:count+1,
price:price[0].textContent,
total:(price[0].textContent)*(count+1)
      
    
    }
    array.push(foodItem1)
       console.log(array.at(-1))
total_1()
      
       function addthumbnail(){
  
 if(add[0].style.backgroundColor==='brown'){
            console.log(price[0].innerHTML)
var thumb=document.querySelectorAll('.thumbnail')

thumb[0].innerHTML=`
<div class='canceldiv'>
<div class='sidefood'>
<div class='foodname'>${foodItem1.name}</div>
<div class='tags'>
<h4 class='brown'>x${foodItem1.counts}</h4>
<h4 class='grey'>@$${foodItem1.price}</h4>
<h4>$${foodItem1.total}</h4>
</div>
</div>
<svg class=cancel onclick='cancel1()' style='margin-left:185px;' xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#CAAFA7" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/></svg>
</div>
<hr>
`
total=0
total=total1+total2+total3+total4+total5+total6+total7+total8+total9
console.log(total)

totalprice.innerHTML=' $'+total

   }
       
       
    }
   
     addthumbnail()
 }
 
 function minusobject(){
    counting=[count,count2,count3,count4,count5,count6,count7,count8,count9]
     console.log(counting)
        const foodItem1={
        name:names[0].textContent,
counts:count-1,
price:price[0].textContent,
        total:(price[0].textContent)*(count-1)
    
    }
    array.push(foodItem1)
       console.log(array.at(-1))
       total_1()
        function addthumbnail(){
  


 if(add[0].style.backgroundColor==='brown'){
            console.log(price[0].innerHTML)


thumb[0].innerHTML=`
<div class='canceldiv'>
<div class='sidefood'>
<div class='foodname'>${foodItem1.name}</div>
<div class='tags'>
<h4 class='brown'>x${foodItem1.counts}</h4>
<h4 class='grey'>@$${foodItem1.price}</h4>
<h4>$${foodItem1.total}</h4>
</div>
</div>
<svg class=cancel onclick='cancel1()' style='margin-left:185px;' xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#CAAFA7" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/></svg>
</div>
<hr>
`
total=total1+total2+total3+total4+total5+total6+total7+total8+total9
console.log(total)
totalprice.innerHTML=' $'+total
   }
       
       
    }
   
     addthumbnail()
 }

 function addobject2(){
    counting2=[count,count2,count3,count4,count5,count6,count7,count8,count9]
     console.log(counting2)
        const foodItem2={
        name:names[1].textContent,
counts:count2+1,
        price:price[1].textContent,
        total:(price[1].textContent)*(count2+1)
    
    }
    array2.push(foodItem2)
       console.log(array2.at(-1))
total_2()
        function addthumbnail2(){
  
 if(add[1].style.backgroundColor==='brown'){
            console.log(price[1].innerHTML)


thumb[1].innerHTML=`
<div class='canceldiv'>
<div class='sidefood'>
<div class='foodname'>${foodItem2.name}</div>
<div class='tags'>
<h4 class='brown'>x${foodItem2.counts}</h4>
<h4 class='grey'>@$${foodItem2.price}</h4>
<h4>$${foodItem2.total}</h4>
</div>
</div>
<svg class=cancel onclick='cancel2()' style='margin-left:140px;' xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#CAAFA7" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/></svg>
</div>
<hr>
`
total=total1+total2+total3+total4+total5+total6+total7+total8+total9
console.log(total)
totalprice.innerHTML=' $'+total
   }
       
       
    }
   
     addthumbnail2()
 }
  function minusobject2(){
    counting2=[count,count2,count3,count4,count5,count6,count7,count8,count9]
     console.log(counting2)
        const foodItem2={
        name:names[1].textContent,
counts:count2-1,
price:price[1].textContent,
total:(price[1].textContent)*(count2-1)
        
    
    }
    array2.push(foodItem2)
       console.log(array2.at(-1))
       total_2()
        function addthumbnail2(){
  
 if(add[1].style.backgroundColor==='brown'){
            console.log(price[1].innerHTML)


thumb[1].innerHTML=`
<div class='canceldiv'>
<div class='sidefood'>
<div class='foodname'>${foodItem2.name}</div>
<div class='tags'>
<h4 class='brown'>x${foodItem2.counts}</h4>
<h4 class='grey'>@$${foodItem2.price}</h4>
<h4>$${foodItem2.total}</h4>
</div>
</div>
<svg class=cancel onclick='cancel2()' style='margin-left:140px;'style='margin-left:150px;' xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#CAAFA7" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/></svg>
</div>
<hr>
`
total=total1+total2+total3+total4+total5+total6+total7+total8+total9
console.log(total)
totalprice.innerHTML=' $'+total
   }
       
       
    }
   
     addthumbnail2()
 }

 function addobject3(){
    counting3=[count,count2,count3,count4,count5,count6,count7,count8,count9]
     console.log(counting3)
        const foodItem3={
        name:names[2].textContent,
counts:count3+1,
        price:price[2].textContent,
    total:(price[2].textContent)*(count3+1)
    }
    array3.push(foodItem3)
       console.log(array3.at(-1))
total_3()
        function addthumbnail3(){
  
 if(add[2].style.backgroundColor==='brown'){
            console.log(price[2].innerHTML)


thumb[2].innerHTML=`
<div class='canceldiv'>
<div class='sidefood'>
<div class='foodname'>${foodItem3.name}</div>
<div class='tags'>
<h4 class='brown'>x${foodItem3.counts}</h4>
<h4 class='grey'>@$${foodItem3.price}</h4>
<h4>$${foodItem3.total}</h4>
</div>
</div>
<svg class=cancel onclick='cancel3()' style='margin-left:170px;' xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#CAAFA7" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/></svg>
</div>
<hr>
`
total=total1+total2+total3+total4+total5+total6+total7+total8+total9
console.log(total)
totalprice.innerHTML=' $'+total
   }
       
       
    }
   
     addthumbnail3()
 }
 function minusobject3(){
    counting3=[count,count2,count3,count4,count5,count6,count7,count8,count9]
     console.log(counting3)
        const foodItem3={
        name:names[2].textContent,
counts:count3-1,
price:price[2].textContent,
        total:(price[2].textContent)*(count3-1)
    
    }
    array3.push(foodItem3)
       console.log(array3.at(-1))
total_3()
        function addthumbnail3(){
  
 if(add[2].style.backgroundColor==='brown'){
            console.log(price[2].innerHTML)


thumb[2].innerHTML=`
<div class='canceldiv'>
<div class='sidefood'>
<div class='foodname'>${foodItem3.name}</div>
<div class='tags'>
<h4 class='brown'>x${foodItem3.counts}</h4>
<h4 class='grey'>@$${foodItem3.price}</h4>
<h4>$${foodItem3.total}</h4>
</div>
</div>
<svg class=cancel onclick='cancel3()' style='margin-left:170px;' xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#CAAFA7" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/></svg>
</div>
<hr>
`
total=total1+total2+total3+total4+total5+total6+total7+total8+total9
console.log(total)
totalprice.innerHTML=' $'+total
   }
       
       
    }
   
     addthumbnail3()
 }

 function addobject4(){
    counting4=[count,count2,count3,count4,count5,count6,count7,count8,count9]
     console.log(counting4)
        const foodItem4={
        name:names[3].textContent,
counts:count4+1,
        price:price[3].textContent,
        total:(price[3].textContent)*(count4+1)
    
    }
    array4.push(foodItem4)
       console.log(array4.at(-1))
total_4()
        function addthumbnail4(){
  
 if(add[3].style.backgroundColor==='brown'){
            console.log(price[3].innerHTML)


thumb[3].innerHTML=`
<div class='canceldiv'>
<div class='sidefood'>
<div class='foodname'>${foodItem4.name}</div>
<div class='tags'>
<h4 class='brown'>x${foodItem4.counts}</h4>
<h4 class='grey'>@$${foodItem4.price}</h4>
<h4>$${foodItem4.total}</h4>
</div>
</div>
<svg class=cancel onclick='cancel4()' style='margin-left:205px;' xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#CAAFA7" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/></svg>
</div>
<hr>
`
total=total1+total2+total3+total4+total5+total6+total7+total8+total9
console.log(total)
totalprice.innerHTML=' $'+total
   }
       
       
    }
   
     addthumbnail4()
 }

 function minusobject4(){
    counting4=[count,count2,count3,count4,count5,count6,count7,count8,count9]
     console.log(counting4)
        const foodItem4={
        name:names[3].textContent,
counts:count4-1,
price:price[3].textContent,
        total:(price[3].textContent)*(count4-1)
    
    }
    array4.push(foodItem4)
       console.log(array4.at(-1))
total_4()
        function addthumbnail4(){
  
 if(add[3].style.backgroundColor==='brown'){
            console.log(price[3].innerHTML)


thumb[3].innerHTML=`
<div class='canceldiv'>
<div class='sidefood'>
<div class='foodname'>${foodItem4.name}</div>
<div class='tags'>
<h4 class='brown'>x${foodItem4.counts}</h4>
<h4 class='grey'>@$${foodItem4.price}</h4>
<h4>$${foodItem4.total}</h4>
</div>
</div>
<svg class=cancel onclick='cancel4()' style='margin-left:205px;' xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#CAAFA7" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/></svg>
</div>
<hr>
`
total=total1+total2+total3+total4+total5+total6+total7+total8+total9
console.log(total)
totalprice.innerHTML=' $'+total
   }
       
       
    }
   
     addthumbnail4()
 }

 function addobject5(){
    counting5=[count,count2,count3,count4,count5,count6,count7,count8,count9]
     console.log(counting5)
        const foodItem5={
        name:names[4].textContent,
counts:count5+1,
        price:price[4].textContent,
    total:(price[4].textContent)*(count5+1)
    }
    array5.push(foodItem5)
       console.log(array5.at(-1))
total_5()
        function addthumbnail5(){
  
 if(add[4].style.backgroundColor==='brown'){
            console.log(price[4].innerHTML)


thumb[4].innerHTML=`
<div class='canceldiv'>
<div class='sidefood'>
<div class='foodname'>${foodItem5.name}</div>
<div class='tags'>
<h4 class='brown'>x${foodItem5.counts}</h4>
<h4 class='grey'>@$${foodItem5.price}</h4>
<h4>$${foodItem5.total}</h4>
</div>
</div>
<svg class=cancel onclick='cancel5()' style='margin-left:200px;' xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#CAAFA7" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/></svg>
</div>
<hr>
`
total=total1+total2+total3+total4+total5+total6+total7+total8+total9
console.log(total)
totalprice.innerHTML=' $'+total
   }
       
       
    }
   
     addthumbnail5()
 }

 function minusobject5(){
    counting5=[count,count2,count3,count4,count5,count6,count7,count8,count9]
     console.log(counting5)
        const foodItem5={
        name:names[4].textContent,
counts:count5-1,
price:price[4].textContent,
        total:(price[4].textContent)*(count5-1)
    
    }
    array5.push(foodItem5)
       console.log(array5.at(-1))
total_5()
        function addthumbnail5(){
  
 if(add[4].style.backgroundColor==='brown'){
            console.log(price[4].innerHTML)


thumb[4].innerHTML=`
<div class='canceldiv'>
<div class='sidefood'>
<div class='foodname'>${foodItem5.name}</div>
<div class='tags'>
<h4 class='brown'>x${foodItem5.counts}</h4>
<h4 class='grey'>@$${foodItem5.price}</h4>
<h4>$${foodItem5.total}</h4>
</div>
</div>
<svg class=cancel onclick='cancel5()' style='margin-left:200px;' xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#CAAFA7" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/></svg>
</div>
<hr>
`
total=total1+total2+total3+total4+total5+total6+total7+total8+total9
console.log(total)
totalprice.innerHTML=' $'+total
   }
       
       
    }
   
     addthumbnail5()
 }

 function addobject6(){
    counting6=[count,count2,count3,count4,count5,count6,count7,count8,count9]
     console.log(counting6)
        const foodItem6={
        name:names[5].textContent,
counts:count6+1,
        price:price[5].textContent,
    total:(price[5].textContent)*(count6+1)
    }
    array6.push(foodItem6)
       console.log(array6.at(-1))
total_6()
        function addthumbnail6(){
  
 if(add[5].style.backgroundColor==='brown'){
            console.log(price[5].innerHTML)


thumb[5].innerHTML=`
<div class='canceldiv'>
<div class='sidefood'>
<div class='foodname'>${foodItem6.name}</div>
<div class='tags'>
<h4 class='brown'>x${foodItem6.counts}</h4>
<h4 class='grey'>@$${foodItem6.price}</h4>
<h4>$${foodItem6.total}</h4>
</div>
</div>
<svg class=cancel onclick='cancel6()' style='margin-left:180px;' xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#CAAFA7" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/></svg>
</div>
<hr>
`
total=total1+total2+total3+total4+total5+total6+total7+total8+total9
console.log(total)
totalprice.innerHTML=' $'+total
   }
       
       
    }
   
     addthumbnail6()
 }

 function minusobject6(){
    counting6=[count,count2,count3,count4,count5,count6,count7,count8,count9]
     console.log(counting6)
        const foodItem6={
        name:names[5].textContent,
counts:count6-1,
price:price[5].textContent,
        total:(price[5].textContent)*(count6-1)
    
    }
    array6.push(foodItem6)
       console.log(array6.at(-1))
total_6()
        function addthumbnail6(){
  
 if(add[5].style.backgroundColor==='brown'){
            console.log(price[5].innerHTML)


thumb[5].innerHTML=`
<div class='canceldiv'>
<div class='sidefood'>
<div class='foodname'>${foodItem6.name}</div>
<div class='tags'>
<h4 class='brown'>x${foodItem6.counts}</h4>
<h4 class='grey'>@$${foodItem6.price}</h4>
<h4>$${foodItem6.total}</h4>
</div>
</div>
<svg class=cancel onclick='cancel6()' style='margin-left:180px;' xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#CAAFA7" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/></svg>
</div>
<hr>
`
total=total1+total2+total3+total4+total5+total6+total7+total8+total9
console.log(total)
totalprice.innerHTML=' $'+total
   }
       
       
    }
   
     addthumbnail6()
 }

 function addobject7(){
    counting7=[count,count2,count3,count4,count5,count6,count7,count8,count9]
     console.log(counting7)
        const foodItem7={
        name:names[6].textContent,
counts:count7+1,
        price:price[6].textContent,
    total:(price[6].textContent)*(count7+1)
    }
    array7.push(foodItem7)
       console.log(array7.at(-1))
total_7()
        function addthumbnail7(){
  
 if(add[6].style.backgroundColor==='brown'){
            console.log(price[6].innerHTML)


thumb[6].innerHTML=`
<div class='canceldiv'>
<div class='sidefood'>
<div class='foodname'>${foodItem7.name}</div>
<div class='tags'>
<h4 class='brown'>x${foodItem7.counts}</h4>
<h4 class='grey'>@$${foodItem7.price}</h4>
<h4>$${foodItem7.total}</h4>
</div>
</div>
<svg class=cancel onclick='cancel7()' style='margin-left:205px;' xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#CAAFA7" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/></svg>
</div>
<hr>
`
total=total1+total2+total3+total4+total5+total6+total7+total8+total9
console.log(total)
totalprice.innerHTML=' $'+total
   }
       
       
    }
   
     addthumbnail7()
 }

function minusobject7(){
    counting7=[count,count2,count3,count4,count5,count6,count7,count8,count9]
     console.log(counting7)
        const foodItem7={
        name:names[6].textContent,
counts:count7-1,
price:price[6].textContent,
total:(price[6].textContent)*(count7-1)
        
    
    }
    array7.push(foodItem7)
       console.log(array7.at(-1))
total_7()
        function addthumbnail7(){
  
 if(add[6].style.backgroundColor==='brown'){
            console.log(price[6].innerHTML)


thumb[6].innerHTML=`
<div class='canceldiv'>
<div class='sidefood'>
<div class='foodname'>${foodItem7.name}</div>
<div class='tags'>
<h4 class='brown'>x${foodItem7.counts}</h4>
<h4 class='grey'>@$${foodItem7.price}</h4>
<h4>$${foodItem7.total}</h4>
</div>
</div>
<svg class=cancel onclick='cancel7()' style='margin-left:205px;' xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#CAAFA7" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/></svg>
</div>
<hr>
`
total=total1+total2+total3+total4+total5+total6+total7+total8+total9
console.log(total)
totalprice.innerHTML=' $'+total
   }
       
       
    }
   
     addthumbnail7()
 }

 function addobject8(){
    counting8=[count,count2,count3,count4,count5,count6,count7,count8,count9]
     console.log(counting8)
        const foodItem8={
        name:names[7].textContent,
counts:count8+1,
        price:price[7].textContent,
        total:(price[7].textContent)*(count8+1)
    
    }
    array8.push(foodItem8)
       console.log(array8.at(-1))
total_8()
        function addthumbnail8(){
  
 if(add[7].style.backgroundColor==='brown'){
            console.log(price[7].innerHTML)


thumb[7].innerHTML=`
<div class='canceldiv'>
<div class='sidefood'>
<div class='foodname'>${foodItem8.name}</div>
<div class='tags'>
<h4 class='brown'>x${foodItem8.counts}</h4>
<h4 class='grey'>@$${foodItem8.price}</h4>
<h4>$${foodItem8.total}</h4>
</div>
</div>
<svg class=cancel onclick='cancel8()' style='margin-left:160px;' xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#CAAFA7" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/></svg>
</div>
<hr>
`
total=total1+total2+total3+total4+total5+total6+total7+total8+total9
console.log(total)
totalprice.innerHTML=' $'+total
   }
       
       
    }
   
     addthumbnail8()
 }
 function minusobject8(){
    counting8=[count,count2,count3,count4,count5,count6,count7,count8,count9]
     console.log(counting8)
        const foodItem8={
        name:names[7].textContent,
counts:count8-1,
price:price[7].textContent,
        total:(price[7].textContent)*(count8-1)
    
    }
    array8.push(foodItem8)
       console.log(array8.at(-1))
total_8()
        function addthumbnail8(){
  
 if(add[7].style.backgroundColor==='brown'){
            console.log(price[7].innerHTML)


thumb[7].innerHTML=`
<div class='canceldiv'>
<div class='sidefood'>
<div class='foodname'>${foodItem8.name}</div>
<div class='tags'>
<h4 class='brown'>x${foodItem8.counts}</h4>
<h4 class='grey'>@$${foodItem8.price}</h4>
<h4>$${foodItem8.total}</h4>
</div>
</div>
<svg class=cancel onclick='cancel8()' style='margin-left:160px;' xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#CAAFA7" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/></svg>
</div>
<hr>
`
total=total1+total2+total3+total4+total5+total6+total7+total8+total9
console.log(total)
totalprice.innerHTML=' $'+total
   }
       
       
    }
   
     addthumbnail8()
 }

 function addobject9(){
    counting9=[count,count2,count3,count4,count5,count6,count7,count8,count9]
     console.log(counting9)
        const foodItem9={
        name:names[8].textContent,
counts:count9+1,
        price:price[8].textContent,
        total:(price[8].textContent)*(count9+1)
    
    }
    array9.push(foodItem9)
       console.log(array9.at(-1))
total_9()
        function addthumbnail9(){
  
 if(add[8].style.backgroundColor==='brown'){
            console.log(price[8].innerHTML)


thumb[8].innerHTML=`
<div class='canceldiv'>
<div class='sidefood'>
<div class='foodname'>${foodItem9.name}</div>
<div class='tags'>
<h4 class='brown'>x${foodItem9.counts}</h4>
<h4 class='grey'>@$${foodItem9.price}</h4>
<h4>$${foodItem9.total}</h4>
</div>
</div>
<svg class=cancel onclick='cancel9()' style='margin-left:190px;' xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#CAAFA7" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/></svg>
</div>
<hr>
`
total=total1+total2+total3+total4+total5+total6+total7+total8+total9
console.log(total)
totalprice.innerHTML=' $'+total
   }
       
       
    }
   
     addthumbnail9()
 }
 console.log(count9)

 function minusobject9(){
    counting9=[count,count2,count3,count4,count5,count6,count7,count8,count9]
     console.log(counting9)
        const foodItem9={
        name:names[8].textContent,
counts:count9-1,
price:price[8].textContent,
        total:(price[8].textContent)*(count9-1)
    
    }

    array9.push(foodItem9)
       console.log(array9.at(-1))
total_9()
          function addthumbnail9(){
  
 if(add[8].style.backgroundColor==='brown'){
            console.log(price[8].innerHTML)


thumb[8].innerHTML=`
<div class='canceldiv'>
<div class='sidefood'>
<div class='foodname'>${foodItem9.name}</div>
<div class='tags'>
<h4 class='brown'>x${foodItem9.counts}</h4>
<h4 class='grey'>@$${foodItem9.price}</h4>
<h4>$${foodItem9.total}</h4>
</div>
</div>
<svg class=cancel onclick='cancel9()' style='margin-left:190px;' xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#CAAFA7" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/></svg>
</div>
<hr>
`

total=total1+total2+total3+total4+total5+total6+total7+total8+total9
console.log(total)
totalprice.innerHTML=' $'+total
   }
       
       
    }
   
     addthumbnail9()
 }

function addToCart1(){
brownize1()

 addobject()

count += 1
counter[0].innerHTML = count
console.log(count)
console.log(counter)
console.log(counter[0].innerHTML)
sum=count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9
cartsum.innerHTML=`Your Cart(${sum})`



}
function addToCart2(){
brownize2()
counting=[count,count2,count3,count4,count5,count6,count7,count8,count9]
 addobject2()
 console.log(counting)
count2 += 1
counter[1].innerHTML = count2
console.log(count2)
console.log(counter)
console.log(counter[1].innerHTML)
 sum=count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9
 cartsum.innerHTML=`Your Cart(${sum})`
}
function addToCart3(){
brownize3()
counting=[count,count2,count3,count4,count5,count6,count7,count8,count9]
 addobject3()
 console.log(counting)
count3 += 1
counter[2].innerHTML = count3
console.log(count3)
console.log(counter)
console.log(counter[2].innerHTML)
 sum=count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9
 cartsum.innerHTML=`Your Cart(${sum})`
}
function addToCart4(){
brownize4()
counting=[count,count2,count3,count4,count5,count6,count7,count8,count9]
 addobject4()
 console.log(counting)
count4 += 1
counter[3].innerHTML = count4
console.log(count4)
console.log(counter)
console.log(counter[3].innerHTML)
sum=count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9
cartsum.innerHTML=`Your Cart(${sum})`
}
function addToCart5(){
brownize5()
counting=[count,count2,count3,count4,count5,count6,count7,count8,count9]
 addobject5()
 console.log(counting)
count5 += 1
counter[4].innerHTML = count5
console.log(count5)
console.log(counter)
console.log(counter[4].innerHTML)
sum=count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9
cartsum.innerHTML=`Your Cart(${sum})`
}
function addToCart6(){
brownize6()
counting=[count,count2,count3,count4,count5,count6,count7,count8,count9]
 addobject6()
 console.log(counting)
count6 += 1
counter[5].innerHTML = count6
console.log(count6)
console.log(counter)
console.log(counter[5].innerHTML)
sum=count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9
cartsum.innerHTML=`Your Cart(${sum})`
}
function addToCart7(){
brownize7()
counting=[count,count2,count3,count4,count5,count6,count7,count8,count9]
 addobject7()
 console.log(counting)
count7 += 1
counter[6].innerHTML = count7
console.log(count7)
console.log(counter)
console.log(counter[6].innerHTML)
sum=count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9
cartsum.innerHTML=`Your Cart(${sum})`
}
function addToCart8(){
brownize8()
counting=[count,count2,count3,count4,count5,count6,count7,count8,count9]
 addobject8()
 console.log(counting)
count8 += 1
counter[7].innerHTML = count8
console.log(count8)
console.log(counter)
console.log(counter[7].innerHTML)
 sum=count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9
 cartsum.innerHTML=`Your Cart(${sum})`
}
function addToCart9(){
brownize9()
counting=[count,count2,count3,count4,count5,count6,count7,count8,count9]
 addobject9()
 console.log(counting)
count9 += 1
counter[8].innerHTML = count9
console.log(count9)
console.log(counter)
console.log(counter[8].innerHTML)
sum=count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9
cartsum.innerHTML=`Your Cart(${sum})`
}

function removeItem1(){
    if(count > 0){
        brownize1()
        counting=[count,count2,count3,count4,count5,count6,count7,count8,count9]
minusobject()
 console.log(counting)
 
    count -= 1
    counter[0].innerHTML=count
    console.log(count)
console.log(counter)
console.log(counter[0].innerHTML)
sum=count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9
cartsum.innerHTML=`Your Cart(${sum})`
    }else{
        alert('Item quantity at minimum number')
    }
}
function removeItem2(){
    if(count2 > 0){
        brownize2()
        counting=[count,count2,count3,count4,count5,count6,count7,count8,count9]
minusobject2()
 console.log(counting)
    count2 -= 1
    counter[1].innerHTML=count2
    console.log(count2)
console.log(counter)
console.log(counter[1].innerHTML)
sum=count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9
cartsum.innerHTML=`Your Cart(${sum})`
    }else{
        alert('Item quantity at minimum number')
    }
}
function removeItem3(){
    if(count3 > 0){
        brownize3()
        counting=[count,count2,count3,count4,count5,count6,count7,count8,count9]
minusobject3()
 console.log(counting)
    count3 -= 1
    counter[2].innerHTML=count3
    console.log(count3)
console.log(counter)
console.log(counter[2].innerHTML)
sum=count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9
cartsum.innerHTML=`Your Cart(${sum})`
    }else{
        alert('Item quantity at minimum number')
    }
}
function removeItem4(){
    if(count4 > 0){
        brownize1()
        counting=[count,count2,count3,count4,count5,count6,count7,count8,count9]
 minusobject4()
 console.log(counting)
    count4 -= 1
    counter[3].innerHTML=count4
    console.log(count4)
console.log(counter)
console.log(counter[3].innerHTML)
sum=count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9
cartsum.innerHTML=`Your Cart(${sum})`
    }else{
        alert('Item quantity at minimum number')
    }
}
function removeItem5(){
    if(count5 > 0){
        brownize5()
        counting=[count,count2,count3,count4,count5,count6,count7,count8,count9]
minusobject5()
 console.log(counting)
    count5 -= 1
    counter[4].innerHTML=count
    console.log(count5)
console.log(counter)
console.log(counter[4].innerHTML)
sum=count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9
cartsum.innerHTML=`Your Cart(${sum})`
    }else{
        alert('Item quantity at minimum number')
    }
}
function removeItem6(){
    if(count6 > 0){
        brownize6()
        counting=[count,count2,count3,count4,count5,count6,count7,count8,count9]
minusobject6()
 console.log(counting)
    count6 -= 1
    counter[5].innerHTML=count
    console.log(count6)
console.log(counter)
console.log(counter[5].innerHTML)
sum=count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9
cartsum.innerHTML=`Your Cart(${sum})`
    }else{
        alert('Item quantity at minimum number')
    }
}
function removeItem7(){
    if(count7 > 0){
        brownize7()
        counting=[count,count2,count3,count4,count5,count6,count7,count8,count9]
minusobject7()
 console.log(counting)
    count7 -= 1
    counter[6].innerHTML=count9
    console.log(count7)
console.log(counter)
console.log(counter[6].innerHTML)
sum=count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9
cartsum.innerHTML=`Your Cart(${sum})`
    }else{
        alert('Item quantity at minimum number')
    }
}
function removeItem8(){
    if(count8 > 0){
        brownize8()
        counting=[count,count2,count3,count4,count5,count6,count7,count8,count9]
minusobject8()
 console.log(counting)
    count8 -= 1
    counter[7].innerHTML=count9
    console.log(count8)
console.log(counter)
console.log(counter[7].innerHTML)
sum=count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9
cartsum.innerHTML=`Your Cart(${sum})`
    }else{
        alert('Item quantity at minimum number')
    }
}
function removeItem9(){
    if(count9 > 0){
        brownize9()
        counting=[count,count2,count3,count4,count5,count6,count7,count8,count9]
minusobject9()
 console.log(counting)
    count9 -= 1
    counter[8].innerHTML=count9
    console.log(count9)
console.log(counter)
console.log(counter[8].innerHTML)
sum=count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9
cartsum.innerHTML=`Your Cart(${sum})`
    }else{
        alert('Item quantity at minimum number')
    }
}
  
function total_1(){
    total1= array.at(-1).total
    console.log(total1)
 
}
function total_2(){
   total2= array2.at(-1).total
    console.log(total2)
    
}
function total_3(){
   total3= array3.at(-1).total
    console.log(total3)
    
}
function total_4(){
   total4= array4.at(-1).total
    console.log(total4)
    
}
function total_5(){
   total5= array5.at(-1).total
    console.log(total5)
    
}
function total_6(){
   total6= array6.at(-1).total
    console.log(total6)
    
}
function total_7(){
   total7 = array7.at(-1).total
    console.log(total7)
    
}
function total_8(){
   total8= array8.at(-1).total
    console.log(total8)
    
}
function total_9(){
   total9 = array9.at(-1).total
    console.log(total9)
    
}
