<script>
  import Button from './Button.svelte';
  import '../app.css';
  export let buttons = []; // Array of button configurations
  export let selectedIndex = null; // Index of the initially selected button
  export let scaled = false; // New prop to handle scaling

  function selectButton(index) {
    selectedIndex = index;
  }
</script>

<div class="button-group">
  {#each buttons as button, index}
    <Button
      selectedLabel={button.selectedLabel}
      unselectedLabel={button.unselectedLabel}
      selectedColor={button.selectedColor}
      unselectedColor={button.unselectedColor}
      isSelected={index === selectedIndex}
      onClick={() => selectButton(index)}
      scaled={scaled}
    />
  {/each}
</div>

<style>

</style>