<script lang="ts">
  import { onMount } from "svelte";

  // セッションストレージに保存されるキー名
  const storageKey = "mySessionStorageKey";

  // 双方向バインディング用の変数
  let inputValue = "";

  // ページが読み込まれたときにセッションストレージから値を取得
  onMount(() => {
    const savedValue = sessionStorage.getItem(storageKey);
    if (savedValue) {
      inputValue = savedValue;
    }
  });

  // セッションストレージに値を保存する関数
  function saveToSessionStorage() {
    sessionStorage.setItem(storageKey, inputValue);
    alert("セッションストレージに保存しました！");
  }
</script>

<main>
  <h1>セッションストレージのサンプル</h1>
  <p>入力した内容をセッションストレージに保存します。</p>

  <input type="text" bind:value={inputValue} placeholder="保存したい値を入力" />
  <button on:click={saveToSessionStorage}>保存する</button>

  <p>現在の値: {inputValue}</p>
</main>
