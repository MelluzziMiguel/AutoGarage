<script setup lang="ts">
import logoEscura from "../../assets/logoEscura.png";

defineProps<{
  collapsed: boolean;
}>();

const emit = defineEmits<{
  toggle: [];
}>();
</script>

<template>
  <aside class="sidebar" :class="{ 'sidebar--collapsed': collapsed }">
    <div class="sidebar-header">
      <div class="sidebar-brand">
        <img :src="logoEscura" alt="autoGarage" class="sidebar-logo" />

        <span v-if="!collapsed" class="sidebar-brand-name">
          auto<strong>Garage</strong>
        </span>
      </div>

      <button
        type="button"
        class="sidebar-toggle"
        aria-label="Abrir ou fechar menu"
        @click="emit('toggle')"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <nav class="sidebar-menu">
      <RouterLink to="/home" class="sidebar-link">
        <span class="sidebar-link-icon"> ⌂ </span>

        <span v-if="!collapsed"> Home </span>
      </RouterLink>

      <RouterLink to="/pessoas" class="sidebar-link">
        <span class="sidebar-link-icon"> ♙ </span>

        <span v-if="!collapsed"> Pessoas </span>
      </RouterLink>
    </nav>
  </aside>
</template>
