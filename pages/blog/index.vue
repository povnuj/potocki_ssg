<template>
  <div class="blog-page content-wrap">

    <div class="subpage-header">
      <NuxtLink :to="'/'+$i18n.locale+'/blogs'" class='router-back'>
        <BackButton v-html="$t('blog.blogBackBtn')"></BackButton>
      </NuxtLink>
      <div class="subpage-header-wrap flex space-btw">
        <div class="subpage-header__item">
          <div class="subpage-title">
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
        </div>
      </div>
    </div>

    <section class="article-section">
      <div class="article-section-row flex space-btw"
           v-for="(block, index) in getContent[0]?.attributes?.article_blocks?.data" v-bind:key="index">
        <div class="article-section-row__img" v-if="block.attributes.image">
          <img v-bind:src='block.attributes.image' alt="" class="img-cover">
        </div>
        <p class="article-section-row__text link-blue" v-html="$i18n.locale === 'pl' ? block.attributes?.content?.pl :
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
             v-for="(item, index) in lastArticlesList" v-bind:key="index">
          <div class="blogs-row-item__img">
            <img v-bind:src='item.attributes.title_image' alt="" class="img-cover">
          </div>
          <div class="art-date show-mobile">
            {{ $i18n.locale === 'pl' ? new Date(article.attributes.publish_date).toLocaleDateString('pl-PL') :
              $i18n.locale === 'en' ? new Date(article.attributes.publish_date).toLocaleDateString('en-GB') :
                  new Date(article.attributes.publish_date).toLocaleDateString('uk-UA') }}
          </div>
          <div class="blogs-row-item__footer flex space-btw">
            <div class="title">
              {{ $i18n.locale === 'pl' ? item.attributes?.title?.pl :
                $i18n.locale === 'en' ? item.attributes?.title?.en :
                    item.attributes?.title?.uk }}
            </div>
            <NuxtLink
                v-html="$t('blogs.blogsBtn')"
                :to="{path: '/'+$i18n.locale+'/blog', query:{ id: item.id}}"
                class="btn-vue__ligth"
            >
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

 <!--   <section class="form-section flex flex-wrap space-btw">

      <div class="blog-form flex">
        <div class="section-subtitle">
          {{ $t('blog.formTitle') }}
        </div>

        <form action="#" class="flex">
          <input type="text" :placeholder="$t('blog.formName')" v-model='authorName'>
          <input type="email" :placeholder="$t('blog.formEmail')" v-model='authorEmail'>
          <label for="fileUpload" class="file-btn-label">
            <span class="file-btn-label__description" id="fileDescription">
              {{ $t('blog.formFile') }} (pdf, docx)
            </span>
            <input type="file" placeholder="$t('blog.formFile') (pdf, docx)"
                   ref="file" v-on:change="handleFileUpload()"
                   id="fileUpload" class="file-btn"
                   accept=".doc, .docx, .pdf"
            >
          </label>
          <div class="btn-submit" @click="postForm()">
            {{ $t('blog.formSend') }}
          </div>
        </form>

      </div>
      <div class="form-section-img">
      </div>
    </section>
 -->   
  </div>
</template>

<script>
import BackButton from '@/components/BackButton'

export default {
  name: "Blog",
  data () {
    return {
      backBtnText:'Усі новини',
      btnText:'Читати',
      article: {},
      lastArticlesList: [],
      authorName: '',
      authorEmail: '',
      file: '',
      content:[]
    }
  },
  components: {
    BackButton,
  },
  computed: {
    getContent() {
      let compputedContent = this.content.filter(item => item.id === this.$route.query.id)
      return compputedContent
    }
  },
  mounted () {
    this.$axios
        .get('/api/v1/blogs')
        .then(response => {
          this.content = response.data.data

          response.data.data.forEach((article) => {
            if (article.id === this.$route.query.id) {
              this.article = article
            }
          })
          this.lastArticlesList = response.data.data.slice(-3)
        })
        .catch(error => {
          console.log(error)
        })
  },
  methods: {
    postForm(){
      this.$axios
          .post('/api/v1/received_articles', {
            author_name: this.authorName,
            author_email: this.authorEmail,
            article_file: this.file
          }, {headers: {
            'Content-Type': 'multipart/form-data'
          }})
          .then(response => {
            console.log(response)
          })
          .catch(error => {
            console.log(error)
          })
    },
    handleFileUpload(){
      this.file = this.$refs.file.files[0]
      document.getElementById('fileDescription').innerText = document.getElementById('fileUpload').files[0].name
    },
  },
}
</script>

<style lang='scss'>
.link-blue{
  p{

    a{
      color: #0d6efd !important;
      text-decoration: underline !important;
      }
  }
}
.blog-page {
  .subpage-text {
    max-width: 430px;
    font-size: 18px;
    line-height: 30px;
  }

  .subpage-title {
    max-width: 555px;
    font-size: 36px;
    line-height: 42px;
    padding: 0 0 30px 0;
  }

  .subpage-header {

    &-wrap {
      margin-top: 20px;
    }

    &__item {
      //align-self: center;
      margin-right: 20px;
    }

    &__img {
      max-width: 603px;
      width: 100%;
      height: 330px;
      margin-right: -81px;
      position: relative;

      //&:after {
      //  content: '';
      //  display: block;
      //  width: 324px;
      //  height: 324px;
      //  position: absolute;
      //  top: 0;
      //  left: -141px;
      //  background-image: url("~@/assets/images/blog-frame.svg");
      //}
    }
  }

  .article-section {
    padding-bottom: 48px;
    border-bottom: 1px solid #A0A8B1;
  }

  .more-blogs{
    padding: 48px 0 60px;

    .title {
      padding-bottom: 30px;
      font-family: 'Ermilov', sans-serif;
      font-size: 36px;
      line-height: 42px;
      text-transform: uppercase;
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

  .form-section {
    padding: 108px 0 60px;
    position: relative;

    &:before {
      content: '';
      display: block;
      width: 216px;
      height: 216px;
      position: absolute;
      top: 0;
      left: 0;
      margin-left: -81px;
      background-image: url("~@/assets/images/form-frame.svg");
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    }

    .blog-form,
    .blog-form form{
      flex-direction: column;
    }

    .blog-form {
      padding-left: 130px;

      .section-subtitle {
        padding:30px 0 60px;
        font-weight: 700;
      }

      form {
        width: 345px;

        input {
          border: none;
          outline: none;
          background: none;
        }

        input:not([type='submit']){
          height: 54px;
          border-bottom: 1px solid #32404E;
        }

        input:not(:last-child) {
          margin-bottom: 24px;
        }

        input:not([type='submit'])::placeholder {
          font-size: 18px;
          line-height: 30px;
          color: #A0A8B1;
        }

        .file-btn-label {
          position: relative;

          &:after {
            content: '';
            position: absolute;
            right: 0;
            display: block;
            width: 15px;
            height: 17px;
            background-image: url("~@/assets/images/pushpin-icon.svg");
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;
          }
        }

        .btn-submit {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          width: 147px;
          height: 48px;
          position: relative;
          padding-left: 12px;
          margin-top: 18px;
          margin-left: auto;
          text-align: left;
          background: #32404E;
          font-size: 18px;
          color:#fff;
          font-weight: 500;
          cursor: pointer;

          &:after {
            content: '';
            display: block;
            width: 26px;
            height: 22px;
            position: absolute;
            right: 12px;
            top: calc(50% - 11px);
            background-image: url("~@/assets/images/white-arrow.svg");
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            transition: all .3s ease-in-out;
          }
        }
        .btn-submit:hover:after {
          right: 7px;
          transition: all .3s ease-in-out;
        }
      }
    }

    .file-btn {
      opacity: 0;
      position: absolute;

      &-label {
        display: flex;
        align-items: center;
        height: 54px;
        border-bottom: 1px solid #32404E;
        font-size: 18px;
        line-height: 30px;
        color: #A0A8B1;

        &__description {
          opacity: .54;
        }
      }
    }

    .form-section-img {
      position: relative;
      margin-right: -81px;
      height: 430px;
      width: 50%;
      max-width: 634px;
      background-image: url("~@/assets/images/form-img.png");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;

      &:before {
        content: '';
        display: block;
        width: 324px;
        height: 108px;
        background-image: url("~@/assets/images/form-decor.svg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }

      &:after {
        content: '';
        display: block;
        width: 324px;
        height: 216px;
        position: absolute;
        bottom: 0;
        right: 0;
        background-image: url("~@/assets/images/form-decor-2.svg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }

    }
  }

  @media (max-width: 1100px) {
    .subpage-header {
      &__img {
        width: 50%;
      }
    }
  }

  @media (max-width: 1365px) {
    .form-section {
      .blog-form {
        padding-left: 30px;
      }
    }
  }

  @media (max-width: 1199px) {
    .subpage-header {
      .subpage-title {
        max-width: 400px;
      }
    }

    .form-section {
      .form-section-img {
        width: 40%;
      }
    }
  }

  @media (max-width: 992px) {
    .subpage-header {
      padding-top: 114px;

      &-wrap {
        flex-direction: column;

        .subpage-header__item {
          width: 100%;
          max-width: 100%;
          margin-right: 0;
          margin-bottom: 30px;

          .subpage-title {
            width: 100%;
            max-width: 100%;
            padding-bottom: 15px;
            font-size: 32px;
            line-height: 44px;
          }

          .subpage-text {
            font-size: 14px;
            line-height: 24px;
          }
        }

        .subpage-header__img {
          width: 100%;
          max-width: 100%;
          padding-left: 0;

          &:after {
            left: 0;
            top: auto;
            bottom: 0;
            height: 324px;
            width: 324px;
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
          }
        }
      }
    }

    .article-section {
      padding-bottom: 30px;
      .article-section-row {
        padding-top: 30px;
      }
      .article-section-row__text {
        width: 52%;
      }
    }

    .more-blogs {
      padding-top: 30px;
      padding-bottom: 30px;
      margin-bottom: 30px;
      border-bottom: 1px solid #A0A8B1;

      .title {
        font-size: 24px;
        line-height: 36px;
      }

      .blogs-row {
        flex-wrap: wrap;

        &-item {
          width: calc(50% - 12px);

          &__img {
            margin-bottom: 5px;
          }

          .art-date {
            margin-bottom: 5px;
            font-size: 12px;
            line-height: 18px;
            color: #A0A8B1;
          }

          &__footer {
            .title {
              font-size: 18px;
              line-height: 30px;
              font-weight: 700;
              color: #32404E;
            }
          }
        }
      }
    }

    .form-section {
      padding-top: 0;
      max-width: 650px;
      margin: 0 auto;
      padding-bottom: 45px;

      &:before {
        width: 120px;
        height: 120px;
        left: auto;
        right: 0;
        transform: rotate(90deg);
      }

      .form-section-img {
        display: none;
      }

      .blog-form {
        padding-left: 0;

        .section-subtitle {
          padding-left: 15px;
          padding-right: 120px;
          padding-bottom: 48px;
          font-size: 24px;
          line-height: 36px;
          font-weight: 700;
        }
        form {
          input:not([type='submit'])::placeholder {
            height: 44px!important;
            font-size: 14px!important;
            line-height: 24px!important;
          }

          .file-btn-label__description {
            font-size: 14px;
            line-height: 24px;
          }

          .btn-submit {
            margin-top: 30px;
            width: 128px;
            height: 42px;
            font-size: 14px;
          }
        }

        input:not(:last-child) {
          margin-bottom: 15px!important;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .subpage-header__img {
      height: 176px;
      margin-top: 28px;
      transition: all .3s ease;

      &:after {
        height: 201px!important;
        width: 201px!important;
      }
    }

    .article-section {
      .article-section-row__text {
        width: 100%;
        max-width: 100%;
        font-size: 14px;
        line-height: 24px;
      }

      .article-section-row {
        flex-direction: column;

        .article-section-row__img {
          width: 100%;
          height: 192px;
          margin-left: 0;
          margin-bottom: 30px;

          img{
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
    }

    .more-blogs {
      .blogs-row {

        &-item {
          padding: 15px 0;
          width: 100%;
          max-width: 530px;
          margin: 0 auto;

          &__img {
            height: 182px;

            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }

          &__footer {
            flex-direction: column;

            .title {
              width: 100%;
              margin-bottom: 15px;
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

}
</style>
