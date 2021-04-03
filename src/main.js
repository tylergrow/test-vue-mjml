import Vue from "vue";
import App from "./App.vue";
import mjButton from "./components/mj-button.vue";
import mjDivider from "./components/mj-divider.vue";
import mjHero from "./components/mj-hero.vue";
import mjHeroContent from "./components/mj-hero-content.vue";
import mjImage from "./components/mj-image.vue";
import mjSection from "./components/mj-section.vue";
import mjSpacer from "./components/mj-spacer.vue";
import mjText from "./components/mj-text.vue";

var _components = {
  mjDivider,
  mjButton,
  mjHero,
  mjHeroContent,
  mjImage,
  mjSection,
  mjSpacer,
  mjText
};
globalizeComponents(_components);

var app = new Vue({
  components: { App },
  el: "#app"
});

function globalizeComponents(components) {
  for (var key in components) {
    var id = camelHyphen(key);
    Vue.component(id, components[id]);
  }
}
function camelHyphen(myStr) {
  return myStr.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
