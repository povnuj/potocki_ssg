<template>
  <div class="blog-page c-blog-page content-wrap">
    <div class="subpage-header">
      <div class="subpage-header-wrap flex space-btw">
        <div class="subpage-header__item">
          <NuxtLink :to="'/'+$i18n.locale+'/c-implementation'" class='router-back'>
            <BackButton v-html="$t('blog.blogBackBtn')"></BackButton>
          </NuxtLink>
          <div class="subpage-title fw-700">
            {{ $i18n.locale === 'pl' ? getContent[0]?.attributes?.title?.pl :
              $i18n.locale === 'en' ? getContent[0]?.attributes?.title?.en :
                  getContent[0]?.attributes?.title?.uk }}
          </div>
          <div class="subpage-text">
            {{ $i18n.locale === 'pl' ? getContent[0]?.attributes?.short_description?.pl :
              $i18n.locale === 'en' ? getContent[0]?.attributes?.short_description?.en :
                  getContent[0]?.attributes?.short_description?.uk }}
          </div>
        </div>
        <div class="subpage-header__img">
          <img v-bind:src='getContent[0]?.attributes?.title_image' alt="" class="img-cover">
<!--          <div class="subpage-header__img-sticker"></div>-->
        </div>
      </div>
    </div>

    <section class="article-section">
      <div class="article-section-row flex space-btw"
           v-for="(block, index) in getContent[0]?.attributes?.article_blocks?.data" v-bind:key="index">
        <div class="article-section-row__img" v-bind:class = "block.attributes.image?'is-img':'no-img'">
          <img v-bind:src='block.attributes.image' alt="" class="img-cover">
        </div>
        <p class="article-section-row__text" v-html="$i18n.locale === 'pl' ? block.attributes?.content?.pl :
              $i18n.locale === 'en' ? block.attributes?.content?.en :
                  block.attributes?.content?.uk">
        </p>
      </div>
    </section>

    <section class="more-blogs">
      <div class="title">
        {{ $t('blog.blogMore') }}
      </div>
      <div class="blogs-row flex">

        <div class="blogs-row-item"
             v-for="(item, index) in lastImplementationsList" v-bind:key="index"
        >
          <div class="blogs-row-item__img">
            <img v-bind:src='item.attributes.title_image' alt="" class="img-cover">
          </div>
          <div class="blogs-row-item__footer flex space-btw">
            <div class="title">
              {{ $i18n.locale === 'pl' ? item.attributes?.title?.pl :
                $i18n.locale === 'en' ? item.attributes?.title?.en :
                    item.attributes?.title?.uk }}
            </div>
            <NuxtLink
                v-html="$t('blogs.blogsBtn')"
                :to="{path: '/'+$i18n.locale+'/c-blog-page', query:{ id: item.id}}"
                class="btn-vue__ligth"
            >
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import BackButton from '@/components/BackButton'

export default {
  name: 'CBlogPage',
  layout: "cheader",
   
  data () {
    return {
      backBtnText:'Усі новини',
      btnText:'Читати',
      cArticle: {},
      lastImplementationsList: [],
      content:[]
    }
  },
  components: {
    BackButton,
    // Button,
  },
  computed: {
    getContent() {
      let compputedContent = this.content.filter(item => item.id === this.$route.query.id)
      return compputedContent
    }
  },
  mounted() {
    this.$axios
      .get('/api/v1/implementations')
      .then(response => {
        this.content = response.data.data

        response.data.data.forEach((article) => {
          if (article.id === this.$route.query.id) {
            this.cArticle = article
          }
        })

        this.lastImplementationsList = response.data.data.slice(-3)
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style scoped lang='scss'>

.c-blog-page {
  *{
    font-family: 'Montserrat', sans-serif;
  }

  .subpage-header__item {
    max-width: 553px;
  }

  .subpage-title {
    padding: 12px 20px 30px 0;
    font-size: 36px;
    line-height: 42px;
    text-transform: none;
  }
  .subpage-text {
    padding-right: 20px;
  }

  .subpage-header__img {
    position: relative;
    height: 330px;
    max-width: 627px;
    width: 100%;
    margin-right: -80px;
    margin-top: 58px;

    //&-sticker {
    //  position: absolute;
    //  top: 0;
    //  left: 0;
    //  width: 33%;
    //  height: 44%;
    //  background-image: url("~@/assets/images/citta/blog/header-sticker.svg");
    //  background-repeat: no-repeat;
    //  background-size: cover;
    //}
  }

  .more-blogs{
    padding: 48px 0 60px;

    .title {
      padding-bottom: 30px;
      font-weight: 700;
      font-size: 36px;
      line-height: 42px;
      color: #32404E;
    }

    .blogs-row {
      gap: 24px;

      &-item {
        width: 33.33%;

        &__img {
          width: 100%;
          height: 215px;
          overflow: hidden;
          margin-bottom: 12px;
        }

        .title {
          width: calc(100% - 115px);
          padding-bottom: 0;
          font-family: inherit;
          text-transform: none;
          font-size: 18px;
          line-height: 30px;
          font-weight: 400;
        }

        .btn-vue__ligth {
          height: 30px;
          padding: 0 36px 0 0;

          &:after {
            right: 0;
          }
        }
        .btn-vue__ligth:hover {
          &:after {
            right: -5px;
          }
        }
      }
    }
  }

  .article-section {
    padding-bottom: 48px;
    border-bottom: 1px solid #A0A8B1;
  }

  @media (max-width: 768px) {
    .subpage-header {
      padding-top: 84px;
      .subpage-header-wrap {
        flex-direction: column;

        .subpage-header__item {
          width: 100%;
          max-width: 100%;
        }

        .subpage-title {
          max-width: 100%;
          padding-top: 15px;
          padding-bottom: 15px;
          font-size: 32px;
          line-height: 44px;
        }

        .subpage-text {
          padding-bottom: 20px;
          width: 100%;
        }

        .subpage-header__img {
          margin-right: 0;
          height: 200px;
          max-width: 100%;
          margin-top: 0;

          img {
            height: 100%;
          }

          .subpage-header__img-sticker {
            width: 172px;
            height: 120px;
          }
        }
      }
    }

    .article-section {
      padding-bottom: 30px;

      .article-section-row {
        flex-direction: column;
        padding-top: 30px;

        .article-section-row__text {
          width: 100%;
          max-width: 100%;
          font-size: 14px;
          line-height: 24px;
        }

        .article-section-row__img {
          margin-left: 0;
          margin-bottom: 30px;
          height: 292px;
          width: 100%;
          text-align: center;

          img {
            object-fit: cover;
          }

          @media (max-width: 768px) {
            height: 200px;
          }
        }

        .article-section-row__img.no-img {
          height: 0;
        }
      }
    }

    .more-blogs {
      padding-top: 30px;

      .title {
        font-size: 24px;
        line-height: 36px;
        text-transform: uppercase;
      }

      .blogs-row {
        flex-direction: column;

        .blogs-row-item {
          width: 100%;

          .blogs-row-item__img {
            margin-bottom: 30px;
          }

          .blogs-row-item__footer {
            flex-direction: column;

            .title {
              font-weight: 700;
              font-size: 18px;
              line-height: 30px;
              color: #000;
            }

            .btn-vue__ligth {
              align-self: flex-end;
              font-size: 16px;
            }
          }
        }
      }
    }
  }

  @media (max-width: 520px) {
    .article-section {
      .article-section-row {
        .article-section-row__img {
          height: 192px;
        }
      }
    }

    .more-blogs {
      .blogs-row {
        .blogs-row-item {
          .blogs-row-item__img {
            height: 182px;
          }
        }
      }
    }
  }
}
</style>
