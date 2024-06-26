<template>
<div class="blog-page c-routes-page content-wrap">
  <div class="page-header flex space-btw">
    <div class="item-l">
      <div class="page-title fw-700">
        {{ $t('routesC.title') }}
      </div>
      <div class="page-subtitle">
        <p>
          {{ $t('routesC.subtitle') }}
        </p>
        <ul>
          <li>
            {{ $t('routesC.subtitle1') }}
          </li>
          <li>
            {{ $t('routesC.subtitle2') }}
          </li>
        </ul>
      </div>
    </div>
    <div class="page-header-img"></div>
  </div>

  <section class="routes-info">
    <div class="routes-item flex" v-for="(route, index) in routesList" v-bind:key="index">
      <div class="routes-item-content">
        <div class="routes-item-content__title fw-700">
          {{ $i18n.locale === 'pl' ? route.attributes.title.pl :
            $i18n.locale === 'en' ? route.attributes.title.en :
                route.attributes.title.uk }}
        </div>
        <div class="routes-item-content__description">
          {{ $i18n.locale === 'pl' ? route.attributes.description.pl :
            $i18n.locale === 'en' ? route.attributes.description.en :
                route.attributes.description.uk }}
        </div>
        <div class="btn-pdf fw-700 hide-mobile-small">
          <a v-bind:href="route.attributes.download_pdf.url">
            {{ $t('routesC.routesBtn') }}
            <span class="btn-pdf-icon"></span>
          </a>
        </div>
      </div>
      <div class="routes-item-img">
        <img v-bind:src='route.attributes.image.url' alt="">
      </div>
      <div class="btn-pdf fw-700 show-mobile-small">
        <a v-bind:href="route.attributes.download_pdf.url">
          {{ $t('routesC.routesBtn') }}
          <span class="btn-pdf-icon"></span>
        </a>
      </div>
    </div>
  </section>
  <section class="video-section">
    <div class="video-section__title fw-700">
      {{ $t('routesC.title') }}
    </div>
    <div class="video-section__video">
      <video src="@/assets/images/citta/museum/potocky-video.mp4" controls></video>
    </div>
  </section>
</div>
</template>

<script>

export default {
  name: "CRoutes",
  layout: "cheader",
  data () {
    return {
      routesList: null
    }
  },
  mounted () {
    this.$axios
        .get(process.env.VUE_APP_API+'/api/v1/routes')
        .then(response => {
          this.routesList = response.data.data
        })
        .catch(error => {
          console.log(error)
        })
  }
}
</script>

<style scoped lang='scss'>
.c-routes-page {
  *{
    font-family: 'Montserrat', sans-serif;
  }

  .page-header {
    padding-top: 124px;

    .item-l {
      max-width: 430px;

      .page-subtitle {
        p {
          margin-bottom: 0;
        }
        ul {
          padding-left: 0;
          list-style: disc inside;

          li::marker {
            font-size: 10px;
          }
        }

        @media (max-width: 768px) {
          p:first-child {
            padding-bottom: 15px;
          }
          ul {
            padding-left: 15px;
            list-style: disc outside;
          }
        }
      }
    }

    .page-title {
      font-size: 54px;
      line-height: 66px;
      color: #363B48;
    }

    &-img {
      margin-right: -80px;
      width: 56%;
      max-width: 715px;
      height: 208px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      background-image: url("~@/assets/images/citta/routes/routes-header.svg");
    }
  }

  .routes-info {
    padding: 42px 0;

    .routes-item {
      min-height: 390px;
      max-width: 1275px;
      margin-bottom: 42px;
      box-sizing: content-box;

      &:nth-child(odd) {
        margin-left: -80px;

        .routes-item-content {
          border-top: 80px solid #F9FAFB;
          border-left: 80px solid #F9FAFB;
          border-bottom: 80px solid #F9FAFB;
        }

        .routes-item-img {
          border-top: 80px solid #fff;
          border-right: 80px solid #fff;
          border-bottom: 80px solid #fff;
        }
      }

      &:nth-child(even) {

        .routes-item-content {
          order: 2;
          border-top: 80px solid #fff;
          border-bottom: 80px solid #fff;
          background-color: #F9FAFB;
        }

        .routes-item-img {
          border-top: 80px solid #fff;
          border-bottom: 80px solid #fff;
        }
      }

      &-content {
        width: 65%;
        max-width: 725px;
        box-sizing: border-box;
        padding: 66px 20px 56px 80px;

        &__title {
          max-width: 360px;
          padding-bottom: 24px;
          font-size: 18px;
          line-height: 30px;
        }

        &__description {
          max-width: 360px;
          padding-bottom: 24px;
          font-size: 14px;
          line-height: 24px;
        }

        .btn-pdf {
          width: 298px;
          margin-bottom: 0;

          a{
            font-family: 'Roboto', sans-serif !important;
          }

          .btn-pdf-icon {
            right: 12px;
          }
        }
      }

      &-img {

        img {
          height: 392px;
          width: 392px;
          object-fit: cover;
        }
      }
    }
  }

  .video-section {
    padding: 0;
    margin-bottom: 42px;

    &__title {
      padding-bottom: 24px;
      font-size: 36px;
      line-height: 42px;
      color: #32404E;
      text-align: center;
    }

    &__video {
      video {
        display: block;
        width: 100%;
        max-width: 956px;
        margin: 0 auto;
      }
    }
  }

  @media (max-width: 992px) {
    .routes-info {
      .routes-item {
        margin-bottom: 0;
      }

      .routes-item:nth-child(2n+1) .routes-item-img {
        border-right: 0;
      }

      .routes-item:nth-child(2n+1) .routes-item-content {
        border-left: 0;
      }

      .routes-item:nth-child(2n) {
        .routes-item-content {
          width: auto;
          max-width: 100%;
        }
      }
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

    .routes-info {

      .routes-item:nth-child(2n+1) .routes-item-img,
      .routes-item:nth-child(2n+1) .routes-item-content,
      .routes-item:nth-child(2n) .routes-item-img,
      .routes-item:nth-child(2n) .routes-item-content {
        border-top: 0;
        border-bottom: 0;
      }

      .routes-info .routes-item:nth-child(2n) .routes-item-img {
        order: 2;
      }

      .routes-item:not(:last-child) {
        margin-bottom: 45px;
      }

      .routes-item {
        flex-direction: column;
        margin-left: 0!important;

        .routes-item-content {
          width: 100%;
          max-width: 100%;
          padding: 0;

          .routes-item-content__title,
          .routes-item-content__description {
            max-width: inherit;
          }

          .routes-item-content__title {
            padding-bottom: 15px;
            font-size: 24px;
            line-height: 36px;
            text-transform: uppercase;
          }

          .routes-item-content__description {
            padding-bottom: 30px;
          }
        }

        .routes-item-img {
          height: 345px;
          margin-bottom: 30px;

          img {
            width: 100%;
            height: 345px;
          }
        }

        .btn-pdf.show-mobile-small {
          margin: 0 auto;
          width: fit-content;
          padding-right: 35px;

          a {
            font-size: 16px;
            line-height: 30px;

            .btn-pdf-icon {
              right: 12px;
            }
          }
        }
      }

      .routes-item:nth-child(2n) {
        .routes-item-content {
          order: 0;
        }
      }
    }
  }

}
</style>
