<template>
  <ResetComponent></ResetComponent>
  <HeaderComponent></HeaderComponent>
  <InfoUsuariComponent></InfoUsuariComponent>
  <FooterComponent></FooterComponent>
</template>

<script>
import ResetComponent from '../components/common/ResetComponent'
import HeaderComponent from '../components/layouts/HeaderComponent'
import FooterComponent from '../components/layouts/FooterComponent'
import InfoUsuariComponent from '../components/sections/InfoUsuariComponent'

export default {
  components: {
    ResetComponent,
    HeaderComponent,
    InfoUsuariComponent,
    FooterComponent
  },
}
</script>
