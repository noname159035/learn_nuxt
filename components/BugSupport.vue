<template>
  <div class="bug-container">
    <p class="topic-text">Bug</p>
    <div class="inputs-container_top">
      <div class="group group_theme">
        <label for="input_theme">Theme</label>
        <input class="input_theme">
      </div>
      <div class="group group_services">
        <label for="input_services">Services that have a problem</label>
        <input class="input_services">
      </div>
    </div>

    <div class="group">
      <label for="input_discription">Discription</label>
      <textarea class="input_discription"></textarea>
    </div>

    <div class="group">
      <label for="input_steps">Steps for playback</label>
      <input class="input_steps">
    </div>

    <div class="group">
      <label>Image</label>
      <button class="btn_pin" @click="addImage" v-if="showButton">Pin</button>
      <input accept="image/*" ref="fileInput" type="file" style="display: none" @change="handleFileChange">
      <div class="images_container" v-if="!showButton">
        <ul class="images_container-list">
          <li v-for="(image, index) in images" :key="index" @click="index === images.length - 1 ? addImage() : null">
            <div class="images_container-block" :style="{ 'background-image': 'url(' + image.backgroundImage + ')' }">
              <button v-if="index !== images.length - 1" @click.stop="removeImage(index)" class="remove-image-button"></button>
            </div>
          </li>
        </ul>

      </div>
    </div>


    <button class="btn_send">Send</button>
  </div>
</template>

<script>
import addImageButtonHandler from '/static/js/AddImage.js'

export default {
  name: 'BugSupport',

  data() {
    return {
      images: [
        {backgroundImage: '/_nuxt/static/img/plus.svg'}
      ],
      showButton: true,
      upload_img: null,
    };
  },
  methods: {
    addImage() {
      this.$refs.fileInput.click();


      this.showButton = false;
    },

    handleFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.images.unshift({backgroundImage: e.target.result});;
        };
        reader.readAsDataURL(file);
      }
    },

    removeImage(index) {
      this.images.splice(index, 1);
      if (this.images.length <= 1) {
        this.showButton = true;
      }
    }
  }
};

</script>

<style scoped>
  ul {
    list-style-type:  none;
  }

  input, textarea {
    outline: none;
    background-color: #171924;
    border-radius: 20px;
    resize: none;
    height: 56px;
    border: none;
    padding-left: 20px;
    padding-right: 20px;
    font-size: 20px;
    color: white;
    font-family: Gilroy-Regular;
    box-sizing: border-box;
  }

  textarea {
    padding-top: 20px;
  }

  label {
    color: #898EB4;
    font-family: Gilroy-Regular;
    font-size: 40px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .bug-container {
    display: flex;
    flex-direction: column;
    padding-left: 240px;
    padding-right: 240px;
  }

  .topic-text {
    font-family: Gilroy-Regular;
    color: #C4C6E3;
    font-weight: bold;
    font-size: 60px;
    margin-top: 15px;
    margin-bottom: 30px;
  }

  .inputs-container_top {
    display: flex;
    justify-content: space-between;
  }

  .group {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
  }

  .group label {
    margin-bottom: 6px;
  }

  .group_theme {
    width: 100%;
    max-width: 501px;
    margin-right: 10px;
  }

  .group_services {
    width: 100%;
    max-width: 834px;
  }

  .input_services {
    width: 100%;
  }

  .input_discription {
    height: 130px;
  }

  .btn_pin {
    background-color: #171924;
    color: #898EB4;
    font-family: Gilroy-Regular;
    font-size: 40px;
    border-radius: 20px;
    height: 42px;
    max-width: 115px;
    font-size: 25px;
    border: none;
    margin-bottom: 107px;
    transition: transform 0.3s ease;
    cursor: pointer;
  }

  .btn_pin:hover {
    transform: scale(1.06);
  }

  .btn_pin:active {
    transform: scale(1.12);
  }

  .btn_send {
    min-width: 151px;
    height: 46px;
    color: white;
    background: rgb(16,153,77);
    background: linear-gradient(0deg, rgba(16,153,77,1) 0%, rgba(0,255,121,1) 100%);
    border: none;
    margin-left: auto;
    font-family: Gilroy-Regular;
    font-size: 30px;
    border-radius: 20px;
    margin-bottom: 65px;
    transition: transform 0.3s ease;
    cursor: pointer;
  }

  .btn_send:hover {
    transform: scale(1.06);
  }

  .btn_send:active {
    transform: scale(1.12);
  }

  .images_container {
    display: flex;
    flex-direction: row;
  }

  .images_container-list {
    display: flex;
    padding-left: 0px;
    flex-wrap: wrap;
  }

  .images_container-block {
    box-sizing: border-box;
    padding: 0px;
    width: 94px;
    height: 100px;
    border-radius: 20px;
    background-color: #14192D;
    margin-right: 20px;
    margin-bottom: 20px;
    background-position: center center;
    background-repeat: no-repeat;
  }

  .images_container li:not(:last-child) div {
    background-size: contain;
    display: flex;
    padding-top: 10px;
    padding-right: 10px;
  }

  .remove-image-button {
    margin-left: auto;
    width: 15px;
    height: 15px;
    outline: none;
    background-image: url('~@/static/img/close_red.png');
    background-color: transparent;
    background-size: contain;
    border: none;
  }

  @media (max-width: 1242px) {
    .bug-container {
      padding: 50px;
    }

    .inputs-container_top {
      justify-content: flex-start;
      flex-wrap: wrap;
    }

    .group_theme {
      min-width: 100%;
      margin-right: 0;
    }

    .group_services {
      min-width: 100%;
    }
  }

  @media (max-width: 575px) {
    .images_container-list {
      justify-content: center;
    }

    .btn_send {
      margin: 0;
      justify-self: center;
    }
  }

</style>
