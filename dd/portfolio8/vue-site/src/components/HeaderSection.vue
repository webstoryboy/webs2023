<script setup>
import { headerNav } from "@/constants/index";
</script>

<template>
  <header id="header" role="heading">
    <div class="header__inner">
      <div class="header__logo">
        <a href="#">portfolio<em>vue.js</em></a>
      </div>
      <nav class="header__nav" :class="{ show: isNavVisible }">
        <ul>
          <li v-for="(nav, key) in headerNav" :key="key">
            <a :href="nav.url" @click="scrollLink($event)">{{ nav.title }}</a>
          </li>
        </ul>
      </nav>
      <div
        class="header__nav__mobile"
        id="headerToggle"
        aria-controls="primary-menu"
        :aria-expanded="isNavVisible.toString()"
        @click="toggleMobileMenu"
      >
        <span></span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isNavVisible: false,
    };
  },
  methods: {
    toggleMobileMenu() {
      this.isNavVisible = !this.isNavVisible;
    },
    scrollLink(event) {
      event.preventDefault();

      const targetId = event.target.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/_mixin.scss";

#header {
  @include position-fixed;
  z-index: 10000;
}

.header__inner {
  @include flex-between;
  padding: 1rem;
  background: rgba(116, 99, 99, 0.1);
  backdrop-filter: blur(15px);

  .header__logo {
    font-size: 1.625rem;
    text-align: center;
    text-transform: uppercase;
    line-height: 1;

    em {
      display: block;
      font-size: 10px;
      color: var(--black200);
    }
  }

  .header__nav {
    li {
      display: inline-block;
      a {
        text-transform: uppercase;
        font-size: 14px;
        padding: 14px;
        position: relative;

        &::before {
          content: "";
          width: calc(100% - 28px);
          height: 1px;
          background-color: var(--black);
          position: absolute;
          left: 14px;
          bottom: 10px;
          transform: scaleX(0);
          transition: all 0.3s;
        }

        &:hover::before {
          transform: scaleX(1);
        }
      }
    }
    @media (max-width: 800px) {
      display: none;

      &.show {
        display: block;

        ul {
          display: block;
          position: absolute;
          right: 0;
          top: 68px;
          background: rgba(116, 99, 99, 0.1);
          backdrop-filter: blur(15px);
          z-index: 10000;

          li {
            display: block;
            text-align: right;
            a {
              display: inline-block;
              padding: 10px;
            }
          }
        }
      }
      &.show + .header__nav__mobile span::before {
        width: 20px;
      }
      &.show + .header__nav__mobile span::after {
        width: 20px;
      }
    }
  }

  .header__nav__mobile {
    width: 40px;
    height: 40px;
    @include flex-center;
    cursor: pointer;
    display: none;

    span {
      display: block;
      width: 40px;
      height: 2px;
      background-color: var(--black);
      position: relative;
      margin-top: 19px;

      &::before {
        content: "";
        width: 40px;
        height: 2px;
        background-color: var(--black);
        position: absolute;
        right: 0;
        top: 6px;
        transition: width 0.3s;
      }

      &::after {
        content: "";
        width: 40px;
        height: 2px;
        background-color: var(--black);
        position: absolute;
        left: 0;
        bottom: 6px;
        transition: width 0.3s;
      }
    }

    @media (max-width: 800px) {
      display: block;
    }
  }
}
</style>
