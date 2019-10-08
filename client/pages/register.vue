<template>
  <div class="row">
    <div class="col-lg-6 m-auto">
      <v-card class="elevation-12" v-if="mustVerifyEmail">
        <v-toolbar color="primary" dark flat>
          <v-toolbar-title>{{ $t('register') }}</v-toolbar-title>
          <div class="flex-grow-1"></div>
        </v-toolbar>
        <v-alert type="success">
          {{ $t('verify_email_address') }}
        </v-alert>
      </v-card>
      <v-card v-else class="elevation-12">
        <v-form @submit.prevent="register" @keydown="form.onKeydown($event)">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>{{ $t('register') }}</v-toolbar-title>
            <div class="flex-grow-1"></div>
          </v-toolbar>
          <v-card-text>
            <v-text-field
              :label="$t('name')"
              :error-messages="errors.name"
              name="name"
              prepend-icon="person"
              type="text"
              v-model="form.name">
            </v-text-field>
            <v-text-field
              :label="$t('email')"
              :error-messages="errors.email"
              name="email"
              prepend-icon="email"
              type="text"
              v-model="form.email">
            </v-text-field>
            <v-text-field
              :label="$t('password')"
              :error-messages="errors.password"
              name="password"
              prepend-icon="lock"
              type="password"
              v-model="form.password">
            </v-text-field>
            <v-text-field
              :label="$t('confirm_password')"
              :error-messages="errors.password_confirmation"
              name="password_confirmation"
              prepend-icon="confirmation_number"
              type="password"
              v-model="form.password_confirmation">
            </v-text-field>
          </v-card-text>
          <v-card-actions>
            <div class="flex-grow-1"></div>
            <v-btn type="submit" color="primary" :loading="loading">Login</v-btn>
            <login-with-github />
          </v-card-actions>
        </v-form>
      </v-card>
    </div>
  </div>
</template>

<script>
import Form from 'vform'

export default {
  middleware: 'guest',

  head () {
    return { title: this.$t('register') }
  },

  data: () => ({
    form: new Form({
      name: '',
      email: '',
      password: '',
      password_confirmation: ''
    }),
    errors: {
      name: '',
      email: '',
      password: '',
      password_confirmation: ''
    },
    loading: false,
    mustVerifyEmail: false
  }),

  methods: {
    async register () {
      // start register
      this.loading = true;
      // Register the user.
      try {
        var data = await this.$axios.$post('/register', this.form)
      } catch (e) {
        let exception = e.response.data
        if(exception.errors && exception.errors.name === undefined)
          this.$toast.errors(exception, {duration: 2000})
        else if(exception.errors) this.errors = errors
        else if(exception.error) this.$toast.errors(exception.error, {duration: 2000})
        return;
      } finally {
        this.loading = false;
      }
      // Must verify email fist.
      if (data) {
        this.mustVerifyEmail = true
      } else {
        let data = response.data
        // Save the token.
        this.$store.dispatch('auth/saveToken', { token: data.token })

        // Update the user.
        await this.$store.dispatch('auth/updateUser', { user: data })

        // Redirect home.
        this.$router.push({ name: 'home' })
      }
    }
  }
}
</script>
