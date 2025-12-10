import { pageTitle } from 'ember-page-title';
import NavBar from 'planner-ember/components/nav-bar';

<template>
  <NavBar />
  <main>
    {{pageTitle "Planner"}}
    {{outlet}}
  </main>
</template>
