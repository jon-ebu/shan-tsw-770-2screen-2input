<script>
    export let title = "MAIN SCREEN";
    export let projectorControls = [];
    export let inputSources = [];
</script>
  
  <div class="box">
    <div id="main-screen">
      <div class="header-container">
        <h1>{title}</h1>
        <div class="controls-container">
          <div class="buttons-container">
            <div class="group">
              <div class="input-label">Projector Controls</div>
                <div style="display: flex; flex-direction: column; gap: 10px;">
                {#each projectorControls as control}
                  <Button
                  selectedLabel={control.selectedLabel}
                  unselectedLabel={control.unselectedLabel}
                  selectedColor={control.selectedColor}
                  unselectedColor={control.unselectedColor}
                  />
                {/each}
                </div>
            </div>
            <div class="group">
              <div class="input-label">Input Sources</div>
              <ButtonGroup buttons={inputSources} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <style lang="scss">
  @import '../styles/global.scss';
    .box {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.controls-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.buttons-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
  </style>