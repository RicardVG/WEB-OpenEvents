<template>
  <ResetComponent></ResetComponent>
  <HeaderComponent></HeaderComponent>
  <IniciComponent></IniciComponent>
  <FooterComponent></FooterComponent>
</template>

<script>
import ResetComponent from '../components/common/ResetComponent'
import HeaderComponent from '../components/layouts/HeaderComponent'
import FooterComponent from '../components/layouts/FooterComponent'
import IniciComponent from '../components/sections/IniciComponent'

export default {
  components: {
    ResetComponent,
    HeaderComponent,
    IniciComponent,
    FooterComponent
  }
}
</script>
