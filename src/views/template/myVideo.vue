<template>
  <div class="video">
    <breadcrumb/>
    <p>video {{ $route.params.id }}</p>
    <div class="videoBox">
      <video class="videoPlayer"
             controls
             preload="auto"
             width="100%"
             height="100%">
        <source type="video/mp4"
        src="">
      </video>
    </div>
  </div>
</template>

<script>
import breadcrumb from "@/components/breadcrumb";
export default {
  name: "myVideo",
  components: {
    breadcrumb
  }
}
</script>

<style scoped lang="less">
.video {
  background: #fff;
  border: 1px solid #005FBC;
  padding: 28px
}
</style>