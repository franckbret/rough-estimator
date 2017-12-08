<template>
  <section class="container">
    <div>
      <h1 class="subtitle">
        Probably not
      </h1>
      <p>but if you tell us few more things, we might be able to give you a rough estimate</p>
      <div>
        <div v-for="item in form">

          <form-element
            v-if="!item.items"
            :element="item"
          />

          <form-section
            v-else
            :items="item.items"
          />

        </div>
      </div>
    </div>
  </section>
</template>

<script>
import FormElement from '~/components/FormElement'
import FormSection from '~/components/FormSection'
export default {
  components: {
    FormElement,
    FormSection
  },
  data () {
    return {
      formData: {
        budget: false,
        type: false,
        development: false,
        technology: false,
        features: {
          logging: false,
          notifications: false,
          fileUploading: false,
          animation: false,
          multiStepForms: false,
          onboarding: false,
          thirdPartyIntegration: false,
          adminPanel: false,
          encryption: false,
          pageCount: false
        }
      },
      form: [
        { id: 'budget', label: 'Budget', type: 'input' },
        { id: 'type', label: 'App type', type: 'option' },
        { id: 'development', label: 'Development', type: 'option' },
        { id: 'technology', label: 'Technologies', type: 'multiple' },
        {
          id: 'features',
          label: 'Features',
          items: [
            { id: 'logging', label: 'Logging', type: 'checkbox' },
            { id: 'notifications', label: 'Notifications', type: 'checkbox' },
            { id: 'fileUploading', label: 'File uploading', type: 'checkbox' },
            { id: 'animation', label: 'Animation', type: 'checkbox' },
            { id: 'multiStepForms', label: 'Multi step forms', type: 'checkbox' },
            { id: 'onboarding', label: 'Onboarding', type: 'checkbox' },
            { id: 'thirdPartyIntegration', label: 'Third party integration', type: 'checkbox' },
            { id: 'adminPanel', label: 'Admin panel', type: 'checkbox' },
            { id: 'encryption', label: 'Encryption', type: 'checkbox' },
            { id: 'pageCount', label: 'Page Count', type: 'number' }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

</style>
