

// project 
let title =document.getElementById("title")
let price =document.getElementById("price")
let taxes =document.getElementById("taxes")
let ads =document.getElementById("ads")
let discount =document.getElementById("discount")
let count =document.getElementById("count")
let category =document.getElementById("category")
let totale =document.getElementById("totale")
let great =document.getElementById("great")
let moood ="greate"
let ix ;
let icon =document.getElementById("icon1")
let icon2 =document.getElementById("icon2")

// get totale
function gettotale(){

    if(price.value != ""){
let ruselt =Number (price.value) +  Number(taxes.value)  +  Number( ads.value)  - discount.value
totale.innerHTML=ruselt;
totale.style.background="red"
    }
    else{
        totale.innerHTML=""
        totale.style.background="rgb(59, 132, 26)"
    }
   
  
    
}
//create product
let data ;
if( localStorage.product != null ){
    data = JSON.parse(localStorage.product)

}
else{
    data =[];
}

great.onclick =function(){ 
    dataobj ={
        title:title.value,
        price:price.value,
        ads:ads.value,
        discount:discount.value,
        count:count.value,
        taxes: taxes.value,
        category:category.value,
        totale:totale.innerHTML,
    }


if( title.value!="" && category.value != "" && price.value!=""  && count.value<100){
    if(moood ==="greate"){
        if(dataobj.count>1){
            for(e =0;e<dataobj.count;e++)
                data.push(dataobj)
            }
            else{
                data.push(dataobj)
            


    }
    
    }
    else {
        
data[ix]=dataobj;
count.style.display="block"
great.innerHTML="great"
totale.style.backgroundColor="rgb(59, 132, 26)"
moood ="greate"

    }
    cleardata()
}


    //local stogage
    localStorage.setItem("product",JSON.stringify(data)  )
    // cleardata()
    showdata()
}




    




//  clear data
function cleardata (){
    title.value="";
    price.value=""
    ads.value=""
    taxes.value=""
    discount.value=""
    count.value=""
    category.value=""
totale.innerHTML=""

}

// read data
function showdata(){
     let table2 ="";
for(x =1; x<data.length ;x++   ){
table2 +=`<tr>
<td>${x}</td>
<td>${data[x].title}</td>
<td>${data[x].price}</td>
<td>${data[x].ads}</td>
<td>${data[x].discount}</td>
<td>${data[x].totale}</td>
<td>${data[x].category}</td>
<td><button id="update"   onclick="  updatee(${x}) "         >update</button></td>
<td><button  onclick="  deletdata(${x}) "  id="delete">delete</button></td>
</tr> `

}







     document.getElementById("tbody").innerHTML=table2
   
}
showdata()


// delete 1
function  deletdata(x){

data.splice(x,1)
localStorage.product = JSON.stringify(data)
showdata()
}



let deletalll =document.getElementById("delett")
// delet all
 function deletall(){
    
    alert("Do you complete")
   
    data.splice(0,data.length)
localStorage.product = JSON.stringify(data)


   

 


showdata()

}


// count
// update 

 function   updatee(x){
title.value=data[x].title
ads.value=data[x].ads
category.value=data[x].category
taxes.value=data[x].taxes
price.value=data[x].price
discount.value=data[x].discount
count.style.display="none"
great.innerHTML="update"
moood="update"
ix = x;
scroll({
    top: 0,
    behavior:"smooth"

})
gettotale()
 }

// search daata
 let   serchmde = "title"

function serchmode(id){
    let search=document.getElementById("search")
    if(id =="serchbytitle" ){
       
        serchmde = "title"
        search.placeholder= "search by title"
        
    }
    else{
        serchmde = "category"
        search.placeholder= "search by category"
        
    }
    search.focus()
search.value=""
}


function sechdata(value){
    let table2 ="";
if(serchmde=="title"){
    for(v =0; v< data.length; v++  ){
        if( data[v].title.toLowerCase().includes(value.toLowerCase())){
            table2 +=`<tr>
            <td>${v}</td>
            <td>${data[v].title}</td>
            <td>${data[v].price}</td>
            <td>${data[v].ads}</td>
            <td>${data[v].discount}</td>
            <td>${data[v].totale}</td>
            <td>${data[v].category}</td>
            <td><button id="update"   onclick="  updatee(${v}) "         >update</button></td>
            <td><button  onclick="  deletdata(${v}) "  id="delete">delete</button></td>
            </tr> `
        }
        
        }

}

else{
    for(v =0; v< data.length; v++  ){
        if( data[v].category.toLowerCase().includes(value.toLowerCase())){
            table2 +=`<tr>
            <td>${v}</td>
            <td>${data[v].title}</td>
            <td>${data[v].price}</td>
            <td>${data[v].ads}</td>
            <td>${data[v].discount}</td>
            <td>${data[v].totale}</td>
            <td>${data[v].category}</td>
            <td><button id="update"   onclick="  updatee(${v}) "         >update</button></td>
            <td><button  onclick="  deletdata(${v}) "  id="delete">delete</button></td>
            </tr> `
        }
        
        }
}


document.getElementById("tbody").innerHTML=table2

}
 function clik (){
document.body.classList.add("dark")
icon.style.display="none"
icon2.style.display="block"
icon2.style.color="black"

}
function cclik(){
    document.body.classList.remove("dark")
icon2.style.display="none"

icon.style.display="block"
}















