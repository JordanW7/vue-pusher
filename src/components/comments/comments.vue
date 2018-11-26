<template>
<section class="comments">
        <div class="comments-current">
              <CommentEntry />
        </div>
        <div class="comments-addbox">
          <a-row>
            <a-col :xs="21" :sm="21" :md="21" :lg="18" :xl="18">
              <label for="addcommentfield" style="display: none">
                Add a comment
              </label>
              <a-input
                class="comments-input"
                placeholder="Add a comment"
                id="addcommentfield"
              />
            </a-col>
            <a-col :xs="3" :sm="3" :md="3" :lg="6" :xl="6">
              <a-button
                id="addcommentsubmit"
                type="primary"
                class="comments-button"
                v-on:click="commentsubmit"
              >
                Add
              </a-button>
            </a-col>
          </a-row>
        </div>
      </section>
</template>

<script>
export default {
  name: 'Comments',
  data() {
    return {
      msg: 'Comments',
    };
  },
};
</script>

<style>
.comments {
  height: 403px;
  min-width: 200px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  border: 1px solid rgba(0, 0, 0, 0.9);
}

.comments-current {
  overflow: scroll;
  height: 355px;
}

.comments-button {
  margin-left: 5px;
}

.comments-input {
  width: 100%;
  max-width: 1000px;
  box-sizing: border-box;
  margin-left: 5px;
}

.comments-form {
  align-items: center;
  justify-content: center;
}
</style>
