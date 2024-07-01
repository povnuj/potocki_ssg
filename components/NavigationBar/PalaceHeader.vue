<template>
  <header class='flex' id="mainHeader" v-bind:class="{ 'header-white': isDarkNav ||  $route.path !== localePath('/')}">
      <div class="content-wrap header-wrap flex space-btw">
        <nav class="flex space-btw">
          <div class="header__logo">
            <NuxtLinkLocale id="logoLink" to="index">  
              <img alt="Potocki palace" id="logoImgWhite" v-if="($route.path === localePath('/'))"
                   :src='
                      isDarkNav
                      ? logoSrc
                      : logoSrcWhite
                    '
              >
              <img alt="Potocki palace" v-else
                   :src='logoSrc'
              >
            </NuxtLinkLocale>
          </div>
          <div class="header__menu">
            <ul class="menu-list flex">
              <li class="fw-700">
                <NuxtLinkLocale to="citta-landing">Citta Ideale</NuxtLinkLocale>
              </li>
 
              <li>
                <NuxtLinkLocale to="events"> {{ $t('nav.events') }} </NuxtLinkLocale>
              </li>
              <li>
                <NuxtLinkLocale to="projects">{{ $t('nav.projects') }}</NuxtLinkLocale>
              </li>
              <li>
                <NuxtLinkLocale to="services">{{ $t('nav.services') }}</NuxtLinkLocale>
              </li>
              <li>
                <NuxtLinkLocale to="blogs">{{ $t('nav.blog') }}</NuxtLinkLocale>
              </li>
              <li>
                <NuxtLinkLocale to="contacts">{{ $t('nav.contacts') }}</NuxtLinkLocale>
              </li>
            </ul>
          </div>
         
          <div id='mobileMenu' class="header__menu-mobile">
            <div class="header__menu-mobile__icon"
                 @click="toggleMenu"
            >
              <i class="fa-solid fa-bars menu-icon"></i>
              <i class="fa-solid fa-xmark close-icon"></i>
            </div>
            <ul class="menu-list flex">
              <li class="lang-switch-mob-container">
                 <div id='langSwitchMob' class="lang-switch-mob">
                  <ClientOnly>
                    <NuxtLink class="uppercase fw-700 active" :to="switchLocalePath('ua')">Укр</NuxtLink>
                    <NuxtLink class="uppercase" :to="switchLocalePath('en')">Eng</NuxtLink>
                    <NuxtLink class="uppercase" :to="switchLocalePath('pl')">Pol</NuxtLink>
                  </ClientOnly>
                </div>

                <div class="header__contest-mob font-roboto-18">
                  <div class="header__contest-img">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.9473 9.05795C13.3082 9.63748 9.62968 13.3001 9.06736 17.9131C9.06736 18.029 8.97364 18.029 8.95021 17.9131C8.41133 13.3001 4.75626 9.63748 0.0702915 9.05795C-0.0234279 9.05795 -0.0234279 8.94205 0.0702915 8.94205C4.75626 8.36252 8.41133 4.72312 8.95021 0.086931C8.97364 -0.0289737 9.06736 -0.0289737 9.06736 0.086931C9.62968 4.72312 13.2847 8.36253 17.9473 8.94205C18.0176 8.94205 18.0176 9.05795 17.9473 9.05795Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <NuxtLinkLocale to="contest">{{ $t('nav.contest') }}</NuxtLinkLocale>
                </div>
              </li>
              <li class="fw-700">
                <NuxtLinkLocale to="citta-landing" class="uppercase">Citta Ideale</NuxtLinkLocale>
              </li>
 
              <li>
                <NuxtLinkLocale to="events" class="uppercase">{{ $t('nav.events') }}</NuxtLinkLocale>
              </li>
              <li>
                <NuxtLinkLocale to="projects" class="uppercase">{{ $t('nav.projects') }}</NuxtLinkLocale>
              </li>
              <li>
                <NuxtLinkLocale to="services" class="uppercase">{{ $t('nav.services') }}</NuxtLinkLocale>
              </li>
              <li>
                <NuxtLinkLocale to="blogs" class="uppercase">{{ $t('nav.blog') }}</NuxtLinkLocale>
              </li>
              <li>
                <NuxtLinkLocale to="contacts" class="uppercase">{{ $t('nav.contacts') }}</NuxtLinkLocale>
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
          <NuxtLinkLocale to="contest">{{ $t('nav.contest') }}</NuxtLinkLocale>
        </div>
  
        <div class="lang-switcher">
          <div class="dropdown fw-700">
            <a class="btn btn-secondary dropdown-toggle fw-700" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
              {{ $t('lang') }}
              <i class="fa-solid fa-chevron-down"></i>
            </a>
            <ClientOnly>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li><NuxtLink class="dropdown-item fw-700" :to="switchLocalePath('ua')">Укр</NuxtLink></li>
              <li><NuxtLink class="dropdown-item fw-700" :to="switchLocalePath('en')">Eng</NuxtLink></li>
              <li><NuxtLink class="dropdown-item fw-700" :to="switchLocalePath('pl')">Pol</NuxtLink></li>
            </ul>
          </ClientOnly>
          </div>
        </div>
      </div>
    </header>  
  </template>
  

<script setup>
import logoSrc from '@/public/images/main-logo.svg';
import logoSrcWhite from '@/public/images/main-logo-white.svg';
const switchLocalePath = useSwitchLocalePath();
const localePath = useLocalePath();

</script>

<script>

export default {
  data() {
    return {
      isDarkNav: false,
      isDefaultImage: true,

    }
  },

  unmounted() {
    window.removeEventListener("scroll", this.checkScroll);
  },
   methods: {
    checkScroll(){
      const section = document.getElementById('first-section-scroll');
      if(section){
        const sectionBottom = section.offsetTop + section.offsetHeight;
        this.isDarkNav = (window.scrollY + 96) > sectionBottom;
      }
    },
    toggleMenu() {
      const menu = document.getElementById('mainHeader')
      menu.classList.toggle('expand')
      this.isDefaultImage = !menu.classList.contains('expand');
      document.body.classList.toggle('expanded-menu')
     },
   },
   mounted(){
    window.addEventListener('scroll', this.checkScroll);
   },
}

</script>



<style lang='scss' scoped>
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
        //background-image: url("~@/public/images/contst_nav_icon.svg");
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
        //background-image: url("~@/public/images/contst_nav_icon.svg");
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
