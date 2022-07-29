<template>
  <ResetComponent></ResetComponent>
  <HeaderComponent></HeaderComponent>
  <EsdevenimentsComponent1></EsdevenimentsComponent1>
  <FooterComponent></FooterComponent>
</template>

<script>
import ResetComponent from '../components/common/ResetComponent'
import HeaderComponent from '../components/layouts/HeaderComponent'
import FooterComponent from '../components/layouts/FooterComponent'
import EsdevenimentsComponent1 from '../components/sections/EsdevenimentsComponent1'

export default {
  components: {
    ResetComponent,
    HeaderComponent,
    EsdevenimentsComponent1,
    FooterComponent
  }
}
</script>
