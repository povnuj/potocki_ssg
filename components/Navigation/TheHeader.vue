<template>
    <header class='flex header-white' id="mainHeader">
    <!--<header class='flex header-white' id="mainHeader" v-bind:class="{ active: isMain }">-->
    <div class="content-wrap header-wrap flex space-btw">
      <nav class="flex space-btw">
        <div class="header__logo">
          <NuxtLink :to="'/'+$i18n.locale"  id="logoLink" @click="scrollTop">
            <img alt="Potocki palace" id="logoImgWhite" v-if="(this.$route.path === '/')"
                 :src='isDefaultImage? logoSrcWhite : logoSrc'
            >
            <img alt="Potocki palace" v-else
                 :src='logoSrc'
            >
          </NuxtLink>
        </div>
        <div class="header__menu">
          <ul class="menu-list flex">
            <li class="fw-700">
              <NuxtLink :to="'/'+$i18n.locale+'/citta-landing'">Citta Ideale</NuxtLink>
            </li>
<!--            <li>-->
<!--              <div class="dropdown">-->
<!--                <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLinkPalace" data-bs-toggle="dropdown" aria-expanded="false">-->
<!--                  Про Палац <i class="fa-solid fa-chevron-down"></i>-->
<!--                </a>-->
<!--                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLinkPalace">-->
<!--                  <li><NuxtLink to="/" class="dropdown-item">Історія</NuxtLink></li>-->
<!--                  <li><NuxtLink to="/" class="dropdown-item">Концепція розвитку</NuxtLink></li>-->
<!--                  <li><NuxtLink to="/" class="dropdown-item">Партнери</NuxtLink></li>-->
<!--                  <li><NuxtLink to="/" class="dropdown-item">Звітність</NuxtLink></li>-->
<!--                </ul>-->
<!--              </div>-->
<!--            </li>-->
<!--            <li>-->
<!--              <div class="dropdown">-->
<!--                <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLinkPalace2" data-bs-toggle="dropdown" aria-expanded="false">-->
<!--                  Відвідати <i class="fa-solid fa-chevron-down"></i>-->
<!--                </a>-->
<!--                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLinkPalace2">-->
<!--                  <li><NuxtLink to="/" class="dropdown-item">Відвідати 1</NuxtLink></li>-->
<!--                  <li><NuxtLink to="/" class="dropdown-item">Відвідати 2</NuxtLink></li>-->
<!--                  <li><NuxtLink to="/" class="dropdown-item">Відвідати 3</NuxtLink></li>-->
<!--                  <li><NuxtLink to="/" class="dropdown-item">Відвідати 4</NuxtLink></li>-->
<!--                </ul>-->
<!--              </div>-->
<!--            </li>-->
            <li>
              <NuxtLink :to="'/'+$i18n.locale+'/events'">{{ $t('nav.events') }}</NuxtLink>
            </li>
            <li>
              <NuxtLink :to="'/'+$i18n.locale+'/projects'">{{ $t('nav.projects') }}</NuxtLink>
            </li>
            <li>
              <NuxtLink :to="'/'+$i18n.locale+'/services'">{{ $t('nav.services') }}</NuxtLink>
            </li>
            <li>
              <NuxtLink :to="'/'+$i18n.locale+'/blogs'">{{ $t('nav.blog') }}</NuxtLink>
            </li>
            <li>
              <NuxtLink :to="'/'+$i18n.locale+'/contacts'">{{ $t('nav.contacts') }}</NuxtLink>
            </li>
          </ul>
        </div>
       
        <div id='mobileMenu' class="header__menu-mobile">
          <div class="header__menu-mobile__icon"
               @click="toggleMenu()"
          >
            <i class="fa-solid fa-bars menu-icon"></i>
            <i class="fa-solid fa-xmark close-icon"></i>
          </div>
          <ul class="menu-list flex">
            <li class="lang-switch-mob-container">
               <div id='langSwitchMob' class="lang-switch-mob">
                <span class="uppercase fw-700 active" @click="switchLang('ua')">Укр</span>
                <span class="uppercase" @click="switchLang('en')">Eng</span>
                <span class="uppercase" @click="switchLang('pl')">Pol</span>
              </div>
              <div class="header__contest-mob font-roboto-18">
                <div class="header__contest-img">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.9473 9.05795C13.3082 9.63748 9.62968 13.3001 9.06736 17.9131C9.06736 18.029 8.97364 18.029 8.95021 17.9131C8.41133 13.3001 4.75626 9.63748 0.0702915 9.05795C-0.0234279 9.05795 -0.0234279 8.94205 0.0702915 8.94205C4.75626 8.36252 8.41133 4.72312 8.95021 0.086931C8.97364 -0.0289737 9.06736 -0.0289737 9.06736 0.086931C9.62968 4.72312 13.2847 8.36253 17.9473 8.94205C18.0176 8.94205 18.0176 9.05795 17.9473 9.05795Z" fill="currentColor"/>
                  </svg>
                </div>
                <NuxtLink :to="'/'+$i18n.locale+'/contest'">{{ $t('nav.contest') }}</NuxtLink>
              </div>
            </li>
            <li class="fw-700">
              <NuxtLink :to="'/'+$i18n.locale+'/citta-landing'" class="uppercase">Citta Ideale</NuxtLink>
            </li>
<!--            <li>-->
<!--              <div class="dropdown">-->
<!--                <a class="btn btn-secondary dropdown-toggle uppercase" href="#" role="button" id="dropdownMenuLinkPalaceMobile" data-bs-toggle="dropdown" aria-expanded="false">-->
<!--                  Про Палац <i class="fa-solid fa-chevron-down"></i>-->
<!--                </a>-->
<!--                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLinkPalaceMobile">-->
<!--                  <li><NuxtLink to="/" class="dropdown-item uppercase">Історія</NuxtLink></li>-->
<!--                  <li><NuxtLink to="/" class="dropdown-item uppercase">Концепція розвитку</NuxtLink></li>-->
<!--                  <li><NuxtLink to="/" class="dropdown-item uppercase">Партнери</NuxtLink></li>-->
<!--                  <li><NuxtLink to="/" class="dropdown-item uppercase">Звітність</NuxtLink></li>-->
<!--                </ul>-->
<!--              </div>-->
<!--            </li>-->
<!--            <li>-->
<!--              <div class="dropdown">-->
<!--                <a class="btn btn-secondary dropdown-toggle uppercase" href="#" role="button" id="dropdownMenuLinkPalaceMobile2" data-bs-toggle="dropdown" aria-expanded="false">-->
<!--                  Відвідати <i class="fa-solid fa-chevron-down"></i>-->
<!--                </a>-->
<!--                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLinkPalaceMobile2">-->
<!--                  <li><NuxtLink to="/" class="dropdown-item uppercase">Відвідати 1</NuxtLink></li>-->
<!--                  <li><NuxtLink to="/" class="dropdown-item uppercase">Відвідати 2</NuxtLink></li>-->
<!--                  <li><NuxtLink to="/" class="dropdown-item uppercase">Відвідати 3</NuxtLink></li>-->
<!--                  <li><NuxtLink to="/" class="dropdown-item uppercase">Відвідати 4</NuxtLink></li>-->
<!--                </ul>-->
<!--              </div>-->
<!--            </li>-->
            <li>
              <NuxtLink :to="'/'+$i18n.locale+'/events'" class="uppercase">{{ $t('nav.events') }}</NuxtLink>
            </li>
            <li>
              <NuxtLink :to="'/'+$i18n.locale+'/projects'" class="uppercase">{{ $t('nav.projects') }}</NuxtLink>
            </li>
            <li>
              <NuxtLink :to="'/'+$i18n.locale+'/services'" class="uppercase">{{ $t('nav.services') }}</NuxtLink>
            </li>
            <li>
              <NuxtLink :to="'/'+$i18n.locale+'/blogs'" class="uppercase">{{ $t('nav.blog') }}</NuxtLink>
            </li>
            <li>
              <NuxtLink :to="'/'+$i18n.locale+'/contacts'" class="uppercase">{{ $t('nav.contacts') }}</NuxtLink>
            </li>
          </ul>
        </div>
      </nav>

       <div class="header__contest font-roboto-18">
        <div class="header__contest-img">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.9473 9.05795C13.3082 9.63748 9.62968 13.3001 9.06736 17.9131C9.06736 18.029 8.97364 18.029 8.95021 17.9131C8.41133 13.3001 4.75626 9.63748 0.0702915 9.05795C-0.0234279 9.05795 -0.0234279 8.94205 0.0702915 8.94205C4.75626 8.36252 8.41133 4.72312 8.95021 0.086931C8.97364 -0.0289737 9.06736 -0.0289737 9.06736 0.086931C9.62968 4.72312 13.2847 8.36253 17.9473 8.94205C18.0176 8.94205 18.0176 9.05795 17.9473 9.05795Z" fill="currentColor"/>
          </svg>
        </div>
        <NuxtLink :to="'/'+$i18n.locale+'/contest'">{{ $t('nav.contest') }}</NuxtLink>
      </div>

      <div class="lang-switcher">
        <div class="dropdown fw-700">
          <a class="btn btn-secondary dropdown-toggle fw-700" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
            {{ $t('lang') }}
            <i class="fa-solid fa-chevron-down"></i>
          </a>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li><div class="dropdown-item fw-700" href="#" @click="switchLang('ua')">Укр</div></li>
            <li><div class="dropdown-item fw-700" href="#" @click="switchLang('en')">Eng</div></li>
            <li><div class="dropdown-item fw-700" href="#" @click="switchLang('pl')">Pol</div></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>

//import {useLocalePath} from "i18n"
//import { useI18n } from 'i18n'
export default {
   name: 'Header',
  data() {
    return {
      isDefaultImage: true,
      logoSrc: require ('@/assets/images/main-logo.svg'),
      logoSrcWhite: require ('@/assets/images/main-logo-white.svg'),
    }
  },
  beforeMount() {
      window.addEventListener("scroll", this.handleScroll)
      document.addEventListener('DOMContentLoaded', this.mainPageInit)
  },
  mounted() {
    this.getLocale()
    function vhToPixels(vh, height) {
      return Math.round((window.innerHeight / (100 / vh)) - height)
    }
    window.addEventListener('scroll', function() {
      const header = document.getElementById('mainHeader')
      if(header) {
        let screenHeight = vhToPixels(100, header.offsetHeight)
        const scrolled = window.pageYOffset || document.documentElement.scrollTop
        const mainPage = document.getElementById('mainPage')
        if (mainPage) {
          if (scrolled >= screenHeight) {
            header.classList.add('header-white')
            return (this.isDefaultImage = false)
          } else {
            header.classList.remove('header-white')
            return (this.isDefaultImage = true)
          }
        }
      }

    });
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll)
  },
  methods: {
    handleScroll() {
      const header = document.getElementById('mainHeader')
      if (header && header.classList.contains('header-white')) {
        return (this.isDefaultImage = false);
      }
      if (header && !header.classList.contains('header-white')) {
        if (!this.defaultImage) {
          return (this.isDefaultImage = true);
        }
      }
    },
    mainPageInit() {
      const header = document.getElementById('mainHeader')
      const mainPage = document.getElementById('mainPage')
      if (header) {
        header.classList.remove('header-white')
      }
      if(header && !mainPage) {
        header.classList.add('header-white')
        return (this.isDefaultImage = false)
      }
    },
    toggleMenu() {
      const menu = document.getElementById('mainHeader')
      menu.classList.toggle('expand')
      this.isDefaultImage = !menu.classList.contains('expand');

      document.body.classList.toggle('expanded-menu')
      // window.scroll(0,1)
    },
    switchLang(lang) {
      this.$i18n.locale = lang
       /*(() => {
        let url =  this.$route.path.split('/')
        url[1] = this.$i18n.locale
        url.join('/')
        this.$router.push(url);
      })();*/
      


      //this.$i18n.setLocale(lang)
      //console.log(this.$i18n.locale)
       
      //console.log(ser())
      //console.log("route",this.$router.push({name: this.$route.name.split('___')[0] + '___' + this.$i18n.locale})) 
      localStorage.setItem('lang', lang)
      if (document.getElementById('homePageTitle')) {
        if (lang === 'pl') {
          document.getElementById('homePageTitle').classList.add('first-screen-content__title_pol')
        } else {
          document.getElementById('homePageTitle').classList.remove('first-screen-content__title_pol')
        }
      }
      if (document.getElementById('langSwitchMob')) {
        let langMob = document.querySelectorAll('#langSwitchMob span')
        for (let item of langMob){
          item.classList.remove('active')
        }
        if(localStorage.getItem('lang') === 'ua') {
          langMob[0].classList.add('active')
        }
        if(localStorage.getItem('lang') === 'en') {
          langMob[1].classList.add('active')
        }
        if(localStorage.getItem('lang') === 'pl') {
          langMob[2].classList.add('active')
        }
      }
      console.log(this.$route.name.split('___')[0]+'___'+this.$i18n.locale)
       this.$router.push({name: this.$route.name.split('___')[0]+'___'+this.$i18n.locale, query: this.$route.query})
      //this.$router.replace({params: {lang: this.$i18n.locale}, query: this.$route.query})
    },
    changeTitle() {
      console.log('changeTitle');
    },
    scrollTop() {
      if (this.$route.path === '/') {
        location.reload()
      }
    },
    getLocale() {
      if (document.getElementById('langSwitchMob')) {
        let langMob = document.querySelectorAll('#langSwitchMob span')
        for (let item of langMob){
          item.classList.remove('active')
        }
        if(localStorage.getItem('lang') === 'ua') {
          langMob[0].classList.add('active')
        }
        if(localStorage.getItem('lang') === 'en') {
          langMob[1].classList.add('active')
        }
        if(localStorage.getItem('lang') === 'pl') {
          langMob[2].classList.add('active')
        }
      }
    }
  },
  watch: {
    '$route' (to, from) {
      if(to !== from ) {
        if (this.$route.path === '/') {
          document.getElementById('mainHeader').classList.remove('header-white')
        } else {
          document.getElementById('mainHeader').classList.add('header-white')
        }
      }
      if (window.matchMedia("(max-width: 1200px)").matches) {
        document.getElementById('mainHeader').classList.remove('expand')
        document.body.classList.remove('expanded-menu')
      }
      this.switchLang(localStorage.getItem('lang'))
    }
  }
  
};
</script>

<style lang="scss" >
body.expanded-menu {
  overflow: hidden;
  position:fixed;
}

header{
  height: 96px;
  position: fixed;
  z-index: 999;
  width: 100%;
  color: #fff;
  background-color: #0F1820;
  transition: all .3s ease-in-out;
  .header__contest{
    display: flex;
   // align-items: center;
    font-family: Roboto;
    font-size: 18px;
    line-height: 30px;
    font-weight: 700;
    &-img{
        margin-right: 8px;
        width: 18px;
        height: 18px;
        //background-image: url("~@/assets/images/contst_nav_icon.svg");
     }
    @media (max-width: 1200px) {
      display: none;
    }
  }
  .header__contest-mob{
    display: flex;
   // align-items: center;
    font-family: Roboto;
    font-size: 18px;
    line-height: 30px;
    font-weight: 700;
    &-img{
        margin-right: 8px;
        width: 18px;
        height: 18px;
        //background-image: url("~@/assets/images/contst_nav_icon.svg");
     }
  
  }

  .header-wrap {
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0 80px;

    nav {
      align-items: center;
      font-size: 18px;
    }

    .header__logo {
      margin-right: 70px;
      width: 160px;
    }

    .header__menu {
      li:not(:last-child) {
        margin-right: 14px;
        cursor: pointer;
      }

      &-mobile {
        display: none;
      }

      .menu-list {
        margin-bottom: 0;

        li:first-child {
          margin-right: 42px;
        }

        a{
          color: #fff;
          text-decoration: none;
        }

        .dropdown-toggle {
          background-color: transparent;
          border: none;
          font-size: 18px;
          padding: 0;
          transform: translateY(-2px);

          &:focus {
            box-shadow: none;
          }
        }

        .dropdown-menu {
          padding: 18px;
          border-radius: 0;
          border: none;
          top: 9px!important;

          li {
            margin-right: 0;
          }

          .dropdown-item {
            padding: 0;
            font-family: 'Roboto', sans-serif;
            cursor: pointer;

            &:hover {
              background-color: transparent;
            }
          }

          li:not(:last-child) {
            margin-bottom: 18px;
          }
        }

      }
    }

    .lang-switcher {
      font-size: 16px;
      text-transform: uppercase;

      .dropdown-toggle {
        background-color: transparent;
        border: none;
        font-weight: 700;

        &:focus {
          box-shadow: none;
        }
      }

      .dropdown-menu {
        width: 110px!important;
        min-width: 110px!important;
        left: -26px!important;
        border-radius: 0;
        border: none;

        .dropdown-item {
          font-weight: 700;
          text-align: center;
          cursor: pointer;

          &:hover {
            background-color: transparent;
          }
        }

        li:not(:last-child) {
          margin-bottom: 18px;
        }
      }

    }

    .header__menu,
    .lang-switcher {
      .dropdown-toggle {
        &:after {
          border: none;
        }

        i{
          margin-left: 5px;
          transform: translateY(-2px);
          font-size: 14px;
          transition: transform .5s ease;
        }
      }

      .dropdown-toggle.show {
        i {
          transform: rotate(180deg);
          transition: transform .5s ease;
        }
      }
    }
  }

  @media (max-width: 1244px) {
    .header-wrap {
      //padding: 0 15px;

      .header__logo {
        margin-right: 30px;
        width: 120px;
      }

      .menu-list {
        //padding-left: 0;
      }
    }
  }

  @media (max-width: 1200px) {
    height: 84px;

    .header-wrap {
      .header__menu {
        display: none;
      }

      nav {
        width: 100%;
      }

      .lang-switcher {
        display: none;
      }

      .header__menu-mobile {
        display: block;
        //position: relative;

        * {
          transition: all .5s ease;
        }

        &__icon {
          cursor: pointer;
          font-size: 24px;
          font-weight: 300;
        }

        .close-icon {
          display: none;
        }

        .menu-list {
          position: absolute;
          left: 0;
          top: -1000px;
          width: 100vw;
          flex-direction: column;
          padding: 10px 81px 45px;
          background-color: #fff;
          font-size: 14px;
          line-height: 24px;
          color: #32404E;

          & > li:not(:last-child) {
            border-bottom: 1px solid #E1E3E5;
          }

          & > li {
            padding: 10px 0;

            a{
              display: block;
              width: 100%;
              height: 100%;
            }
          }

          .dropdown {
            .dropdown-toggle {
              display: flex;
              justify-content: space-between;
              align-items: center;
              text-align: left;
              font-size: 14px;
              line-height: 24px;

              &:after {
                display: none;
              }
            }

            .dropdown-menu.show {
              position: static!important;
              font-size: 14px;
              line-height: 24px;
              transform: translate(0px, 0px)!important;
            }
          }
          .lang-switch-mob-container{
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
          }

          .lang-switch-mob {
            margin-bottom: 30px;
            font-size: 16px;
            line-height: 24px;
            border-bottom: none!important;

            span {
              display: inline-block;
              font-family: 'Ermilov', sans-serif;
              cursor: pointer;
              color: #A0A8B1;
            }
            span:not(:last-child) {
              margin-right: 30px;
            }

            span.active {
              color: #32404E;;
            }
          }

        }

        .dropdown-toggle {
          background-color: transparent;
          border: none;
          font-size: 18px;
          padding: 0;
          transform: translateY(-2px);

          &:focus {
            box-shadow: none;
          }
        }

        .dropdown-menu {
          padding: 18px;
          border-radius: 0;
          border: none;
          top: 9px!important;

          li {
            margin-right: 0;
          }

          .dropdown-item {
            padding: 0;
            font-family: 'Roboto', sans-serif;

            &:hover {
              background-color: transparent;
            }
          }

          li:not(:last-child) {
            margin-bottom: 18px;
          }
        }

        .dropdown-toggle {
          &:after {
            border: none;
          }

          i{
            margin-left: 5px;
            transform: translateY(-2px);
            font-size: 14px;
            transition: transform .5s ease;
          }
        }

        .dropdown-toggle.show {
          i {
            transform: rotate(180deg);
            transition: transform .5s ease;
          }
        }
      }
    }

    &.expand {
      background-color: #fff;

      .header__menu-mobile__icon {
        .menu-icon {
          display: none;
        }
        .close-icon {
          display: block;
          color: #32404E;;
        }
      }

      ul.menu-list {
        top: 84px!important;
      }
    }

  }

  @media (max-width: 992px) {
    .header-wrap {
      padding: 0 15px;
    }

    .menu-list {
      padding: 10px 15px 45px!important;
    }

  }
}

.header-white {
  color: #32404E;
  background-color: #fff;
  transition: all .3s ease-in-out;
}
</style>
