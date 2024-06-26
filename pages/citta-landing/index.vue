<template>
<div class="main-page c-main-page ">
  <div class="first-screen c-first-screen flex ">
    <div class="content-wrap-header">
      <div class="first-screen-bg">
        <div class="first-screen-bg__img"></div>
      </div>
      <div class="first-screen-content content-wrap">
        <div class="first-screen-content__title fw-700">
          Citta Ideale
        </div>
        <div class="first-screen-content__subtitle">
          {{ $t('homeC.subtitle') }}
          <br>{{ $t('homeC.subtitle1') }}
          <br>{{ $t('homeC.subtitle2') }}
          <br>{{ $t('homeC.subtitle3') }}
        </div>
      </div>

    </div>
    <div class="first-screen-content__arrow" @click="scrollSection()"></div>
  </div>

  <section class="section-realization content-wrap">

      <div class="section-title">
        {{ $t('homeC.impementationTitle') }}
      </div>
      <div class="section-row flex">
        <div class="section-row-item"
             v-for="(implementation, index) in implementationList" v-bind:key="index"
        >
          <div class="section-row-item__img">
            <img v-bind:src='implementation?.attributes?.title_image' alt="">
          </div>
          <div class="flex space-btw">
            <div class="section-row-item__title">
              {{ $i18n.locale === 'pl' ? implementation?.attributes?.title?.pl :
                $i18n.locale === 'en' ? implementation?.attributes?.title?.en :
                    implementation?.attributes?.title?.uk }}
            </div>
            <NuxtLink :to="{path: '/'+$i18n.locale+'/c-blog-page', query:{id: implementation.id}}">
              <Button v-html="$t('blogs.blogsBtn')" class="btn-vue__ligth"></Button>
            </NuxtLink>
          </div>
        </div>
      </div>

    <NuxtLink :to="'/'+$i18n.locale+'/c-implementation'" class="implementation-link">
      <Button v-html="$t('homeC.impementationBtn')" class="btn-vue btn-vue__ligth"></Button>
    </NuxtLink>
  </section>
  <section class="section-events section-slider content-wrap">
     <div class="section-title">
       {{ $t('homeC.congressTitle') }}
      </div>
      <div class="row-vue">
        <div class="section-text">
          {{ $t('homeC.congressSubitle') }}
          <NuxtLink :to="'/'+$i18n.locale+'/c-congress'" class="hide-mobile">
            <Button v-html="$t('homeC.congressBtn')" class="btn-vue btn-vue__ligth"></Button>
          </NuxtLink>
        </div>
<!--        ---- slider ----- -->
<!--        <div class="navigation-wrapper">-->
<!--          <div class="carousel__prev"-->
<!--               @click="slider.prev()"-->
<!--               :class="{-->
<!--                      arrow: true,-->
<!--                      'arrow&#45;&#45;left': true,-->
<!--                      'arrow&#45;&#45;disabled': current === 0,-->
<!--                    }"></div>-->
<!--          <div class="carousel__next"-->
<!--               v-if="slider"-->
<!--               @click="slider.next()"-->
<!--               :class="{-->
<!--                      arrow: true,-->
<!--                      'arrow&#45;&#45;right': true,-->
<!--                    }"></div>-->
<!--        </div>-->
<!--        <div ref="container" className="keen-slider carousel">-->
<!--          <div className="keen-slider__slide" v-for="(slide, index) in congressList1" :key="index">-->
<!--            <img v-bind:src='slide.attributes.main_image' alt="" class="carousel-img">-->
<!--          </div>-->
<!--        </div>-->

        <carousel :settings="settings" :breakpoints="breakpoints" v-if="congressList.length > 0">
          <slide v-for="slide in congressList" :key="slide">
            <img v-bind:src='slide.attributes.main_image' alt="" class="carousel-img">
          </slide>

          <template #addons>
            <navigation />
          </template>
        </carousel>

        <NuxtLink :to="'/'+$i18n.locale+'/c-congress'" class="show-mobile">
          <Button v-html="$t('homeC.congressBtn')" class="btn-vue btn-vue__ligth"></Button>
        </NuxtLink>
      </div>

  </section>
  <section class="section-events section-slider content-wrap">
      <div class="section-title">
        {{ $t('homeC.hubTitle') }}
      </div>
      <div class="row-vue">
        <div class="section-text">
          {{ $t('homeC.hubSubitle') }}
          <NuxtLink :to="'/'+$i18n.locale+'/c-hub'" class="hide-mobile">
            <Button v-html="$t('homeC.hubBtn')" class="btn-vue btn-vue__ligth"></Button>
          </NuxtLink>
        </div>
<!--        <div ref="containerHub" className="keen-slider carousel">-->
<!--          <div className="keen-slider__slide" v-for="(slide, index) in hubsList1" :key="index">-->
<!--            <img v-bind:src='slide.attributes.main_image' alt="" class="carousel-img">-->
<!--          </div>-->
<!--        </div>-->
 <!--       <carousel :settings="settings" :breakpoints="breakpoints" v-if="hubsList.length > 0">
          <slide v-for="slide in hubsList" :key="slide">
            <img v-bind:src='slide.attributes.main_image' alt="" class="carousel-img">
          </slide>

          <template #addons>
            <navigation />
          </template>
        </carousel>-->
        <NuxtLink :to="'/'+$i18n.locale+'/c-hub'" class="show-mobile">
          <Button v-html="$t('homeC.hubBtn')" class="btn-vue btn-vue__ligth"></Button>
        </NuxtLink>
      </div>

  </section>
  <section class="section-museum content-wrap">
      <div class="swiper flex hide-mobile-small">
        <div class="swiper-item">
          <img src="@/assets/images/citta/home/museum-img-1.png" alt="">
        </div>
        <div class="swiper-item">
          <img src="@/assets/images/citta/home/museum-img-2.png" alt="">
        </div>
      </div>
      <div class="section-museum-content flex">
        <div class="section-title">
          {{ $t('homeC.museumTitle') }}
        </div>
        <div class="section-content">
          <div class="section-content__text">
            <p>
              {{ $t('homeC.museumSubitle1') }}
            </p>
            <img src="@/assets/images/citta/home/museum-img-2.png" alt="" class="show-mobile-small">
            <p>
              {{ $t('homeC.museumSubitle2') }}
            </p>
            <p>
              {{ $t('homeC.museumSubitle3') }}
            </p>
            <p>
              {{ $t('homeC.museumSubitle4') }}
            </p>
            <NuxtLink :to="'/'+$i18n.locale+'/c-museum'">
              <Button v-html="$t('homeC.museumBtn')" class="btn-vue btn-vue__ligth"></Button>
            </NuxtLink>
          </div>
        </div>
      </div>

  </section>
  <section class="section-routes content-wrap">
      <div class="section-row flex space-btw">
        <div class="section-row__item section-row__item-first"></div>
        <div class="section-row__item section-row__item-second"></div>
      </div>
      <div class="section-content">
        <div class="section-title">
          {{ $t('homeC.routesTitle') }}
        </div>
        <div class="section-text">
          {{ $t('homeC.routesSubitle') }}
        </div>
        <NuxtLink :to="'/'+$i18n.locale+'/c-routes'" class="hide-mobile-small">
          <Button v-html="$t('homeC.routesBtn')" class="btn-vue btn-vue__ligth"></Button>
        </NuxtLink>
      </div>
    <NuxtLink :to="'/'+$i18n.locale+'/c-routes'" class="show-mobile-small routes-link">
      <Button v-html="$t('homeC.routesBtn')" class="btn-vue btn-vue__ligth btn-vue-mobile"></Button>
    </NuxtLink>

  </section>
</div>
</template>

<script>
import Button from '@/components/Button'

import { computed, ref } from 'vue'
import { useKeenSlider } from 'keen-slider/vue.es'
import 'keen-slider/keen-slider.min.css'

//import 'vue3-carousel/dist/carousel.css'
//import { Carousel, Slide, Navigation } from 'vue3-carousel'


export default {
  name: 'CittaLanding',
  layout: "cheader",
  data () {
    return {
      btnText:'Читати',
      btnTextRealization:'Усі новини',
      btnTextEvents:'Усі події',
      btnTextHub:'Долучитись',
      btnTextMuseum:'Що подивитись в музеї',
      btnTextRoutes:'Завантажити маршрути',
      implementationList: [],
      congressList: [],
      hubsList: [],
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
      // current: 0,
      // slider: null,
      currentHub: 0,
      sliderHub: null,
      congressList1: [
        {attributes: {main_image: process.env.VUE_APP_API+'/uploads/congress_center/main_image/62ea54f66a6b7700012b49a3/article-img-3.png'} },
        {attributes: {main_image: process.env.VUE_APP_API+'/uploads/congress_center/main_image/63234a086dc23e0001fa2a3b/blog-poster-2.png'} },
        {attributes: {main_image: process.env.VUE_APP_API+'/uploads/congress_center/main_image/63234a5b6dc23e0001fa2a3c/blog-poster-3.png'} }
      ],
      hubsList1: [
        {attributes: {main_image: process.env.VUE_APP_API+'/uploads/hub/main_image/6319a3082f46e90001d99aba/event-poster.png'} },
        {attributes: {main_image: process.env.VUE_APP_API+'/uploads/hub/main_image/63234dd86dc23e0001fa2a3d/event-poster-2.png'} },
        {attributes: {main_image: process.env.VUE_APP_API+'/uploads/hub/main_image/63234e546dc23e0001fa2a3e/event-poster-4.png'} },
      ],
    }
  },

  setup(){
    const current = ref(0)
    const [container, slider] = useKeenSlider({
      initial: current.value,
      slides: {
        perView: 1,
      },
      breakpoints: {
        '(min-width: 490px)': {
          slides: { perView: 1.7, spacing: 40 },
        },
      },
      slideChanged: (s) => {
        current.value = s.track.details.rel
      },
    })

    const currentHub = ref(0)
    const [containerHub] = useKeenSlider({
      initial: currentHub.value,
      slides: {
        perView: 1,
      },
      breakpoints: {
        '(min-width: 490px)': {
          slides: { perView: 1.7, spacing: 40 },
        },
      },
      slideChanged: (s) => {
        currentHub.value = s.track.details.rel
      },
    })

    const dotHelper = computed(() => slider.value ? [...Array(slider.value.track.details.slides.length).keys()] : [])
    //console.log(slider)
    return {container, containerHub, current, dotHelper,  slider}
  },

  components: {
    Button,
  //  Carousel,
  //  Slide,
  //  Navigation,
  },
  methods: {
    scrollSection() {
      window.scrollBy(0, window.innerHeight - 101);
    },
    getImplementationList(){
      this.$axios
          .get('/api/v1/implementations')
          .then(response => {
            this.implementationList = response.data.data.slice(-3)
          })
          .catch(error => {
            console.log(error)
          })
    },
    getCongressList(){
      this.$axios
          .get('/api/v1/congress_centers/recent')
          .then(response => {
            this.congressList = response.data.data
          })
          .catch(error => {
            console.log(error)
          })
    },
    getHubsList(){
      this.$axios
          .get('/api/v1/hubs/recent')
          .then(response => {
            this.hubsList = response.data.data
          })
          .catch(error => {
            console.log(error)
          })
    },
  },
  mounted () {
    this.getCongressList()
    this.getHubsList()
    this.getImplementationList()
  },
  beforeUnmount() {
    if (this.sliderHub) this.sliderHub.destroy()
  },
}
</script>

<style scoped lang='scss'>

.c-main-page {
  *{
    font-family: 'Montserrat', sans-serif;
  }

  .content-wrap-header {
    position: relative;
    z-index: 2;
  }

  .section-title {
    padding-bottom: 36px;
    text-transform: none;
  }

  .first-screen {
    position: relative;
    padding-top: 96px;
    background-color: #fff;

    &-bg {
      position: absolute;
      top: 0;
      left: 0;
      min-height: 492px;
      width: 100vw;
      background: linear-gradient(90deg, rgba(32,41,69,1) 0%, rgba(32,41,69,1) 100%);
      background-size: contain;

      &__img {
        position: absolute;
        right: 0;
        height: 100%;
        min-height: 450px;
        max-width: 830px;
        width: 70%;
        background-image: url("~@/assets/images/citta/c-bg-img.svg");
        background-repeat: no-repeat;
        background-position: top right;
        background-size: contain;
        transition: all .3s ease;

        @media (max-width: 1320px) {
          width: 55%;
        }
      }
    }

    .content-wrap {
      width: 100%;
    }

    &-content {
      position: relative;
      z-index: 1;
      min-height: 492px;

      &__title {
        padding-top: 84px;
        color: #fff;
        font-family: 'Montserrat', sans-serif;
      }

      &__subtitle {
        width: 100%;
        max-width: 544px;
        padding-top: 24px;
        padding-bottom: 54px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
      }

      &__arrow {
        position: absolute;
        bottom: 84px;
        left: 0;
        width: 100%;
        background-image: url("~@/assets/images/arrow-down-dark.svg");
        background-position: center;
      }
    }
  }

  .section-realization {
    position: relative;
    padding-top: 56px;
    padding-bottom: 72px;

    .section-title {
      padding-bottom: 36px;
      text-transform: none;
    }

    .section-row {

      &-item {
        width: calc(33.33% - 20px);

        &:not(:last-child) {
          margin-right: 30px;
        }

        &__img {
          height: 216px;
          overflow: hidden;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        &__title {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow-y: hidden;
          padding-top: 12px;
          padding-right: 10px;
          font-weight: 500;
          font-size: 16px;
          line-height: 30px;
          color: #000;
        }

        .btn-vue {
          padding-right: 35px;
          color: #123F69!important;

          &:after {
            right: 0;
          }
        }
        .btn-vue:hover:after {
          right: -5px;
        }
      }
    }

    .implementation-link .btn-vue__ligth {
      position: absolute;
      right: 81px;
      top: 56px;
      padding-left: 12px !important;
      border: 1px solid #32404E;
      line-height: 26px;

      @media (max-width: 992px) {
        top: auto;
        bottom: 0;
        right: auto;
        left: calc(50% - 85px);
      }
    }
  }

  .section-slider {
    .btn-vue__ligth {
      padding-left: 12px !important;
      border: 1px solid #32404E;
      line-height: 26px;
    }
  }

  .section-slider.section-events {
    position: relative;
    padding-bottom: 113px;

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
      }

      .carousel-img {
        width: 100%;
        max-height: 100%;
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
      right: 81px;
      top: 5px;

      .carousel__prev,
      .carousel__next {
        height: 100%;
        width: 36px;
        background-image: url("~@/assets/images/icons/arrow-active.png");
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
        bottom: 330px;
        left: calc(50% - 52px);
      }
    }

    @media (max-width: 992px) {
      .section-text {
        width: 100%;
        padding-bottom: 96px;
      }
    }
  }

  .section-museum {
    padding-bottom: 126px;

    .swiper {
      column-gap: 30px;
    }

    &-content {
      padding-top: 35px;

      p {
        margin-bottom: 0;
      }

      .section-title {
        padding-right: 70px;
      }

      .section-content {
        max-width: 790px;

        .btn-vue {
          margin-top: 30px;
        }
      }

      .btn-vue__ligth {
        padding-left: 12px !important;
        border: 1px solid #32404E;
        line-height: 26px;
      }
    }

    @media (max-width: 768px) {
      .section-museum-content {
        flex-direction: column;

        p {
          margin-bottom: 16px;
        }

        img {
          display: block;
          margin: 30px auto;
        }
      }
    }
  }

  .section-events {
    padding-bottom: 24px;

    @media (max-width: 992px) {
      padding-left: 15px;
      padding-right: 15px;
    }
  }

  .section-routes {
    padding-bottom: 42px;

    .section-row {
      height: 240px;
      &__item {
        width: calc(50% - 15px);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

        &-first {
          background-image: url("~@/assets/images/citta/home/route-img-1.png");
        }
        &-second {
          background-image: url("~@/assets/images/citta/home/route-img-2.png");
        }
      }
    }

    .section-content {
      position: relative;
      padding-top: 24px;
      padding-bottom: 24px;

      .section-title {
        padding-bottom: 24px;
      }

      .section-text {
        max-width: 435px;
      }
    }

    .btn-vue.btn-vue__ligth {
      position: absolute;
      right: 0;
      top: 26px;
      line-height: 24px;
      padding-left: 12px !important;
      border: 1px solid #32404E!important;
    }

    .btn-vue-mobile {
      position: relative!important;
    }

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;

      .section-row {
        order: 2;
      }

      .routes-link {
        order: 3;
        .btn-vue-mobile {
          margin: 0 auto 45px;
        }
      }

      .section-content {
        padding-top: 0;
      }
    }

    @media (max-width: 520px) {
     .section-row {
        flex-direction: column;
        row-gap: 30px;

       &__item {
         height: 133px;
         width: 100%;
       }
      }
    }
  }

  @media (max-width: 1200px) {
    .c-first-screen {
      padding-top: 84px;
    }
  }

  @media (max-width: 992px) {
    .c-first-screen {
      height: auto;
    }

    .first-screen-content__arrow {
      display: none;
    }

    .first-screen-bg__img {
      left: calc(50% - 192px);
      z-index: 2;
      width: 100%;
      max-width: 375px;
      height: 301px;
      min-height: 301px;
      background-image: url("~@/assets/images/citta/c-bg-img-m.svg");
      background-size: contain;
      background-position: top;
    }

    .first-screen-content__subtitle {
      font-weight: 400;
    }

    .first-screen-content__title {
      padding-top: 320px;
    }

    .first-screen-content {
      width: 100vw;
      padding: 0 15px;
      background-color: #202945;
    }

    .section-realization {
      padding-top: 0;

      .section-title {
        padding-bottom: 30px;
        font-size: 24px;
        line-height: 36px;
      }

      .section-row {
        flex-wrap: wrap;
        gap: 30px;

        &-item {
          width: calc(50% - 20px);

          &:not(:last-child) {
            margin-right: 0;
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    .section-realization {
      .section-row {
        &-item {
          width: 100%;
          padding-bottom: 24px;

          &__img {
            height: 182px;
            img {
              height: 100%;
              object-fit: cover;
            }
          }

          .flex {
            flex-wrap: wrap;

            a {
              margin-left: auto;
            }
          }

          &__title {
            width: 100%;
            padding-top: 15px;
            padding-right: 0;
            font-weight: 700;
            font-size: 18px;
            line-height: 30px;
          }

          .btn-vue__ligth {
            height: auto;
            margin-top: 15px;
            padding-top: 0;
            padding-bottom: 0;
            font-size: 16px;
            line-height: 24px;
            color: #123F69!important;

            &:after {
              height: 18px;
              top: 5px;
            }
          }
        }
      }
    }
  }

  @media (max-width: 370px) {
    .first-screen-bg__img {
      left: auto;
    }

  }

}
</style>
