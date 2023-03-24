<template>
  <div>
    <div>
      <textarea
        style="width: 100%"
        v-model="content"
        @keyup.enter="search"
      ></textarea>
    </div>
    <button @click="search">{{ loading ? "加载中..." : "搜索" }}</button>
    <div
      v-for="(item, index) in choices"
      :key="index"
      style="margin-bottom: 20px"
    >
      <div v-html="item.message.content"></div>
    </div>
  </div>
</template>

<script>
import { toRefs, reactive, onMounted } from "vue";
export default {
  setup() {
    let _data = reactive({
      content: "",
      choices: [],
      loading: false,
    });

    let _methods = {
      async search() {
        if (_data.loading) return;
        _data.loading = true;
        try {
          const { data } = await axios.post(
            "https://api.openai.com/v1/chat/completions",
            {
              model: "gpt-3.5-turbo",
              messages: [{ role: "user", content: _data.content }],
            },
            {
              headers: {
                Authorization:
                  "Bearer "+atob('c2stUklRbmdlaWhvbmpqY1BhbmhwU3BUM0JsYmtGSm5pVlg1MjBNT1JZZkRCc0hzSFdH'),
              },
            }
          );
          _data.content = "";
          console.log("🚀 ~ file: chat-gpt.vue:39 ~ search ~ data:", data);
          _data.choices = _data.choices.concat(data.choices);
        } catch (error) {}
        _data.loading = false;
      },
    };

    return {
      ...toRefs(_data),
      ..._methods,
    };
  },
};
</script>

<style lang="less"></style>
