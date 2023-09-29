//nav
const gnbList = document.querySelectorAll(".gnb .gnb_item");
const depList = document.querySelectorAll(".gnb .dep_list");
const gnbBg = document.querySelector(".header .gnb_bg");

for (var i = 0; i < gnbList.length; i++) {
  gnbList[i].addEventListener("mouseover", function (e) {
    gnbBg.style.height = "250px";
    e.currentTarget.classList.add("on");
    for (var i = 0; i < depList.length; i++) {
      depList[i].style.height = "250px";
    }
  })
  gnbList[i].addEventListener("mouseout", function (e) {
    gnbBg.style.height = null;
    e.currentTarget.classList.remove("on");
    for (var i = 0; i < depList.length; i++) {
      depList[i].style.height = null;
    }
  })
}

let prevScrollTop = 0;
document.addEventListener("scroll", function() {
  let nextScrollTop = window.scrollY;
  if(nextScrollTop > prevScrollTop){
    //스크롤을 내리는 중
    console.log("내리는 중")
    document.querySelector(".header").classList.add("down");
  }
  else if(nextScrollTop < prevScrollTop){
    //스크롤을 올리는 중
    console.log("올리는 중")
    document.querySelector(".header").classList.remove("down");
  }
  prevScrollTop = nextScrollTop;
})

//nav 왼쪽에 랜덤 캐릭터 나오기
const randomCha = document.querySelectorAll(".gnb_bg .inner ul li");

var interval = setInterval(function() {
  let randomNum = Math.floor(Math.random() * 4);
  for(var i = 0; i < randomCha.length; i++){
    randomCha[i].style.opacity = "0";
  }
  randomCha[randomNum].style.opacity = "1";
}, 60000);
setTimeout(function() {
  for(var i = 0; i < randomCha.length; i++) {
    randomCha[0].style.opacity = "0";
  }
}, 60000)

// mySwiper01
var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});


//hardware tab메뉴
const tabList = document.querySelectorAll(".hard_tablist li");
const imgs = document.querySelectorAll(".hard_img");
const texts = document.querySelectorAll(".hard_tab");

const imgBox = document.querySelector(".hard_imgs");
const tabs = document.querySelector(".hard_tabs");
let isOn = "";

for (var i = 0; i < tabList.length; i++) {
  tabList[i].querySelector(".btn").addEventListener("click", function (e) {
    e.preventDefault();
    for (var j = 0; j < tabList.length; j++) {
      tabList[j].classList.remove("is_on");
      imgs[j].style.display = "none";
      texts[j].classList.remove("on")
    }
    this.parentNode.classList.add("is_on");

    isOn = this.getAttribute("href");
    imgBox.querySelector(isOn).style.display = "block";
    tabs.querySelector(isOn).classList.add("on")
  })
}

//software tab메뉴
const softTabList = document.querySelectorAll(".soft_tablist li");
const softTab = document.querySelectorAll(".soft-tab");
let activeCont = "";

for (var i = 0; i < softTabList.length; i++) {
  softTabList[i].querySelector(".soft-btn").addEventListener("click", function (e) {
    e.preventDefault();
    for (var j = 0; j < softTabList.length; j++) {
      softTabList[j].classList.remove("active");
      softTab[j].style.display = "none";
    }
    this.parentNode.classList.add("active");

    activeCont = this.getAttribute("href");
    document.querySelector(activeCont).style.display = "block";
  })
}

//news 
var swiper = new Swiper(".mySwiper02", {
  spaceBetween: 30,
  slidesPerView: 3,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
