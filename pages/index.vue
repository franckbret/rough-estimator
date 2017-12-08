<template>
  <section class="container">
    <img class="logo" src="logo.png" />
    <p class="content">
      I want my project to cost
      <input v-model="cost" class="cost-input" placeholder="50.000$" />
      here is the specification:
      <span
        class="uploaded-file"
        v-if="lastFile"
      >
        {{ lastFile }}
      </span>
      <file-upload
        class="upload-button"
        v-else
        :value="files"
        @input="updatetValue"
      >
        upload file
      </file-upload>
    </p>
    <div>
      <router-link class="button" to="estimate">
        Is it possible?
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      cost: '',
      files: []
    }
  },
  computed: {
    lastFile () {
      return this.files[0] ? this.files[0].name : null
    }
  },
  methods: {
    updatetValue (value) {
      this.files = value
    }
  }
}
</script>

<style src="assets/styles/base.scss"></style>

<style lang="scss" scoped>
@import 'assets/styles/variables';

.logo {
  width: 250px;
}

.container {
  width: 500px;
  position: relative;
  margin: 0 auto;
  top: 50vh;
  transform: translateY(-50%);
  text-align: center;
}

.content {
  margin-bottom: 30px;
  line-height: 50px;
}

.cost-input {
  outline: none;
  margin: 0 10px;
  padding: 0 10px;
  width: 120px;
  height: 35px;
  border: 1px solid #ccc;
  background: $c-white;
  border-radius: 2px;
  font-size: 16px;
  font-weight: bold;
  text-align: right;

  &::placeholder {
    color: #ccc;
  }
}

.upload-button {
  display: inline-block;
  height: 35px;
  padding: 0 10px;
  line-height: 35px;
  background: $c-white;
  border-radius: 2px;
  border: 1px solid #ccc;
  vertical-align: middle;
}

.uploaded-file {
  color: $c-primary;
  font-style: italic;
}

.title {
  margin: 0 0 30px 0;
  font-size: 30px;
}

.button {
  display: inline-block;
  background: $c-primary;
  color: $c-white;
  border-radius: 2px;
  padding: 12px 30px;
  font-weight: bold;
  text-decoration: none;
}
</style>
