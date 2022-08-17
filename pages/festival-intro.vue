<template>
  <div>
    <title-overlay-image class="title-overlay-image"/>
    <DescriptiveComponent class="descriptive-component"/>
  </div>
</template>

<script>
import TitleOverlayImage from '~/components/title-overlay-image';
import DescriptiveComponent from '~/components/Descriptive-component';

export default {
  components: { TitleOverlayImage, DescriptiveComponent },
    name: "festival-intro",
}
</script>
