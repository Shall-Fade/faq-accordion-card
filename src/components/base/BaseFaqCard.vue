<template>
  <div class="card-wrapper">
    <div class="card-container">
      <div class="card-images">
        <img
          class="card-images-pattern"
          src="../../assets/images/bg-pattern-desktop.svg"
          alt="Pattern"
        />
        <img
          class="card-images-women"
          src="../../assets/images/illustration-woman-online-desktop.svg"
          alt="Women"
        />
        <img
          class="card-images-box"
          src="../../assets/images/illustration-box-desktop.svg"
          alt="Box"
        />
      </div>
      <div class="card-accordion">
        <h3 class="card-accordion-title">FAQ</h3>
        <div
          v-for="(accordion, index) in accordionData"
          :key="index"
          class="card-accordion-item"
        >
          <div class="card-accordion-group" @click="toggleAccordion(index)">
            <h5
              :class="{
                'card-accordion-item-title-active':
                  accordionData[index].isShow === true,
              }"
              class="card-accordion-item-title"
            >
              {{ accordion.title }}
            </h5>
            <img
              :class="rotateImage(index)"
              class="card-accordion-item-img"
              src="../../assets/images/icon-arrow-down.svg"
              alt="Arrow"
            />
          </div>
          <p
            v-show="accordionData[index].isShow"
            class="card-accordion-item-description"
          >
            {{ accordion.description }}
          </p>
          <hr class="card-accordion-item-divider" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    // Variable
    const accordionData = ref([
      {
        title: "How many team members can I invite?",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida arcu ac.",
        isShow: false,
      },
      {
        title: "What is the maximum file upload size?",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida arcu ac.",
        isShow: false,
      },
      {
        title: "How do I rest my password?",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida arcu ac.",
        isShow: false,
      },
      {
        title: "Can I cancel my subscription?",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida arcu ac.",
        isShow: false,
      },
      {
        title: "Do you provide additional support?",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida arcu ac.",
        isShow: false,
      },
    ]);

    // Show/Hide accordion item
    function toggleAccordion(index) {
      accordionData.value.map((item) => {
        if (item.isShow === false) {
          accordionData.value[index].isShow = !accordionData.value[index].isShow;
        } else {
          accordionData.value[index].isShow = !accordionData.value[index].isShow;
          item.isShow = false;
        }
      });
    }

    // Rotate arrow image
    function rotateImage(index) {
      if (accordionData.value[index].isShow === true) {
        return "rotate";
      }
    }

    return {
      accordionData,
      toggleAccordion,
      rotateImage,
    };
  },
};
</script>

<style lang="sass" scoped>
@import '../../assets/styles/style'
.card-wrapper
    display: flex
    align-items: center
    justify-content: center
    height: 100vh
.card-container
    display: flex
    align-items: center
    justify-content: space-between
    position: relative
    width: 900px
    min-height: 500px
    padding: 50px
    background-color: $white
    border-radius: 15px
    overflow: hidden
    transition: .3s ease
// Images Block Styles
.card-images
    display: flex
    align-items: center
    &-pattern
        position: absolute
        left: -85px
        bottom: -50px
        width: 472px
    &-women
        position: absolute
        left: -85px
    &-box
        position: absolute
        bottom: 115px
        left: -95px
        overflow: visible
        z-index: 1000
// Accordion Block Styles
.card-accordion
    display: flex
    flex-direction: column
    vertical-align: bottom
    &-title
        font-size: 32px
        padding-bottom: 30px
    &-group
        display: flex
        align-items: center
        justify-content: space-between
        padding: 17px 0
        cursor: pointer
        transition: .3s ease
        &:hover
            color: $soft-red
            transition: .3s ease
    &-item
        width: 350px
        transition: .3s ease
        &-title
            font-size: 14px
            font-weight: 400
            transition: .3s ease
            &-active
                font-weight: 700
                transition: .3s ease
        &-img
            padding-left: 10px
            padding-right: 10px
            transition: 1.5s ease
            &:visited
              width: 100px
        &-description
            padding-bottom: 17px
            color: $dark-grayish-blue
        &-divider
            border: 1px solid $light-grayish-blue
            border-radius: 20px
.rotate
  transform: rotate(180deg)
  transition: 1.5s ease

@media only screen and (max-width: 1024px)
    .card-container
        width: 750px
    .card-accordion
        display: flex
        flex-direction: column
        &-item
          width: 300px
          &-title
              font-size: 12px

@media only screen and (max-width: 768px)
    .card-container
        width: 400px
        display: flex
        align-items: center
        flex-direction: column
        justify-content: space-between
        min-height: 490px
        overflow: visible
    .card-images
        padding-bottom: 50px
        &-pattern
            position: absolute
            width: 270px
            top: -150px
            left: 15%
        &-women
            position: absolute
            width: 270px
            top: -125px
            left: 15%
        &-box
            position: absolute
            width: 100px
            top: -45px
            left: 14%
    .card-accordion
        &-title
            text-align: center
            padding-bottom: 15px

@media only screen and (max-width: 425px)
    .card-container
          width: 350px
    .card-images
          &-pattern
              left: 10%
          &-women
              left: 10%
          &-box
              left: 9%
</style>
