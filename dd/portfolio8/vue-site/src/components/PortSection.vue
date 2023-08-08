<script setup>
import { portText } from "@/constants/index";
</script>

<template>
  <section id="port">
    <div class="port__inner">
      <div class="port__title">portfolio <em>포폴 작업물</em></div>
      <div class="port__wrap">
        <div class="port__item" v-for="(port, key) in portText" :key="key">
          <span class="num">{{ port.num }}.</span>
          <img :src="port.img" alt="포트폴리오" />
          <h3>{{ port.title }}</h3>
          <p>{{ port.desc }}</p>
          <a href="#">사이트 보기</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  mounted: function () {
    this.scrollAnimation();
  },
  methods: {
    scrollAnimation() {
      const horSection = gsap.utils.toArray(".port__item");

      gsap.to(horSection, {
        xPercent: -120 * (horSection.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: "#port",
          start: "top 56px",
          end: "+=3000",
          pin: true,
          scrub: 1,
          markers: false,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_mixin.scss";

#port {
  width: 100%;
  overflow: hidden;
  margin-top: 200px;
}
.port__inner {
  padding: 16px;
}
.port__title {
  width: 100%;
  height: 5vw;
  font-size: 4vw;
  line-height: 1.6;
  text-transform: uppercase;
  color: var(--black100);
  border-bottom: 0.4vw solid var(--black100);
  font-family: "nanumSquareNeo";
  font-weight: 900;
  z-index: 2000;
  margin-bottom: 16px;

  @media (max-width: 800px) {
    width: 100%;
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

.port__wrap {
  display: flex;
  flex-wrap: wrap;
  width: 7000px;

  .port__item {
    width: 500px;
    height: 700px;
    background-color: var(--subBg100);
    padding: 40px;
    overflow: hidden;
    margin-right: 20px;

    @media (max-width: 800px) {
      width: 400px;
      padding: 40px 20px;
      height: auto;
    }

    &:nth-child(1) {
      background-color: var(--subBg100);
    }
    &:nth-child(2) {
      background-color: var(--subBg200);
    }
    &:nth-child(3) {
      background-color: var(--subBg300);
    }
    &:nth-child(4) {
      background-color: var(--subBg400);
    }
    &:nth-child(5) {
      background-color: var(--subBg500);
    }
    &:nth-child(6) {
      background-color: var(--subBg100);
    }
    &:nth-child(7) {
      background-color: var(--subBg200);
    }
    &:nth-child(8) {
      background-color: var(--subBg300);
    }
    &:nth-child(9) {
      background-color: var(--subBg400);
    }
    &:nth-child(10) {
      background-color: var(--subBg500);
    }
    img {
      width: 100%;
      border-radius: 5px;
      filter: saturate(0%);
      transition: all 0.3s;

      &:hover {
        filter: saturate(100%);
      }
    }
    .num {
      font-size: 22px;
      font-family: "gmarket";
    }
    h3 {
      font-size: 24px;
      text-align: center;
      padding: 15px 0 15px;
      font-weight: 700;
      color: var(--black100);
      border-bottom: 1px solid rgb(95, 89, 83);
      font-family: "nanumSquareNeo";
      margin-bottom: 20px;
    }
    p {
      font-family: "nanumSquareNeo";
    }
    a {
      font-family: "nanumSquareNeo";
      text-align: center;
      border: 1px solid var(--black100);
      display: block;
      padding: 10px 20px;
      margin-top: 20px;
      transition: all 0.3s;

      &:hover {
        background-color: var(--black100);
        color: #fff;
      }
    }
  }
}
</style>
