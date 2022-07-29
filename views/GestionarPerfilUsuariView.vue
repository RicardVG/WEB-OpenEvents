<template>
  <ResetComponent></ResetComponent>
  <HeaderComponent></HeaderComponent>
  <GestionarPerfilUsuariComponent></GestionarPerfilUsuariComponent>
  <FooterComponent></FooterComponent>
</template>

<script>
import ResetComponent from '../components/common/ResetComponent'
import HeaderComponent from '../components/layouts/HeaderComponent'
import FooterComponent from '../components/layouts/FooterComponent'
import GestionarPerfilUsuariComponent from '../components/sections/GestionarPerfilUsuariComponent'

export default {
  components: {
    ResetComponent,
    HeaderComponent,
    GestionarPerfilUsuariComponent,
    FooterComponent
  }
}
</script>
