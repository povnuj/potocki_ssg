<template>
  <div class="blogs-page content-wrap">
    <div class="page-header flex space-btw">
      <div class="item-l flex">
        <div class="page-title">
          {{ $t('blogs.title') }}
        </div>
      </div>
      <div class="page-header-img"></div>
    </div>

    <section class="blogs-section">
      <div class="blogs-row past-blogs flex flex-wrap space-btw">
        <div class="blogs-row__item" v-for="(article, index) in articles" v-bind:key="index">
          <div class="item__img">
            <img v-bind:src='article.attributes.title_image' alt="" class="img-cover">
          </div>
          <div class="item__date">
            {{ $i18n.locale === 'pl' ? new Date(article.attributes.publish_date).toLocaleDateString('pl-PL') :
            $i18n.locale === 'en' ? new Date(article.attributes.publish_date).toLocaleDateString('en-GB') :
              new Date(article.attributes.publish_date).toLocaleDateString('uk-UA') }}
          </div>
          <div class="item__footer">
            <div class="title subpage-title">
              {{ $i18n.locale === 'pl' ? article.attributes.title.pl :
            $i18n.locale === 'en' ? article.attributes.title.en :
              article.attributes.title.uk }}
            </div>
            <NuxtLink :to="{ path: localePath('blogs') + '/' + article.id }">
              <ButtonDetail>{{ $t('blogs.blogsBtn') }}</ButtonDetail>
            </NuxtLink>
          </div>
        </div>
      </div>

    </section>
  </div>
</template>


<script setup>
const { t, locale } = useI18n();
const localePath = useLocalePath()

useSeoMeta({
  title: t('meta.palace.blogs.title'),
  ogTitle: t('meta.palace.blogs.title'),
  description: t('meta.palace.blogs.description'),
  ogDescription: t('meta.palace.blogs.description'),
  ogImage: 'https://picpalace.com.ua/Potocki_openGraph.png',
  twitterCard: 'summary_large_image',
});

definePageMeta({
  layout: 'palace',
});
</script>

<script>
export default {
  data() {
    return {
      config: useRuntimeConfig(),
      articles: []
    }
  },
  beforeMount() {
    this.getArticles();
  },
  methods: {
    async getArticles() {
      try {
        const response = await fetch(this.config.public.VUE_APP_API + '/api/v1/blogs');
        const data = await response.json();
        this.articles = data.data;
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    },
  }
};
</script>


<style lang='scss' scoped>
.blogs-page {
  .page-header {
    .item-l {
      max-width: 490px;
    }

    .page-title {
      align-self: flex-end;
      padding: 0;
    }

    &-img {
      width: 45%;
      max-width: 570px;
      height: 228px;
      background-image: url("@/public/images/blogs-header.svg");
    }
  }
}

.blogs-section {
  padding: 60px 0 107px;
}

.blogs-row {
  row-gap: 40px;

  &__item {
    width: calc(50% - 12px);
    min-width: calc(50% - 12px);

    .item__img {
      height: 330px;
    }

    .no-image {
      background-image: url("@/public/images/blog-no-foto.png");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }

    .item__date {
      padding: 12px 0;
      font-size: 18px;
      line-height: 30px;
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
        //max-width: 110px;
        //width: 100%;
        display: flex;
        align-items: center;
        position: absolute;
        right: 0;
        top: 0;
        font-weight: 700;
        font-size: 18px;
        line-height: 30px;
        color: #123F69 !important;
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
          background-image: url("@/public/images/icons/arrow-blue.svg");
          background-repeat: no-repeat;
          transition: all .3s ease-in-out;
        }
      }

    }
  }
}

.blogs-page {
  @media (max-width: 1420px) {
    .page-header-img {
      width: 570px;
    }
  }

  @media (max-width: 992px) {
    .page-header {
      flex-direction: column;
      padding-top: 84px;
      margin-bottom: 30px;

      .item-l {
        order: 2;
      }

      .page-title {
        font-size: 32px;
        line-height: 44px;
      }

      .page-header-img {
        align-self: flex-end;
        margin-bottom: 30px;
        width: 300px;
        height: 120px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
      }
    }

    .blogs-section {
      padding-top: 15px;
      padding-bottom: 45px;

      .blogs-row {
        justify-content: center;
        row-gap: 45px;

        &__item {
          width: 100%;
          max-width: 710px;

          .item__date {
            padding: 5px 0;
            font-size: 12px;
            line-height: 18px;
            color: #A0A8B1;
          }

          .item__footer {
            padding-right: 0;

            .title {
              font-size: 18px;
              line-height: 30px;
            }

            .btn-details {
              position: relative;
              left: calc(100% - 86px);
              display: inline-flex;
              margin-top: 15px;
              margin-left: auto;
              font-size: 16px;
              line-height: 24px;

              .btn-details__icon {
                width: 22px;
                height: 18px;
                background-size: contain;
              }
            }
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    .blogs-section {

      .blogs-row {

        &__item {
          width: 100%;
          max-width: 710px;

          .item__img {
            height: 182px;
          }
        }
      }
    }
  }
}
</style>
