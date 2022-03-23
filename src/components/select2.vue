<template>
Vue.component('select-2', {
  template: '<select v-bind:name="name" class="form-control" v-bind:multiple="multiple"></select>',
  props: {
    name: '',
    options: {
      Object
    },
    value: null,
    multiple: {
      Boolean,
      default: false

    }
  },
</template>