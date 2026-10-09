<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import {
  getUsuarioLogado,
  logout,
} from '../../services/authService'

const router = useRouter()

const menuAberto = ref(false)

const usuario = getUsuarioLogado()

function toggleMenu() {
  menuAberto.value = !menuAberto.value
}

function sair() {
  logout()
  router.push('/login')
}
</script>

<template>
  <header class="header-bar">
    <div></div>

    <div class="profile-wrapper">
      <button
        type="button"
        class="profile-button"
        @click="toggleMenu"
      >
        <span class="profile-avatar">
          {{ usuario?.nome.charAt(0) ?? 'U' }}
        </span>

        <div class="profile-info">
          <strong>
            {{ usuario?.nome }}
          </strong>

          <small>
            {{ usuario?.email }}
          </small>
        </div>

        <span
          class="profile-arrow"
          :class="{ 'profile-arrow--open': menuAberto }"
        >
          ▾
        </span>
      </button>

      <div
        v-if="menuAberto"
        class="profile-dropdown"
      >
        <div class="profile-dropdown-user">
          <strong>
            {{ usuario?.nome }}
          </strong>

          <span>
            {{ usuario?.email }}
          </span>
        </div>

        <div class="profile-dropdown-divider"></div>

        <button
          type="button"
          class="profile-dropdown-item"
        >
          Meu perfil
        </button>

        <button
          type="button"
          class="profile-dropdown-item profile-dropdown-logout"
          @click="sair"
        >
          Sair
        </button>
      </div>
    </div>
  </header>
</template>