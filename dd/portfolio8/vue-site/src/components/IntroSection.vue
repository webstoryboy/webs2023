<script setup>
import { introText } from "@/constants/index";
</script>

<template>
  <section id="intro">
    <div class="intro__inner">
      <h1 class="intro__title">{{ introText.title }}</h1>
      <div class="intro__lines" aria-hidden="true">
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
      </div>
      <div class="intro__text">
        <div class="text">
          <div>{{ introText.desc[0] }}</div>
          <div>{{ introText.desc[1] }}</div>
          <div>{{ introText.desc[2] }}</div>
        </div>
        <div className="img">
          <img src="@/assets/img/about.jpg" alt="어바웃" />
        </div>
      </div>
      <div class="intro__lines bottom" aria-hidden="true">
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/_mixin.scss";

#intro {
  height: 100vh;
}
.intro__inner {
  width: 100%;
  height: 100%;
  padding: 16px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;

  @media (max-width: 800px) {
    justify-content: center;
  }

  .intro__title {
    font-size: 10vw;
    text-transform: uppercase;
    text-indent: -0.5vw;
    line-height: 1;
    letter-spacing: -0.3vw;
    font-weight: 800;
    white-space: nowrap;

    @media (max-width: 800px) {
      display: none;
    }
  }
  .intro__text {
    width: 100%;
    height: 40vh;
    @include flex-center;
    flex-direction: column;
    background-color: var(--black);
    position: relative;

    .text {
      color: var(--white);
      text-align: center;
      font-size: 3vw;
      line-height: 1;
      font-weight: 900;
      text-transform: uppercase;
      text-decoration: underline;
      position: relative;
      z-index: 100;
      font-weight: 700;
      letter-spacing: -0.1vw;
      transition: all 0.3s;
      cursor: all-scroll;
      padding: 0 16px;

      @media (max-width: 800px) {
        font-size: 24px;
        margin-top: 180px;
      }

      &:hover {
        opacity: 0;
      }
      &:hover + .img {
        filter: grayscale(0);
      }
    }
    .img {
      @include position-center;
      width: 30vh;
      height: 30vh;
      border-radius: 50%;
      overflow: hidden;
      filter: grayscale(100%);
      transition: filter 0.3s;
    }
  }
}

.intro__lines {
  width: 100%;

  .line {
    display: block;
    width: 100%;
    background-color: var(--black);
    margin-bottom: 0.5vw;

    &:nth-child(1) {
      height: 1px;
    }
    &:nth-child(2) {
      height: 2px;
    }
    &:nth-child(3) {
      height: 5px;
    }
    &:nth-child(4) {
      height: 9px;
    }
    &:nth-child(5) {
      height: 13px;
    }
    &:nth-child(6) {
      height: 17px;
    }
    &:nth-child(7) {
      height: 25px;
    }
  }

  &.bottom {
    .line {
      display: block;
      width: 100%;
      background-color: var(--black);
      margin-top: 0.5vw;
      display: none;

      @media (max-width: 800px) {
        display: block;
      }

      &:nth-child(1) {
        height: 25px;
      }
      &:nth-child(2) {
        height: 17px;
      }
      &:nth-child(3) {
        height: 13px;
      }
      &:nth-child(4) {
        height: 9px;
      }
      &:nth-child(5) {
        height: 5px;
      }
      &:nth-child(6) {
        height: 2px;
      }
      &:nth-child(7) {
        height: 1px;
      }
    }
  }
}
</style>
