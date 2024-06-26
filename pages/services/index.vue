<template>
  <div class="services-page content-wrap">
    <div class="page-header flex space-btw">
      <div class="page-title">
        {{ $t('services.title') }}
      </div>
      <div class="page-header-img"></div>
    </div>
    <div class="services-grid flex flex-wrap">
      <div class="services-grid-item" v-for="(service, index) in servicesList" v-bind:key="index">
        <div class="services-grid-item__img">
          <img v-bind:src='service.attributes.main_image' alt="" class="img-cover">
          <div class="img-overlay"></div>
        </div>
        <div class="services-grid-item__title">
          {{ $i18n.locale === 'pl' ? service.attributes.title.pl :
            $i18n.locale === 'en' ? service.attributes.title.en :
                service.attributes.title.uk }}
        </div>
        <div class="services-grid-item__description">
          {{ $i18n.locale === 'pl' ? service.attributes.description.pl :
            $i18n.locale === 'en' ? service.attributes.description.en :
                service.attributes.description.uk }}
        </div>
      </div>
    </div>

    <div class="btn-pdf">
      <a href="/2023_3.pdf" target="_blank">
        {{ $t('services.servicesBtn') }}
        <span class="btn-pdf-icon"></span>
      </a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Services',
  layout: "default",
  data () {
    return {
      servicesList: null
    }
  },
  mounted () {
    this.$axios
        .get('/api/v1/services')
        .then(response => {
          this.servicesList = response.data.data
        })
        .catch(error => {
          console.log(error)
        })
  }
}
</script>

<style lang='scss'>

  .services-page {
    .page-header {
      padding-bottom: 48px;

      .page-title {
        align-self: flex-end;
        padding-bottom: 0;
      }

      &-img {
        width: 570px;
        height: 228px;
        background-image: url("~@/assets/images/services-header-img.svg");
      }
    }

    .services-grid {
      gap: 24px;
      padding-bottom: 60px;

      .services-grid-item:nth-child(3n+1) {
        &:after {
          background-image: url("~@/assets/images/service-item-frame-1.svg");
        }

        @media (max-width: 446px) {
          &:after {
            background-image: url("~@/assets/images/service-item-frame-1-m.svg");
          }
        }
      }
      .services-grid-item:nth-child(3n+2) {
        &:after {
          background-image: url("~@/assets/images/service-item-frame-2.svg");
        }

        @media (max-width: 446px) {
          &:after {
            background-image: url("~@/assets/images/service-item-frame-2-m.svg");
          }
        }
      }
      .services-grid-item:nth-child(3n+3) {
        &:after {
          background-image: url("~@/assets/images/service-item-frame-3.svg");
        }

        @media (max-width: 446px) {
          &:after {
            background-image: url("~@/assets/images/service-item-frame-3-m.svg");
          }
        }
      }

      &-item {
        width: 410px;
        height: 410px;
        padding: 30px;
        position: relative;
        cursor: pointer;
        transition: all .3s ease-in-out;

        &:after {
          content: '';
          display: block;
          width: 100%;
          height: 100%;
          position: absolute;
          bottom: 0;
          right: 0;
          background-position: right bottom;
          background-repeat: no-repeat;
          transition: all .3s ease-in-out;
        }


        &__img {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          z-index: -1;
          transition: all .3s ease-in-out;

          .img-overlay {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background: #32404E;
            mix-blend-mode: darken;
            opacity: .7;
          }
        }

        &__title {
          font-family: 'Ermilov', sans-serif;
          font-weight: 700;
          font-size: 24px;
          line-height: 30px;
          text-transform: uppercase;
          color: #fff;
        }

        &__icon {
          position: absolute;
          right: 0;
          bottom: 0;
          width: 44%;
          height: 44%;
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          opacity: 1;
          transition: all .3s ease-in-out;
        }

        &__description {
          height: 100%;
          padding-bottom: 30px;
          display: flex;
          align-items: center;
          overflow: hidden;
          opacity: 0;
          transition: all .5s ease-in-out;
        }
      }
      .services-grid-item:hover {
        &:after {
          opacity: 0;
          transition: all .4s ease-in-out;
        }

        .services-grid-item__title {
          color: #32404E;
        }
        .services-grid-item__icon {
          opacity: 0;
          transition: all .3s ease-in-out;
        }
        .services-grid-item__img {
          opacity: 0;
          transition: all .3s ease-in-out;
        }
        .services-grid-item__description {
          opacity: 1;
          transition: all .5s ease-in-out;
        }
      }
    }

    .btn-pdf {
      font-weight: 700;

      span {
        top: 16px;
      }
    }

    @media (max-width: 1439px) {
      .services-grid-item {
        width: 32%;
      }
    }

    @media (max-width: 1365px) {

      .services-grid {
        max-width: 845px;
        margin: 0 auto;
      }
      .services-grid-item {
        width: 100%;
        max-width: 410px;
      }
    }

    @media (max-width: 1004px) {
      .services-grid {
        flex-direction: column;
        align-items: center;
        gap: 30px;
      }
    }

    @media (max-width: 992px) {
      padding-bottom: 45px;

      .page-header {
        padding-top: 84px;
        padding-bottom: 30px;
        flex-direction: column;

        .page-title {
          order: 2;
          align-self: flex-start;
          font-size: 32px;
          line-height: 44px;
        }

        .page-header-img {
          align-self: flex-end;
          margin-bottom: 30px;
          width: 300px;
          height: 120px;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
      }

      .services-grid {
        padding-bottom: 30px;
      }

      .services-grid-item {
        padding: 20px;
      }

      .services-grid-item:hover {
        &:after {
          opacity: 1!important;
          transition: all .4s ease-in-out;
        }

        .services-grid-item__title {
          color: #fff!important;
        }
        .services-grid-item__icon {
          opacity: 1!important;
          transition: all .3s ease-in-out;
        }
        .services-grid-item__img {
          opacity: 1!important;
          transition: all .3s ease-in-out;
        }
        .services-grid-item__description {
          opacity: 1!important;
          transition: all .5s ease-in-out;
        }
      }

      .services-grid-item__title {
        padding-bottom: 15px;
        line-height: 36px;
      }

      .services-grid-item__description {
        height: auto;
        opacity: 1;
        font-size: 14px;
        line-height: 24px;
        color: #fff;
      }

      .btn-pdf {
        margin: 0 auto;
        width: 186px;
        height: 42px;

        &:hover {
          span {
            top: 16px;
          }
        }

        a {
          font-size: 16px;
          font-weight: 700;

          span {
            top: 13px;
          }
        }
      }
    }

    @media (max-width: 446px) {
      .services-grid-item {
        width: 100%;
        max-width: 345px;
        height: 345px;
      }
    }
  }
</style>