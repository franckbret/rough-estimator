export const complexAppForm = {
  budget: 50000, // dollars
  type: ['Desktop', 'PWA'], // Desktop is default
  development: ['Frontend', 'Backend', 'Design'],
  technology: ['Node.js', 'React'],
  features: {
    logging: true,
    notifications: true,
    fileUploading: true,
    animation: true,
    multiStepForms: true,
    onboarding: true,
    thirdPartyIntegration: true,
    adminPanel: true,
    encryption: true,
    pageCount: 10
  }
}

export const landingPageForm = {
  budget: 15000,
  type: ['Desktop', 'PWA'],
  development: ['Frontend'],
  technology: [],
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
    pageCount: 1
  }
}

export const designForm = {
  budget: 5000,
  type: ['Desktop', 'PWA'],
  development: ['Design'],
  technology: [],
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
    pageCount: 5
  }
}

export default function estimate (form) {
  let totalEstimationInWeeks = 0 // weeks

  if (form.type.includes('Desktop') === false) {
    totalEstimationInWeeks -= 2
  }
  if (form.type.includes('PWA')) {
    totalEstimationInWeeks += 2
  }

  if (form.development.includes('Frontend')) {
    // Setup
    totalEstimationInWeeks += 0.5

    if (form.technology.includes('Vue.js') | form.technology.includes('React.js')) {
      totalEstimationInWeeks += 0.2
    } else if (form.technology.includes('Ember.js')) {
      totalEstimationInWeeks -= 0.2
    }
    // pages in general
    totalEstimationInWeeks += (form.features.pageCount * 1)
  }
  if (form.development.includes('Backend')) {
    totalEstimationInWeeks += 4

    if (form.technology.includes('Firebase')) {
      totalEstimationInWeeks -= 2
    }
  }
  if (form.development.includes('Design')) {
    totalEstimationInWeeks += 3
  }

  if (form.features.logging) {
    totalEstimationInWeeks += 1.5
  }
  if (form.features.notifications) {
    totalEstimationInWeeks += 0.5
  }
  if (form.features.animation) {
    totalEstimationInWeeks += 1
  }
  if (form.features.multiStepForms) {
    totalEstimationInWeeks += 0.6
  }
  if (form.features.fileUploading) {
    totalEstimationInWeeks += 0.4
  }
  if (form.features.onboarding) {
    totalEstimationInWeeks += 0.5
  }
  if (form.features.thirdPartyIntegration) {
    totalEstimationInWeeks += 1
  }
  if (form.features.adminPanel) {
    totalEstimationInWeeks += 2
  }
  if (form.features.encryption) {
    totalEstimationInWeeks += 1
  }

  let budgetPerWeek = form.budget / totalEstimationInWeeks

  if (budgetPerWeek > 0 && budgetPerWeek <= 500) {
    totalEstimationInWeeks *= 1.1 // cashflow coefficient
  } else if (budgetPerWeek > 500 && budgetPerWeek <= 1000) {
    totalEstimationInWeeks *= 1
  } else if (budgetPerWeek > 1000 && budgetPerWeek <= 2000) {
    totalEstimationInWeeks *= 0.9
  } else if (budgetPerWeek > 2000) {
    totalEstimationInWeeks *= 0.8
  }

  return totalEstimationInWeeks
}
