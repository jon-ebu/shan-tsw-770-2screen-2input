<script>
  import VolumeControls from "./VolumeControls.svelte";
  import Button from "./Button.svelte";

  let volume = 50; // Initialize the volume variable

  function handleVolumeChange(event) {
    volume = event.detail; // Update the volume based on the event's detail
    console.log("Volume changed to:", volume); // Log for debugging
  }
</script>

<div id="footer">
  <div class="slider-wrapper">
    <!-- Ensure the VolumeControls emits a 'change' event with the new volume -->
    <VolumeControls value={volume} on:change={handleVolumeChange} />
  </div>
  <Button
    selectedLabel="SYSTEM OFF"
    unselectedLabel="SYSTEM OFF"
    selectedColor="red"
    unselectedColor="red"
    class="exclude-style"
  />
</div>

<style lang="scss">
  @import '../global.scss';

  #footer {
    flex: 0;
    display: flex;
    align-items: center;
    padding: 20px;
    margin: 10px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  .slider-wrapper {
    flex: 6;
  }
</style>
