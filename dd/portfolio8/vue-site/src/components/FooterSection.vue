<script setup>
import { footerText } from "@/constants/index";
</script>

<template>
  <footer id="footer" role="contentinfo">
    <div class="footer__inner">
      <div class="footer__text">
        <span>webstoryboy</span>
        <span>&copy; webs</span>
      </div>
      <div class="footer__info">
        <div class="left">
          <div class="title">
            <a href="#">sign up</a>
          </div>
          <p>회원가입을 하시면 댓글과 게시판 기능을 이용할 수 있습니다.</p>
        </div>
        <div class="right">
          <h3>social</h3>
          <ul>
            <li v-for="(footer, key) in footerText" :key="key">
              <a :href="footer.link">{{ footer.title }}</a>
              <em>{{ footer.desc }}</em>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer__right">
        &copy; {{ new Date().getFullYear() }} webstoryboy<br />이 사이트는 뷰로
        제작되었습니다.
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
#footer {
  font-family: "nanumSquareNeo";
}
.footer__text {
  margin: 0 16px;
  font-size: 12px;
  text-transform: uppercase;
  border-top: 1px solid var(--black);
  border-bottom: 1px solid var(--black);
  padding-top: 2px;
  display: flex;
  justify-content: space-between;
}
.footer__info {
  margin: 100px 16px;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;

  @media (max-width: 800px) {
    flex-direction: column;
  }

  .left {
    width: 50%;

    @media (max-width: 800px) {
      width: 100%;
    }

    .title {
      border-top: 2px solid var(--black);
      border-bottom: 1px solid var(--black);
      padding: 20px 0;
      margin-bottom: 20px;
      font-weight: 700;
      background: url(@/assets/img/arrow.svg) no-repeat right 20px;
      transition: all 0.3s;

      &:hover {
        background-color: var(--black400);
        padding-left: 10px;
        border-color: transparent;
      }
    }
    p {
      padding-bottom: 20px;
      font-size: 12px;
    }
  }
  .right {
    width: 40%;
    border-top: 2px solid var(--black);

    @media (max-width: 800px) {
      width: 100%;
    }

    h3 {
      font-size: 10px;
      margin-bottom: 40px;
      padding-top: 10px;
    }

    ul {
      border-top: 1px solid var(--black);

      li {
        border-bottom: 1px solid var(--black);

        a {
          padding: 14px 0;
          display: inline-block;
          font-size: 14px;
        }
        &:hover em {
          opacity: 1;
        }
      }
      em {
        font-size: 12px;
        padding-left: 10px;
        opacity: 0;
        transition: all 0.3s;
      }
    }
  }
}
.footer__right {
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  margin-bottom: 20px;
  line-height: 1.6;
}
</style>
