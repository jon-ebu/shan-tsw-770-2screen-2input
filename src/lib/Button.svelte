<script>
  let {
    selectedLabel = "Selected",
    unselectedLabel = "Unselected",
    selectedColor = "green",
    unselectedColor = "red",
    class: propsClass = "",
    isSelected = false, // Controlled externally or toggled internally
    isHtml = false, // New prop to determine if labels should be rendered as HTML
    onClick = null // Optional callback for parent control
  } = $props();

  function handleClick() {
    if (onClick) {
      onClick();
    } else {
      isSelected = !isSelected;
    }
  }

</script>

<button
  on:click={handleClick}
  class="{propsClass} {propsClass === 'exclude-style' ? '' : isSelected ? 'on' : 'off'}"
  style="background-color: {isSelected ? selectedColor : unselectedColor}; color: white;"
>
  {#if isHtml}
    {@html isSelected ? selectedLabel : unselectedLabel}
  {:else}
    {isSelected ? selectedLabel : unselectedLabel}
  {/if}
</button>

<style lang="scss">
  @import '../global.scss';
  button {
    padding: 10px 20px;
    font-size: $button-font-size;
    font-weight: bold;
    border: none;
    cursor: pointer;
    border-radius: $button-border-radius;
    width: $button-width;
    height: $button-height;
    text-align: center;
    white-space: wrap;
    transition: all 0.3s ease; /* Smooth transition for animations */
  }

  button.on {
    border: 6px solid blue; /* Add blue border when selected */
    transform: scale(
      1.05
    ); /* Slightly enlarge the button for tactile feedback */
  }

  button.off {
    border: none; /* No border when not selected */
    transform: scale(1); /* Normal size for "off" state */
  }

  button:active {
    transform: scale(0.95); /* Slight shrink effect when clicked */
  }

  button.exclude-style {
  border: none; /* Exclude these buttons from the 'on' or 'off' styles */
  transform: none;
}
</style>
