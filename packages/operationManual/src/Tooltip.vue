<template>
    <div class="tz-tooltip">
        <slot></slot>
        {{ content }}
        <div :class='classStr'>
            <slot name="tip"></slot>
            {{ tip }}
        </div>
    </div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: '',
    },
    tip: {
      type: String,
      default: '',
    },
    placement: {
      type: String,
      default: 'top',
    }
  },
  data() {
    return {
      top: null,
      bottom: null,
      left: 0,
      right: 0,
      classStr: 'tip'
    };
  },
  created() {
    switch (this.placement) {
      case 'top':
      case 'top-start':
      case 'top-end':
        this.classStr += ' tip-top';
        break;
      case 'bottom':
      case 'bottom-start':
      case 'bottom-end':
        this.classStr += ' tip-bottom';
        break;
      case 'left':
      case 'right':
        this.classStr += ' tip-middle';
        break;
      case 'left-start':
      case 'right-start':
        this.classStr += ' tip-y-start';
        break;
      case 'left-end':
      case 'right-end':
        this.classStr += ' tip-y-end';
        break;
      case 'none':
        this.classStr += ' none';
    }
    switch (this.placement) {
      case 'left':
      case 'left-start':
      case 'left-end':
        this.classStr += ' tip-left';
        break;
      case 'right':
      case 'right-start':
      case 'right-end':
        this.classStr += ' tip-right';
        break;
      case 'top':
      case 'bottom':
        this.classStr += ' tip-center';
        break;
      case 'top-start':
      case 'bottom-start':
        this.classStr += ' tip-x-start';
        break;
      case 'bottom-end':
      case 'top-end':
        this.classStr += ' tip-x-end';
        break;
    }
  }
};
</script>

<style scoped>
.tz-tooltip {
    position: relative;
    display: inline-block;
}

.tz-tooltip .tip {
    visibility: hidden;
    background-color: #fff;
    color: #515a6e;
    /*background-color: rgba(70,76,91,.9);*/
    /*color: #fff;*/
    border-radius: 4px;
    box-shadow: 0 1px 6px rgb(0 0 0 / 20%);
    padding: 0.2em 1em;
    /*width: max-content;*/
    height: max-content;
    /* Position the tooltip */
    position: absolute;
    z-index: 1;
}

.tz-tooltip .none {
    display: none;
}

.tz-tooltip:hover .tip {
    visibility: visible;
}

.tz-tooltip .tip-center {
    left: -300px;
    right: -300px;
    margin-left: auto;
    margin-right: auto;
}

.tz-tooltip .tip-left {
    right: 100%;
}

.tz-tooltip .tip-right {
    left: 100%;
}

.tz-tooltip .tip-x-start {
    left: 0;
}

.tz-tooltip .tip-x-end {
    right: 0;
}

.tz-tooltip .tip-middle {
    top: -400px;
    bottom: -400px;
    margin-top: auto;
    margin-bottom: auto;
}

.tz-tooltip .tip-top {
    bottom: calc(0.1em + 100%);
}

.tz-tooltip .tip-bottom {
    top: 1.3em;
}

.tz-tooltip .tip-y-start {
    top: 0;
}

.tz-tooltip .tip-y-end {
    bottom: 0;
}
</style>