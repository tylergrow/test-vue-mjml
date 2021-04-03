
<template>
    <base-campaign v-bind="attrs">

        <h1 style="font-size: 20px;">sljs sl lkjs </h1>
      <!--temporary table so the divider will work-->

    </base-campaign>
</template>

<script>
import BaseCampaign from './components/BaseCampaign.vue';

export default {
components: {
    "base-campaign":BaseCampaign
},
  data(){
    return {
      attrs: {
          style: {
              width: '100%'
          }
      }
    }
  },
  mounted(){

  }
}
</script>

<style>

</style>
