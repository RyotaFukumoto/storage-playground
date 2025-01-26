<script lang="ts">
  export let data: { cookieValue: string };
  let inputValue: string = data.cookieValue;

  async function saveCookie() {
    const formData = new FormData();
    formData.append("userInput", inputValue);

    await fetch("/cookie-storage", {
      method: "POST",
      body: formData,
    });

    alert("クッキーを保存しました！");
  }
</script>

<main>
  <h1>クッキーストレージのサンプル</h1>
  <p>入力した内容をクッキーに保存します。</p>

  <form on:submit|preventDefault={saveCookie}>
    <input
      type="text"
      bind:value={inputValue}
      placeholder="保存したい値を入力"
    />
    <button type="submit">保存する</button>
  </form>
  <p>現在の値: {inputValue}</p>
</main>
