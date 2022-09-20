class HeroSlider{
    constructor(el){
        this.el = el;
        this.swiper = this._initSwiper();
    }

    _initSwiper(){
      return new Swiper(this.el, {
          grabCursor:true, //ポインターのデザイン
          loop: true,
          effect:"coverflow", 
          centeredSlides:true,//slider中央揃え
          slidesPerView:1, //表示画面に何枚のスライドを表示するか
          speed:1000,

          breakpoints:{//1024ピクセル以上の画面では以下の設定
              1024:{
                  slidesPerView:2,
              }
          },

          autoplay:{//自動で切り替わる
            delay:4000,
            disableOnInteraction:false,//マウスで操作してもautoplayを継続させる
          }
        });
    }
}