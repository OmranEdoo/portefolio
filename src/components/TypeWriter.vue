<template>
  <div class="is-typed">
    <slot />
    <span id="span" class="typed">{{ typeValue }}{{ writingChar }}</span>
    <span :class="caret + ' ' + { typing: typeStatus }">&nbsp;</span>
  </div>
</template>


<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "TypeWriter",
  props: {
    array: {
      type: Array,
      required: true,
    },
    eraseInterval: {
      type: Number,
      default: 40,
    },
    typeInterval: {
      type: Number,
      default: 100,
    },
    delayAfter: {
      type: Number,
      default: 3000,
    },
    delayBefore: {
      type: Number,
      default: 500,
    },
    start: {
      type: Number,
      default: 0,
    },
    caret: {
      type: String,
      default: "cursor",
    },
    iterations: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      typeValue: "",
      writingChar: "|",
      count: 0,
      typeStatus: false,
      arrayIndex: 0,
      charIndex: 0,
    };
  },
  methods: {
    typewriter() {
      let loop = 0;
      if (this.charIndex < this.array[this.arrayIndex].length) {
        if (!this.typeStatus) {
          this.typeStatus = true;
        }

        this.typeValue += this.array[this.arrayIndex].charAt(this.charIndex);
        this.charIndex += 1;
        setTimeout(this.typewriter, this.typeInterval);
      } else {
        this.count += 1;

        this.onTyped(this.array[this.arrayIndex]);

        if (this.count === this.array.length) {
          loop += 1;
          if (loop === this.iterations) {
            return (this.typeStatus = false);
          }
        }

        this.typeStatus = false;

        let i = 0;

        this.waitWritingChar(i);

        //setTimeout(this.eraser, this.delayAfter);
      }
    },
    eraser() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.array[this.arrayIndex].substring(
          0,
          this.charIndex - 1
        );
        this.charIndex -= 1;
        setTimeout(this.eraser, this.eraseInterval);
      } else {
        this.typeStatus = false;
        this.arrayIndex += 1;
        if (this.arrayIndex >= this.array.length) this.arrayIndex = 0;
        setTimeout(this.typewriter, this.typeInterval + this.delayBefore);
      }
    },
    onTyped(typedString) {
      this.$emit("typed", typedString);
    },
    waitWritingChar(i) {
      if (i < 6) {
        if (i % 2 == 0) {
          this.writingChar = "";
        } else {
          this.writingChar = "|";
        }
        setTimeout(this.waitWritingChar, this.delayAfter / 3, i + 1);
      } else {
        this.writingChar = "|";
        this.eraser();
      }
    }
  },
  created() {
    setTimeout(this.typewriter, this.start);
  }
});
</script>


<style>
span {
  font-size: x-large;
}

@media screen and (max-width: 600px) {
  span {
    font-size: large;
  }
}

@media screen and (max-width: 300px) {
  span {
    font-size: medium;
  }
}
</style>