<template>
  <div class="page_conteiner">
    <header>
      <div class="header-left_block">
        <div class="header-image image"></div>
        <div class="header-name">Support</div>
      </div>
      <div class="header-right_block">
        <div class="header-image_settings image"></div>
        <div class="header-image_chat image"></div>
      </div>
    </header>
    <div class="btn_back image"></div>

    <BugSupport></BugSupport>
  </div>
</template>

<script>
import BugSupport from '/components/BugSupport.vue';

export default {
  name: 'IndexPage',

  components: {
    BugSupport
  },

}
</script>

<style scoped>

  .page_conteiner {
    min-height: 100vh;
    width: 100%;
    background: rgb(7,12,34);
    background: linear-gradient(0deg, rgba(7,12,34,1) 0%, rgba(9,11,23,1) 100%);
  }

  header {
    display: flex;
    justify-content: space-between;
    padding-right: 50px;
    padding-left: 50px;
    margin-bottom: 20px;
  }

  header div {
    display: flex;
    align-items: center;
  }

  .header-left_block {
    transition: transform 0.3s ease;
    cursor: pointer;
  }

  .header-name {
    color: #C4C6E3;
    font-size: 35px;
    font-family: Gilroy-Regular;
    font-weight: bold;
  }

  .image {
    background-position: center center;
    background-repeat: no-repeat;
    transition: transform 0.3s ease;
    cursor: pointer;
  }

  .image:hover {
    transform: scale(1.1);
  }

  .image:active {
    transform: scale(1.2);
  }

  .header-image {
    background-image: url('~@/static/img/main_img_no.svg');
    min-width: 100px;
    min-height: 100px;
    margin-right: 28px;
  }

  .header-right_block {
    width: 136px;
    display: flex;
    justify-content: space-between;
  }

  .header-image_settings {
    background-image: url('~@/static/img/settings_img.svg');
    min-width: 51px;
    min-height: 43px;
  }

  .header-image_chat {
    background-image: url('~@/static/img/chat_img.svg');
    min-width: 55px;
    min-height: 43px;
  }

  .btn_back {
    width: 40px;
    height: 40px;
    background-image: url('~@/static/img/arrow_left.svg');
    margin-left: 47px;
  }

  @media (max-width: 435px) {
    header {
      justify-content: center;
      flex-wrap: wrap;
      padding-right: 5px;
      padding-left: 5px;
      padding-top: 20px;
    }

    .header-image {
      display: none;
    }

    .header-right_block {
      justify-content: flex-end;
    }
  }

</style>

