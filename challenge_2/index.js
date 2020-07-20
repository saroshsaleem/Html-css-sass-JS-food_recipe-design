const gridPic=document.getElementById("dp");
const food_items = [
    {
      title: "Veggie mixup",
      url:
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      rating: 4.3,
      user_rated_by: 127,
      owner: "Ella Olsson",
    },
    {
      title: " Seafood Pizza",
      url:
        "https://images.pexels.com/photos/365459/pexels-photo-365459.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      rating: 3.1,
      user_rated_by: 2,
      owner: "Brunette Mrisei",
    },
    {
      title: "samshi",
      url:
        "https://images.pexels.com/photos/628776/pexels-photo-628776.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      rating: 4.5,
      user_rated_by: 486,
      owner: "Shim Xe Lion",
    },
    {
      title: "Mac Big Bug",
      url:
        "https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      rating: 5.0,
      user_rated_by: 1638,
      owner: "McDonald",
    },
    {
      title: "Sea Star",
      url:
        "https://images.pexels.com/photos/3655916/pexels-photo-3655916.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      rating: 4.1,
      user_rated_by: 32,
      owner: "Sham Lin",
    },
    {
      title: "Spaghetti al Sugo",
      url:
        "https://images.pexels.com/photos/4057754/pexels-photo-4057754.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      rating: 4.7,
      user_rated_by: 757,
      owner: "Andrea Marotti",
    },
    {
      title: "Fruits Chop",
      url:
        "https://images.pexels.com/photos/793759/pexels-photo-793759.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      rating: 2.1,
      user_rated_by: 3465,
      owner: "Anlin Meron",
    },
    {
      title: "fruit Chuk",
      url:
        "https://images.pexels.com/photos/709823/pexels-photo-709823.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      rating: 4.3,
      user_rated_by: 54,
      owner: "San Marion",
    },
    {
      title: "Shahi Tikka",
      url:
        "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      rating: 5.0,
      user_rated_by: 6546,
      owner: "Sapinder Singh",
    },
    {
      title: "Xiam Ching",
      url:
        "https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      rating: 1.5,
      user_rated_by: 35,
      owner: "Eon Lir",
    },
    {
      title: "Black Bun",
      url:
        "https://images.pexels.com/photos/1199960/pexels-photo-1199960.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      rating: 4.5,
      user_rated_by: 46,
      owner: "McDonald",
    },
    {
      title: "Red Fried",
      url:
        "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      rating: 5.0,
      user_rated_by: 4.6,
      owner: "Donald Trump",
    },
  ];
  function addingPic(food_items){
    var grid="";
    for(var i=0;i<food_items.length;i++){
        grid+=`<div  class="p">
                <img src=${food_items[i].url}>
                <div class="para1">${food_items[i].title}</div>
                <div class="para2"><p>${food_items[i].rating} (${food_items[i].user_rated_by})</p>
                <p>${food_items[i].owner}</p></div><div class="orderBtn">
                <button>Order Now </button>
                </div></div>`;
    }
    gridPic.innerHTML=grid;
  }
  var check=true;
  var b1=document.getElementById("b1");
  var popUp=document.getElementById("popUp");
  var container=document.getElementById("container");
  var search=document.getElementById("search");
  var crossBtn= document.getElementById("close");
  var option1=document.getElementById("o1");
  var option2=document.getElementById("o2");
  function clickZeroBtn(){
    b1.addEventListener("click",function(){  
        if(check===true){
            check=false;
            popUp.classList.toggle("popUp");
        }
        else{
        check=true;
        }
    });
  }

  function getClose(){
      crossBtn.addEventListener("click",function(){
          popUp.classList.remove("popUp");
      });
  }
  function searching(items){
    search.addEventListener("change",function(e){
      var val=e.target.value;
      var searchFood=items.filter(function(name){
      return name.title.toLowerCase().includes(val);
      });
     var searchValues="";
     for(var i=0;i<searchFood.length;i++){
        searchValues+=`<div  class="p">
                <img src=${searchFood[i].url}>
                <div class="para1">${searchFood[i].title}</div>
                <div class="para2"><p>${searchFood[i].rating} (${searchFood[i].user_rated_by})</p>
                <p>${searchFood[i].owner}</p></div><div class="orderBtn">
                <button>Order Now </button>
                </div></div>`;
    }
    gridPic.innerHTML=searchValues;
    });
  }
  function sortingA(){
      var sortA="";
      option1.addEventListener("click",function(){
        for(var i=0;i<food_items.length;i++){
            sortA+=`<div  class="p">
                    <img src=${food_items[i].url}>
                    <div class="para1">${food_items[i].title}</div>
                    <div class="para2"><p>${food_items[i].rating} (${food_items[i].user_rated_by})</p>
                    <p>${food_items[i].owner}</p></div><div class="orderBtn">
                    <button>Order Now </button>
                    </div></div>`;
                }
                sortA.sort();
                gridPic.innerHTML=sortA;
      });
    
  }
  function sortingB(){
      var sortB="";
    option2.addEventListener("click",function(){
        for(var i=0;i<food_items.length;i++){
            sortB+=`<div  class="p">
                    <img src=${food_items[i].url}>
                    <div class="para1">${food_items[i].title}</div>
                    <div class="para2"><p>${food_items[i].rating} (${food_items[i].user_rated_by})</p>
                    <p>${food_items[i].owner}</p></div><div class="orderBtn">
                    <button>Order Now </button>
                    </div></div>`;               
        }
        sortB.sort().reverse();
        gridPic.innerHTML=sortB; 
    });
}
  getClose();
  clickZeroBtn();
  addingPic(food_items);
  searching(food_items);
  sortingA();
  sortingB();


  