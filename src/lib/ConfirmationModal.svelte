<script>
    export let message = "Are you sure?";
    export let onConfirm = () => {};
    export let onCancel = () => {};
  </script>
  
  <div class="modal-overlay">
    <div class="modal">
      <p>{message}</p>
      <div class="modal-buttons">
        <button class="confirm-button" on:click={onConfirm}>Yes</button>
        <button class="cancel-button" on:click={onCancel}>No</button>
      </div>
    </div>
  </div>
  
  <style lang="scss">
    @import '../global.scss';  
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.5); /* Darkened background */
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }
  
    .modal {
      background: white;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
      text-align: center;
    }
  
    .modal-buttons {
      display: flex;
      justify-content: space-around;
      margin-top: 20px;
    }
  
    .confirm-button {
      background-color: red;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: $button-border-radius;
      cursor: pointer;
    }
  
    .cancel-button {
      background-color: gray;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
    }
  
    .confirm-button:hover {
      background-color: darkred;
    }
  
    .cancel-button:hover {
      background-color: darkgray;
    }
  </style>