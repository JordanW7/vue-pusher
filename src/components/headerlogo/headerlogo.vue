<template>
<header>
      <a href="/">
        <img
          className="header-logo"
          src="@/assets/images/header-logo.png"
          alt="MuzMatch"
        />
      </a>
    </header>
</template>

<script>
export default {
  name: 'Headerlogo',
};
</script>

<style>
header {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  align-content: center;
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  width: 100%;
  vertical-align: baseline;
  top: 0;
  margin: 0;
  padding: 0;
}

.header-logo {
  margin-left: 30px;
  height: 90px;
}

@media only screen and (max-width: 767px) {
  .header-logo {
    height: 50px;
  }
}
</style>
