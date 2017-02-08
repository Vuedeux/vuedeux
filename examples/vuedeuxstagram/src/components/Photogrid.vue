

<template>
  <div >
    <ol>
      <li v-for="(post, index) in posts">
        <div id="container">
          <router-link :to='post.code' ><img id="thumbnail" :src="post.display_src"></router-link>
            <div id="lower">
                <p id="caption">{{post.caption}}</p>
              <div id="buttons">
              <button id="likeButton" @click="increment_likes({ index: index })">{{post.likes}}</button>
              <router-link :to='post.code'><button id="commentButton">{{comments[post.code] ? comments[post.code].length : 0 }}</button></router-link>
              </div>
            </div>
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
/* eslint-disable */

// import {mapActions} from vuex
import {mapActions} from 'vuex';

export default {
  // view posts and comments from redux store in console
  created: 
    function () {
      console.log('posts', this.$store.state.redux.posts);
      console.log('comments', this.$store.state.redux.comments);
    },
  //  access redux store through 'computed'
  computed: {
    posts () {
      return this.$store.state.redux.posts;
    },
    comments () {
      return this.$store.state.redux.comments;
    }
  },

// use mapActions to access Redux actions
  methods: {
    ...mapActions({
      increment_likes: 'INCREMENT_LIKES',
    }),
  }
};

</script>

<style scoped>

  ol {

  }

  li {
    display: inline-block;
    margin: 10px;
  }

  a {
    color: white;
  }

  #container {
    width: 300px;
    background-color: #F5F5F5;
    border-style: solid;
    border-color: #EDEDED;
    border-width: 5px;
  }

  #lower {
  overflow: auto;
  padding-bottom: 10px;
  }

  #thumbnail {
    width: 300px;
    height: 300px;
  }

  #caption {
    width: 280px;
    height: 70px;
    margin: 0 auto;
    text-align: left;
    padding-bottom: 10px;
  }

  #buttons {
    margin: 0 auto;
  }

  button {
    float: left;
    width: 125px;
    height: 40px;
    border-radius: 1px;
    background-color: white;
    background-size: 25px;
    background-repeat: no-repeat;
    background-position: 30px;
    margin-left: 18px;
    padding-bottom: 20px;
    font-size: 1em;
    text-align: center;
    line-height: 30px;
    padding-inline-start: 30px;
    border-style: solid;
    border-color: #EDEDED;
    color: #2c3e50;
    outline:0
  }

  #likeButton {
    background-image: url('https://cdn3.iconfinder.com/data/icons/faticons/32/heart-01-128.png');
  }

  #commentButton {
    background-image: url('https://cdn3.iconfinder.com/data/icons/gray-toolbar-4/512/chat-512.png');
  }

</style>
