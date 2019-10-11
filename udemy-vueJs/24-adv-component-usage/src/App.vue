<template>
<div class="container mt-3">
  <div class="row">
    <div class="col-xs-12">
      <nav class="navbar navbar-expand-sm navbar-dark bg-dark mb-3">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a @click="selectedComponent = 'appQuote'" class="nav-link" href="#">Quote <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a @click="selectedComponent = 'appAuthor'" class="nav-link" href="#">Author</a>
            </li>
            <li class="nav-item">
              <a @click="selectedComponent = 'appNew'" class="nav-link" href="#">New Quote</a>
            </li>
          </ul>
        </div>
      </nav>
      <hr />
      <keep-alive>
        <component :is="selectedComponent">
          <h1 slot="title">{{quoteTitle}}</h1>
          <p slot="paragraph">{{quoteParagraph}}</p>
        </component>
      </keep-alive>
      <!-- <app-quote>
        <h1 slot="title">{{quoteTitle}}</h1>
        <p slot="paragraph">{{quoteParagraph}}</p>
      </app-quote> -->

    </div>
  </div>
</div>
</template>

<script>
import Quote from './component/Quote.vue';
import Author from './component/Author.vue';
import New from './component/New.vue';
export default {
  data: function() {
    return {
      quoteTitle: "The Title",
      quoteParagraph: "Vue JS is an awesome JavaScript Framework for building Frontend Applications! VueJS mixes the Best of Angular + React!",
      selectedComponent: 'appQuote'
    }
  },
  components: {
    appQuote: Quote,
    appAuthor: Author,
    appNew: New,
  }
}
</script>

<style>
.content {
  border: 1px solid #ccc;
  padding: 30px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
}
</style>
