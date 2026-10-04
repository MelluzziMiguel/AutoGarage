
<script setup lang="ts">
import { ref } from 'vue'

const email = ref<string>('')
const senha = ref<string>('')
const mostrarSenha = ref<boolean>(false)
const erro = ref<string>('')

function fazerLogin() {
  erro.value = ''

  if (!email.value || !senha.value) {
    erro.value = 'Preencha o e-mail e a senha.'
    return
  }

  // A autenticação será implementada futuramente.
  erro.value = 'A autenticação ainda não foi configurada.'
}
</script>

<template>
  <section class="form-panel">
    <div class="form-container">

      <div class="mobile-brand">
        Auto<strong>Garage</strong>
      </div>

      <div class="welcome">
        <div class="welcome-icon">↗</div>

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

            <a href="#" @click.prevent>
              Esqueceu a senha?
            </a>
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
          Entrar no sistema <span>→</span>
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
      🔒 Ambiente seguro · autoGarage
    </div>
  </section>
</template>
