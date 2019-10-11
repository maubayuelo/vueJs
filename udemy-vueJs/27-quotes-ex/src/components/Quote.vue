<template>
    <div class="col-sm-6 col-md-4 col-lg-3">
    <div class="alert alert-warning alert-dismissible fade show panel-body" role="alert">
      <slot>

      </slot>
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
</div>
</template>

<script>
    export default {

    }
</script>

<style>
</style>
