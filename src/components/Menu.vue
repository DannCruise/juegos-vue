<script setup>
import { CNavbarNav,CContainer,CNavbarToggler,CNavbar,CNavbarBrand,CCollapse,CNavItem,CNavLink } from '@coreui/bootstrap-vue'
import {ref} from 'vue'
const visible = ref(false);
</script>

<template>
  <CNavbar expand="lg" color-scheme="dark" class="bg-dark">
  <CContainer fluid>
    <RouterLink to="/" class="navbar-brand">Juegos</RouterLink>
    <CNavbarToggler @click="visible = !visible"/>
    <CCollapse class="navbar-collapse" :visible="visible">
      <CNavbarNav>
        <CNavItem>
            <RouterLink to="/simon" class="nav-link">Simón dice</RouterLink>
        </CNavItem>
        <CNavItem>
            <RouterLink to="/adivina" class="nav-link">Adivina número</RouterLink>
        </CNavItem>
      </CNavbarNav>
    </CCollapse>
  </CContainer>
</CNavbar>
</template>