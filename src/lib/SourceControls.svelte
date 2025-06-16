<script>
  import Button from "./Button.svelte";
  import "../app.css"; // Ensure this path is correct
  import ButtonGroup from "./ButtonGroup.svelte";
  export let title = "Default Title"; // Configurable title
  export let inputSources = []; // Configurable array of input sources
</script>

<div class="box">
  <div class="header-container">
    <h1>{title}</h1>
    <div class="controls-container">
      <div class="buttons-container">
        <div class="group">
            <div class="input-label">Projector Controls</div>
            <div class="button-group">
            <Button
              selectedLabel="POWER OFF"
              unselectedLabel="POWER ON"
              selectedColor="red"
              unselectedColor="green"
              isHtml={true}
              class="exclude-style"
            />
            <Button
              selectedLabel="VIDEO MUTE"
              unselectedLabel="VIDEO MUTE"
              selectedColor="BLACK"
              unselectedColor="gray"
            />
          </div>
      </div>
        <div class="group">
          <div class="input-label">Input Sources (select one)</div>
          <ButtonGroup buttons={inputSources} />
        </div>
      </div>
    </div>
  </div>
</div>
<style lang="scss">
  @import '../global.scss';
  .box {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    margin: 10px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  .header-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 20px;
  }

  h1 {
    font-size: $screen-label-font-size;
    margin: 0;
  }

  .controls-container {
    display: flex;
    flex-direction: column;
    gap: 80px;
    width: 100%;
    height: 100%;
  }

  .buttons-container {
    display: flex;
    flex-direction: row;
    gap: 40px;
    justify-content: center;
    align-items: flex-end;
    flex: 1;
    flex-wrap: nowrap;
  }

  .group {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: flex-end;
    flex: 1;
  }

  .input-label {
  text-align: center;
  font-weight: bold;
  font-size: $input-label-font-size;
  margin-bottom: 10px;
}

</style>
