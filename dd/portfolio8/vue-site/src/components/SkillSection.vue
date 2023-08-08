<script setup>
import { skillText } from "@/constants/index";
</script>

<template>
  <section id="skill">
    <div class="skill__inner">
      <h2 class="skill__title">Challenge <em>나의 도전</em></h2>
      <div class="skill__desc">
        <div v-for="(text, key) in skillText" :key="key">
          <span>{{ key + 1 }}.</span>
          <h3>{{ text.title }}</h3>
          <p>{{ text.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.skill__inner {
  padding: 16px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 800px) {
    flex-direction: column;
  }
}
.skill__title {
  position: sticky;
  top: 70px;
  left: 0;
  width: 48%;
  height: 5vw;
  font-size: 4vw;
  line-height: 1.6;
  text-transform: uppercase;
  color: var(--black100);
  border-bottom: 0.4vw solid var(--black100);
  font-family: "nanumSquareNeo";
  font-weight: 900;

  @media (max-width: 800px) {
    width: 100%;
    margin-bottom: 10vw;
    font-size: 30px;
    height: auto;
    background: #f3ede8;
    top: 68px;
    border-bottom: 2px solid #2b2b2b;
  }

  em {
    font-size: 1.25rem;
    font-weight: 400;
  }
}
.skill__desc {
  width: 50%;
  margin-top: 30vh;

  @media (max-width: 800px) {
    width: 100%;
  }

  span {
    font-size: 5vw;
    line-height: 1;
    text-transform: uppercase;
    color: var(--black100);
    line-height: 1.3;
    font-weight: 900;
    font-family: "gmarket";

    @media (max-width: 800px) {
      font-size: 20vw;
    }
  }
  h3 {
    font-size: 1.5rem;
    text-decoration: underline;
    text-underline-position: under;
    font-family: "nanumSquareNeo";
    margin-bottom: 4px;
  }
  p {
    padding-bottom: 30vh;
    font-family: "nanumSquareNeo";
    font-weight: 300;
    font-size: 1.25rem;
    line-height: 1.6;
    word-break: keep-all;
  }
}
</style>
