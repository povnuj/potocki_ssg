<template>
    <div class="event-page content-wrap">
      <div class="subpage-header event-subpage-header">
        <router-link :to="'/events'" class='router-back'>
          <BackButton v-html="$t('event.eventBackBtn')"></BackButton>
        </router-link>
      </div>
      <section class="event-section flex space-btw">
        <div class="event-section-item event-info-item">
          <div class="event-section-item__img">
            <img v-bind:src='event.attributes?.main_image' alt="" class="img-cover">
          </div>
          <Button v-html="$t('event.eventBtn')"
                  v-if="(eventType === 'recent')"
                  class="btn-vue__ligth show-mobile"
                  @click="linkToPage(event.attributes?.facebook_link)">
          </Button>
          <Button v-html="$t('event.eventBtnPast')"
                  v-if="(eventType === 'past')"
                  class="btn-vue__ligth show-mobile"
                  @click="linkToPage(event.attributes?.facebook_link)">
          </Button>
          <div class="event-section-item__info">
            <div class="title">
              {{ $t('event.eventInfoTitle') }}:
            </div>
            <div class="content" v-html="$i18n.locale === 'pl' ? event.attributes?.content?.pl :
              $i18n.locale === 'en' ? event.attributes?.content?.en :
              event.attributes?.content?.uk">
            </div>
          </div>
        </div>
        <div class="event-section-item event-title-item">
          <div class="event-title-item__title">
            {{ $i18n.locale === 'pl' ? event.attributes?.title?.pl :
              $i18n.locale === 'en' ? event.attributes?.title?.en :
                  event.attributes?.title?.uk }}
          </div>
          <div class="event-title-item__date">
            <span v-if="event.attributes?.start_date === event.attributes?.end_date">
                {{ $i18n.locale === 'pl' ? new Date(event.attributes?.start_date).toLocaleDateString('pl-PL', {day:'numeric', month:'long'}) :
                $i18n.locale === 'en' ? new Date(event.attributes?.start_date).toLocaleDateString('en-GB', {day:'numeric', month:'long'}) :
                    new Date(event.attributes?.start_date).toLocaleDateString('uk-UA', {day:'numeric', month:'long'}) }}
              </span>
            <span v-else>
              <span v-if="new Date(event.attributes?.start_date).getMonth() === new Date(event.attributes?.end_date).getMonth()">
                {{ $i18n.locale === 'pl' ? new Date(event.attributes?.start_date).toLocaleDateString('pl-PL', {day:'numeric'}) :
                  $i18n.locale === 'en' ? new Date(event.attributes?.start_date).toLocaleDateString('en-GB', {day:'numeric'})  :
                      new Date(event.attributes?.start_date).toLocaleDateString('uk-UA', {day:'numeric'}) }} -
                  {{ $i18n.locale === 'pl' ? new Date(event.attributes?.end_date).toLocaleDateString('pl-PL', {day:'numeric', month:'long'}) :
                  $i18n.locale === 'en' ? new Date(event.attributes?.end_date).toLocaleDateString('en-GB', {day:'numeric', month:'long'})  :
                      new Date(event.attributes?.end_date).toLocaleDateString('uk-UA', {day:'numeric', month:'long'}) }}
              </span>
              <span v-else>
                {{ $i18n.locale === 'pl' ? new Date(event.attributes?.start_date).toLocaleDateString('pl-PL', {day:'numeric', month:'long'}) :
                  $i18n.locale === 'en' ? new Date(event.attributes?.start_date).toLocaleDateString('en-GB', {day:'numeric', month:'long'})  :
                      new Date(event.attributes?.start_date).toLocaleDateString('uk-UA', {day:'numeric', month:'long'}) }} -
                  {{ $i18n.locale === 'pl' ? new Date(event.attributes?.end_date).toLocaleDateString('pl-PL', {day:'numeric', month:'long'}) :
                  $i18n.locale === 'en' ? new Date(event.attributes?.end_date).toLocaleDateString('en-GB', {day:'numeric', month:'long'})  :
                      new Date(event.attributes?.end_date).toLocaleDateString('uk-UA', {day:'numeric', month:'long'}) }}
              </span>
            </span>
          </div>
          <div class="event-title-item__duration">
            <span class="fw-700">
              {{ $t('event.eventDuration') }}:
            </span>
            <span>
              {{ $i18n.locale === 'pl' ? event.attributes?.duration?.pl :
                  $i18n.locale === 'en' ? event.attributes?.duration?.en :
                      event.attributes?.duration?.uk }}
            </span>
          </div>
          <div class="event-title-item__location">
            <span class="fw-700">
              {{ $t('event.eventLocation') }}:
            </span>
            <span>
              {{ $i18n.locale === 'pl' ? event.attributes?.location?.pl :
                  $i18n.locale === 'en' ? event.attributes?.location?.en :
                      event.attributes?.location?.uk }}
            </span>
          </div>
          <div class="event-title-item__price">
            <span class="fw-700">
              {{ $t('event.eventEnter') }}:
            </span>
            <span>
              {{ $i18n.locale === 'pl' ? event.attributes?.enter?.pl :
                  $i18n.locale === 'en' ? event.attributes?.enter?.en :
                      event.attributes?.enter?.uk }}
            </span>
          </div>
          <Button v-if="(eventType === 'recent')"
                  v-html="$t('event.eventBtn')"
                  class="btn-vue__ligth hide-mobile"
                  @click="linkToPage(event.attributes?.facebook_link)">
          </Button>
          <Button v-if="(eventType === 'past')"
                  v-html="$t('event.eventBtnPast')"
                  class="btn-vue__ligth hide-mobile"
                  @click="linkToPage(event.attributes?.facebook_link)">
          </Button>
        </div>
      </section>
    </div>
  </template>
  
<script setup>
import { ref, watchEffect } from 'vue'
import { useRoute, useFetch } from 'nuxt/app';
const config = useRuntimeConfig();
const { t, locale } = useI18n();

const route = useRoute()
const eventType = ref(route.query.type).value;
//const id = ref(route.query.id)
let event = {};
const eventTypeHandler = () => {
    if (eventType === 'recent') {
       return config.public.VUE_APP_API +'/api/v1/events/recent'
}
    if (eventType === 'past') {
    return config.public.VUE_APP_API +'/api/v1/events/past'
    }
};

try {
    const response = await fetch(eventTypeHandler());
    const data = await response.json();
    data.data.forEach((event2) => {
        if (event2.id === route.params.id) {
            event = event2
            //this.event = event
            // console.log(seoVal.attributes.main_image)
            // console.log(seoVal.attributes.title.uk)
            // console.log(seoVal.attributes.start_date)
           // console.log(seoVal.attributes.location.uk, locale)
        }
    });
    
  } catch (error) {
    console.error('Error fetching seo events:', error);
  }


    console.log("event =>", event)
    console.log("eventType =>",eventType)
    console.log("locale =>",locale.value)

    


useSeoMeta({
   title: event.attributes.title.uk,
   ogTitle: event.attributes.title.uk,
   description: event.attributes.content.uk,
   ogDescription: event.attributes.content.uk,
   ogImage: event.attributes.main_image,
   twitterCard: 'summary_large_image',
 })


</script>
  
  
<script>
  
  definePageMeta({
    layout: 'dark',
    
  });



</script>


<style lang='scss'>
.event-subpage-header {
  padding-top: 132px;
}

.event-section {
  padding: 18px 0 60px;
  margin: 0 -81px;
  position: relative;

  .event-info-item {
    width: 50%;
    max-width: 715px;

    .event-section-item__img {
      height: 375px;
      overflow: hidden;
    }

    .event-section-item__info {
      padding: 62px 0 0 81px;

      .title {
        font-weight: 700;
        font-size: 18px;
        line-height: 30px;
        padding-bottom: 12px;
      }
    }
  }

  .event-title-item {
    width: 43%;
    max-width: 630px;
    min-height: 375px;
    align-self: flex-start;
    //position: relative;
    padding-bottom: 70px;
    position: sticky;
    top: 150px;
    transition: all .3s ease-in-out;

    &:after {
      content: '';
      display: block;
      position: absolute;
      right: 0;
      bottom: 0;
      width: 231px;
      height: 231px;
      background-image: url("@/assets/images/event-title.svg");
      background-repeat: no-repeat;
      background-position: right bottom;
      background-size: 70%;

      @media (max-width: 1199px) {
        display: none;
      }
    }

    div:not(:last-child) {
      margin-bottom: 18px;
    }

    &__title {
      font-family: 'Ermilov', sans-serif;
      font-weight: 700;
      font-size: 36px;
      line-height: 42px;
      text-transform: uppercase;
    }

    &__date {
      font-weight: 700;
      font-size: 24px;
      line-height: 30px;
      color: #D23C3D;
    }

    &__duration,
    &__location,
    &__price {
      font-size: 18px;
      line-height: 30px;

      span:last-child {
        padding-left: 6px;
        //font-weight: 500;
      }
    }

    .btn-vue__ligth {
      position: absolute;
      bottom: 0;
      left: 0;
      padding-left: 12px!important;
      border: 1px solid #32404E;
      line-height: 24px;
    }
  }

}

.event-page {
  @media (max-width: 992px) {

    .event-subpage-header {
      padding-top: 114px;
    }

    .event-section {
      flex-direction: column;
      margin: 0;
      position: relative;
      padding-bottom: 45px;
    }

    .event-title-item {
      position: static;
      width: 100%;
      max-width: 100%;
      min-height: auto;
      padding-bottom: 30px;

      &:after {
        display: none;
      }

      &__title {
        margin-bottom: 15px!important;
        width: 100%;
        font-size: 32px;
        line-height: 44px;
      }

      &__date {
        margin-bottom: 5px!important;
        font-size: 14px;
        line-height: 24px;
      }

      &__duration,
      &__location,
      &__price {
        font-size: 14px;
        line-height: 24px;
        margin-bottom: 5px!important;
      }
    }

    .event-info-item {
      order: 2;
      width: 100%;
      margin: 0 auto;

      .event-section-item__img {
        height: 182px;
      }

      .event-section-item__info {
        padding-left: 0;
        padding-top: 30px;

        .title {
          padding-bottom: 15px;
          text-transform: uppercase;
          font-size: 24px;
          line-height: 36px;
          font-family: 'Ermilov', sans-serif;
        }
      }

      .btn-vue__ligth.show-mobile {
        margin: 30px 0 0 auto;
        height: 42px;
        width: 134px;
        padding: 7px 46px 7px 12px!important;
        border: 1px solid #32404E;
        font-size: 16px;
        line-height: 24px;
      }
    }
  }
}


</style>
