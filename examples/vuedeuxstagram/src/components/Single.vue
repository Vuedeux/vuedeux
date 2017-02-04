

<template>
  <div class="postContainer">
    <div id="left">
      <img id="photo" :src="getSource"/>
      <div id="lower">
        <p id="caption">{{getCaption}}</p>
        <div id="buttons">
          <span><button id="likeButton" @click="increment_likes({ index: getIndex })">{{getLikes}}</button>
          <button id="commentButton">{{comments[getCode] ? comments[getCode].length : 0 }}</button></span>
        </div>
      </div>
    </div>

    <div id="right">
      <ul style="list-style: none;">
        <li v-for="(comment, index) in getComments">
          <p id="textDiv"><b>{{comment.user}}: </b>{{comment.text}}</p>
          <button id="deleteButton" @click="remove_comment({ postId: getCode, i: index })">X</button>
          <div id="line"></div>
        </li>
      </ul>

      <div id="inputDiv">
        <input type="text" placeholder="author..." id="user" v-model="user"></input>
        <div id="line"></div>
        <input type="text" placeholder="comment..." id="comment" v-model="comment" v-on:keyup.enter="add_comment({postId: getCode, author: user, comment: comment }), clearInputs()" ></input>
        <div id="lastLine"></div>
     </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

// import {mapAction} from vuex
import {mapActions} from 'vuex';

export default {
  data () {
    return {
      user: "",
      comment: ""
    }
  },

  // access your redux state through 'computed'
  computed: {
    posts () {
      return this.$store.state.redux.posts;
    },
    comments () {
      return this.$store.state.redux.comments;
    },
    getSource () {
      let src = "";
      this.$store.state.redux.posts.forEach((val) => {
        if (val.code === this.$route.params.id) {
          src = val.display_src;
        }
      })
      return src;
    },
    getCode () {
      let code = "";
      this.$store.state.redux.posts.forEach((val) => {
        if (val.code === this.$route.params.id) {
          code = val.code;
        }
      })
      return code;
    },
     getLikes () {
       let likes = 0;
       this.$store.state.redux.posts.forEach((val) => {
          if (val.code === this.$route.params.id) {
            likes = val.likes;
          }
        })
        return likes;
     },
    getCaption () {
      let caption = "";
      this.$store.state.redux.posts.forEach((val) => {
        if (val.code === this.$route.params.id) {
          caption = val.caption;
        }
      })
      return caption;
    },
    getIndex () {
      let index1 = 0;
      this.$store.state.redux.posts.forEach((val, index) => {
        if (val.code === this.$route.params.id) {
          index1 = index;
        }
      })
      return index1;
    },
    getComments () {
      let commentsObj = {};
      Object.keys(this.$store.state.redux.comments).forEach((val) => {
        if (val === this.$route.params.id) {
          commentsObj = this.$store.state.redux.comments[val];
        }
      })
      return commentsObj;
    }
  },
  methods: {
    // use mapActions to import Redux actions
    ...mapActions({
      increment_likes: 'INCREMENT_LIKES',
      add_comment: 'ADD_COMMENT',
      remove_comment: 'REMOVE_COMMENT'
    }),
    clearInputs () {
      this.user = '';
      this.comment = '';
    }
  }
};


</script>
<style scoped>
  #photo {
    width: 90%;
    margin-top: 4%;
  }

  p {
    text-align: left;
    font-size: .9em;
  }

  b {
    text-align: left;
  }

  .postContainer {
    background-color: #F5F5F5;
    width: 60%;
    margin: 0 auto;
    display: flex;
    border-style: solid;
    border-color: #EDEDED;
    border-width: 7px;
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
  }

  #left {
    width: 500px;
    order: 1;
  }

  #right {
    width: 250px;
    order: 2;
    padding: 15px;
    padding-bottom:10px;
  }

  #inputDiv {
    margin-top: -8px;
    padding-bottom: 5px;
  }

  #line {
    width: 100%;
    height: 1px;
    background-color: #42b983
  }

  #lastLine {
    width: 100%;
    height: 1px;
    background-color: #42b983;
  }

  #lower {
    width: 100%;
    padding-bottom: 20px;
  }

  #caption {
    width: 88%;
    margin: 0 auto;
    text-align: left;
    padding-bottom: 10px;
    font-size: 1.5em;
  }

  #buttons {
    width: 90%;
    margin: 0 auto;
    /*padding-left: 37px;*/
    padding-top: 15px;
    padding-bottom: 40px;
  }

  #textDiv {
    text-align: left;
    width: 80%;
  }

  input {
    width: 98%;
    height: 35px;
    font-size: 1em;
    color: #2c3e50;
    border-style: none;
    background-color: #F5F5F5;
    outline:0
  }

  #likeButton {
    background-image: url('https://cdn3.iconfinder.com/data/icons/faticons/32/heart-01-128.png');
    float: left;
    width: 45%;
    height: 45px;
    border-radius: 1px;
    background-color: white;
    background-size: 25px;
    background-repeat: no-repeat;
    background-position: 30px;
    padding-bottom: 20px;
    font-size: 1em;
    text-align: center;
    line-height: 35px;
    padding-inline-start: 45px;
    border-style: solid;
    border-color: #EDEDED;
    border-width: 4px;
    color: #2c3e50;
    float:left;
    outline:0;
  }

  #commentButton {
    background-image: url('https://cdn3.iconfinder.com/data/icons/gray-toolbar-4/512/chat-512.png');
    float: right;
    width: 45%;
    height: 45px;
    border-radius: 1px;
    background-color: white;
    background-size: 25px;
    background-repeat: no-repeat;
    background-position: 30px;
    margin-left: 18px;
    padding-bottom: 20px;
    font-size: 1em;
    text-align: center;
    line-height: 35px;
    padding-inline-start: 45px;
    border-style: solid;
    border-color: #EDEDED;
    border-width: 4px;
    color: #2c3e50;
    outline:0
  }

  #deleteButton {
    width: 20px;
    height: 20px;
    background-color: #F5F5F5;
    border-style: none;
    margin-top: -25px;
    padding-right: 20px;
    text-align: center;
    float: right;
    color: #2c3e50;
    font-size: 1em;
  }

  ul {
    padding: 0px;
    padding-bottom: -5px;
  }

</style>
