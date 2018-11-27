<template>
<section id="comments-list" class="comments">
        <div class="comments-current">
          <a-comment
          v-for="item in comments"
          :key="`${item[0]} ${item[1]} ${item[4]}`"
          :name="`${item[0]} ${item[1]}`"
          :img="item[2]"
          :comment="item[3]"
          :time="item[4]"
          />
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
                @change="handleChange"
              />
            </a-col>
            <a-col :xs="3" :sm="3" :md="3" :lg="6" :xl="6">
              <a-button
                id="addcommentsubmit"
                type="primary"
                class="comments-button"
                @click="handleSubmit"
              >
                Add
              </a-button>
            </a-col>
          </a-row>
        </div>
      </section>
</template>

<script>
import { subscribeToComments, submitComment } from '../../api/api';
import CommentEntry from './commententry/commententry';

export default {
  name: 'Comments',
  data() {
    const state = {
      usercomment: '',
      comments: [],
    };
    return state;
  },
  components: {
    'a-comment': CommentEntry,
  },
  mounted() {
    try {
      subscribeToComments((err, newcomment) => {
        if (!this.comments) {
          this.comments = [newcomment];
        } else {
          this.comments = [newcomment, ...this.comments];
        }
      });
    } catch (err) {
      console.log('Error subscribing to comments');
    }
  },
  methods: {
    handleSubmit() {
      if (!this.usercomment) {
        alert('Please provide a comment to submit');
        return;
      }
      const newcomment = ['You', '', '', this.usercomment, new Date() - 5];
      if (!this.comments) {
        this.comments = [newcomment];
      } else {
        this.comments = [newcomment, ...this.comments];
      }
      submitComment(this.usercomment);
    },
    handleChange(event) {
      this.usercomment = event.target.value;
    },
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
