import { pageTitle } from 'ember-page-title';

<template>
  {{pageTitle "Schedule"}}

  <h2>{{@model.name}}</h2>
  <p>{{@model.description}}</p>
</template>
