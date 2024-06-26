<template>
<div class="projects-page content-wrap">
  <div class="page-header">
      <div class="page-title">
        {{ $t('projects.title') }}
      </div>
  </div>
  <div class="projects-row row-pull-right">
    <div class="projects-row__item">
      <div class="title">
        Citta Ideale
      </div>
      <div class="content content-img-r flex">
        <div class="content-title">
          <div class="content-title__img">
            <img src="@/assets/images/icons/citta-ideale-logo.svg" alt="">
          </div>
        </div>
        <div class="content-text">
          {{ $t('projects.projectTitle') }}
        </div>
        <router-link :to="'/'+$i18n.locale+'/project'" class="projects-btn">
          <Button v-html="$t('projects.projectBtn')" class="btn-vue__ligth"></Button>
        </router-link>
        <div class="content-img">
          <img src="@/assets/images/citta-img.png" alt="">
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Button from '@/components/Button'

export default {
  name: "Projects",
  layout: "default",
  data () {
    return {
      btnText:'Детальніше про проєкт',
    }
  },
  components: {
    Button,
  },
}
</script>

<style lang='scss'>
.projects-page {
  .page-title {
    margin-top: 60px;
  }
}

.projects-row {
  overflow-x: hidden;
  padding-bottom: 60px;

  &__item {
    padding: 42px 0 120px 81px;
    width: 61%;
    background: #F9FAFB;

    .title {
      font-size: 30px;
      line-height: 36px;
      text-transform: uppercase;
      font-weight: 700;
      font-family: 'Ermilov', sans-serif;
    }

    .content {
      position: relative;
      flex-direction: column;
      justify-content: space-between;
      min-height: 480px;
      padding: 66px 0 42px 80px;
      background-color: #fff;

      &-text {
        width: 60%;
      }

      &-img {
        height: 100%;
        width: 50%;
        position: absolute;
        right: -50%;
        top: 0;
        overflow: hidden;

        img {
          height: 100%;
          width: auto;
          max-width: unset;
        }
      }
    }

    .content-img-r {
      &:after {
        content: '';
        display: block;
        width: 324px;
        height: 324px;
        position: absolute;
        top: 0;
        right: -162px;
        background-image: url("~@/assets/images/projects-frame.svg");
      }
    }

    &-img-l {
      width: 87%;
      max-width: 1117px;
    }
  }

  .projects-row__title {
    width: 80%;
    max-width: 1028px;
    padding: 15px 0 42px;
    font-size: 30px;
    line-height: 36px;
    text-transform: uppercase;
    font-weight: 700;
    font-family: 'Ermilov', sans-serif;
  }

  .projects-row__item-img-l {
    .projects-row__img {
      width: 473px;

      img{
        height: 100%;
        width: auto;
        max-width: unset;
      }
    }

    .projects-row__content {
      flex-direction: column;
      flex-grow: 1;
      padding: 66px 50px 36px 90px;
      background: #F9FAFB;
      position: relative;

      &:after {
        content: '';
        display: block;
        width: 324px;
        height: 324px;
        position: absolute;
        bottom: 0;
        left: -162px;
        background-image: url("~@/assets/images/projects-frame-2.svg");
      }

      .content-text {
        width: 75%;
        max-width: 361px;
      }

      .btn-vue__ligth {
        margin-left: auto;
      }

    }
  }

  &:last-child {
    padding-bottom: 170px;
  }
}

.projects-page {

  @media (max-width: 1200px) {
    .projects-row__item-img-l {
      width: 100%;
    }
  }

  @media (max-width: 1060px) {
    .projects-row__item-img-l {
      .projects-row__img {
        width: 350px;
      }
    }
  }

  @media (max-width: 992px) {

    .page-header {
      padding-top: 84px;

      .page-title {
        margin-top: 30px;
        padding-bottom: 30px;
        font-weight: 400;
        font-size: 32px;
        line-height: 44px;
      }
    }

    .projects-row.row-pull-right {
      margin-left: 0;
    }

    .projects-row {
      width: 100vw;
      margin-left: -15px!important;
      padding-left: 15px;
      padding-right: 15px;
      background: #F9FAFB;

      &:not(:last-child) {
        margin-bottom: 30px;
      }

      &__item {
        padding-top: 30px;
        padding-left: 0;
        background: #F9FAFB;

        .title {
          font-size: 24px;
          line-height: 36px;
        }

        .content {
          justify-content: start;
          min-height: auto;
          padding-left: 0;
          padding-top: 15px;
          background: #F9FAFB;

          &-title {
            margin-bottom: 30px;
          }
        }
      }

      .projects-row__title {
        width: 100%;
        padding-top: 30px;
        padding-bottom: 15px;
        font-size: 24px;
        line-height: 36px;
      }
    }

    .projects-row.projects-row-second {
      padding-bottom: 60px;
    }
  }

  @media (max-width: 800px) {
    .projects-row__item-img-l {
      .projects-row__img {
        width: 300px;
      }
    }
  }

  @media (max-width: 768px) {
    .projects-row {
      padding-bottom: 0;
    }

    .projects-row__item {
      width: 100%;
      padding-bottom: 30px;

      .content-text {
        max-width: 430px;
        width: 100%;
        padding-bottom: 30px;
      }

      .content {
        padding-bottom: 0;

        &:after {
          display: none;
        }

        .projects-btn {
          order: 2;
          margin-top: 30px;
          text-align: center;

          .btn-vue__ligth {
            margin: 0 auto;
            font-size: 16px;
            line-height: 24px;
          }
        }
      }

      .content-img {
        position: relative;
        right: 0;
        height: 299px;
        width: 100%;
        max-width: 345px;
        margin: 0 auto;
        text-align: center;

        &:after {
          content: '';
          display: block;
          width: 201px;
          height: 201px;
          position: absolute;
          top: 0;
          left: 0;
          background-image: url("~@/assets/images/projects-frame.svg");
          background-size: contain;
          background-repeat: no-repeat;
        }

        img {
          position: absolute;
          right: 0;
        }
      }
    }

    .projects-row.projects-row-second {
      padding-bottom: 30px;
      margin-bottom: 45px;
    }

    .projects-row__item-img-l {
      position: relative;
      padding-bottom: 84px;

      .flex {
        flex-direction: column;

        .projects-row__img {
          order: 2;
        }

        .projects-row__content {
          position: static;
          padding: 0;

          &:after {
            display: none;
          }

        }

        .content-text {
          width: 100%;
          max-width: 450px;
        }

        .content-title__img {
          margin-bottom: 30px;

          img {
            width: 168px;
          }
        }
      }

      .projects-row__img {
        position: relative;
        height: 286px;
        width: 100%;
        max-width: 345px;
        margin: 30px auto 0;

        img {
          width: 282px;
        }

        &:after {
          content: '';
          display: block;
          width: 160px;
          height: 193px;
          position: absolute;
          bottom: 0;
          left: auto;
          right: 0;
          background-image: url("~@/assets/images/projects-frame-2-m.svg");
          background-repeat: no-repeat;
          background-position: right;
          background-size: cover;
        }
      }

      .projects-btn {
        position: absolute;
        bottom: 6px;
        left: calc(50% - 114px);
        font-size: 16px;

        .btn-vue__ligth {
          font-size: inherit;
        }
      }
    }
  }
}

</style>