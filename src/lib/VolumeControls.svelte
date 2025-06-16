<script>
  export let value = 50; // Initial volume value (0-100)
  export let onChange = null; // Optional callback for parent control
  let isMuted = false; // Track mute state

  function handleInput(event) {
    value = +event.target.value;
    if (onChange) {
      onChange(value);
    }
    if (value > 0) {
      isMuted = false; // Automatically unmute if the slider is adjusted
    }
  }

  function decreaseVolume() {
    value = Math.max(0, value - 10); // Ensure the value doesn't go below 0
    if (onChange) {
      onChange(value);
    }
    if (value > 0) {
      isMuted = false; // Automatically unmute if volume is adjusted
    }
  }

  function increaseVolume() {
    value = Math.min(100, value + 10); // Ensure the value doesn't exceed 100
    if (onChange) {
      onChange(value);
    }
    if (value > 0) {
      isMuted = false; // Automatically unmute if volume is adjusted
    }
  }

  function toggleMute() {
    isMuted = !isMuted;
    if (isMuted) {
      value = 0; // Set volume to 0 when muted
    } else {
      value = 50; // Restore volume to a default value (e.g., 50) when unmuted
    }
    if (onChange) {
      onChange(value);
    }
  }
</script>

<div class="slider-container">
  <button
    class="icon-button mute-button"
    aria-label="Mute Button"
    on:click={toggleMute}
    style="background-color: {isMuted ? 'lightgray' : 'white'};
           border: {isMuted ? 'none' : '2px solid gray'};"
  >
    <i class="bi bi-volume-mute" style="color: {isMuted ? 'red' : 'gray'};"
    ></i>
  </button>
  <button class="icon-button" on:click={decreaseVolume} aria-label="Decrease volume">
    <i class="bi bi-volume-down"></i>
  </button>
  <input
    type="range"
    min="0"
    max="100"
    {value}
    class="slider"
    style="--value: {value}%; --track-color: {isMuted ? '#555' : '#f0ad4e'};"
    on:input={handleInput}
  />
  <button class="icon-button" on:click={increaseVolume}>
    <i class="bi bi-volume-up"></i>
  </button>
</div>

<style lang="scss">
  @import '../global.scss';
  .slider-container {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    padding-right: 20px;
    height: 20%;
  }

  .icon-button {
    color: white;
    padding: 5px 10px;
    width: $button-height;
    height: $button-height;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size:60px;
    background-color: gray;
    border: 2px solid gray;
    border-radius: 100%;
    cursor: pointer;
    transition:
      background-color 0.2s,
      transform 0.1s;
  }

  .icon-button:active {
    transform: scale(0.95); /* Add a slight press effect */
  }

  .mute-button {
    color: red; /* Default mute button color */
  }

  .slider {
    -webkit-appearance: none;
    appearance: none;
    width: 60%;
    height: $button-height*.8; /* Match the height of the buttons */
    background: linear-gradient(
      to right,
      var(--track-color, #f0ad4e) 0%,
      var(--track-color, #f0ad4e) var(--value, 50%),
      #ccc var(--value, 50%),
      #ccc 100%
    );
    border-radius: 5px;
    outline: none;
    overflow: hidden;
    position: relative;
  }

  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 0; /* Hide the thumb */
    height: 0; /* Hide the thumb */
    background: none; /* Remove background */
    border: none; /* Remove border */
  }

  .slider::-moz-range-thumb {
    width: 0; /* Hide the thumb */
    height: 0; /* Hide the thumb */
    background: none; /* Remove background */
    border: none; /* Remove border */
  }

  .slider::-ms-thumb {
    width: 0; /* Hide the thumb */
    height: 0; /* Hide the thumb */
    background: none; /* Remove background */
    border: none; /* Remove border */
  }
</style>
