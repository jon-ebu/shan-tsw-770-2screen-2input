<script>
  import SourceControls from "$lib/SourceControls.svelte";
  import Footer from "$lib/Footer.svelte"; // Verify this path and ensure Footer.svelte is correctly exported
  import "../app.css"; // Ensure this path is correct

  let inputSources = [
    {
      selectedLabel: "WALL HDMI",
      unselectedLabel: "WALL HDMI",
      selectedColor: "black",
      unselectedColor: "gray",
    },
    {
      selectedLabel: "FLOOR HDMI",
      unselectedLabel: "FLOOR HDMI",
      selectedColor: "black",
      unselectedColor: "gray",
    },
  ];
</script>

<div>
  <div id="scaling-container">
    <div id="page-container">
      <!-- Main Screen Section -->
      <SourceControls title="MAIN SCREEN" {inputSources} />
      <!-- Side Screen Section -->
      <SourceControls title="SIDE SCREEN" {inputSources} />
      <Footer />
    </div>
  </div>
</div>

<style>
</style>
