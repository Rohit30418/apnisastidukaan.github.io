let Wishlistin=document.querySelector(".Wishlistin");
let Cartin=document.querySelector(".Cartin");
let Cartin1=document.querySelector(".Cartin1");
let nav=document.querySelector("nav");
let wcont=0;
let shoppingcont=0;
let body=document.querySelector("body");
let mycart=document.querySelector(".mycart")
let productbtns=document.querySelectorAll(".productbtn");
let modal=document.querySelector(".modal-body");
let preloader=document.querySelector(".preloader");
let allcontent=document.querySelector(".allcontent")

window.onload=function() {
    preloader.style.display='none';
    allcontent.style.display="block";
}

function shownav() {
    nav.classList.add("show");
    body.classList.add("show");
    
}
function hide(){
    nav.classList.remove("show");
    body.classList.remove("show");
}

function showcart(){
    mycart.classList.add("show");
    body.classList.add("showcart");
}

function closecart() {
    mycart.classList.remove("show");
    body.classList.remove("showcart");
}
 
function Wishlist(){
     wcont++;
     Wishlistin.innerHTML=wcont;
     Wishlistin.classList.add("show");
    
}

function addcart(e) {
    shoppingcont++;
    Cartin.innerHTML=shoppingcont;
    Cartin1.innerHTML=shoppingcont;
    Cartin.classList.add("show");
    Cartin1.classList.add("show");
    let dataid=e.dataset.id; 
    console.log(dataid); 
    if(dataid=="itm1"){
        addtocart("img/product-3.jpg");  
    }else if(dataid=="itm2"){
        addtocart("img/12.jpg" );  
    }else if(dataid=="itm3"){
       addtocart("img/product-4.jpg" );  
    }else if(dataid=="itm4"){
       addtocart("img/15.jpg" );  
    }else if(dataid=="itm5"){
        addtocart("img/s1.png" );  
    }
  
}

let cartproitm=[];
function addtocart(cartproduct) {
    let cartpro=`<section class="my-3">
    <div class="container  border border-dark">
        <div class=" row">
            <div class="product col-md-6 col-12 row d-flex align-items-center ">
                <div class="col-md-6 col-12 my-3">
                    <img class="img-fluid" src="${cartproduct}" alt="">
                </div>

                <div class="col-md-6 col-12">
                    <p>lorem</p>
                    <p>12000 <s class="text-danger">20,000</s></p>
                    <button class=" btn  border">Save for later</button>
                    <button class="btn border">Remove</button>
                </div>
            </div>
            <div class="summary col-md-6 col-12 p-2 my-3">
                <button class="btn form-control bg-dark text-white">checkout</button>
                <p class="text-center py-2">By placing your order,you agree to the Delivery Terms </p>
                <h4 class="font-weight-bold">Order Summary</h4>

                <div class="m-2 bg-light">
                    <p>1 product</p>
                    <p>Product total=12000</p>
                    <p>Delivery=free</p>
                    <p class="font-weight-bold">Total=12000</p>
                    <button class="btn bg-danger text-white form-control">Place-order</button>
                </div>
            </div>
        </div>

    </div>
</section>`;
   
      
        
    cartproitm.push(cartpro);
    console.log(cartproitm);
    localStorage.setItem('cartitms',JSON.stringify(cartproitm));
    
    
}


let shopcatagorycontainer=document.querySelector(".shop-catagorycontainer");
let allbtn=document.querySelectorAll(".btn");
allbtn.forEach(function(e){
e.addEventListener("click",function(itmcate){
shopcatagorycontainer.style.display="block";
let dta=itmcate.currentTarget.dataset;
console.log(dta);
let menucategory=allcatagory.filter(function(cdata){
   if(cdata.catagory==dta.id){
     return cdata;
     }
    });
   dataload(menucategory);
   
   
   });
})






let allcatagory=[
    {
    h1:"Clothes",
    h2:"Man",
    catagory:"man",
    all:"all",
    img:"img/clothes/man/a3.jpg"
},
{
    h1:"Clothes",
    h2:"Man",
    all:"all",
    catagory:"man",
    img:"img/clothes/man/a6.jpg"
},

{
    h1:"Clothes",
    h2:"Woman",
    catagory:"woman",
    all:"all",
    img:"img/clothes/woman/1.jpg"
},

{
    h1:"Clothes",
    h2:"Woman",
    catagory:"woman",
    all:"all",
    img:"img/clothes/woman/2.jpg"
},

{
    h1:"Clothes",
    h2:"Man",
    catagory:"man",
    all:"all",
    img:"img/clothes/man/p1.png"
},

{
    h1:"Clothes",
    h2:"Kids",
    catagory:"kids",
    all:"all",
    img:"img/clothes/kids/bootstrap-kids-ware3.png"
},

{
    h1:"Clothes",
    h2:"Man",
    catagory:"man",
    all:"all",
    img:"img/clothes/man/p2.png"
},

{
    h1:"Clothes",
    h2:"Man",
    catagory:"man",
    all:"all",
    img:"img/clothes/man/5.jpg"
},

{
    h1:"Clothes",
    h2:"woman",
    catagory:"woman",
    all:"all",
    img:"img/clothes/woman/3.jpg"
},

{
    h1:"Clothes",
    h2:"Kids",
    catagory:"kids",
    all:"all",
    img:"img/clothes/kids/bootstrap-kids-ware4.png"
},

{
    h1:"Clothes",
    h2:"Kids",
    catagory:"kids",
    all:"all",
    img:"img/clothes/kids/bootstrap-kids-ware5.png"
},

{
    h1:"Clothes",
    h2:"Man",
    catagory:"man",
    img:"img/clothes/man/5.jpg"
},



{
    h1:"Clothes",
    h2:"Man",
    catagory:"man",
    img:"img/clothes/man/7.jpg"
},

{
    h1:"Clothes",
    h2:"woman",
    catagory:"woman",
    img:"img/clothes/woman/product-b-2.jpg"
},

{
    h1:"Clothes",
    h2:"woman",
    catagory:"woman",
    img:"img/clothes/woman/product-s-2.jpg"
},

{
    h1:"mobile&tab",
    h2:"mobile&tab",
    catagory:"mobile&tab",
    img:"img/clothes/mobile&tab/8.jpg"
},

{
    h1:"mobile&tab",
    h2:"mobile&tab",
    catagory:"mobile&tab",
    img:"img/clothes/mobile&tab/9.jpg"
},

{
    h1:"mobile&tab",
    h2:"mobile&tab",
    catagory:"mobile&tab",
    img:"img/clothes/mobile&tab/10.jpg"
},

{
    h1:"mobile&tab",
    h2:"mobile&tab",
    catagory:"mobile&tab",
    img:"img/clothes/mobile&tab/12.jpg"
},

{
    h1:"mobile&tab",
    h2:"mobile&tab",
    catagory:"mobile&tab",
    img:"img/clothes/mobile&tab/product-img3.jpg"
},

{
    h1:"mobile&tab",
    h2:"mobile&tab",
    catagory:"mobile&tab",
    all:"all",
    img:"img/clothes/mobile&tab/product-img16.jpg"
},

{
    h1:"mobile&tab",
    h2:"mobile&tab",
    catagory:"mobile&tab",
    img:"img/clothes/mobile&tab/product-img4.jpg"
},

{
    h1:"mobile&tab",
    h2:"mobile&tab",
    catagory:"mobile&tab",
    all:"all",
    img:"img/clothes/mobile&tab/product-img6.jpg"
},

{
    h1:"mobile&tab",
    h2:"mobile&tab",
    catagory:"mobile&tab",
    img:"img/clothes/mobile&tab/product-img5.jpg"
},

{
    h1:"Electronics",
    h2:"Electronics",
    catagory:"Electronics",
    img:"img/clothes/Electronics/1.jpg"
},
{
    h1:"Electronics",
    h2:"Electronics",
    catagory:"Electronics",
    img:"img/clothes/Electronics/2.jpg"
},

{
    h1:"Electronics",
    h2:"Electronics",
    catagory:"Electronics",
    img:"img/clothes/Electronics/3.jpg"
},


{
    h1:"Electronics",
    h2:"Electronics",
    catagory:"Electronics",
    img:"img/clothes/Electronics/6.jpg"
},


{
    h1:"Electronics",
    h2:"Electronics",
    catagory:"Electronics",
    img:"img/clothes/Electronics/product-img2.jpg"
},

{
    h1:"Electronics",
    h2:"Electronics",
    catagory:"Electronics",
    all:"all",
    img:"img/clothes/Electronics/product-img11.jpg"
},

{
    h1:"Electronics",
    h2:"Electronics",
    catagory:"Electronics",
    all:"all",
    img:"img/clothes/Electronics/product-img8.jpg"
},


{
    h1:"Electronics",
    h2:"Electronics",
    catagory:"Electronics",
    img:"img/clothes/Electronics/product-img7.jpg"
},

{
    h1:"Jwelary",
    h2:"Jwelary",
    catagory:"Jwelary",
    all:"all",
    img:"img/clothes/Jwelary/jhumka-img.png"
},

{
    h1:"Jwelary",
    h2:"Jwelary",
    catagory:"Jwelary",
    all:"all",
    img:"img/clothes/Jwelary/kangan-img.png"
},

{
    h1:"Jwelary",
    h2:"Jwelary",
    catagory:"Jwelary",
    all:"all",
    img:"img/clothes/Jwelary/neklesh-img.png"
},


];

let shopcatagorycont=document.querySelector(".shop-catagory-cont");




function dataload(allcatagory) {
    let fulldata=allcatagory.map(function(itam){
        return `<div class="shop-catagory">
        <div class="shop-catagory-itms">
            <img src="${itam.img}" alt="">
            <div class="stars">
                <p>Lorem</p>
                <i class="fas fa-star" ></i>
                <i class="fas fa-star" ></i>
                <i class="fas fa-star" ></i>
                <i class="fas fa-star" ></i>
               <span><i class="fas fa-star" ></i></span>
               <h5 class="text-danger">Rs 12000/-</h5>
            </div>
        </div>
        
       </div>`
       });

       let shopcatagorycont1=fulldata.join("");
       shopcatagorycont.innerHTML=shopcatagorycont1;
}



for (let i = 0; i < productbtns.length; i++) {
    productbtns[i].addEventListener("click",function(e) {
      if (e.target.id=='productbtn1') {
          modal.style.transform="translate(0%)";
      }

      if (e.target.id=='productbtn2') {
        modal.style.transform="translate(-33.33%)";
    }

    if (e.target.id=='productbtn3') {
        modal.style.transform="translate(-66.66%)";
    }
    })
    
}




