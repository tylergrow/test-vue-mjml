import Vue from 'vue';
import mjButton from "./mj-button.vue";
import mjDivider from "./mj-divider.vue";
import mjHero from "./mj-hero.vue";
import mjHeroContent from "./mj-hero-content.vue";
import mjImage from "./mj-image.vue";
import mjSection from "./mj-section.vue";
import mjSpacer from "./mj-spacer.vue";
import mjText from "./mj-text.vue";

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
function globalizeComponents ( components ) {
    for ( var key in components ) {
        components[key] = Vue.component( key, components[ key ] );
    }
}
globalizeComponents( _components );
export default _components;
