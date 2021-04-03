
<template>
    <div v-bind="attrs">
        <h1>hello world</h1>
        <slot name="header">
            
        </slot>
        <slot>

        </slot>
        <slot name="footer">
            
        </slot>

    </div> 
</template>

<script>

export default {
  props: ['attrs'],
  data(){
    return {
      attrs: {
          style: {
              backgroundColor: black
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
