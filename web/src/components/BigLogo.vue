<template>
  <div>
    <div class="logo">
      <div class="logo__text">
        <p>MY</p>
        <p>FRIDGE</p>
      </div>
    </div>

  </div>
</template>


<style lang="scss" scoped>
$logo__OffsetBottom: 0px;
.logo {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  box-sizing: border-box;
  user-select: none;

  width: 720px;


  &__text {
    position: relative;
    z-index: 3;
    box-sizing: border-box;
    text-align: left;
    font-size: 110px;
    line-height: 110px;
	color: #d2513b;
	font-weight: 200;
    
    &::before {
      position: absolute;
      bottom: $logo__OffsetBottom;
      left: -275px;
      z-index: -2;
      border-radius: 50%;

      content: "";
      width: 360px;
      height: 360px;
      background-image: radial-gradient(
        circle 80px at 26.11% 0.15%,
        #d2513b 0%,
        #f3f2f0 96%,
        #f3f2f0 100%
      );
      background-image: radial-gradient(
        circle 321px at 4.22% -5.19%,
        #d2513b 0%,
        #f3f2f0 96%,
        #f3f2f0 100%
      );
    }

    &::after {
      position: absolute;
      bottom: $logo__OffsetBottom;
      left: -98px;
      z-index: -1;
      border-radius: 50%;

      content: "";
      width: 360px;
      height: 360px;
      opacity: 0.8;
      background-image: radial-gradient(
        circle 80px at 35.15% 14.76%,
        #e2e1e0 0%,
        #f3f2f0 96%,
        #f3f2f0 100%
      );
    }
  }
}
</style>

