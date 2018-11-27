<template>
    <a-row class="commententry">
      <div class="commententry-user">
        <a-col :span='18'>
          <img :src='img' class="commententry-avatar" :alt='name' v-if="img"/>
          <a-avatar 
            class="commententry-avatar" 
            v-else>
            {{name}}
          </a-avatar>
          {{name}}:
        </a-col>
        <a-col :span='6' class="commententry-user">
          {{formatTime(time)}}
        </a-col>
      </div>
      <a-col :span='24'>
        <p>{{comment}}</p>
      </a-col>
    </a-row>
</template>

<script>
import moment from "moment";

export default {
  name: 'CommentEntry',
  props: {
    entry: String,
    name: String,
    img: String,
    comment: String,
    time: Number
  },
  data() {
    const state = {
      avatar: ''
    };
    return state;
  },
  mounted() {
    this.avatar = ''
  },
  methods: {
    formatTime(time) {
      return moment(time).fromNow()
    },
  },
};
</script>

<style>
.commententry-user {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: left;
  align-content: center;
}

.commententry-avatar {
  margin: 5px;
  color: #ffffff;
  background-color: #fb3f6c;
}

.commententry {
  border-bottom: 1px dashed rgba(255, 255, 255, 0.2);
}
</style>