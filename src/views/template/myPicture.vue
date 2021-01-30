<template>
  <div class="picture">
    <breadcrumb/>
    <p>picture {{ $route.params.id }}</p>
  </div>
</template>

<script>
import breadcrumb from "@/components/breadcrumb";
export default {
  name: "myPicture",
  components: {
    breadcrumb
  }
}
</script>

<style scoped lang="less">
.picture{
  background: #fff;
  border: 1px solid #005FBC;
  padding: 28px
}
</style>