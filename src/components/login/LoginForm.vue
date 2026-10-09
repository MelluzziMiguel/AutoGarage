
<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { login } from '../../services/authService'

const router = useRouter()

const email = ref('')
const senha = ref('')
const mostrarSenha = ref(false)
const erro = ref('')

function fazerLogin() {
  erro.value = ''

  if (!email.value || !senha.value) {
    erro.value = 'Preencha o e-mail e a senha.'
    return
  }

  const usuario = login(
    email.value,
    senha.value,
  )

  if (!usuario) {
    erro.value = 'Usuário ou senha incorretos.'
    return
  }

  router.push('/home')
}

</script>

<template>
  <section class="form-panel">
    <div class="form-container">

      <div class="mobile-brand">
        Auto<strong>Garage</strong>
      </div>

      <div class="welcome">
        
       

        <h2>Bem-vindo de volta!</h2>

        <p>
          Entre com suas credenciais para acessar o sistema.
        </p>
      </div>

      <form @submit.prevent="fazerLogin">

        <div class="form-group">
          <label for="email">E-mail</label>

          <input
            id="email"
            v-model="email"
            type="email"
            placeholder="seu@email.com"
            autocomplete="email"
            required
          />
        </div>

        <div class="form-group">
          <div class="label-row">
            <label for="senha">Senha</label>
          </div>

          <div class="password-field">
            <input
              id="senha"
              v-model="senha"
              :type="mostrarSenha ? 'text' : 'password'"
              placeholder="Digite sua senha"
              autocomplete="current-password"
              required
            />

            <button
              type="button"
              class="show-password"
              @click="mostrarSenha = !mostrarSenha"
            >
              {{ mostrarSenha ? 'Ocultar' : 'Mostrar' }}
            </button>
          </div>
        </div>

        <div class="form-options">
          <label class="remember">
            <input type="checkbox" />
            Lembrar de mim
          </label>
        </div>

        <p v-if="erro" class="error-message">
          {{ erro }}
        </p>

        <button type="submit" class="login-button">
          Entrar no sistema
        </button>

      </form>

      <div class="form-footer">
        <p>Problemas para acessar?</p>

        <a href="mailto:suporte@seudominio.com">
          Entre em contato com o suporte
        </a>
      </div>
    </div>

    <div class="security-note">
      © 2026 AutoGarage. Todos os direitos reservados.
    </div>
  </section>
</template>
