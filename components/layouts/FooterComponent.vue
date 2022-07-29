<template>
<footer>
      <div>Copyright Company 2021</div>
      <div>Data policy</div>
      <div>Contact</div>
      <div>About Us</div>
  </footer>
</template>

<script>
</script>

<style>
footer {
  padding: var(--footer-padding);
  height: var(--footer-height);
  width: var(--footer-width);
  background: -webkit-linear-gradient(top, #2a0aa0, #07ffc9);
  color: white;
  display: flex;
  justify-content: space-between;
  left: 0;
  bottom: 0;
  gap: 10px;
  margin-right: 10px;
  overflow: hidden;
}

footer div {
  text-align: center;
  display: inline-block;
  width: 100%;
  height: 100%;
  font-weight: bold;
  padding: 30px;
  font-family: "Raleway";
}
</style>