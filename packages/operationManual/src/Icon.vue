<template>
    <span class="i-class i-icon" :class='icon_class' :style="{'font-size': size, color: disabled ? '#b7b7b7' : color}"></span>
</template>

<script>
export default {
  props: {
    type: String,
    custom: String,
    size: String,
    color: String,
    disabled: {
      type: Boolean,
      default: false,
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
  computed: {
    icon_class() {
      let classes = {};
      this.$set(classes, this.custom, true);
      if (this.type) {
        this.$set(classes, `i-icon-${this.type}`, true);
      }
      return classes;
    },
  },
  created() {
  }
};
</script>

<style scoped>

@font-face {
    font-family: Ionicons;
    src: url(https://file.iviewui.com/dist/143146fa24554ae2c5ac0a3982abb952.woff2) format("woff2"), url(https://file.iviewui.com/dist/99ac3308dd8ee14f749f51538d0d5b9e.woff) format("woff"), url(https://file.iviewui.com/dist/d535a25a79fb1365ae814b61e88fae71.ttf) format("truetype"), url(https://file.iviewui.com/dist/a2c4a261a239aa84463dc70e4bac9b9a.svg#Ionicons) format("svg");
    font-weight: 400;
    font-style: normal
}

.i-icon {
    display: inline-block;
    font-family: Ionicons;
    speak: none;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    text-rendering: optimizeLegibility;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    vertical-align: -.125em;
    text-align: center
}

.i-icon-ios-add-circle-outline:before {
    content: "\F100"
}

.i-icon-ios-add-circle:before {
    content: "\F101"
}

.i-icon-ios-add:before {
    content: "\F102"
}

.i-icon-ios-alarm-outline:before {
    content: "\F103"
}

.i-icon-ios-alarm:before {
    content: "\F104"
}

.i-icon-ios-albums-outline:before {
    content: "\F105"
}

.i-icon-ios-albums:before {
    content: "\F106"
}

.i-icon-ios-alert-outline:before {
    content: "\F107"
}

.i-icon-ios-alert:before {
    content: "\F108"
}

.i-icon-ios-american-football-outline:before {
    content: "\F109"
}

.i-icon-ios-american-football:before {
    content: "\F10A"
}

.i-icon-ios-analytics-outline:before {
    content: "\F10B"
}

.i-icon-ios-analytics:before {
    content: "\F10C"
}

.i-icon-ios-aperture-outline:before {
    content: "\F10D"
}

.i-icon-ios-aperture:before {
    content: "\F10E"
}

.i-icon-ios-apps-outline:before {
    content: "\F10F"
}

.i-icon-ios-apps:before {
    content: "\F110"
}

.i-icon-ios-appstore-outline:before {
    content: "\F111"
}

.i-icon-ios-appstore:before {
    content: "\F112"
}

.i-icon-ios-archive-outline:before {
    content: "\F113"
}

.i-icon-ios-archive:before {
    content: "\F114"
}

.i-icon-ios-arrow-back:before {
    content: "\F115"
}

.i-icon-ios-arrow-down:before {
    content: "\F116"
}

.i-icon-ios-arrow-dropdown-circle:before {
    content: "\F117"
}

.i-icon-ios-arrow-dropdown:before {
    content: "\F118"
}

.i-icon-ios-arrow-dropleft-circle:before {
    content: "\F119"
}

.i-icon-ios-arrow-dropleft:before {
    content: "\F11A"
}

.i-icon-ios-arrow-dropright-circle:before {
    content: "\F11B"
}

.i-icon-ios-arrow-dropright:before {
    content: "\F11C"
}

.i-icon-ios-arrow-dropup-circle:before {
    content: "\F11D"
}

.i-icon-ios-arrow-dropup:before {
    content: "\F11E"
}

.i-icon-ios-arrow-forward:before {
    content: "\F11F"
}

.i-icon-ios-arrow-round-back:before {
    content: "\F120"
}

.i-icon-ios-arrow-round-down:before {
    content: "\F121"
}

.i-icon-ios-arrow-round-forward:before {
    content: "\F122"
}

.i-icon-ios-arrow-round-up:before {
    content: "\F123"
}

.i-icon-ios-arrow-up:before {
    content: "\F124"
}

.i-icon-ios-at-outline:before {
    content: "\F125"
}

.i-icon-ios-at:before {
    content: "\F126"
}

.i-icon-ios-attach:before {
    content: "\F127"
}

.i-icon-ios-backspace-outline:before {
    content: "\F128"
}

.i-icon-ios-backspace:before {
    content: "\F129"
}

.i-icon-ios-barcode-outline:before {
    content: "\F12A"
}

.i-icon-ios-barcode:before {
    content: "\F12B"
}

.i-icon-ios-baseball-outline:before {
    content: "\F12C"
}

.i-icon-ios-baseball:before {
    content: "\F12D"
}

.i-icon-ios-basket-outline:before {
    content: "\F12E"
}

.i-icon-ios-basket:before {
    content: "\F12F"
}

.i-icon-ios-basketball-outline:before {
    content: "\F130"
}

.i-icon-ios-basketball:before {
    content: "\F131"
}

.i-icon-ios-battery-charging:before {
    content: "\F132"
}

.i-icon-ios-battery-dead:before {
    content: "\F133"
}

.i-icon-ios-battery-full:before {
    content: "\F134"
}

.i-icon-ios-beaker-outline:before {
    content: "\F135"
}

.i-icon-ios-beaker:before {
    content: "\F136"
}

.i-icon-ios-beer-outline:before {
    content: "\F137"
}

.i-icon-ios-beer:before {
    content: "\F138"
}

.i-icon-ios-bicycle:before {
    content: "\F139"
}

.i-icon-ios-bluetooth:before {
    content: "\F13A"
}

.i-icon-ios-boat-outline:before {
    content: "\F13B"
}

.i-icon-ios-boat:before {
    content: "\F13C"
}

.i-icon-ios-body-outline:before {
    content: "\F13D"
}

.i-icon-ios-body:before {
    content: "\F13E"
}

.i-icon-ios-bonfire-outline:before {
    content: "\F13F"
}

.i-icon-ios-bonfire:before {
    content: "\F140"
}

.i-icon-ios-book-outline:before {
    content: "\F141"
}

.i-icon-ios-book:before {
    content: "\F142"
}

.i-icon-ios-bookmark-outline:before {
    content: "\F143"
}

.i-icon-ios-bookmark:before {
    content: "\F144"
}

.i-icon-ios-bookmarks-outline:before {
    content: "\F145"
}

.i-icon-ios-bookmarks:before {
    content: "\F146"
}

.i-icon-ios-bowtie-outline:before {
    content: "\F147"
}

.i-icon-ios-bowtie:before {
    content: "\F148"
}

.i-icon-ios-briefcase-outline:before {
    content: "\F149"
}

.i-icon-ios-briefcase:before {
    content: "\F14A"
}

.i-icon-ios-browsers-outline:before {
    content: "\F14B"
}

.i-icon-ios-browsers:before {
    content: "\F14C"
}

.i-icon-ios-brush-outline:before {
    content: "\F14D"
}

.i-icon-ios-brush:before {
    content: "\F14E"
}

.i-icon-ios-bug-outline:before {
    content: "\F14F"
}

.i-icon-ios-bug:before {
    content: "\F150"
}

.i-icon-ios-build-outline:before {
    content: "\F151"
}

.i-icon-ios-build:before {
    content: "\F152"
}

.i-icon-ios-bulb-outline:before {
    content: "\F153"
}

.i-icon-ios-bulb:before {
    content: "\F154"
}

.i-icon-ios-bus-outline:before {
    content: "\F155"
}

.i-icon-ios-bus:before {
    content: "\F156"
}

.i-icon-ios-cafe-outline:before {
    content: "\F157"
}

.i-icon-ios-cafe:before {
    content: "\F158"
}

.i-icon-ios-calculator-outline:before {
    content: "\F159"
}

.i-icon-ios-calculator:before {
    content: "\F15A"
}

.i-icon-ios-calendar-outline:before {
    content: "\F15B"
}

.i-icon-ios-calendar:before {
    content: "\F15C"
}

.i-icon-ios-call-outline:before {
    content: "\F15D"
}

.i-icon-ios-call:before {
    content: "\F15E"
}

.i-icon-ios-camera-outline:before {
    content: "\F15F"
}

.i-icon-ios-camera:before {
    content: "\F160"
}

.i-icon-ios-car-outline:before {
    content: "\F161"
}

.i-icon-ios-car:before {
    content: "\F162"
}

.i-icon-ios-card-outline:before {
    content: "\F163"
}

.i-icon-ios-card:before {
    content: "\F164"
}

.i-icon-ios-cart-outline:before {
    content: "\F165"
}

.i-icon-ios-cart:before {
    content: "\F166"
}

.i-icon-ios-cash-outline:before {
    content: "\F167"
}

.i-icon-ios-cash:before {
    content: "\F168"
}

.i-icon-ios-chatboxes-outline:before {
    content: "\F169"
}

.i-icon-ios-chatboxes:before {
    content: "\F16A"
}

.i-icon-ios-chatbubbles-outline:before {
    content: "\F16B"
}

.i-icon-ios-chatbubbles:before {
    content: "\F16C"
}

.i-icon-ios-checkbox-outline:before {
    content: "\F16D"
}

.i-icon-ios-checkbox:before {
    content: "\F16E"
}

.i-icon-ios-checkmark-circle-outline:before {
    content: "\F16F"
}

.i-icon-ios-checkmark-circle:before {
    content: "\F170"
}

.i-icon-ios-checkmark:before {
    content: "\F171"
}

.i-icon-ios-clipboard-outline:before {
    content: "\F172"
}

.i-icon-ios-clipboard:before {
    content: "\F173"
}

.i-icon-ios-clock-outline:before {
    content: "\F174"
}

.i-icon-ios-clock:before {
    content: "\F175"
}

.i-icon-ios-close-circle-outline:before {
    content: "\F176"
}

.i-icon-ios-close-circle:before {
    content: "\F177"
}

.i-icon-ios-close:before {
    content: "\F178"
}

.i-icon-ios-closed-captioning-outline:before {
    content: "\F179"
}

.i-icon-ios-closed-captioning:before {
    content: "\F17A"
}

.i-icon-ios-cloud-circle-outline:before {
    content: "\F17B"
}

.i-icon-ios-cloud-circle:before {
    content: "\F17C"
}

.i-icon-ios-cloud-done-outline:before {
    content: "\F17D"
}

.i-icon-ios-cloud-done:before {
    content: "\F17E"
}

.i-icon-ios-cloud-download-outline:before {
    content: "\F17F"
}

.i-icon-ios-cloud-download:before {
    content: "\F180"
}

.i-icon-ios-cloud-outline:before {
    content: "\F181"
}

.i-icon-ios-cloud-upload-outline:before {
    content: "\F182"
}

.i-icon-ios-cloud-upload:before {
    content: "\F183"
}

.i-icon-ios-cloud:before {
    content: "\F184"
}

.i-icon-ios-cloudy-night-outline:before {
    content: "\F185"
}

.i-icon-ios-cloudy-night:before {
    content: "\F186"
}

.i-icon-ios-cloudy-outline:before {
    content: "\F187"
}

.i-icon-ios-cloudy:before {
    content: "\F188"
}

.i-icon-ios-code-download:before {
    content: "\F189"
}

.i-icon-ios-code-working:before {
    content: "\F18A"
}

.i-icon-ios-code:before {
    content: "\F18B"
}

.i-icon-ios-cog-outline:before {
    content: "\F18C"
}

.i-icon-ios-cog:before {
    content: "\F18D"
}

.i-icon-ios-color-fill-outline:before {
    content: "\F18E"
}

.i-icon-ios-color-fill:before {
    content: "\F18F"
}

.i-icon-ios-color-filter-outline:before {
    content: "\F190"
}

.i-icon-ios-color-filter:before {
    content: "\F191"
}

.i-icon-ios-color-palette-outline:before {
    content: "\F192"
}

.i-icon-ios-color-palette:before {
    content: "\F193"
}

.i-icon-ios-color-wand-outline:before {
    content: "\F194"
}

.i-icon-ios-color-wand:before {
    content: "\F195"
}

.i-icon-ios-compass-outline:before {
    content: "\F196"
}

.i-icon-ios-compass:before {
    content: "\F197"
}

.i-icon-ios-construct-outline:before {
    content: "\F198"
}

.i-icon-ios-construct:before {
    content: "\F199"
}

.i-icon-ios-contact-outline:before {
    content: "\F19A"
}

.i-icon-ios-contact:before {
    content: "\F19B"
}

.i-icon-ios-contacts-outline:before {
    content: "\F19C"
}

.i-icon-ios-contacts:before {
    content: "\F19D"
}

.i-icon-ios-contract:before {
    content: "\F19E"
}

.i-icon-ios-contrast:before {
    content: "\F19F"
}

.i-icon-ios-copy-outline:before {
    content: "\F1A0"
}

.i-icon-ios-copy:before {
    content: "\F1A1"
}

.i-icon-ios-create-outline:before {
    content: "\F1A2"
}

.i-icon-ios-create:before {
    content: "\F1A3"
}

.i-icon-ios-crop-outline:before {
    content: "\F1A4"
}

.i-icon-ios-crop:before {
    content: "\F1A5"
}

.i-icon-ios-cube-outline:before {
    content: "\F1A6"
}

.i-icon-ios-cube:before {
    content: "\F1A7"
}

.i-icon-ios-cut-outline:before {
    content: "\F1A8"
}

.i-icon-ios-cut:before {
    content: "\F1A9"
}

.i-icon-ios-desktop-outline:before {
    content: "\F1AA"
}

.i-icon-ios-desktop:before {
    content: "\F1AB"
}

.i-icon-ios-disc-outline:before {
    content: "\F1AC"
}

.i-icon-ios-disc:before {
    content: "\F1AD"
}

.i-icon-ios-document-outline:before {
    content: "\F1AE"
}

.i-icon-ios-document:before {
    content: "\F1AF"
}

.i-icon-ios-done-all:before {
    content: "\F1B0"
}

.i-icon-ios-download-outline:before {
    content: "\F1B1"
}

.i-icon-ios-download:before {
    content: "\F1B2"
}

.i-icon-ios-easel-outline:before {
    content: "\F1B3"
}

.i-icon-ios-easel:before {
    content: "\F1B4"
}

.i-icon-ios-egg-outline:before {
    content: "\F1B5"
}

.i-icon-ios-egg:before {
    content: "\F1B6"
}

.i-icon-ios-exit-outline:before {
    content: "\F1B7"
}

.i-icon-ios-exit:before {
    content: "\F1B8"
}

.i-icon-ios-expand:before {
    content: "\F1B9"
}

.i-icon-ios-eye-off-outline:before {
    content: "\F1BA"
}

.i-icon-ios-eye-off:before {
    content: "\F1BB"
}

.i-icon-ios-eye-outline:before {
    content: "\F1BC"
}

.i-icon-ios-eye:before {
    content: "\F1BD"
}

.i-icon-ios-fastforward-outline:before {
    content: "\F1BE"
}

.i-icon-ios-fastforward:before {
    content: "\F1BF"
}

.i-icon-ios-female:before {
    content: "\F1C0"
}

.i-icon-ios-filing-outline:before {
    content: "\F1C1"
}

.i-icon-ios-filing:before {
    content: "\F1C2"
}

.i-icon-ios-film-outline:before {
    content: "\F1C3"
}

.i-icon-ios-film:before {
    content: "\F1C4"
}

.i-icon-ios-finger-print:before {
    content: "\F1C5"
}

.i-icon-ios-flag-outline:before {
    content: "\F1C6"
}

.i-icon-ios-flag:before {
    content: "\F1C7"
}

.i-icon-ios-flame-outline:before {
    content: "\F1C8"
}

.i-icon-ios-flame:before {
    content: "\F1C9"
}

.i-icon-ios-flash-outline:before {
    content: "\F1CA"
}

.i-icon-ios-flash:before {
    content: "\F1CB"
}

.i-icon-ios-flask-outline:before {
    content: "\F1CC"
}

.i-icon-ios-flask:before {
    content: "\F1CD"
}

.i-icon-ios-flower-outline:before {
    content: "\F1CE"
}

.i-icon-ios-flower:before {
    content: "\F1CF"
}

.i-icon-ios-folder-open-outline:before {
    content: "\F1D0"
}

.i-icon-ios-folder-open:before {
    content: "\F1D1"
}

.i-icon-ios-folder-outline:before {
    content: "\F1D2"
}

.i-icon-ios-folder:before {
    content: "\F1D3"
}

.i-icon-ios-football-outline:before {
    content: "\F1D4"
}

.i-icon-ios-football:before {
    content: "\F1D5"
}

.i-icon-ios-funnel-outline:before {
    content: "\F1D6"
}

.i-icon-ios-funnel:before {
    content: "\F1D7"
}

.i-icon-ios-game-controller-a-outline:before {
    content: "\F1D8"
}

.i-icon-ios-game-controller-a:before {
    content: "\F1D9"
}

.i-icon-ios-game-controller-b-outline:before {
    content: "\F1DA"
}

.i-icon-ios-game-controller-b:before {
    content: "\F1DB"
}

.i-icon-ios-git-branch:before {
    content: "\F1DC"
}

.i-icon-ios-git-commit:before {
    content: "\F1DD"
}

.i-icon-ios-git-compare:before {
    content: "\F1DE"
}

.i-icon-ios-git-merge:before {
    content: "\F1DF"
}

.i-icon-ios-git-network:before {
    content: "\F1E0"
}

.i-icon-ios-git-pull-request:before {
    content: "\F1E1"
}

.i-icon-ios-glasses-outline:before {
    content: "\F1E2"
}

.i-icon-ios-glasses:before {
    content: "\F1E3"
}

.i-icon-ios-globe-outline:before {
    content: "\F1E4"
}

.i-icon-ios-globe:before {
    content: "\F1E5"
}

.i-icon-ios-grid-outline:before {
    content: "\F1E6"
}

.i-icon-ios-grid:before {
    content: "\F1E7"
}

.i-icon-ios-hammer-outline:before {
    content: "\F1E8"
}

.i-icon-ios-hammer:before {
    content: "\F1E9"
}

.i-icon-ios-hand-outline:before {
    content: "\F1EA"
}

.i-icon-ios-hand:before {
    content: "\F1EB"
}

.i-icon-ios-happy-outline:before {
    content: "\F1EC"
}

.i-icon-ios-happy:before {
    content: "\F1ED"
}

.i-icon-ios-headset-outline:before {
    content: "\F1EE"
}

.i-icon-ios-headset:before {
    content: "\F1EF"
}

.i-icon-ios-heart-outline:before {
    content: "\F1F0"
}

.i-icon-ios-heart:before {
    content: "\F1F1"
}

.i-icon-ios-help-buoy-outline:before {
    content: "\F1F2"
}

.i-icon-ios-help-buoy:before {
    content: "\F1F3"
}

.i-icon-ios-help-circle-outline:before {
    content: "\F1F4"
}

.i-icon-ios-help-circle:before {
    content: "\F1F5"
}

.i-icon-ios-help:before {
    content: "\F1F6"
}

.i-icon-ios-home-outline:before {
    content: "\F1F7"
}

.i-icon-ios-home:before {
    content: "\F1F8"
}

.i-icon-ios-ice-cream-outline:before {
    content: "\F1F9"
}

.i-icon-ios-ice-cream:before {
    content: "\F1FA"
}

.i-icon-ios-image-outline:before {
    content: "\F1FB"
}

.i-icon-ios-image:before {
    content: "\F1FC"
}

.i-icon-ios-images-outline:before {
    content: "\F1FD"
}

.i-icon-ios-images:before {
    content: "\F1FE"
}

.i-icon-ios-infinite-outline:before {
    content: "\F1FF"
}

.i-icon-ios-infinite:before {
    content: "\F200"
}

.i-icon-ios-information-circle-outline:before {
    content: "\F201"
}

.i-icon-ios-information-circle:before {
    content: "\F202"
}

.i-icon-ios-information:before {
    content: "\F203"
}

.i-icon-ios-ionic-outline:before {
    content: "\F204"
}

.i-icon-ios-ionic:before {
    content: "\F205"
}

.i-icon-ios-ionitron-outline:before {
    content: "\F206"
}

.i-icon-ios-ionitron:before {
    content: "\F207"
}

.i-icon-ios-jet-outline:before {
    content: "\F208"
}

.i-icon-ios-jet:before {
    content: "\F209"
}

.i-icon-ios-key-outline:before {
    content: "\F20A"
}

.i-icon-ios-key:before {
    content: "\F20B"
}

.i-icon-ios-keypad-outline:before {
    content: "\F20C"
}

.i-icon-ios-keypad:before {
    content: "\F20D"
}

.i-icon-ios-laptop:before {
    content: "\F20E"
}

.i-icon-ios-leaf-outline:before {
    content: "\F20F"
}

.i-icon-ios-leaf:before {
    content: "\F210"
}

.i-icon-ios-link-outline:before {
    content: "\F211"
}

.i-icon-ios-link:before {
    content: "\F212"
}

.i-icon-ios-list-box-outline:before {
    content: "\F213"
}

.i-icon-ios-list-box:before {
    content: "\F214"
}

.i-icon-ios-list:before {
    content: "\F215"
}

.i-icon-ios-locate-outline:before {
    content: "\F216"
}

.i-icon-ios-locate:before {
    content: "\F217"
}

.i-icon-ios-lock-outline:before {
    content: "\F218"
}

.i-icon-ios-lock:before {
    content: "\F219"
}

.i-icon-ios-log-in:before {
    content: "\F21A"
}

.i-icon-ios-log-out:before {
    content: "\F21B"
}

.i-icon-ios-magnet-outline:before {
    content: "\F21C"
}

.i-icon-ios-magnet:before {
    content: "\F21D"
}

.i-icon-ios-mail-open-outline:before {
    content: "\F21E"
}

.i-icon-ios-mail-open:before {
    content: "\F21F"
}

.i-icon-ios-mail-outline:before {
    content: "\F220"
}

.i-icon-ios-mail:before {
    content: "\F221"
}

.i-icon-ios-male:before {
    content: "\F222"
}

.i-icon-ios-man-outline:before {
    content: "\F223"
}

.i-icon-ios-man:before {
    content: "\F224"
}

.i-icon-ios-map-outline:before {
    content: "\F225"
}

.i-icon-ios-map:before {
    content: "\F226"
}

.i-icon-ios-medal-outline:before {
    content: "\F227"
}

.i-icon-ios-medal:before {
    content: "\F228"
}

.i-icon-ios-medical-outline:before {
    content: "\F229"
}

.i-icon-ios-medical:before {
    content: "\F22A"
}

.i-icon-ios-medkit-outline:before {
    content: "\F22B"
}

.i-icon-ios-medkit:before {
    content: "\F22C"
}

.i-icon-ios-megaphone-outline:before {
    content: "\F22D"
}

.i-icon-ios-megaphone:before {
    content: "\F22E"
}

.i-icon-ios-menu-outline:before {
    content: "\F22F"
}

.i-icon-ios-menu:before {
    content: "\F230"
}

.i-icon-ios-mic-off-outline:before {
    content: "\F231"
}

.i-icon-ios-mic-off:before {
    content: "\F232"
}

.i-icon-ios-mic-outline:before {
    content: "\F233"
}

.i-icon-ios-mic:before {
    content: "\F234"
}

.i-icon-ios-microphone-outline:before {
    content: "\F235"
}

.i-icon-ios-microphone:before {
    content: "\F236"
}

.i-icon-ios-moon-outline:before {
    content: "\F237"
}

.i-icon-ios-moon:before {
    content: "\F238"
}

.i-icon-ios-more-outline:before {
    content: "\F239"
}

.i-icon-ios-more:before {
    content: "\F23A"
}

.i-icon-ios-move:before {
    content: "\F23B"
}

.i-icon-ios-musical-note-outline:before {
    content: "\F23C"
}

.i-icon-ios-musical-note:before {
    content: "\F23D"
}

.i-icon-ios-musical-notes-outline:before {
    content: "\F23E"
}

.i-icon-ios-musical-notes:before {
    content: "\F23F"
}

.i-icon-ios-navigate-outline:before {
    content: "\F240"
}

.i-icon-ios-navigate:before {
    content: "\F241"
}

.i-icon-ios-no-smoking-outline:before {
    content: "\F242"
}

.i-icon-ios-no-smoking:before {
    content: "\F243"
}

.i-icon-ios-notifications-off-outline:before {
    content: "\F244"
}

.i-icon-ios-notifications-off:before {
    content: "\F245"
}

.i-icon-ios-notifications-outline:before {
    content: "\F246"
}

.i-icon-ios-notifications:before {
    content: "\F247"
}

.i-icon-ios-nuclear-outline:before {
    content: "\F248"
}

.i-icon-ios-nuclear:before {
    content: "\F249"
}

.i-icon-ios-nutrition-outline:before {
    content: "\F24A"
}

.i-icon-ios-nutrition:before {
    content: "\F24B"
}

.i-icon-ios-open-outline:before {
    content: "\F24C"
}

.i-icon-ios-open:before {
    content: "\F24D"
}

.i-icon-ios-options-outline:before {
    content: "\F24E"
}

.i-icon-ios-options:before {
    content: "\F24F"
}

.i-icon-ios-outlet-outline:before {
    content: "\F250"
}

.i-icon-ios-outlet:before {
    content: "\F251"
}

.i-icon-ios-paper-outline:before {
    content: "\F252"
}

.i-icon-ios-paper-plane-outline:before {
    content: "\F253"
}

.i-icon-ios-paper-plane:before {
    content: "\F254"
}

.i-icon-ios-paper:before {
    content: "\F255"
}

.i-icon-ios-partly-sunny-outline:before {
    content: "\F256"
}

.i-icon-ios-partly-sunny:before {
    content: "\F257"
}

.i-icon-ios-pause-outline:before {
    content: "\F258"
}

.i-icon-ios-pause:before {
    content: "\F259"
}

.i-icon-ios-paw-outline:before {
    content: "\F25A"
}

.i-icon-ios-paw:before {
    content: "\F25B"
}

.i-icon-ios-people-outline:before {
    content: "\F25C"
}

.i-icon-ios-people:before {
    content: "\F25D"
}

.i-icon-ios-person-add-outline:before {
    content: "\F25E"
}

.i-icon-ios-person-add:before {
    content: "\F25F"
}

.i-icon-ios-person-outline:before {
    content: "\F260"
}

.i-icon-ios-person:before {
    content: "\F261"
}

.i-icon-ios-phone-landscape:before {
    content: "\F262"
}

.i-icon-ios-phone-portrait:before {
    content: "\F263"
}

.i-icon-ios-photos-outline:before {
    content: "\F264"
}

.i-icon-ios-photos:before {
    content: "\F265"
}

.i-icon-ios-pie-outline:before {
    content: "\F266"
}

.i-icon-ios-pie:before {
    content: "\F267"
}

.i-icon-ios-pin-outline:before {
    content: "\F268"
}

.i-icon-ios-pin:before {
    content: "\F269"
}

.i-icon-ios-pint-outline:before {
    content: "\F26A"
}

.i-icon-ios-pint:before {
    content: "\F26B"
}

.i-icon-ios-pizza-outline:before {
    content: "\F26C"
}

.i-icon-ios-pizza:before {
    content: "\F26D"
}

.i-icon-ios-plane-outline:before {
    content: "\F26E"
}

.i-icon-ios-plane:before {
    content: "\F26F"
}

.i-icon-ios-planet-outline:before {
    content: "\F270"
}

.i-icon-ios-planet:before {
    content: "\F271"
}

.i-icon-ios-play-outline:before {
    content: "\F272"
}

.i-icon-ios-play:before {
    content: "\F273"
}

.i-icon-ios-podium-outline:before {
    content: "\F274"
}

.i-icon-ios-podium:before {
    content: "\F275"
}

.i-icon-ios-power-outline:before {
    content: "\F276"
}

.i-icon-ios-power:before {
    content: "\F277"
}

.i-icon-ios-pricetag-outline:before {
    content: "\F278"
}

.i-icon-ios-pricetag:before {
    content: "\F279"
}

.i-icon-ios-pricetags-outline:before {
    content: "\F27A"
}

.i-icon-ios-pricetags:before {
    content: "\F27B"
}

.i-icon-ios-print-outline:before {
    content: "\F27C"
}

.i-icon-ios-print:before {
    content: "\F27D"
}

.i-icon-ios-pulse-outline:before {
    content: "\F27E"
}

.i-icon-ios-pulse:before {
    content: "\F27F"
}

.i-icon-ios-qr-scanner:before {
    content: "\F280"
}

.i-icon-ios-quote-outline:before {
    content: "\F281"
}

.i-icon-ios-quote:before {
    content: "\F282"
}

.i-icon-ios-radio-button-off:before {
    content: "\F283"
}

.i-icon-ios-radio-button-on:before {
    content: "\F284"
}

.i-icon-ios-radio-outline:before {
    content: "\F285"
}

.i-icon-ios-radio:before {
    content: "\F286"
}

.i-icon-ios-rainy-outline:before {
    content: "\F287"
}

.i-icon-ios-rainy:before {
    content: "\F288"
}

.i-icon-ios-recording-outline:before {
    content: "\F289"
}

.i-icon-ios-recording:before {
    content: "\F28A"
}

.i-icon-ios-redo-outline:before {
    content: "\F28B"
}

.i-icon-ios-redo:before {
    content: "\F28C"
}

.i-icon-ios-refresh-circle-outline:before {
    content: "\F28D"
}

.i-icon-ios-refresh-circle:before {
    content: "\F28E"
}

.i-icon-ios-refresh:before {
    content: "\F28F"
}

.i-icon-ios-remove-circle-outline:before {
    content: "\F290"
}

.i-icon-ios-remove-circle:before {
    content: "\F291"
}

.i-icon-ios-remove:before {
    content: "\F292"
}

.i-icon-ios-reorder:before {
    content: "\F293"
}

.i-icon-ios-repeat:before {
    content: "\F294"
}

.i-icon-ios-resize:before {
    content: "\F295"
}

.i-icon-ios-restaurant-outline:before {
    content: "\F296"
}

.i-icon-ios-restaurant:before {
    content: "\F297"
}

.i-icon-ios-return-left:before {
    content: "\F298"
}

.i-icon-ios-return-right:before {
    content: "\F299"
}

.i-icon-ios-reverse-camera-outline:before {
    content: "\F29A"
}

.i-icon-ios-reverse-camera:before {
    content: "\F29B"
}

.i-icon-ios-rewind-outline:before {
    content: "\F29C"
}

.i-icon-ios-rewind:before {
    content: "\F29D"
}

.i-icon-ios-ribbon-outline:before {
    content: "\F29E"
}

.i-icon-ios-ribbon:before {
    content: "\F29F"
}

.i-icon-ios-rose-outline:before {
    content: "\F2A0"
}

.i-icon-ios-rose:before {
    content: "\F2A1"
}

.i-icon-ios-sad-outline:before {
    content: "\F2A2"
}

.i-icon-ios-sad:before {
    content: "\F2A3"
}

.i-icon-ios-school-outline:before {
    content: "\F2A4"
}

.i-icon-ios-school:before {
    content: "\F2A5"
}

.i-icon-ios-search-outline:before {
    content: "\F2A6"
}

.i-icon-ios-search:before {
    content: "\F2A7"
}

.i-icon-ios-send-outline:before {
    content: "\F2A8"
}

.i-icon-ios-send:before {
    content: "\F2A9"
}

.i-icon-ios-settings-outline:before {
    content: "\F2AA"
}

.i-icon-ios-settings:before {
    content: "\F2AB"
}

.i-icon-ios-share-alt-outline:before {
    content: "\F2AC"
}

.i-icon-ios-share-alt:before {
    content: "\F2AD"
}

.i-icon-ios-share-outline:before {
    content: "\F2AE"
}

.i-icon-ios-share:before {
    content: "\F2AF"
}

.i-icon-ios-shirt-outline:before {
    content: "\F2B0"
}

.i-icon-ios-shirt:before {
    content: "\F2B1"
}

.i-icon-ios-shuffle:before {
    content: "\F2B2"
}

.i-icon-ios-skip-backward-outline:before {
    content: "\F2B3"
}

.i-icon-ios-skip-backward:before {
    content: "\F2B4"
}

.i-icon-ios-skip-forward-outline:before {
    content: "\F2B5"
}

.i-icon-ios-skip-forward:before {
    content: "\F2B6"
}

.i-icon-ios-snow-outline:before {
    content: "\F2B7"
}

.i-icon-ios-snow:before {
    content: "\F2B8"
}

.i-icon-ios-speedometer-outline:before {
    content: "\F2B9"
}

.i-icon-ios-speedometer:before {
    content: "\F2BA"
}

.i-icon-ios-square-outline:before {
    content: "\F2BB"
}

.i-icon-ios-square:before {
    content: "\F2BC"
}

.i-icon-ios-star-half:before {
    content: "\F2BD"
}

.i-icon-ios-star-outline:before {
    content: "\F2BE"
}

.i-icon-ios-star:before {
    content: "\F2BF"
}

.i-icon-ios-stats-outline:before {
    content: "\F2C0"
}

.i-icon-ios-stats:before {
    content: "\F2C1"
}

.i-icon-ios-stopwatch-outline:before {
    content: "\F2C2"
}

.i-icon-ios-stopwatch:before {
    content: "\F2C3"
}

.i-icon-ios-subway-outline:before {
    content: "\F2C4"
}

.i-icon-ios-subway:before {
    content: "\F2C5"
}

.i-icon-ios-sunny-outline:before {
    content: "\F2C6"
}

.i-icon-ios-sunny:before {
    content: "\F2C7"
}

.i-icon-ios-swap:before {
    content: "\F2C8"
}

.i-icon-ios-switch-outline:before {
    content: "\F2C9"
}

.i-icon-ios-switch:before {
    content: "\F2CA"
}

.i-icon-ios-sync:before {
    content: "\F2CB"
}

.i-icon-ios-tablet-landscape:before {
    content: "\F2CC"
}

.i-icon-ios-tablet-portrait:before {
    content: "\F2CD"
}

.i-icon-ios-tennisball-outline:before {
    content: "\F2CE"
}

.i-icon-ios-tennisball:before {
    content: "\F2CF"
}

.i-icon-ios-text-outline:before {
    content: "\F2D0"
}

.i-icon-ios-text:before {
    content: "\F2D1"
}

.i-icon-ios-thermometer-outline:before {
    content: "\F2D2"
}

.i-icon-ios-thermometer:before {
    content: "\F2D3"
}

.i-icon-ios-thumbs-down-outline:before {
    content: "\F2D4"
}

.i-icon-ios-thumbs-down:before {
    content: "\F2D5"
}

.i-icon-ios-thumbs-up-outline:before {
    content: "\F2D6"
}

.i-icon-ios-thumbs-up:before {
    content: "\F2D7"
}

.i-icon-ios-thunderstorm-outline:before {
    content: "\F2D8"
}

.i-icon-ios-thunderstorm:before {
    content: "\F2D9"
}

.i-icon-ios-time-outline:before {
    content: "\F2DA"
}

.i-icon-ios-time:before {
    content: "\F2DB"
}

.i-icon-ios-timer-outline:before {
    content: "\F2DC"
}

.i-icon-ios-timer:before {
    content: "\F2DD"
}

.i-icon-ios-train-outline:before {
    content: "\F2DE"
}

.i-icon-ios-train:before {
    content: "\F2DF"
}

.i-icon-ios-transgender:before {
    content: "\F2E0"
}

.i-icon-ios-trash-outline:before {
    content: "\F2E1"
}

.i-icon-ios-trash:before {
    content: "\F2E2"
}

.i-icon-ios-trending-down:before {
    content: "\F2E3"
}

.i-icon-ios-trending-up:before {
    content: "\F2E4"
}

.i-icon-ios-trophy-outline:before {
    content: "\F2E5"
}

.i-icon-ios-trophy:before {
    content: "\F2E6"
}

.i-icon-ios-umbrella-outline:before {
    content: "\F2E7"
}

.i-icon-ios-umbrella:before {
    content: "\F2E8"
}

.i-icon-ios-undo-outline:before {
    content: "\F2E9"
}

.i-icon-ios-undo:before {
    content: "\F2EA"
}

.i-icon-ios-unlock-outline:before {
    content: "\F2EB"
}

.i-icon-ios-unlock:before {
    content: "\F2EC"
}

.i-icon-ios-videocam-outline:before {
    content: "\F2ED"
}

.i-icon-ios-videocam:before {
    content: "\F2EE"
}

.i-icon-ios-volume-down:before {
    content: "\F2EF"
}

.i-icon-ios-volume-mute:before {
    content: "\F2F0"
}

.i-icon-ios-volume-off:before {
    content: "\F2F1"
}

.i-icon-ios-volume-up:before {
    content: "\F2F2"
}

.i-icon-ios-walk:before {
    content: "\F2F3"
}

.i-icon-ios-warning-outline:before {
    content: "\F2F4"
}

.i-icon-ios-warning:before {
    content: "\F2F5"
}

.i-icon-ios-watch:before {
    content: "\F2F6"
}

.i-icon-ios-water-outline:before {
    content: "\F2F7"
}

.i-icon-ios-water:before {
    content: "\F2F8"
}

.i-icon-ios-wifi-outline:before {
    content: "\F2F9"
}

.i-icon-ios-wifi:before {
    content: "\F2FA"
}

.i-icon-ios-wine-outline:before {
    content: "\F2FB"
}

.i-icon-ios-wine:before {
    content: "\F2FC"
}

.i-icon-ios-woman-outline:before {
    content: "\F2FD"
}

.i-icon-ios-woman:before {
    content: "\F2FE"
}

.i-icon-logo-android:before {
    content: "\F2FF"
}

.i-icon-logo-angular:before {
    content: "\F300"
}

.i-icon-logo-apple:before {
    content: "\F301"
}

.i-icon-logo-bitcoin:before {
    content: "\F302"
}

.i-icon-logo-buffer:before {
    content: "\F303"
}

.i-icon-logo-chrome:before {
    content: "\F304"
}

.i-icon-logo-codepen:before {
    content: "\F305"
}

.i-icon-logo-css3:before {
    content: "\F306"
}

.i-icon-logo-designernews:before {
    content: "\F307"
}

.i-icon-logo-dribbble:before {
    content: "\F308"
}

.i-icon-logo-dropbox:before {
    content: "\F309"
}

.i-icon-logo-euro:before {
    content: "\F30A"
}

.i-icon-logo-facebook:before {
    content: "\F30B"
}

.i-icon-logo-foursquare:before {
    content: "\F30C"
}

.i-icon-logo-freebsd-devil:before {
    content: "\F30D"
}

.i-icon-logo-github:before {
    content: "\F30E"
}

.i-icon-logo-google:before {
    content: "\F30F"
}

.i-icon-logo-googleplus:before {
    content: "\F310"
}

.i-icon-logo-hackernews:before {
    content: "\F311"
}

.i-icon-logo-html5:before {
    content: "\F312"
}

.i-icon-logo-instagram:before {
    content: "\F313"
}

.i-icon-logo-javascript:before {
    content: "\F314"
}

.i-icon-logo-linkedin:before {
    content: "\F315"
}

.i-icon-logo-markdown:before {
    content: "\F316"
}

.i-icon-logo-nodejs:before {
    content: "\F317"
}

.i-icon-logo-octocat:before {
    content: "\F318"
}

.i-icon-logo-pinterest:before {
    content: "\F319"
}

.i-icon-logo-playstation:before {
    content: "\F31A"
}

.i-icon-logo-python:before {
    content: "\F31B"
}

.i-icon-logo-reddit:before {
    content: "\F31C"
}

.i-icon-logo-rss:before {
    content: "\F31D"
}

.i-icon-logo-sass:before {
    content: "\F31E"
}

.i-icon-logo-skype:before {
    content: "\F31F"
}

.i-icon-logo-snapchat:before {
    content: "\F320"
}

.i-icon-logo-steam:before {
    content: "\F321"
}

.i-icon-logo-tumblr:before {
    content: "\F322"
}

.i-icon-logo-tux:before {
    content: "\F323"
}

.i-icon-logo-twitch:before {
    content: "\F324"
}

.i-icon-logo-twitter:before {
    content: "\F325"
}

.i-icon-logo-usd:before {
    content: "\F326"
}

.i-icon-logo-vimeo:before {
    content: "\F327"
}

.i-icon-logo-whatsapp:before {
    content: "\F328"
}

.i-icon-logo-windows:before {
    content: "\F329"
}

.i-icon-logo-wordpress:before {
    content: "\F32A"
}

.i-icon-logo-xbox:before {
    content: "\F32B"
}

.i-icon-logo-yahoo:before {
    content: "\F32C"
}

.i-icon-logo-yen:before {
    content: "\F32D"
}

.i-icon-logo-youtube:before {
    content: "\F32E"
}

.i-icon-md-add-circle:before {
    content: "\F32F"
}

.i-icon-md-add:before {
    content: "\F330"
}

.i-icon-md-alarm:before {
    content: "\F331"
}

.i-icon-md-albums:before {
    content: "\F332"
}

.i-icon-md-alert:before {
    content: "\F333"
}

.i-icon-md-american-football:before {
    content: "\F334"
}

.i-icon-md-analytics:before {
    content: "\F335"
}

.i-icon-md-aperture:before {
    content: "\F336"
}

.i-icon-md-apps:before {
    content: "\F337"
}

.i-icon-md-appstore:before {
    content: "\F338"
}

.i-icon-md-archive:before {
    content: "\F339"
}

.i-icon-md-arrow-back:before {
    content: "\F33A"
}

.i-icon-md-arrow-down:before {
    content: "\F33B"
}

.i-icon-md-arrow-dropdown-circle:before {
    content: "\F33C"
}

.i-icon-md-arrow-dropdown:before {
    content: "\F33D"
}

.i-icon-md-arrow-dropleft-circle:before {
    content: "\F33E"
}

.i-icon-md-arrow-dropleft:before {
    content: "\F33F"
}

.i-icon-md-arrow-dropright-circle:before {
    content: "\F340"
}

.i-icon-md-arrow-dropright:before {
    content: "\F341"
}

.i-icon-md-arrow-dropup-circle:before {
    content: "\F342"
}

.i-icon-md-arrow-dropup:before {
    content: "\F343"
}

.i-icon-md-arrow-forward:before {
    content: "\F344"
}

.i-icon-md-arrow-round-back:before {
    content: "\F345"
}

.i-icon-md-arrow-round-down:before {
    content: "\F346"
}

.i-icon-md-arrow-round-forward:before {
    content: "\F347"
}

.i-icon-md-arrow-round-up:before {
    content: "\F348"
}

.i-icon-md-arrow-up:before {
    content: "\F349"
}

.i-icon-md-at:before {
    content: "\F34A"
}

.i-icon-md-attach:before {
    content: "\F34B"
}

.i-icon-md-backspace:before {
    content: "\F34C"
}

.i-icon-md-barcode:before {
    content: "\F34D"
}

.i-icon-md-baseball:before {
    content: "\F34E"
}

.i-icon-md-basket:before {
    content: "\F34F"
}

.i-icon-md-basketball:before {
    content: "\F350"
}

.i-icon-md-battery-charging:before {
    content: "\F351"
}

.i-icon-md-battery-dead:before {
    content: "\F352"
}

.i-icon-md-battery-full:before {
    content: "\F353"
}

.i-icon-md-beaker:before {
    content: "\F354"
}

.i-icon-md-beer:before {
    content: "\F355"
}

.i-icon-md-bicycle:before {
    content: "\F356"
}

.i-icon-md-bluetooth:before {
    content: "\F357"
}

.i-icon-md-boat:before {
    content: "\F358"
}

.i-icon-md-body:before {
    content: "\F359"
}

.i-icon-md-bonfire:before {
    content: "\F35A"
}

.i-icon-md-book:before {
    content: "\F35B"
}

.i-icon-md-bookmark:before {
    content: "\F35C"
}

.i-icon-md-bookmarks:before {
    content: "\F35D"
}

.i-icon-md-bowtie:before {
    content: "\F35E"
}

.i-icon-md-briefcase:before {
    content: "\F35F"
}

.i-icon-md-browsers:before {
    content: "\F360"
}

.i-icon-md-brush:before {
    content: "\F361"
}

.i-icon-md-bug:before {
    content: "\F362"
}

.i-icon-md-build:before {
    content: "\F363"
}

.i-icon-md-bulb:before {
    content: "\F364"
}

.i-icon-md-bus:before {
    content: "\F365"
}

.i-icon-md-cafe:before {
    content: "\F366"
}

.i-icon-md-calculator:before {
    content: "\F367"
}

.i-icon-md-calendar:before {
    content: "\F368"
}

.i-icon-md-call:before {
    content: "\F369"
}

.i-icon-md-camera:before {
    content: "\F36A"
}

.i-icon-md-car:before {
    content: "\F36B"
}

.i-icon-md-card:before {
    content: "\F36C"
}

.i-icon-md-cart:before {
    content: "\F36D"
}

.i-icon-md-cash:before {
    content: "\F36E"
}

.i-icon-md-chatboxes:before {
    content: "\F36F"
}

.i-icon-md-chatbubbles:before {
    content: "\F370"
}

.i-icon-md-checkbox-outline:before {
    content: "\F371"
}

.i-icon-md-checkbox:before {
    content: "\F372"
}

.i-icon-md-checkmark-circle-outline:before {
    content: "\F373"
}

.i-icon-md-checkmark-circle:before {
    content: "\F374"
}

.i-icon-md-checkmark:before {
    content: "\F375"
}

.i-icon-md-clipboard:before {
    content: "\F376"
}

.i-icon-md-clock:before {
    content: "\F377"
}

.i-icon-md-close-circle:before {
    content: "\F378"
}

.i-icon-md-close:before {
    content: "\F379"
}

.i-icon-md-closed-captioning:before {
    content: "\F37A"
}

.i-icon-md-cloud-circle:before {
    content: "\F37B"
}

.i-icon-md-cloud-done:before {
    content: "\F37C"
}

.i-icon-md-cloud-download:before {
    content: "\F37D"
}

.i-icon-md-cloud-outline:before {
    content: "\F37E"
}

.i-icon-md-cloud-upload:before {
    content: "\F37F"
}

.i-icon-md-cloud:before {
    content: "\F380"
}

.i-icon-md-cloudy-night:before {
    content: "\F381"
}

.i-icon-md-cloudy:before {
    content: "\F382"
}

.i-icon-md-code-download:before {
    content: "\F383"
}

.i-icon-md-code-working:before {
    content: "\F384"
}

.i-icon-md-code:before {
    content: "\F385"
}

.i-icon-md-cog:before {
    content: "\F386"
}

.i-icon-md-color-fill:before {
    content: "\F387"
}

.i-icon-md-color-filter:before {
    content: "\F388"
}

.i-icon-md-color-palette:before {
    content: "\F389"
}

.i-icon-md-color-wand:before {
    content: "\F38A"
}

.i-icon-md-compass:before {
    content: "\F38B"
}

.i-icon-md-construct:before {
    content: "\F38C"
}

.i-icon-md-contact:before {
    content: "\F38D"
}

.i-icon-md-contacts:before {
    content: "\F38E"
}

.i-icon-md-contract:before {
    content: "\F38F"
}

.i-icon-md-contrast:before {
    content: "\F390"
}

.i-icon-md-copy:before {
    content: "\F391"
}

.i-icon-md-create:before {
    content: "\F392"
}

.i-icon-md-crop:before {
    content: "\F393"
}

.i-icon-md-cube:before {
    content: "\F394"
}

.i-icon-md-cut:before {
    content: "\F395"
}

.i-icon-md-desktop:before {
    content: "\F396"
}

.i-icon-md-disc:before {
    content: "\F397"
}

.i-icon-md-document:before {
    content: "\F398"
}

.i-icon-md-done-all:before {
    content: "\F399"
}

.i-icon-md-download:before {
    content: "\F39A"
}

.i-icon-md-easel:before {
    content: "\F39B"
}

.i-icon-md-egg:before {
    content: "\F39C"
}

.i-icon-md-exit:before {
    content: "\F39D"
}

.i-icon-md-expand:before {
    content: "\F39E"
}

.i-icon-md-eye-off:before {
    content: "\F39F"
}

.i-icon-md-eye:before {
    content: "\F3A0"
}

.i-icon-md-fastforward:before {
    content: "\F3A1"
}

.i-icon-md-female:before {
    content: "\F3A2"
}

.i-icon-md-filing:before {
    content: "\F3A3"
}

.i-icon-md-film:before {
    content: "\F3A4"
}

.i-icon-md-finger-print:before {
    content: "\F3A5"
}

.i-icon-md-flag:before {
    content: "\F3A6"
}

.i-icon-md-flame:before {
    content: "\F3A7"
}

.i-icon-md-flash:before {
    content: "\F3A8"
}

.i-icon-md-flask:before {
    content: "\F3A9"
}

.i-icon-md-flower:before {
    content: "\F3AA"
}

.i-icon-md-folder-open:before {
    content: "\F3AB"
}

.i-icon-md-folder:before {
    content: "\F3AC"
}

.i-icon-md-football:before {
    content: "\F3AD"
}

.i-icon-md-funnel:before {
    content: "\F3AE"
}

.i-icon-md-game-controller-a:before {
    content: "\F3AF"
}

.i-icon-md-game-controller-b:before {
    content: "\F3B0"
}

.i-icon-md-git-branch:before {
    content: "\F3B1"
}

.i-icon-md-git-commit:before {
    content: "\F3B2"
}

.i-icon-md-git-compare:before {
    content: "\F3B3"
}

.i-icon-md-git-merge:before {
    content: "\F3B4"
}

.i-icon-md-git-network:before {
    content: "\F3B5"
}

.i-icon-md-git-pull-request:before {
    content: "\F3B6"
}

.i-icon-md-glasses:before {
    content: "\F3B7"
}

.i-icon-md-globe:before {
    content: "\F3B8"
}

.i-icon-md-grid:before {
    content: "\F3B9"
}

.i-icon-md-hammer:before {
    content: "\F3BA"
}

.i-icon-md-hand:before {
    content: "\F3BB"
}

.i-icon-md-happy:before {
    content: "\F3BC"
}

.i-icon-md-headset:before {
    content: "\F3BD"
}

.i-icon-md-heart-outline:before {
    content: "\F3BE"
}

.i-icon-md-heart:before {
    content: "\F3BF"
}

.i-icon-md-help-buoy:before {
    content: "\F3C0"
}

.i-icon-md-help-circle:before {
    content: "\F3C1"
}

.i-icon-md-help:before {
    content: "\F3C2"
}

.i-icon-md-home:before {
    content: "\F3C3"
}

.i-icon-md-ice-cream:before {
    content: "\F3C4"
}

.i-icon-md-image:before {
    content: "\F3C5"
}

.i-icon-md-images:before {
    content: "\F3C6"
}

.i-icon-md-infinite:before {
    content: "\F3C7"
}

.i-icon-md-information-circle:before {
    content: "\F3C8"
}

.i-icon-md-information:before {
    content: "\F3C9"
}

.i-icon-md-ionic:before {
    content: "\F3CA"
}

.i-icon-md-ionitron:before {
    content: "\F3CB"
}

.i-icon-md-jet:before {
    content: "\F3CC"
}

.i-icon-md-key:before {
    content: "\F3CD"
}

.i-icon-md-keypad:before {
    content: "\F3CE"
}

.i-icon-md-laptop:before {
    content: "\F3CF"
}

.i-icon-md-leaf:before {
    content: "\F3D0"
}

.i-icon-md-link:before {
    content: "\F3D1"
}

.i-icon-md-list-box:before {
    content: "\F3D2"
}

.i-icon-md-list:before {
    content: "\F3D3"
}

.i-icon-md-locate:before {
    content: "\F3D4"
}

.i-icon-md-lock:before {
    content: "\F3D5"
}

.i-icon-md-log-in:before {
    content: "\F3D6"
}

.i-icon-md-log-out:before {
    content: "\F3D7"
}

.i-icon-md-magnet:before {
    content: "\F3D8"
}

.i-icon-md-mail-open:before {
    content: "\F3D9"
}

.i-icon-md-mail:before {
    content: "\F3DA"
}

.i-icon-md-male:before {
    content: "\F3DB"
}

.i-icon-md-man:before {
    content: "\F3DC"
}

.i-icon-md-map:before {
    content: "\F3DD"
}

.i-icon-md-medal:before {
    content: "\F3DE"
}

.i-icon-md-medical:before {
    content: "\F3DF"
}

.i-icon-md-medkit:before {
    content: "\F3E0"
}

.i-icon-md-megaphone:before {
    content: "\F3E1"
}

.i-icon-md-menu:before {
    content: "\F3E2"
}

.i-icon-md-mic-off:before {
    content: "\F3E3"
}

.i-icon-md-mic:before {
    content: "\F3E4"
}

.i-icon-md-microphone:before {
    content: "\F3E5"
}

.i-icon-md-moon:before {
    content: "\F3E6"
}

.i-icon-md-more:before {
    content: "\F3E7"
}

.i-icon-md-move:before {
    content: "\F3E8"
}

.i-icon-md-musical-note:before {
    content: "\F3E9"
}

.i-icon-md-musical-notes:before {
    content: "\F3EA"
}

.i-icon-md-navigate:before {
    content: "\F3EB"
}

.i-icon-md-no-smoking:before {
    content: "\F3EC"
}

.i-icon-md-notifications-off:before {
    content: "\F3ED"
}

.i-icon-md-notifications-outline:before {
    content: "\F3EE"
}

.i-icon-md-notifications:before {
    content: "\F3EF"
}

.i-icon-md-nuclear:before {
    content: "\F3F0"
}

.i-icon-md-nutrition:before {
    content: "\F3F1"
}

.i-icon-md-open:before {
    content: "\F3F2"
}

.i-icon-md-options:before {
    content: "\F3F3"
}

.i-icon-md-outlet:before {
    content: "\F3F4"
}

.i-icon-md-paper-plane:before {
    content: "\F3F5"
}

.i-icon-md-paper:before {
    content: "\F3F6"
}

.i-icon-md-partly-sunny:before {
    content: "\F3F7"
}

.i-icon-md-pause:before {
    content: "\F3F8"
}

.i-icon-md-paw:before {
    content: "\F3F9"
}

.i-icon-md-people:before {
    content: "\F3FA"
}

.i-icon-md-person-add:before {
    content: "\F3FB"
}

.i-icon-md-person:before {
    content: "\F3FC"
}

.i-icon-md-phone-landscape:before {
    content: "\F3FD"
}

.i-icon-md-phone-portrait:before {
    content: "\F3FE"
}

.i-icon-md-photos:before {
    content: "\F3FF"
}

.i-icon-md-pie:before {
    content: "\F400"
}

.i-icon-md-pin:before {
    content: "\F401"
}

.i-icon-md-pint:before {
    content: "\F402"
}

.i-icon-md-pizza:before {
    content: "\F403"
}

.i-icon-md-plane:before {
    content: "\F404"
}

.i-icon-md-planet:before {
    content: "\F405"
}

.i-icon-md-play:before {
    content: "\F406"
}

.i-icon-md-podium:before {
    content: "\F407"
}

.i-icon-md-power:before {
    content: "\F408"
}

.i-icon-md-pricetag:before {
    content: "\F409"
}

.i-icon-md-pricetags:before {
    content: "\F40A"
}

.i-icon-md-print:before {
    content: "\F40B"
}

.i-icon-md-pulse:before {
    content: "\F40C"
}

.i-icon-md-qr-scanner:before {
    content: "\F40D"
}

.i-icon-md-quote:before {
    content: "\F40E"
}

.i-icon-md-radio-button-off:before {
    content: "\F40F"
}

.i-icon-md-radio-button-on:before {
    content: "\F410"
}

.i-icon-md-radio:before {
    content: "\F411"
}

.i-icon-md-rainy:before {
    content: "\F412"
}

.i-icon-md-recording:before {
    content: "\F413"
}

.i-icon-md-redo:before {
    content: "\F414"
}

.i-icon-md-refresh-circle:before {
    content: "\F415"
}

.i-icon-md-refresh:before {
    content: "\F416"
}

.i-icon-md-remove-circle:before {
    content: "\F417"
}

.i-icon-md-remove:before {
    content: "\F418"
}

.i-icon-md-reorder:before {
    content: "\F419"
}

.i-icon-md-repeat:before {
    content: "\F41A"
}

.i-icon-md-resize:before {
    content: "\F41B"
}

.i-icon-md-restaurant:before {
    content: "\F41C"
}

.i-icon-md-return-left:before {
    content: "\F41D"
}

.i-icon-md-return-right:before {
    content: "\F41E"
}

.i-icon-md-reverse-camera:before {
    content: "\F41F"
}

.i-icon-md-rewind:before {
    content: "\F420"
}

.i-icon-md-ribbon:before {
    content: "\F421"
}

.i-icon-md-rose:before {
    content: "\F422"
}

.i-icon-md-sad:before {
    content: "\F423"
}

.i-icon-md-school:before {
    content: "\F424"
}

.i-icon-md-search:before {
    content: "\F425"
}

.i-icon-md-send:before {
    content: "\F426"
}

.i-icon-md-settings:before {
    content: "\F427"
}

.i-icon-md-share-alt:before {
    content: "\F428"
}

.i-icon-md-share:before {
    content: "\F429"
}

.i-icon-md-shirt:before {
    content: "\F42A"
}

.i-icon-md-shuffle:before {
    content: "\F42B"
}

.i-icon-md-skip-backward:before {
    content: "\F42C"
}

.i-icon-md-skip-forward:before {
    content: "\F42D"
}

.i-icon-md-snow:before {
    content: "\F42E"
}

.i-icon-md-speedometer:before {
    content: "\F42F"
}

.i-icon-md-square-outline:before {
    content: "\F430"
}

.i-icon-md-square:before {
    content: "\F431"
}

.i-icon-md-star-half:before {
    content: "\F432"
}

.i-icon-md-star-outline:before {
    content: "\F433"
}

.i-icon-md-star:before {
    content: "\F434"
}

.i-icon-md-stats:before {
    content: "\F435"
}

.i-icon-md-stopwatch:before {
    content: "\F436"
}

.i-icon-md-subway:before {
    content: "\F437"
}

.i-icon-md-sunny:before {
    content: "\F438"
}

.i-icon-md-swap:before {
    content: "\F439"
}

.i-icon-md-switch:before {
    content: "\F43A"
}

.i-icon-md-sync:before {
    content: "\F43B"
}

.i-icon-md-tablet-landscape:before {
    content: "\F43C"
}

.i-icon-md-tablet-portrait:before {
    content: "\F43D"
}

.i-icon-md-tennisball:before {
    content: "\F43E"
}

.i-icon-md-text:before {
    content: "\F43F"
}

.i-icon-md-thermometer:before {
    content: "\F440"
}

.i-icon-md-thumbs-down:before {
    content: "\F441"
}

.i-icon-md-thumbs-up:before {
    content: "\F442"
}

.i-icon-md-thunderstorm:before {
    content: "\F443"
}

.i-icon-md-time:before {
    content: "\F444"
}

.i-icon-md-timer:before {
    content: "\F445"
}

.i-icon-md-train:before {
    content: "\F446"
}

.i-icon-md-transgender:before {
    content: "\F447"
}

.i-icon-md-trash:before {
    content: "\F448"
}

.i-icon-md-trending-down:before {
    content: "\F449"
}

.i-icon-md-trending-up:before {
    content: "\F44A"
}

.i-icon-md-trophy:before {
    content: "\F44B"
}

.i-icon-md-umbrella:before {
    content: "\F44C"
}

.i-icon-md-undo:before {
    content: "\F44D"
}

.i-icon-md-unlock:before {
    content: "\F44E"
}

.i-icon-md-videocam:before {
    content: "\F44F"
}

.i-icon-md-volume-down:before {
    content: "\F450"
}

.i-icon-md-volume-mute:before {
    content: "\F451"
}

.i-icon-md-volume-off:before {
    content: "\F452"
}

.i-icon-md-volume-up:before {
    content: "\F453"
}

.i-icon-md-walk:before {
    content: "\F454"
}

.i-icon-md-warning:before {
    content: "\F455"
}

.i-icon-md-watch:before {
    content: "\F456"
}

.i-icon-md-water:before {
    content: "\F457"
}

.i-icon-md-wifi:before {
    content: "\F458"
}

.i-icon-md-wine:before {
    content: "\F459"
}

.i-icon-md-woman:before {
    content: "\F45A"
}

.i-icon-ios-loading:before {
    content: "\F45B"
}

</style>