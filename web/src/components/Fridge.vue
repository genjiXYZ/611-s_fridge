<template>
  <div id="Fridge">
    <div class="click bling">
      <p>click door to change !</p>
      <svg t="1608459840319" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2948" width="32" height="32">
        <path d="M512.853333 955.733333a17.015467 17.015467 0 0 1-12.066133-5.000533l-342.186667-342.186667A17.066667 17.066667 0 0 1 170.666667 579.413333h153.6V168.96c0.682667-27.460267 10.615467-51.131733 29.525333-70.724267C373.828267 78.882133 397.499733 68.949333 424.533333 68.266667H600.746667c27.016533 0.682667 50.158933 10.683733 69.239466 29.7472 16.896 16.878933 26.862933 36.590933 29.610667 58.589866 0.648533 4.488533 0.989867 9.284267 0.989867 14.062934 0 4.317867-0.290133 8.9088-0.853334 13.824V580.266667h154.453334a17.0496 17.0496 0 0 1 12.066133 29.1328l-341.333333 341.333333a17.015467 17.015467 0 0 1-12.066134 5.000533zM211.8656 613.546667L512.853333 914.5344 812.987733 614.4H682.666667a17.066667 17.066667 0 0 1-17.066667-17.066667V183.466667c0-0.699733 0.0512-1.416533 0.136533-2.116267 0.4608-3.805867 0.7168-7.3728 0.7168-10.683733 0-3.1744-0.238933-6.365867-0.682666-9.557334-1.8432-14.762667-8.3456-27.409067-19.9168-38.9632-12.8512-12.834133-27.7504-19.3024-45.533867-19.746133H424.96c-18.056533 0.4608-33.570133 6.980267-47.018667 19.968-12.561067 13.021867-19.080533 28.535467-19.541333 47.018667V596.48a17.066667 17.066667 0 0 1-17.066667 17.066667h-129.467733z" p-id="2949"></path>
      </svg>

    </div>

    <ul @click="fridgeClick" :class="[nth, test]">
      <li v-for="(name, n) in FridgeFloors" :key="n" :data-index="n + 1" @click="$route.params.position !== name && $router.push(`/foods/${name}`)"></li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nth: "open_1",
      test: "",
      FridgeFadeIn: "",
      FridgeFloors: ["fresher", "changer", "freezer"],
    };
  },

  methods: {
    fridgeClick(e) {
      this.test == "active" ? (this.test = "restart") : (this.test = "active");
      if (e.target.nodeName.toLowerCase() === "li") {
        const index = parseInt(e.target.dataset.index);
        this.nth = `open_${index}`;
      }
    },
    routeChangeDoor() {
      let floors = this.$route.params.position;
      let index = this.FridgeFloors.indexOf(floors) + 1;
    
      this.nth = `open_${index}`;
    },
  },
  mounted() {
    this.routeChangeDoor();
  },
};
</script>

<style lang="scss">
///setting

//real px

//isOpened
$open: rotateY(20deg);
// perspective(1000px)
$isOpened_bgcolor: linear-gradient(-60deg, #efeeed, #eeebe7);
//color shadow
$fridgeColor: #f4f3f2;
$fridgeShadow: 3px 10px 10px
    rgba(
      $color: #d7d3d0,
      $alpha: 0.7,
    ),
  4px 3px 2px white inset;

$fresher_shadow: 4px 5px 6px rgba(215, 211, 208, 1), 4px 4px 3px white inset,
  0px -3px 4px #dadada inset;
$changer_shadow: 4px 5px 6px rgba(215, 211, 208, 1), 4px 4px 3px white inset,
  0px -3px 4px #dadada inset;
$freezer_shadow: 4px 5px 12px rgba(#c7c1bd, 1), 4px 4px 3px white inset,
  0px -3px 4px #dadada inset;
$fridge_doorHandle_shadow: 1px 2px 2px #d2d4d4;

#Fridge {
  position: relative;
  z-index: 100;

  height: 6.4rem;
  width: 3.10rem;
  font-size: 0.16rem;
  user-select: none;
  
}

.click {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  position: absolute;
  bottom: calc(100% + 0.32rem);
  left: 50%;
  z-index: 100;
  transform: translateX(-50%);
  color: #d05240;
}
#Fridge > ul {
  box-sizing: border-box;

  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 20px;

  background-color: white;
  transition: all 0.75s ease-in-out;

  perspective-origin: left;
  perspective: 1000px;

  & > li {
    z-index: 110;
    // display: block;
    box-sizing: border-box;
    width: 100%;
    transform-origin: right;
    transform-style: preserve-3d;
    background-image: linear-gradient(-60deg, #efeeed, #fbfaf8);
    position: relative;
    transition: all 0.75s ease-in-out;
    cursor: pointer;

    &::before {
      content: "";
      width: 5px;
      height: 42px;
      position: absolute;
      left: 20px;
      border-radius: 10px;
      box-shadow: 1px 2px 2px #d2d4d4;
      background-image: linear-gradient(
        0deg,
        rgba($color: #87929f, $alpha: 0.7),
        rgba($color: #b8c7dc, $alpha: 0.7)
      );
    }
  }
  & > :nth-child(1) {
    height: 30%;
    box-shadow: $fresher_shadow;
    border-radius: 20px 20px 10px 10px;
    &::before {
      bottom: 20px;
    }
  }
  & > :nth-child(2) {
    height: 20%;
    box-shadow: $changer_shadow;

    border-radius: 10px;
    &::before {
      top: 50%;
      transform: translate(0, -50%);
    }
  }
  & > :nth-child(3) {
    height: 50%;
    border-radius: 10px 10px 20px 20px;
    box-shadow: $freezer_shadow;
    &::before {
      top: 20px;
    }
  }

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;

    z-index: -1;
    top: 0;
    left: 0;
    border-radius: 20px 20px 20px 20px;
    // box-shadow: $fridgeShadow;

    background-image: linear-gradient(
      90deg,
      rgba(#00fcff, 0%),
      #00fcff 10%,
      white
    );
  }
}

.open_1 {
  li:nth-child(1) {
    transform: $open;
    background-image: $isOpened_bgcolor !important;
  }
}
.open_2 {
  li:nth-child(2) {
    transform: $open;
    background-image: $isOpened_bgcolor !important;
  }
}
.open_3 {
  li:nth-child(3) {
    transform: $open;
    background-image: $isOpened_bgcolor !important;
  }
}

.bling {
  animation: bling 5s ease-in-out infinite alternate;
}

@keyframes bling {
  from {
    color: transparent;
    fill: transparent;
  }
  to {
    color: #d05240;
    fill: #d05240;
  }
}
</style>
