<script lang="ts">
  import { onMount } from "svelte";

  // ローカルストレージに保存されるキー名
  const storageKey = "myLocalStorageKey";

  // 双方向バインディング用の変数
  let inputValue = "";

  // ページが読み込まれたときにローカルストレージから値を取得
  onMount(() => {
    const savedValue = localStorage.getItem(storageKey);
    if (savedValue) {
      inputValue = savedValue;
    }
  });

  // ローカルストレージに値を保存する関数
  function saveToLocalStorage() {
    localStorage.setItem(storageKey, inputValue);
    alert("ローカルストレージに保存しました！");
  }
</script>

<main>
  <h1>ローカルストレージのサンプル</h1>
  <p>入力した内容をローカルストレージに保存します。</p>

  <input type="text" bind:value={inputValue} placeholder="保存したい値を入力" />
  <button on:click={saveToLocalStorage}>保存する</button>

  <p>現在の値: {inputValue}</p>
</main>
