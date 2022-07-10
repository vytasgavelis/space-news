<template>
<button class="button"><slot>Button</slot></button>
</template>

<style scoped>
.button {
  background: #42d392;
  color: #213457;
  border: 1px;
  border-radius: 4px;
  padding: 10px 30px 10px 30px;
  font-size: 16px;
  text-decoration: none;
  max-width: 200px;
}

.button:hover {
  cursor: pointer;
}

</style>