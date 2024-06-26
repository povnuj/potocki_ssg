<template>
  <div class="restoration-page content-wrap">
    <div class="page-header flex space-btw">
      <div class="item-l">
        <div class="page-title">
          {{ $t('restoration.title') }}
        </div>
        <div class="page-subtitle">
          {{ $t('restoration.subtitle') }}
        </div>
      </div>
      <div class="page-header-img"></div>
    </div>

    <section class="restoration-main flex space-btw">
      <div class="restoration-scheme hide-mobile">
        <img :src="imgA" alt="" id="scheme" usemap="#map">
        <map name="map" id="imageMap">
          <area shape="rect" coords="793,505,795,507" alt="Image Map" style="outline:none;" title="Image Map" />
          <area
              @mouseleave="showShape($event)"
              @mouseover="showShape($event, 'a')"
              @click="showShape($event, 'a')"
              title="A" shape="poly"
              coords="221,254,133,205,136,171,132,168,167,146,205,169,206,155,202,155,218,140,220,120,214,116,250,98,336,150,336,185" style="outline:none;" alt="" />
          <area
              @mouseleave="showShape($event)"
              @mouseover="showShape($event, 'b')"
              @click="showShape($event, 'b')"
              title="B" shape="poly"
              coords="348,175,347,125,344,121,355,114,356,103,410,68,420,73,429,69,497,109,496,126,505,159,504,166,490,165,431,197,417,191,400,205" style="outline:none;" alt="" />
          <area
              @mouseleave="showShape($event)"
              @mouseover="showShape($event, 'v')"
              @click="showShape($event, 'v')"
              title="V" shape="poly"
              coords="192,275,190,252,191,248,168,221,136,215,111,201,70,227,73,235,72,258,83,266,131,293,142,304" style="outline:none;" alt="" />
          <area
              @mouseleave="showShape($event)"
              @mouseover="showShape($event, 'g')"
              @click="showShape($event, 'g')"
              title="G" shape="poly"
              coords="341,415,342,404,335,401,402,362,430,363,457,396,455,402,456,423,452,431,451,446,440,455,394,446" style="outline:none;" alt="" />
          <area
              @mouseleave="showShape($event)"
              @mouseover="showShape($event, 'd')"
              @click="showShape($event, 'd')"
              title="D" shape="poly"
              coords="486,404,450,383,449,373,449,371,566,299,605,323,603,339" style="outline:none;" target="_self" alt="" />
          <area
              @mouseleave="showShape($event)"
              @mouseover="showShape($event, 'j')"
              @click="showShape($event, 'j')"
              title="J" shape="poly"
              coords="500,239,500,222,497,216,557,182,583,198,581,212,606,208,640,231,635,251,654,247,679,261,676,269,678,286,630,312" style="outline:none;" alt="" />
<!--          <area-->
<!--              @mouseleave="showShape($event)"-->
<!--              @mouseover="showShape($event, 'k')"-->
<!--              @click="showShape($event, 'k')"-->
<!--              title="K1" shape="poly"-->
<!--              coords="539,141,539,129,558,114,640,158,642,177,628,170,622,174,622,186" style="outline:none;" alt="" />-->

          <!--           ----------------------  -->
          <area
              @mouseleave="showShape($event)"
              @mouseover="showShape($event, 'fence')"
              @click="showShape($event, 'fence')"
              title="fence" shape="poly"
              coords="396,462,394,449,407,441,440,458,456,470,492,479,521,462,527,475,497,493,434,476" style="outline:none;" alt="" />
          <area
              @mouseleave="showShape($event)"
              @mouseover="showShape($event, 'fence')"
              @click="showShape($event, 'fence')"
              title="fence" shape="poly"
              coords="725,308,735,311,749,318,794,282,793,263,629,173,624,190,769,276" style="outline:none;" alt="" />
          <area
              @mouseleave="showShape($event)"
              @mouseover="showShape($event, 'fence')"
              @click="showShape($event, 'fence')"
              title="fence" shape="poly"
              coords="340,426,341,417,259,371,256,362,243,343,241,346,238,355,228,343,226,336,222,331,218,335,211,335,207,343,137,299,136,312" style="outline:none;" alt="" />
          <area
              @mouseleave="showShape($event)"
              @mouseover="showShape($event, 'fence')"
              @click="showShape($event, 'fence')"
              title="fence" shape="poly"
              coords="82,266,22,229,132,173,128,164,165,143,177,147,214,130,213,117,244,99,241,97,205,115,157,142,6,220,4,236,82,282" style="outline:none;" alt="" />
          <area
              @mouseleave="showShape($event)"
              @mouseover="showShape($event, 'fence')"
              @click="showShape($event, 'fence')"
              title="fence" shape="poly"
              coords="413,57,411,66,421,71,429,66" style="outline:none;" alt="" />
          <area
              @mouseleave="showShape($event)"
              @mouseover="showShape($event, 'fence')"
              @click="showShape($event, 'fence')"
              title="fence" shape="poly"
              coords="539,124,537,129,537,138,499,119,498,111,501,107" style="outline:none;" alt="" />

          <!--           ----------------------  -->

          <area
              @mouseleave="showShape($event)"
              @mouseover="showShape($event, 'k3')"
              @click="showShape($event, 'k3')"
              title="K1" shape="poly"
              coords="538,142,538,128,557,113,640,158,641,179,624,174,621,175,622,189" style="outline:none;" alt="" />
          <area
              @mouseleave="showShape($event)"
              @mouseover="showShape($event, 'k')"
              @click="showShape($event, 'k')"
              title="K2" shape="poly"
              coords="525,460,525,473,493,497,435,478,395,461,393,452,407,444,436,458,492,480" style="outline:none;" alt="" />
          <area
              @mouseleave="showShape($event)"
              @mouseover="showShape($event, 'k')"
              @click="showShape($event, 'k')"
              title="K3" shape="poly"
              coords="338,419,336,427,131,310,135,298,207,341,211,335,222,331,227,345,239,353,241,343,255,360,259,373" style="outline:none;" alt="" />
          <area
              @mouseleave="showShape($event)"
              @mouseover="showShape($event, 'k')"
              @click="showShape($event, 'k')"
              title="K4" shape="poly"
              coords="84,268,83,279,3,234,5,219,243,93,247,102,24,224,74,259" style="outline:none;" alt="" />
          <area
              @mouseleave="showShape($event)"
              @mouseover="showShape($event, 'z')"
              @click="showShape($event, 'z')"
              title="Z" shape="poly"
              coords="526,472,540,479,620,427,627,432,713,371,713,366,748,336,746,327,737,312,724,311,698,328,679,328,591,388,595,398,516,450,517,460,526,461" style="outline:none;" alt="" />
          <area
              @mouseleave="showShape($event)"
              @mouseover="showShape($event, 'l')"
              @click="showShape($event, 'l')"
              title="L" shape="poly"
              coords="247,91,385,27,391,40,405,50,412,57,413,70,397,75,381,68,289,116" style="outline:none;" alt="" />
        </map>
      </div>
      <div class="restoration-scheme restoration-scheme-mob show-mobile">
        <img src="@/assets/images/palace-scheme-m.svg" alt="" >
      </div>
      <div class="restoration-description hide-mobile" id="restorationDescription">
        <div class="restoration-item restoration-item-default" id="title-default">
        <!--  <div class="title title-default">
            {{ $t('restoration.complex.aboutTitle') }}
          </div>-->
          <div class="desc desc-default">
            {{ $t('restoration.complex.aboutText') }}
          </div>
        </div>
        <div class="restoration-item hide" id="title-a">
          <div class="title title-a">
            {{ $t('restoration.complex.buildingA.title') }}
          </div>
          <div class="desc desc-a">
            {{ $t('restoration.complex.buildingA.description') }}
          </div>
        </div>
        <div class="restoration-item hide" id="title-b">
          <div class="title title-b" >
            {{ $t('restoration.complex.buildingB.title') }}
          </div>
          <div class="desc desc-b">
            {{ $t('restoration.complex.buildingB.description') }}
          </div>
        </div>
        <div class="restoration-item hide" id="title-v">
          <div class="title title-v " >
            {{ $t('restoration.complex.buildingC.title') }}
          </div>
          <div class="desc desc-v">
            {{ $t('restoration.complex.buildingC.description') }}
          </div>
        </div>
        <div class="restoration-item hide" id="title-g">
          <div class="title title-g ">
            {{ $t('restoration.complex.buildingD.title') }}
          </div>
          <div class="desc desc-g">
            {{ $t('restoration.complex.buildingD.description') }}
          </div>
        </div>
        <div class="restoration-item hide" id="title-d">
          <div class="title title-d " >
            {{ $t('restoration.complex.buildingE.title') }}
          </div>
          <div class="desc desc-d">
            {{ $t('restoration.complex.buildingE.description') }}
          </div>
        </div>
        <div class="restoration-item hide" id="title-j">
          <div class="title title-j " >
            {{ $t('restoration.complex.buildingF.title') }}
          </div>
          <div class="desc desc-j">
            {{ $t('restoration.complex.buildingF.description') }}
          </div>
        </div>
        <div class="restoration-item hide" id="title-z">
          <div class="title title-z" >
            {{ $t('restoration.complex.buildingG.title') }}
          </div>
          <div class="desc desc-z">
            {{ $t('restoration.complex.buildingG.description') }}
          </div>
        </div>
        <div class="restoration-item hide" id="title-k3">
          <div class="title title-k " >
            {{ $t('restoration.complex.buildingH.title') }}
          </div>
          <div class="desc desc-k">
            {{ $t('restoration.complex.buildingH.description') }}
          </div>
        </div>
        <div class="restoration-item hide" id="title-fence">
          <div class="title title-fence " >
            {{ $t('restoration.complex.fence.title') }}
          </div>
          <div class="desc desc-fence">
            {{ $t('restoration.complex.fence.description') }}
          </div>
        </div>
        <div class="restoration-item hide" id="title-l">
          <div class="title title-l">
            {{ $t('restoration.complex.buildingI.title') }}
          </div>
          <div class="desc desc-l">
            {{ $t('restoration.complex.buildingI.description') }}
          </div>
        </div>
      </div>
      <div class="restoration-description restoration-description-mob show-mobile">
        <details @click="activeTitle($event, 0)">
          <summary class="title" >
            {{ $t('restoration.complex.buildingA.title') }}
            <span class="icon-caption">Дізнатися деталі</span>
          </summary>
          <p class="desc">
            {{ $t('restoration.complex.buildingA.description') }}
          </p>
        </details>
        <details @click="activeTitle($event, 1)">
          <summary class="title" >
            {{ $t('restoration.complex.buildingB.title') }}
            <span class="icon-caption">Дізнатися деталі</span>
          </summary>
          <p class="desc">
            {{ $t('restoration.complex.buildingB.description') }}
          </p>
        </details>
        <details @click="activeTitle($event, 2)">
          <summary class="title" >
            {{ $t('restoration.complex.buildingC.title') }}
            <span class="icon-caption">Дізнатися деталі</span>
          </summary>
          <p class="desc">
            {{ $t('restoration.complex.buildingC.description') }}
          </p>
        </details>
        <details @click="activeTitle($event, 3)">
          <summary class="title" >
            {{ $t('restoration.complex.buildingD.title') }}
            <span class="icon-caption">Дізнатися деталі</span>
          </summary>
          <p class="desc">
            {{ $t('restoration.complex.buildingD.description') }}
          </p>
        </details>
        <details @click="activeTitle($event, 4)">
          <summary class="title" >
            {{ $t('restoration.complex.buildingE.title') }}
            <span class="icon-caption">Дізнатися деталі</span>
          </summary>
          <p class="desc">
            {{ $t('restoration.complex.buildingE.description') }}
          </p>
        </details>
        <details @click="activeTitle($event, 5)">
          <summary class="title" >
            {{ $t('restoration.complex.buildingF.title') }}
            <span class="icon-caption">Дізнатися деталі</span>
          </summary>
          <p class="desc">
            {{ $t('restoration.complex.buildingF.description') }}
          </p>
        </details>
        <details @click="activeTitle($event, 6)">
          <summary class="title" >
            {{ $t('restoration.complex.buildingG.title') }}
            <span class="icon-caption">Дізнатися деталі</span>
          </summary>
          <p class="desc">
            {{ $t('restoration.complex.buildingG.description') }}
          </p>
        </details>
        <details @click="activeTitle($event, 7)">
          <summary class="title" >
            {{ $t('restoration.complex.buildingH.title') }}
            <span class="icon-caption">Дізнатися деталі</span>
          </summary>
          <p class="desc">
            {{ $t('restoration.complex.buildingH.description') }}
          </p>
        </details>
        <details @click="activeTitle($event, 8)">
          <summary class="title" >
            {{ $t('restoration.complex.buildingI.title') }}
            <span class="icon-caption">Дізнатися деталі</span>
          </summary>
          <p class="desc">
            {{ $t('restoration.complex.buildingI.description') }}
          </p>
        </details>
      </div>
    </section>
  </div>
</template>
<!--
<script>
export default {
  name: "Restoration",
  layout: "default",
  data () {
    return {
      imgA: require('/src/assets/images/scheme/scheme.png'),
    }
  },
  methods: {
    activeTitle(event, currentIndex) {
      const details = document.querySelectorAll('.restoration-description-mob details')

      event.target.classList.add('active')

      if (!event.target.classList.contains('active')) {
        event.target.classList.remove('active')
        event.target.querySelector('.icon-caption').textContent = 'Дізнатися деталі'
      } else {
        event.target.querySelector('.icon-caption').textContent = 'Згорнути'
      }

      details.forEach((item, index) => {
        if (currentIndex !== index ) {
          item.removeAttribute('open')
          item.querySelector('.icon-caption').textContent = 'Дізнатися деталі'
          item.classList.remove('active')
        }
      })
    },

    showShape(e, imgIndex) {
      event.preventDefault()

      // console.log(sessionStorage.getItem('currentIndex'));

      if (e.type === 'click') {
        sessionStorage.setItem('currentIndex', imgIndex)
        this.imgA = require('/src/assets/images/scheme/' + imgIndex + '.png')
        document.querySelectorAll('#restorationDescription .restoration-item').forEach((item) => {
          if (!item.classList.contains('hide')) {
            item.classList.add('hide')
          }
          if(item.id === 'title-' + imgIndex) {
            item.classList.remove('hide')
          }
        })
      }

      if (e.type === 'mouseover') {
        this.imgA = require('/src/assets/images/scheme/' + imgIndex + '.png')
        console.log(imgIndex);
      }

      if (e.type === 'mouseleave') {
        if (sessionStorage.getItem('currentIndex')) {
          this.imgA = require('/src/assets/images/scheme/' + sessionStorage.getItem('currentIndex') + '.png')
        } else {
          this.imgA = require('/src/assets/images/scheme/scheme.png')
        }
      }
    },

    fixImageMaps() {
      const img = document.getElementById("scheme");

        if (!img.naturalHeight) { return; }
        let h = img.height / img.naturalHeight;
        let w = img.width / img.naturalWidth;
        let map = document.getElementById("imageMap");
        if (!map) { return; }
        for (let i = 0; i < map.children.length; i++) {
          let area = map.children[i];
          if (!area.coords) { continue; }
          let coords = area.coords;
          if (!area.originalCoords) {
            area.originalCoords = coords;
          } else {
            coords = area.originalCoords;
          }
          let split = coords.split(",")
          let fixed = "";
          split.forEach(function(coord, n) {
            if (n != 0) { fixed += ","; }
            fixed += n % 2 == 0 ? Number(coord) * w : Number(coord) * h;
          })
          area.coords = fixed;
        }

    },

  },

  mounted() {
    sessionStorage.removeItem('currentIndex')
    document.querySelectorAll('#restorationDescription .restoration-item').forEach((item) => {
      if (!item.classList.contains('hide')) {
        item.classList.add('hide')
      }
      if(item.classList.contains('restoration-item-default')) {
        item.classList.remove('hide')
      }
    })
  },

  updated() {
    this.fixImageMaps()
  }
}
</script>

<style lang='scss'>

.restoration-page {

  .page-header {
    .item-l {
      max-width: 490px;
    }

    .page-title {
      padding-top: 60px;
      padding-bottom: 30px;
    }

    &-img {
      width: 45%;
      max-width: 570px;
      height: 228px;
      background-image: url("~@/assets/images/restoration-header.svg");
    }
  }

  .restoration-main {
    padding: 30px 0 60px;

    .restoration-scheme {
      position: relative;
      width: 792px!important;

      area {
        cursor: pointer;
      }

      img {
        display: block;
        width: 100%;
        height: auto;
        object-fit: contain;
      }
    }

    .restoration-description {
      width: 332px;
      padding-top: 48px;
      padding-left: 20px;

      .title {
        padding-bottom: 18px;
        font-weight: 700;
        font-size: 18px;
        line-height: 30px;
      }
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
        padding-top: 0;
        padding-bottom: 15px;
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

    .restoration-main {
      flex-direction: column;
      padding-top: 0;

      .restoration-scheme {
        width: 100%;
        max-width: 100%;
      }

      .restoration-description-mob {
        width: 100%;
        max-width: 500px;
        align-self: center;
        padding: 30px 0 0 0;

        details {
          border-bottom: 1px solid #E1E3E5;

          &:first-child {
            border-top: 1px solid #E1E3E5;
          }

          summary.title {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 13px 10px 4px;
            list-style-type: none;
            font-size: 14px;

            span {
              margin-left: auto;
              font-weight: 400;
              font-size: 12px;
              line-height: 18px;
              pointer-events: none;
            }

            &:after {
              content: '';
              margin-left: 14px;
              display: block;
              width: 14px;
              height: 8px;
              background-image: url("~@/assets/images/icons/dropdown-arrow-dark.svg");
              background-position: center;
              background-repeat: no-repeat;
              background-size: contain;
              pointer-events: none;
            }
          }
        }

        details[open] > summary {
          &:after {
            content: '';
            display: block;
            width: 11px;
            height: 11px;
            background-image: url("~@/assets/images/icons/close.svg");
          }
        }
      }
    }
  }
}

</style>
-->