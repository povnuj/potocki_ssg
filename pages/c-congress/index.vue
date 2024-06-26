<template>
  <div class="events-page c-events-page content-wrap congress-page">
    <div class="page-header flex space-btw">
      <div class="item-l">
        <div class="page-title">
          {{ $t('congressC.title') }}
        </div>
        <div class="page-subtitle">
          {{ $t('congressC.subtitle') }}<br>
          {{ $t('congressC.subtitle1') }}<br>
          {{ $t('congressC.subtitle2') }}<br>
          {{ $t('congressC.subtitle3') }}
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
            <NuxtLink
                :to="{path: '/'+$i18n.locale+'/c-event', query:{type: 'recent', id: event.id}}"
                class="btn-details"
            >
              {{ $t('events.details') }}
              <span class="btn-details__icon"></span>
            </NuxtLink>
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
            <NuxtLink
                :to="{path: '/'+$i18n.locale+'/c-event', query:{type: 'past', id: event.id}}"
                class="btn-details"
            >
              {{ $t('events.details') }}
              <span class="btn-details__icon"></span>
            </NuxtLink>
          </div>
        </div>
      </div>

    </section>
  </div>

</template>

<script>

export default {
  name: 'CCongress',
  layout: "cheader",
  data () {
    return {
      eventsRecent: null,
      eventsPast: null
    }
  },
  methods:{
    getRecentEvents(){
    this.$axios
          .get('/api/v1/congress_centers/recent')
          .then(response => {
            this.eventsRecent = response.data.data
          })
          .catch(error => {
            console.log(error)
          })
    },
    getPastEvents(){
    this.$axios
          .get('/api/v1/congress_centers/past')
          .then(response => {
            this.eventsPast = response.data.data
          })
          .catch(error => {
            console.log(error)
          })
    },
  },
  mounted () {
    this.getRecentEvents()
    this.getPastEvents()
  }
}
</script>

<style scoped lang='scss'>

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
      background-image: url("~@/assets/images/citta/congress/congress-header.svg");
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
  text-transform: none;
}

.events-row {
  row-gap: 40px;

  &__item {
    width: calc(50% - 12px);

    .item__img {
      height: 330px;
    }

    .no-image {
      background-image: url("~@/assets/images/event-no-foto.png");
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
          background-image: url("~@/assets/images/icons/arrow-blue.svg");
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

.c-events-page {
  *{
    font-family: 'Montserrat', sans-serif;
  }

  .page-header {
    padding-top: 154px;

    &-img {
      margin-right: -80px;
      margin-top: 80px;
      width: 56%;
      max-width: 715px;
      height: 208px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
    }

    .page-title {
      padding-top: 0;
      font-weight: 700;
      font-size: 54px;
      line-height: 66px;
      color: #363B48;
    }
  }

  @media (max-width: 768px) {
    .page-header {
      flex-direction: column;
      padding-top: 94px;

      .item-l {
        order: 2;
        padding-top: 30px;
        max-width: 100%;

        .page-title {
          padding-bottom: 15px;
          font-size: 32px;
          line-height: 44px;
        }
      }

      .page-header-img {
        align-self: flex-end;
        margin: 0 -15px 0 0;
        min-width: 240px;
        width: 65%;
        height: 120px;
      }
    }

    .events-section {
      padding-top: 30px;

      .future-events {
        padding-bottom: 30px;
        margin-bottom: 30px;
      }

      .events-section-title {
        padding-bottom: 30px;
        font-size: 24px;
        line-height: 36px;
        //text-transform: uppercase;
      }

      .events-row__item {
        width: 100%;
        display: flex;
        flex-direction: column;

        .item__date {
          order: 2;
        }

        .item__img {
          order: 3;
        }
      }
    }
  }
}

.congress-page {
  .subpage-title {
    text-transform: none;
  }

    @media (max-width: 768px) {
      .events-section {
        .events-section-title.section-title {
          text-transform: uppercase;
        }

        .subpage-title {
          font-size: 18px;
          line-height: 30px;
        }

        .item__footer {
          position: static;
          padding-right: 0;

          .btn-details {
            top: auto;
            bottom: 0;
            font-size: 16px;
          }
        }

        .item__date {
          padding-top: 0;
          padding-bottom: 15px;
          font-weight: 400;
          font-size: 14px;
          line-height: 24px;
        }

        .events-row__item {
          position: relative;
          padding-bottom: 50px;
        }
      }
    }

  @media (max-width: 520px) {
    .events-section {
      .item__img {
        height: 182px;
      }
    }
  }
}
</style>
