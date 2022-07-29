<template>
  <ResetComponent></ResetComponent>
  <HeaderComponent></HeaderComponent>
  <UsuarisComponent></UsuarisComponent>
  <FooterComponent></FooterComponent>
</template>

<script>
import ResetComponent from '../components/common/ResetComponent'
import HeaderComponent from '../components/layouts/HeaderComponent'
import FooterComponent from '../components/layouts/FooterComponent'
import UsuarisComponent from '../components/sections/UsuarisComponent'

export default {
  components: {
    ResetComponent,
    HeaderComponent,
    UsuarisComponent,
    FooterComponent
  }
}
</script>
