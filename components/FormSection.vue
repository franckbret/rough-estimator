<template>
  <div class="section">
    <div v-for="item in items">
      <form-element :element="item" />
    </div>
  </div>
</template>

<script>
import FormElement from '~/components/FormElement'
export default {
  components: {
    FormElement
  },
  props: {
    items: Array
  }
}
</script>

<style>

.section {
  border: 2px solid black
}

</style>
