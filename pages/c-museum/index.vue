<template>
  <div class="blog-page c-museum-page content-wrap">
    <div class="subpage-header">
      <div class="subpage-header-wrap flex space-btw">
        <div class="subpage-header__item">
          <div class="subpage-title">
            {{ $t('homeC.museumTitle') }}
          </div>
          <div class="subpage-text">
            <p>
              {{ $t('homeC.museumSubitle1') }}
            </p>
            <p>
              {{ $t('homeC.museumSubitle2') }}
            </p>
            <p>
              {{ $t('homeC.museumSubitle3') }}
            </p>
            <p>
              {{ $t('homeC.museumSubitle4') }}
            </p>
          </div>
        </div>
        <div class="subpage-header__img"></div>
      </div>
    </div>

    <div class="museum-section" v-for="(museum, index) in museumsList" v-bind:key="index">

      <section class="video-section">
        <div class="video-section__title fw-700">
          {{ $t('museumC.articleTitle') }}
        </div>
        <div class="video-section__video">
          <iframe v-bind:src='"https://www.youtube.com/embed/" + museum.attributes.link_youtube.split("/")[3]'
                  frameborder="0"
                  title=""
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen>
          </iframe>
        </div>
      </section>

      <section class="article-section">
        <div class="article-section-row flex space-btw">
          <div class="article-section-row__img">
            <img v-bind:src='museum.attributes.image.url' alt="">
          </div>
          <p class="article-section-row__text">
            <span class="article-title fw-700">
              {{ $i18n.locale === 'pl' ? museum.attributes.subtitle2.pl :
                $i18n.locale === 'en' ? museum.attributes.subtitle2.en :
                    museum.attributes.subtitle2.uk }}
            </span>
            <span v-html="$i18n.locale === 'pl' ? museum.attributes.description2.pl :
            $i18n.locale === 'en' ? museum.attributes.description2.en :
            museum.attributes.description2.uk"></span>
          </p>
        </div>
        <div class="article-section-row flex space-btw img-right">
          <div class="article-section-row__img">
            <img v-bind:src='museum.attributes.image2.url' alt="">
          </div>
          <p class="article-section-row__text">
            <span class="article-title fw-700">
              {{ $i18n.locale === 'pl' ? museum.attributes.subtitle3.pl :
                $i18n.locale === 'en' ? museum.attributes.subtitle3.en :
                    museum.attributes.subtitle3.uk }}
            </span>
            <span v-html="$i18n.locale === 'pl' ? museum.attributes.description3.pl :
            $i18n.locale === 'en' ? museum.attributes.description3.en :
            museum.attributes.description3.uk"></span>
          </p>
        </div>
        <div class="article-section-row flex space-btw" v-if="museum.attributes.subtitle4.uk">
          <div class="article-section-row__img">
            <img v-bind:src='museum.attributes.image3.url' alt="">
          </div>
          <p class="article-section-row__text">
            <span class="article-title fw-700">
              {{ $i18n.locale === 'pl' ? museum.attributes.subtitle4.pl :
                $i18n.locale === 'en' ? museum.attributes.subtitle4.en :
                    museum.attributes.subtitle4.uk }}
            </span>
            <span v-html="$i18n.locale === 'pl' ? museum.attributes.description4.pl :
            $i18n.locale === 'en' ? museum.attributes.description4.en :
            museum.attributes.description4.uk"></span>
          </p>
        </div>
      </section>
    </div>
  </div>
</template>

<script>

export default {
  name: "CMuseum",
  layout: "cheader",
  data () {
    return {
      museumsList: [],
    }
  },
  methods: {
    getMuseumsList(){
      this.$axios
          .get(process.env.VUE_APP_API+'/api/v1/museums')
          .then(response => {
            this.museumsList = response.data.data
          })
          .catch(error => {
            console.log(error)
          })
    },
  },
  mounted () {
    this.getMuseumsList()
  },
}
</script>

<style scoped lang='scss'>

.c-museum-page {
  *{
    font-family: 'Montserrat', sans-serif;
  }

  .subpage-title {
    padding-top: 0;
    text-transform: none;
    font-size: 54px;
  }

  .subpage-text {
    max-width: 553px;

    p {
      margin: 0;
    }
  }

  .subpage-header__img {
    margin-right: -80px;
    width: 56%;
    max-width: 715px;
    height: 208px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: url("~@/assets/images/citta/museum/museum-header.svg");
  }

  .video-section {
    padding: 42px 0 0;
    max-width: 956px;

    &__title {
      padding-bottom: 24px;
      font-size: 36px;
      line-height: 42px;
      color: #32404E;
    }

    &__video {
      video {
        width: 100%;
      }
    }

    iframe {
      width: 100%;
      height: 538px;
    }
  }

  .article-section {
    .article-title {
      display: block;
      padding-bottom: 18px;
      font-size: 18px;
      line-height: 30px;
    }

    .article-section-row__text {
      font-size: 16px;
    }
  }

  @media (max-width: 992px) {

    .subpage-header {
      padding-top: 84px;
    }

    .subpage-header-wrap {
      flex-direction: column;

      .subpage-header__item {
        order: 2;

        .subpage-title {
          padding-top: 30px;
          padding-bottom: 15px;
          font-size: 32px;
          line-height: 44px;
        }
      }

      .subpage-header__img {
        align-self: flex-end;
        margin: 0 -15px 0 0;
        min-width: 240px;
        width: 65%;
        height: 120px;
      }
    }

    .subpage-text {
      p:not(:last-child) {
        margin-bottom: 15px;
      }
    }

    .video-section {
      padding-top: 30px;

      .video-section__title {
        font-size: 24px;
        line-height: 36px;
        text-transform: uppercase;
      }
    }
    .article-section {
      padding-top: 45px;
      padding-bottom: 45px;

      .article-section-row {
        flex-direction: column;
        padding-top: 0;

        .article-title {
          padding-bottom: 15px;
        }

        .article-section-row__img,
        .article-section-row__text {
          width: 100%;
          max-width: 100%;
          margin-bottom: 15px;
        }

        .article-section-row__img:empty {
          margin-bottom: 0;
        }

        .article-section-row__img {
          margin-left: 0;
          order: 2;
        }

        .article-section-row__text {
          font-size: 14px;
          line-height: 24px;
        }
      }
    }
  }
}

</style>
