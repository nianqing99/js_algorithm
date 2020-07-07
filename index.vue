<template>
  <div>
    <div class="runner-toolbar">
      <select name="language" id="language">
        <option value="java">JavaScript</option>
        <option value="js">NodeJS</option>
      </select>
      <button class="runner-save" type="button">
        <i class="fas fa-save"></i> 保存(
        <u>S</u>ave)
      </button>
      <button class="runner-run" type="button">
        <i class="fas fa-play"></i> 执行(
        <u>R</u>un)
      </button>
    </div>
    <div style="display: flex; align-item:center; justify-content:center;">
      <div style="flex: 1" ref="codemirror"></div>
      <div style="flex: 1"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "index",
  data: () => ({
    value: 'console.log("Hello, World");'
  }),
  methods: {
    makeMarker(msg) {
      const marker = document.createElement("div");
      marker.classList.add("error-marker");
      marker.innerHTML = "&nbsp;";
      const error = document.createElement("div");
      error.innerHTML = msg;
      error.classList.add("error-message");
      marker.appendChild(error);
      return marker;
    },
    run() {
      console.log(111);
    }
  },
  mounted: function() {
    this._editor = new CodeMirror(this.$refs.codemirror, {
      lineNumbers: true,
      tabSize: 2,
      matchBrackets: true,
      value: this.value,
      mode: "javascript",
      theme: "monokai",
      gutters: ["error"]
    });
    this._editor.on("changes", () => {
      this.value = this._editor.getValue();
      JSHINT(this.value);
      const errors = Array.isArray(JSHINT.errors) ? JSHINT.errors : [];
      this._editor.clearGutter("error");
      for (const error of errors) {
        this._editor.setGutterMarker(
          error.line - 1,
          "error",
          this.makeMarker(error.reason)
        );
      }
    });
  }
};
</script>
<style lang="css">
</style>