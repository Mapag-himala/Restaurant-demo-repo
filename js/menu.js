const sliderControls = document.querySelector('.slider-controls');
const sliderContainer = document.querySelector('.slider-container');
const allBox = sliderContainer.children;
const sliderContainerWidth = sliderContainer.offsetWidth;
const margin = 30;
var items = 0;
var totalItems = 0;
var jumpSlideWidth = 0;

// item setup per slide //

responsive = [
    {breakPoint: {width: 0, item: 1}},
    {breakPoint: {width: 600, item: 2}},
    {breakPoint: {width: 1000, item: 4}}
  ]
  
  function load(){
    for(let i= 0; i < responsive.length; i++) {
      if(window.innerWidth > responsive[i].breakPoint.width) {
        items = responsive[i].breakPoint.item
      }
      
    }
    start();
  }
  
  function start() {
      var totalItemsWidth = 0;
    for(let i= 0; i < allBox.length; i++) {
        // width and margin setup of items //
      allBox[i].style.width= (sliderContainerWidth/items) - margin + "px";
      allBox[i].style.margin= (margin/2) + "px";
      totalItemsWidth += sliderContainerWidth/items;
      totalItems++;
    }
    // thumbnail-container width set up //
    sliderContainer.style.width= totalItemsWidth + "px";
    // slider control set up //
    var allSlides = Math.ceil(totalItems/items);
    const ul = document.createElement('ul');
      for(let i= 1; i <= allSlides; i++) {
        const li= document.createElement('li');
        li.id= i;
        li.innerHTML= i;
        li.setAttribute('onclick', 'controlSlides(this)');
        ul.appendChild(li);
        if(i == 1) {
          li.className = "active";
        }
      }
      sliderControls.appendChild(ul);
  }
    // on-click numbers slide to next slide //
  function controlSlides(ele) {
    // select controls 'ul' element //
    const ul= sliderControls.children;
    // select ul children 'li' //
    const li= ul[0].children;
    
    var active;
    
    for(let i= 0; i < li.length; i++) {
      if(li[i].className == "active") {
        // find who is now active //
        active = i;
        // remove active class from all 'li' elements //
        li[i].className= "";
      }
    }
    // add active class //
    ele.className = "active";
    
    var num= (ele.id-1)-active;
    jumpSlideWidth= jumpSlideWidth + (sliderContainerWidth * num);
    sliderContainer.style.marginLeft=- jumpSlideWidth + "px";
  }
  
  window.onload= load()

  // menu button function //
  
  const mainsBtn = document.getElementById('mains-Btn');
  const lunchBtn = document.getElementById('lunch-Btn');
  const dinnerBtn = document.getElementById('dinner-Btn');
  const drinksBtn = document.getElementById('drinks-Btn');

  const mainsMenu = document.getElementById('mains__item1');
  const lunchMenu = document.getElementById('lunch__item2');
  const dinnerMenu = document.getElementById('dinner__item3');
  const drinksMenu = document.getElementById('drinks__item4');

mainsBtn.addEventListener('click', () => {
  mainsMenu.classList.add('menu-active');
if (mainsMenu.classList.contains('menu-active')) {
    mainsMenu.classList.add('menu-active');
    lunchMenu.classList.remove('menu-active');
    dinnerMenu.classList.remove('menu-active');
    drinksMenu.classList.remove('menu-active');
}
});

lunchBtn.addEventListener('click', () => {
  lunchMenu.classList.add('menu-active');
if (lunchMenu.classList.contains('menu-active')) {
    lunchMenu.classList.add('menu-active');
    mainsMenu.classList.remove('menu-active');
    dinnerMenu.classList.remove('menu-active');
    drinksMenu.classList.remove('menu-active');
}
});
dinnerBtn.addEventListener('click', () => {
  dinnerMenu.classList.add('menu-active');
if (dinnerMenu.classList.contains('menu-active')) {
    dinnerMenu.classList.add('menu-active');
    mainsMenu.classList.remove('menu-active');
    lunchMenu.classList.remove('menu-active');
    drinksMenu.classList.remove('menu-active');
}
});

drinksBtn.addEventListener('click', () => {
  drinksMenu.classList.add('menu-active');
if (drinksMenu.classList.contains('menu-active')) {
    drinksMenu.classList.add('menu-active');
    mainsMenu.classList.remove('menu-active');
    lunchMenu.classList.remove('menu-active');
    dinnerMenu.classList.remove('menu-active');
}
});


