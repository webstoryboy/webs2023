<script setup>
import { siteText } from "@/constants/index";
</script>

<template>
  <section id="site">
    <div class="site__inner">
      <h2 class="site__title">Site coding <em>나의 작업물</em></h2>
      <div class="site__wrap">
        <div class="site__item" v-for="(site, key) in siteText" :key="key">
          <span class="num">{{ key + 1 }}.</span>
          <div class="text">
            <div>{{ site.text[0] }}</div>
            <div>{{ site.text[1] }}</div>
            <div>{{ site.text[2] }}</div>
          </div>
          <h3>웹 표준을 준수한 사이트 제작</h3>
          <div class="btn">
            <a :href="site.code">code</a>
            <a :href="site.view">view</a>
          </div>
          <div class="info">
            <span>{{ site.info[0] }}</span>
            <span>{{ site.info[1] }}</span>
            <span>{{ site.info[2] }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/_mixin.scss";

.site__inner {
  padding: 16px;
}
.site__title {
  position: sticky;
  top: 70px;
  left: 0;
  width: 70%;
  height: 5vw;
  font-size: 4vw;
  line-height: 1.6;
  text-transform: uppercase;
  color: var(--black100);
  border-bottom: 0.4vw solid var(--black100);
  font-family: "nanumSquareNeo";
  font-weight: 900;
  margin-bottom: 16px;

  @media (max-width: 800px) {
    width: 100%;
    margin-bottom: 10vw;
    font-size: 30px;
    height: auto;
    background: #f3ede8;
    top: 70px;
    border-bottom: 2px solid var(--black100);
    z-index: 1000;
  }

  em {
    font-size: 20px;
    font-weight: 400;
  }
}
.site__wrap {
  .site__item {
    background-color: var(--mainBg-color);
    height: 70vh;
    @include flex-center;
    flex-direction: column;
    position: sticky;
    left: 0;

    &:nth-child(1) {
      background-color: var(--subBg100);
      top: 180px;

      @media (max-width: 800px) {
        top: 140px;
      }
    }

    &:nth-child(2) {
      background-color: var(--subBg200);
      top: 190px;

      @media (max-width: 800px) {
        top: 160px;
      }
    }

    &:nth-child(3) {
      background-color: var(--subBg300);
      top: 200px;

      @media (max-width: 800px) {
        top: 180px;
      }
    }

    &:nth-child(4) {
      background-color: var(--subBg400);
      top: 210px;

      @media (max-width: 800px) {
        top: 200px;
      }
    }

    .num {
      font-size: 5vw;
      line-height: 1;
      font-family: "gmarket";
      position: absolute;
      left: 1vw;
      top: 1vw;
      font-weight: 900;

      @media (max-width: 800px) {
        font-size: 80px;
        left: 20px;
        top: 20px;
      }
    }

    .text {
      text-align: center;

      div {
        font-size: 3vw;
        line-height: 1;
        font-weight: 900;
        text-transform: uppercase;
        text-decoration: underline;
        font-family: "Montserrat";
        position: relative;
        z-index: 100;
        font-weight: 700;
        letter-spacing: -0.1vw;

        @media (max-width: 800px) {
          font-size: 26px;
        }
      }

      .btn a {
        font-size: 30px;
      }
    }
    h3 {
      font-family: "nanumSquareNeo";
      display: inline-block;
      margin-top: 1vw;

      @media (max-width: 800px) {
        font-size: 16px;
      }
    }

    .btn a {
      display: inline-block;
      font-family: "Montserrat";
      background-color: transparent;
      color: var(--black200);
      margin-top: 10px;
      text-transform: uppercase;
      font-size: 1rem;
      transition: all 0.3s;
      text-decoration: underline;
      text-underline-position: under;

      &:hover {
        color: var(--black);
      }
    }

    .info {
      position: absolute;
      left: 0;
      bottom: 3%;
      border-top: 1px solid var(--black);
      border-bottom: 1px solid var(--black);
      font-family: "Montserrat";
      width: 98%;
      margin-left: 1%;
      display: flex;
      justify-content: space-between;

      @media (max-width: 800px) {
        flex-direction: column;
        width: 90%;
        margin-left: 5%;
        padding: 5px 0;
      }

      span {
        font-size: 12px;
        text-transform: uppercase;
        font-family: "nanumSquareNeo";
        padding: 3px 0;
      }
    }
  }
}
</style>
