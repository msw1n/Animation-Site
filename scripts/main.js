document.addEventListener("DOMContentLoaded",function(){
    const hero = new HeroSlider(".swiper");
});


const img = document.querySelectorAll(".cover-slide")
const _inviewAnimation = function(entries,observer){//監視対象複数登録できるからentries
    entries.forEach(entry => { //enrty = 監視対象
        if(entry.isIntersecting){  //true = はいった
            //obsever.unobserve(entry.target);//監視解除  target=要素(childとか)
            entry.target.classList.add("inview");
        }
        else{
            entry.target.classList.remove("inview");
        }
    });
}

const io = new IntersectionObserver(_inviewAnimation);
img.forEach(function(node){
    io.observe(node);
})


