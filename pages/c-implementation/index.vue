<template>
  <div class="blogs-page blogs-page-implementation content-wrap">
    <div class="page-header flex space-btw">
      <div class="item-l flex">
        <div class="page-title fw-700">
          {{ $t('implementationC.title') }}
        </div>
      </div>
      <div class="page-header-img"></div>
    </div>

    <section class="blogs-section">

      <div class="blogs-row past-blogs flex flex-wrap space-btw">
        <div class="blogs-row__item" v-for="(item, index) in implementationList" v-bind:key="index">
          <div class="item__img">
            <img v-bind:src='item.attributes.title_image' alt="" class="img-cover">
          </div>
          <div class="item__date">
            {{ $i18n.locale === 'pl' ? new Date(item.attributes.publish_date).toLocaleDateString('pl-PL') :
              $i18n.locale === 'en' ? new Date(item.attributes.publish_date).toLocaleDateString('en-GB') :
                  new Date(item.attributes.publish_date).toLocaleDateString('uk-UA') }}
          </div>
          <div class="item__footer">
            <div class="title subpage-title">
              {{ $i18n.locale === 'pl' ? item.attributes.title.pl :
                $i18n.locale === 'en' ? item.attributes.title.en :
                    item.attributes.title.uk }}
            </div>
            <NuxtLink :to="{path: '/'+$i18n.locale+'/c-blog-page', query:{id: item.id}}" class="btn-details">
              {{ $t('blogs.blogsBtn') }}
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
  name: 'CImplementation',
  layout: "cheader",
  data () {
    return {
      implementationList: null
    }
  },
  mounted () {
    this.$axios
        .get('/api/v1/implementations')
        .then(response => {
          this.implementationList = response.data.data
        })
        .catch(error => {
          console.log(error)
        })
  },
}
</script>

<style lang='scss'>
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
      background-image: url("~@/assets/images/citta/implementation/header-img.png");
    }
  }
}

.blogs-section {
  padding: 60px 0 107px;
}

.blogs-row {
  row-gap: 48px;

  &__item {
    width: calc(50% - 12px);
    min-width: calc(50% - 12px);

    .item__img {
      height: 330px;
    }

    .no-image {
      background-image: url("~@/assets/images/blog-no-foto.png");
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

.blogs-page-implementation {
  *{
    font-family: 'Montserrat', sans-serif;
  }

  .page-header {
    padding-top: 124px;

    &-img {
      margin-right: -80px;
      width: 56%;
      max-width: 715px;
      height: 208px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
    }
  }

  .blogs-row {
    &__item {
      .item__footer {
        .title {
          font-weight: 700;
          font-size: 20px;
          line-height: 24px;
          color: #363B48;
          text-transform: none;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .page-header {
      flex-direction: column;

      .item-l {
        order: 2;
      }

      .page-title {
        padding-top: 30px;
        font-size: 32px;
        line-height: 44px;
      }

      .page-header-img {
        align-self: end;
        min-width: 240px;
        width: 85%;
        height: 120px;
      }
    }

    .blogs-section {
      padding-top: 45px;

      .blogs-row {
        row-gap: 30px;
      }

      .blogs-row__item {
        width: 100%;

        .item__date {
          padding: 5px 0;
          font-weight: 400;
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
            justify-content: flex-end;
            margin-top: 15px;
            margin-left: auto;
            text-align: right;
            position: static;
            font-size: 16px;
            line-height: 24px;
          }
        }
      }
    }
  }

  @media (max-width: 520px) {
    .blogs-section {

      .blogs-row__item {
        .item__img {
          height: 182px;
        }
      }
    }
  }
}

</style>
