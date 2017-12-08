<template>
  <section class="container">
    <div>
      <h1 class="title">
        Probably not
      </h1>
      <p>
        but if you tell us few more things, we might be able to give you a rough estimate
      </p>
      <el-form class="form" ref="form" :model="formData" label-width="120px">
        <el-form-item label="Project type">
          <el-checkbox-group v-model="formData.type">
            <el-checkbox label="Desktop" name="type"></el-checkbox>
            <el-checkbox label="PWA" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="Area">
          <el-checkbox-group v-model="formData.development">
            <el-checkbox label="Backend" name="development"></el-checkbox>
            <el-checkbox label="Frontend" name="development"></el-checkbox>
            <el-checkbox label="Design" name="development"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="Technologies">
          <el-checkbox-group v-model="formData.technology">
            <el-checkbox label="Ember" name="technology"></el-checkbox>
            <el-checkbox label="Vue.js" name="technology"></el-checkbox>
            <el-checkbox label="Angular" name="technology"></el-checkbox>
            <el-checkbox label="React" name="technology"></el-checkbox>
            <el-checkbox label="Rails" name="technology"></el-checkbox>
            <el-checkbox label="Node.js" name="technology"></el-checkbox>
            <el-checkbox label="Firebase" name="technology"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="Pages">
          <el-input-number v-model="formData.pageCount" />
        </el-form-item>
        <el-form-item label="Features">
          <el-checkbox
            v-for="feature in features"
            v-model="formData.features[feature.id]"
            :label="feature.label"
            name="feature"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" :disabled="estimation <= 0" @click="onSubmit">Estimate</el-button>
        </el-form-item>
      </el-form>
    </div>
  </section>
</template>

<script>
import estimator from '../estimator'

export default {
  data () {
    return {
      formData: {
        type: [],
        development: [],
        technology: [],
        pageCount: null,
        features: {}
      },
      features: [
        { id: 'logging', label: 'Authorization/Authentication' },
        { id: 'notifications', label: 'Notifications' },
        { id: 'fileUploading', label: 'File uploading' },
        { id: 'animation', label: 'Animation' },
        { id: 'multiStepForms', label: 'Multi step forms' },
        { id: 'onboarding', label: 'Onboarding' },
        { id: 'thirdPartyIntegration', label: 'Third party integration' },
        { id: 'adminPanel', label: 'Admin panel' },
        { id: 'encryption', label: 'Encryption' },
        { id: 'chat', label: 'Chat' }
      ]
    }
  },
  computed: {
    estimation () {
      return estimator(this.formData)
    }
  },
  methods: {
    onSubmit () {
      const message = `You are doomed! It will take more than ${this.estimation / 4} months`

      this.$alert(message, 'Whoops', {
        confirmButtonText: 'OK, I got it'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 500px;
  margin: 40px auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.title {
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
  font-size: 42px;
}

.form {
  margin-top: 30px;
}

</style>
