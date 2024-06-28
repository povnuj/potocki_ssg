<template>
  <div class="events-page content-wrap">
    <div class="page-header flex space-btw">
      <div class="item-l">
        <div class="page-title">
          {{ $t('events.title') }}
        </div>
        <div class="page-subtitle">
          {{ $t('events.subtitle') }}
        </div>
      </div>
      <div class="page-header-img"></div>
    </div>

    <section class="events-section">

      <div v-if="eventsRecent?.length > 0"
          class="events-section-title section-title">
        {{ $t('events.future') }}
      </div>

      <div class="events-row future-events flex flex-wrap space-btw">
        <div class="events-row__item" v-for="(event, index) in eventsRecent" v-bind:key="index">
          <div class="item__img">
            <img v-bind:src='event.attributes.main_image' alt="" class="img-cover">
          </div>
          <div class="item__date">
            <span v-if="event.attributes.start_date === event.attributes.end_date">
              {{ $i18n.locale === 'pl' ? new Date(event.attributes.start_date).toLocaleDateString('pl-PL', {day:'numeric', month:'long'}) :
                $i18n.locale === 'en' ? new Date(event.attributes.start_date).toLocaleDateString('en-GB', {day:'numeric', month:'long'}) :
                    new Date(event.attributes.start_date).toLocaleDateString('uk-UA', {day:'numeric', month:'long'}) }}
            </span>
            <span v-else>
              <span v-if="new Date(event.attributes.start_date).getMonth() === new Date(event.attributes.end_date).getMonth()">
                {{ $i18n.locale === 'pl' ? new Date(event.attributes.start_date).toLocaleDateString('pl-PL', {day:'numeric'}) :
                  $i18n.locale === 'en' ? new Date(event.attributes.start_date).toLocaleDateString('en-GB', {day:'numeric'})  :
                      new Date(event.attributes.start_date).toLocaleDateString('uk-UA', {day:'numeric'}) }} -
                {{ $i18n.locale === 'pl' ? new Date(event.attributes.end_date).toLocaleDateString('pl-PL', {day:'numeric', month:'long'}) :
                  $i18n.locale === 'en' ? new Date(event.attributes.end_date).toLocaleDateString('en-GB', {day:'numeric', month:'long'})  :
                      new Date(event.attributes.end_date).toLocaleDateString('uk-UA', {day:'numeric', month:'long'}) }}
              </span>
              <span v-else>
                {{ $i18n.locale === 'pl' ? new Date(event.attributes.start_date).toLocaleDateString('pl-PL', {day:'numeric', month:'long'}) :
                  $i18n.locale === 'en' ? new Date(event.attributes.start_date).toLocaleDateString('en-GB', {day:'numeric', month:'long'})  :
                      new Date(event.attributes.start_date).toLocaleDateString('uk-UA', {day:'numeric', month:'long'}) }} -
                {{ $i18n.locale === 'pl' ? new Date(event.attributes.end_date).toLocaleDateString('pl-PL', {day:'numeric', month:'long'}) :
                  $i18n.locale === 'en' ? new Date(event.attributes.end_date).toLocaleDateString('en-GB', {day:'numeric', month:'long'})  :
                      new Date(event.attributes.end_date).toLocaleDateString('uk-UA', {day:'numeric', month:'long'}) }}
              </span>
            </span>
          </div>
          <div class="item__footer">
            <div class="title subpage-title">
              {{ $i18n.locale === 'pl' ? event.attributes.title.pl :
                $i18n.locale === 'en' ? event.attributes.title.en :
                    event.attributes.title.uk }}
            </div>
            <NuxtLinkLocale :to="{path: 'event', query:{type: 'recent',id: event.id}}" class="btn-details"> 
              {{ $t('events.details') }}
              <span class="btn-details__icon"></span>
            </NuxtLinkLocale>
          </div>
        </div>
      </div>

      <div class="events-section-title section-title">
        {{ $t('events.past') }}
      </div>

      <div class="events-row past-events flex flex-wrap space-btw">
        <div class="events-row__item" v-for="(event, index) in eventsPast" v-bind:key="index">
          <div class="item__img">
            <img v-bind:src='event.attributes.main_image' alt="" class="img-cover">
          </div>
          <div class="item__date">
            <span v-if="event.attributes.start_date === event.attributes.end_date">
              {{ $i18n.locale === 'pl' ? new Date(event.attributes.start_date).toLocaleDateString('pl-PL', {day:'numeric', month:'long'}) :
                $i18n.locale === 'en' ? new Date(event.attributes.start_date).toLocaleDateString('en-GB', {day:'numeric', month:'long'}) :
                    new Date(event.attributes.start_date).toLocaleDateString('uk-UA', {day:'numeric', month:'long'}) }}
            </span>
            <span v-else>
              <span v-if="new Date(event.attributes.start_date).getMonth() === new Date(event.attributes.end_date).getMonth()">
                {{ $i18n.locale === 'pl' ? new Date(event.attributes.start_date).toLocaleDateString('pl-PL', {day:'numeric'}) :
                  $i18n.locale === 'en' ? new Date(event.attributes.start_date).toLocaleDateString('en-GB', {day:'numeric'})  :
                      new Date(event.attributes.start_date).toLocaleDateString('uk-UA', {day:'numeric'}) }} -
                {{ $i18n.locale === 'pl' ? new Date(event.attributes.end_date).toLocaleDateString('pl-PL', {day:'numeric', month:'long'}) :
                  $i18n.locale === 'en' ? new Date(event.attributes.end_date).toLocaleDateString('en-GB', {day:'numeric', month:'long'})  :
                      new Date(event.attributes.end_date).toLocaleDateString('uk-UA', {day:'numeric', month:'long'}) }}
              </span>
              <span v-else>
                {{ $i18n.locale === 'pl' ? new Date(event.attributes.start_date).toLocaleDateString('pl-PL', {day:'numeric', month:'long'}) :
                  $i18n.locale === 'en' ? new Date(event.attributes.start_date).toLocaleDateString('en-GB', {day:'numeric', month:'long'})  :
                      new Date(event.attributes.start_date).toLocaleDateString('uk-UA', {day:'numeric', month:'long'}) }} -
                {{ $i18n.locale === 'pl' ? new Date(event.attributes.end_date).toLocaleDateString('pl-PL', {day:'numeric', month:'long'}) :
                  $i18n.locale === 'en' ? new Date(event.attributes.end_date).toLocaleDateString('en-GB', {day:'numeric', month:'long'})  :
                      new Date(event.attributes.end_date).toLocaleDateString('uk-UA', {day:'numeric', month:'long'}) }}
              </span>
            </span>
          </div>
          <div class="item__footer">
            <div class="title subpage-title">
              {{ $i18n.locale === 'pl' ? event.attributes.title.pl :
                $i18n.locale === 'en' ? event.attributes.title.en :
                    event.attributes.title.uk }}
            </div>
            <router-link :to="{path: '/event', query:{type: 'past', id: event.id}}" class="btn-details">
              {{ $t('events.details') }}
              <span class="btn-details__icon"></span>
            </router-link>
          </div>
        </div>
      </div>

    </section>
  </div>

</template>



<script setup>
useSeoMeta({
  title: 'My Amazing Site2',
  ogTitle: 'My Amazing Site',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://assets-global.website-files.com/658aa4775c8768ba42215cd2/660421c94eae48c1878d06d8_2_545202429576716370821.png',
  twitterCard: 'summary_large_image',
})



</script>


<script>

definePageMeta({
  layout: 'dark',
  
})

export default {
  data() {
    return {
      config: useRuntimeConfig(),
      eventsRecent: [],
      eventsPast: [],
    }
  },
  
  beforeMount() {
    this.getRecentEvents();
    this.getPastEvents();
    
  },
  // onMounted(){
  // },
  methods: {

    async getRecentEvents(){
      try {
        const response = await fetch(this.config.public.VUE_APP_API + '/api/v1/events/recent');
        const data = await response.json();
        this.eventsRecent = data.data;
        console.log(this.eventsRecent);
      } catch (error) {
        console.error('Error fetching recent events:', error);
      }
    },

    async  getPastEvents(){
      try {
        const response = await fetch(this.config.public.VUE_APP_API + '/api/v1/events/past');
        const data = await response.json();
        this.eventsPast = data.data;
        console.log(this.eventsPast);
      } catch (error) {
        console.error('Error fetching past events:', error);
      }
    },

   
  }
};


</script>



<style lang='scss'>

.events-page {
  .page-header {
    .item-l {
      max-width: 490px;
    }

    .page-title {
      padding-top: 60px;
      padding-bottom: 30px;
    }

    &-img {
      width: 45%;
      max-width: 570px;
      height: 228px;
      background-image: url("@/assets/images/events-header.svg");
    }
  }
}

.events-section {
  padding: 90px 0 60px;
}

.events-section-title {
  padding-bottom: 42px;
  font-size: 36px;
  line-height: 42px;
}

.events-row {
  row-gap: 40px;

  &__item {
    width: calc(50% - 12px);

    .item__img {
      height: 330px;
    }

    .no-image {
      background-image: url("@/assets/images/event-no-foto.png");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }

    .item__date {
      padding: 12px 0;
      font-weight: 700;
      font-size: 18px;
      line-height: 30px;
      color: #D23C3D;
    }

    .item__footer {
      position: relative;
      padding-right: 150px;

      .title {
        font-size: 24px;
        line-height: 30px;
        padding: 0;
      }

      .btn-details {
        display: flex;
        align-items: center;
        position: absolute;
        right: 0;
        top: 0;
        font-weight: 700;
        font-size: 18px;
        line-height: 30px;
        color: #123F69!important;
        transition: all .3s ease-in-out;

        &:hover {
          .btn-details__icon {
            margin-left: 15px;
            transition: all .3s ease-in-out;
          }
        }

        &__icon {
          margin-left: 10px;
          display: inline-block;
          width: 26px;
          height: 22px;
          background-image: url("@/assets/images/icons/arrow-blue.svg");
          background-repeat: no-repeat;
          transition: all .3s ease-in-out;
        }
      }

    }
  }
}

.future-events {
  padding-bottom: 48px;
  border-bottom: 1px solid #A0A8B1;
  margin-bottom: 48px;
}

.past-events {
  .item__date {
    color: #865F3E;
  }
}

.events-page {
  @media (max-width: 992px) {
    .page-header {
      flex-direction: column;
      padding-top: 84px;

      .item-l {
        order: 2;

        .page-title {
          padding: 30px 0 15px;
          font-size: 32px;
          line-height: 44px;
        }
      }

      &-img {
        width: 100%;
        max-width: 100%;
        height: 120px;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: right;
      }
    }

    section.events-section {
      padding-top: 30px;
      padding-bottom: 0;

      .events-section-title {
        padding-bottom: 15px;
        font-size: 24px;
        line-height: 36px;
      }
    }
  }

  @media (max-width: 768px) {
    .events-row {
      padding-bottom: 45px;
      row-gap: 0;
    }

    .events-row__item {
      width: 100%;
      display: flex;
      flex-direction: column;
      position: relative;
      padding-top: 15px;

      &:not(:last-child) {
        margin-bottom: 30px;
      }

      .item__date {
        order: 1;
        padding-top: 0;
        padding-bottom: 15px;
        font-size: 14px;
        line-height: 24px;
        font-weight: 400;
      }
      .item__img {
        order: 2;
        height: 182px;
        margin-bottom: 45px;
      }
      .item__footer {
        position: static;
        padding-right: 0;

        .title {
          font-size: 18px;
          line-height: 30px;
        }

        .btn-details {
          top: auto;
          bottom: 5px;
          font-size: 16px;
        }
      }
    }
  }
}

</style>
