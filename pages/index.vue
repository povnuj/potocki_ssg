<template>
  <div class="main-page" id="mainPage">
    <div class="first-screen flex" id="first-section-scroll">
      <div class="content-wrap">
        <div class="first-screen-img">
          <video  loop muted autoplay poster="@/public/images/main-page-bg.png">
            <source src='@/public/images/video/promo.webm' type="video/webm" /> 
            <source src="@/public/images/video/promo.mp4" type="video/mp4" /> 
          </video>
          <div class="first-screen-img__item first-screen-img__item-left"></div>
          <div class="first-screen-img__item first-screen-img__item-right"></div>
        </div>
        <div class="first-screen-content flex space-btw">
          <div class="first-screen-content__title" id="homePageTitle">
            {{ $t('home.title') }}
          </div>
          <NuxtLink to="#restoration-id" class="first-screen-content__arrow" ></NuxtLink>
          <div class="first-screen-content__subtitle">
            {{ $t('home.subtitle') }}
          </div>
        </div>
      </div>
    </div>
    <section class="section-restoration" id="restoration-id">
      <div class="content-wrap">
        <div class="section-title">
          {{ $t('home.restTitle') }}
        </div>
        <div class="row-vue space-btw">
          <div class="row-vue__item palace-map">
            <img src="@/public/images/palace-map.svg" alt="Potocki Palace">
          </div>
          <div class="row-vue__item text-item">
            <div class="section-text">
              {{ $t('home.restSubtitle') }}
            </div>
            <NuxtLink to='/restoration' class="hide-mobile">
              <ButtonWithArrow>{{$t('home.restBtn')}}</ButtonWithArrow>
            </NuxtLink>
            <a href="https://drive.google.com/file/d/1IC0AbsBj-RkH9PcpYe4PoMAV934hTAYk/view"
               target="_blank"
               class="hide-mobile btn-vue btn-vue__link">
              {{ $t('home.restBtnConcept') }}
            </a>
          </div>
          <NuxtLink to='/restoration' class="show-mobile">
            <ButtonWithArrow>{{$t('home.restBtn')}}</ButtonWithArrow>
          </NuxtLink>
          <a href="https://drive.google.com/file/d/1IC0AbsBj-RkH9PcpYe4PoMAV934hTAYk/view"
             target="_blank"
             class="show-mobile btn-vue btn-vue__link">
            {{ $t('home.restBtnConcept') }}
          </a>
        </div>
      </div>
    </section>
    <section class="section-events section-slider">
      <div class="content-wrap">
        <div class="section-title">
          {{ $t('home.eventsTitle') }}
        </div>
        <div class="row-vue">
          <div class="section-text">
            {{ $t('home.eventsSubtitle') }}
            <NuxtLink to='/events' class="hide-mobile">
              <ButtonWithArrow>{{ $t('home.eventsBtn') }}</ButtonWithArrow>
            </NuxtLink>
          </div>
            <Carousel :settings="settings" :breakpoints="breakpoints" v-if="carouselEvents.length > 0">
              <Slide v-for="slide in carouselEvents" :key="slide">
                <img v-bind:src='slide.attributes.main_image' alt="" class="carousel-img">
              </Slide>

              <template #addons>
                <Navigation />
              </template>
            </Carousel>
          <NuxtLink to='/events' class="show-mobile">
            <ButtonWithArrow>{{ $t('home.eventsBtn') }}</ButtonWithArrow>
          </NuxtLink>
        </div>
      </div>
    </section>
    <section class="section-services">
      <div class="content-wrap">
        <div class="section-title">
          <span class="hide-mobile">{{ $t('home.servicesTitle') }}</span>
          <span class="show-mobile">{{ $t('home.servicesTitleMobile') }}</span>
        </div>

        <div class="row-vue flex-wrap section-services-row">
          <div class="section-services-row__item"
               v-for="(service, index) in servicesList"
               v-bind:key="index"
          >
            <div class="item-icon">
              <img v-bind:src='service.attributes.icon' alt="">
            </div>
            <div class="item-text">
              {{ $i18n.locale === 'pl' ? service.attributes.title.pl : $i18n.locale === 'en' ? service.attributes.title.en : service.attributes.title.uk }}
            </div>
          </div>
        </div>
        <NuxtLink to='/services' class="">
          <ButtonWithArrow>{{ $t('home.servicesBtn') }}</ButtonWithArrow>
        </NuxtLink>
      </div>
    </section>
 </div>
</template>

<script setup>
//import { Carousel } from 'vue3-carousel-nuxt';
import { useI18n } from 'vue-i18n'
// const videoSrc = require('~/assets/video/promo.webm')

const { t } = useI18n();

useSeoMeta({
  title: t('meta.palace.home.title'),
  ogTitle: t('meta.palace.home.title'),
  description: t('meta.palace.home.description'),
  ogDescription: t('meta.palace.home.description'),
  ogImage: 'https://picpalace.com.ua/Potocki_openGraph.png',
  twitterCard: 'summary_large_image',
})

</script>

<script>
import 'vue3-carousel/dist/carousel.css'

definePageMeta({
  layout: 'dark',
  
})
export default {
  data() {
    return {
      config: useRuntimeConfig(),
      carouselEvents: [],
      servicesList: [],
      breakpoints: {
        992: {
          itemsToShow: 1.5,
          snapAlign: 'start',
        },
        320: {
          itemsToShow: 1,
          snapAlign: 'center',
        },
      },
      settings: {
        itemsToShow: 1,
        snapAlign: 'center',
      },
    }
  },
  components:{

  },
  beforeMount() {
   
    this.getCarouselEvents();
    this.getServicesList();
    
  },
  onMounted(){
    this.changeTitle();
  },
  methods: {

    async getCarouselEvents(){
      try {
        const response = await fetch("https://picpalace.com.ua" + '/api/v1/events/recent');
        const data = await response.json();
        this.carouselEvents = data.data;
        // console.log(this.carouselEvents);
      } catch (error) {
        console.error('Error fetching carousel events:', error);
      }
    },

    async getServicesList(){
      try {
        const response = await fetch('https://picpalace.com.ua' + '/api/v1/services');
        const data = await response.json();
        this.servicesList = data.data;
        // console.log(this.servicesList);
      } catch (error) {
        console.log('Error fetching  servicesList:', error);
      }
    },

    changeTitle(){
      if (localStorage.getItem('lang') === 'pl' &&
        document.getElementById('homePageTitle')) {
        document.getElementById('homePageTitle').classList.add('first-screen-content__title_pol')
      } else {
        document.getElementById('homePageTitle').classList.remove('first-screen-content__title_pol')
      }
    },

  }
};


</script>


<style lang="scss" scoped>
.first-screen {
  flex-direction: column;
  padding-top: 108px;
  padding-bottom: 72px;
  height: 100vh;
  background-color: #0F1820;

  .content-wrap {
    height: 100%;
  }

  &-img {
    height: 47%;
    width: 100%;
    margin-bottom: 60px;
    margin-right: -81px;
    position: relative;
    background-image: url("@/public/images/main-page-bg.png");
    background-size: cover;
    background-repeat: no-repeat;

    video {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;

      @media (max-width: 992px) {
        display: none;
      }
    }

    &__item {
      position: absolute;
      background-size: cover;
      background-repeat: no-repeat;

      &-left {
        bottom: 0;
        left: 0;
        width: 288px;
        height: 144px;
        background-image: url("@/public/images/main-page-bg-1.svg");
      }
      &-right {
        top: 0;
        right: 0;
        width: 360px;
        height: 240px;
        background-image: url("@/public/images/main-page-bg-2.svg");
      }
    }
  }

  &-content {
    color:#fff;

    &__title {
      width: 41%;
      font-size: 3.375rem;
      line-height: 66px;
      font-family: 'Ermilov', sans-serif;

      &_pol {
        font-family: 'Ermilov', sans-serif;
        font-weight: 700;
      }
    }

    &__arrow {
      position: absolute;
      bottom: 84px;
      left: calc(50% - 26px);
      width: 52px;
      height: 42px;
      background-image: url("@/public/images/arrow-down.svg");
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      cursor: pointer;
    }

    &__subtitle {
      align-self: end;
      width: 31.25%;
      padding-bottom: 15px;
      font-size: .875rem;
      line-height: 24px;
    }
  }

}

.section-events {

  .content-wrap {
    position: relative;
    padding-right: 0;

    @media (max-width: 490px) {
      padding: 0;

      .section-title,
      .section-text {
        padding-left: 15px;
        padding-right: 15px;
      }
    }
  }

  .section-text {
    width: 300px;
    padding-bottom: 48px;

    .btn-vue {
      margin-top: 48px;
    }
  }

  .swiper {
    height: 290px;
    width: 100%;
  }

  .carousel {
    height: 290px;
    margin-left: 100px;

    .keen-slider__slide {
      overflow: hidden;
      max-height: 290px;
    }

    .carousel-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    @media (max-width: 992px) {
      margin-left: 0;
      height: 196px;
    }
  }

  .navigation-wrapper {
    display: flex;
    width: 105px;
    height: 36px;
    justify-content: space-between;
    position: absolute;
    right: 0;
    top: 0;

    .carousel__prev,
    .carousel__next {
      height: 100%;
      width: 36px;
      background-image: url("@/public/images/icons/arrow-active.png");
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      cursor: pointer;
    }

    .carousel__prev {
      transform: rotate(180deg);
    }

    .carousel__prev.arrow--disabled,
    .carousel__next.arrow--disabled {
      opacity: .5;
    }

    @media (max-width: 1200px) {
      right: 80px;
    }

    @media (max-width: 992px) {
      top: auto;
      bottom: 300px;
      left: calc(50% - 52px);
    }
  }
}

section.carousel {
  //background-color: red;
  width: 66%;

  .carousel__prev {
    right: 70px;
  }

  @media (max-width: 992px) {
    width: 100%;

    .carousel__slide {
      margin-right: 0;
    }
  }
}

.section-restoration {
  .palace-map {
    flex-basis: 65%;
    max-width: 795px;
  }

  .text-item {
    width: 30%;

    .btn-vue {
      margin-top: 42px;
    }
  }
  .btn-vue__link {
    width: 100%;
    max-width: 334px;
    //height: 48px;
    padding: 8px 50px 8px 12px;
    display: block;
    margin-top: 40px;
    color: #32404E;
    background-color: transparent;
    border: 1px solid #32404E;
    &:after {
      background-image: url("@/public/images/dark-arrow.svg");;
    }
    @media (max-width: 992px) {
      max-width: 301px;
    }
  }
}

.section-services {
  .section-services-row {
    max-width: 970px;
    row-gap: 78px;


    &__item {
      width: 240px;
      min-height: 90px;
      position: relative;
      padding-top: 60px;
      padding-right: 40px;

      .item-icon {
        width: 36px;
        height: 36px;
        position: absolute;
        left: 0;
        top: 0;
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;

        &-1 {
          background-image: url("@/public/images/icons/services/1.png");
        }
        &-2 {
          background-image: url("@/public/images/icons/services/2.png");
        }
        &-3 {
          background-image: url("@/public/images/icons/services/3.png");
        }
        &-4 {
          background-image: url("@/public/images/icons/services/4.png");
        }
        &-5 {
          background-image: url("@/public/images/icons/services/5.png");
        }
        &-6 {
          background-image: url("@/public/images/icons/services/6.png");
        }
        &-7 {
          background-image: url("@/public/images/icons/services/7.png");
        }
        &-8 {
          background-image: url("@/public/images/icons/services/8.png");
        }
      }

      .item-text {
        font-size: 18px;
      }
    }
  }

  .btn-vue {
    margin-top: 75px;
    background-color: transparent;
    color: #32404E;
    border: 1px solid #32404E;

    &:after {
      background-image: url("@/public/images/dark-arrow.svg");
    }
  }
}

.main-page {
  @media (max-width: 992px) {
    .first-screen {
      padding-top: 84px;
      padding-bottom: 30px;

      .content-wrap {
        width: 100%;
      }

      .first-screen-img {
        max-height: 201px;
        margin-bottom: 30px;
        background-position: center;
      }

      .first-screen-img__item-left {
        height: 60px;
        background-size: contain;
      }
      .first-screen-img__item-right {
        height: 120px;
        width: 180px;
        background-size: contain;
      }

      .first-screen-content {
        flex-direction: column;

        &__title {
          width: 100%;
          font-size: 32px;
          line-height: 44px;
        }
        &__subtitle {
          padding-top: 15px;
          width: 100%;
          font-size: 14px;
          line-height: 24px;
        }
        &__arrow {
          bottom: 30px;
        }
      }

    }

    .section-slider {
      padding: 45px 0;

      .section-title {
        padding-bottom: 15px;
        font-size: 24px;
        line-height: 36px;
      }

      .row-vue {
        flex-direction: column;

        .section-text {
          width: 100%;
          padding-bottom: 96px;
        }

        section.carousel {
          margin-left: 0;
          height: 196px;

          .carousel__prev,
          .carousel__next {
            top: -48px;
          }
          .carousel__prev {
            left: calc(50% - 45px);
          }
          .carousel__next {
            left: calc(50%);
          }
        }

        .show-mobile {
          margin: 30px auto 0;

          .btn-vue {
            font-size: 16px;
            padding-right: 49px;
          }
        }
      }
    }

    .section-restoration {
      padding-top: 0;
      padding-bottom: 45px;

      .section-title {
        padding-bottom: 15px;
        font-size: 24px;
        line-height: 36px;
      }

      .text-item {
        width: 100%;
        padding-bottom: 30px;
      }

      .row-vue {
        flex-direction: column;

        .palace-map {
          order: 2;
          margin: 0 auto;
        }

        a.show-mobile {
          order: 3;
          margin: 30px auto 0;

          .btn-vue {
            font-size: 16px;
            padding: 9px 49px 9px 11px;
          }
        }
      }
    }

    .section-services {
      padding-top: 0;
      padding-bottom: 45px;

      .section-title {
        padding-bottom: 30px;
        font-size: 24px;
        line-height: 36px;
      }

      .section-services-row {
        flex-direction: column;
        row-gap: 0;

        &__item {
          padding-top: 0;
          height: 36px;
          min-height: 36px;
          width: 100%;
          display: flex;
          align-items: center;

          .item-icon {
            position: static;
          }

          .item-text {
            padding-left: 24px;
          }
        }

        &__item:not(:last-child) {
          margin-bottom: 30px;
        }
      }

      .btn-vue {
        margin: 45px auto 0;
        font-size: 16px;
        line-height: 30px;
        padding: 8px 48px 8px 11px;
      }
    }
  }
}

</style>

