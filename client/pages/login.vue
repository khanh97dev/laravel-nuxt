<template>
  <div class="row">
    <div class="col-lg-6 m-auto">
      <v-card class="elevation-12">
        <v-form @submit.prevent="login" @keydown="form.onKeydown($event)">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Login form</v-toolbar-title>
            <div class="flex-grow-1"></div>
          </v-toolbar>
          <v-card-text>
            <v-text-field label="Login" :error-messages="errors.email" name="login" prepend-icon="person" type="text" v-model="form.email"></v-text-field>
            <v-text-field id="password" :error-messages="errors.password" label="Password" name="password" prepend-icon="lock" type="password" v-model="form.password"></v-text-field>
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

    head() {
      return {
        title: this.$t('login')
      }
    },

    data: () => ({
      loading: false,
      form: new Form({
        email: '',
        password: ''
      }),
      errors: {
        email: '',
        password: ''
      },
      remember: false
    }),

    methods: {
      async login() {
        let data

        // start login
        this.loading = true
        this.errors = { email: '', password: '' } // reset error

        // Submit the form.
        try {
          const response = await this.$axios.post('/login', this.form)
          data = response.data
        } catch (e) {
          this.errors = e.response.data.errors;
          return
        } finally {
          this.loading = false
        }

        // Save the token.
        this.$store.dispatch('auth/saveToken', {
          token: data.token,
          remember: this.remember
        })

        // Fetch the user.
        await this.$store.dispatch('auth/fetchUser')

        // Redirect home.
        this.$router.push({
          name: 'home'
        })
      }
    }
  }
</script>