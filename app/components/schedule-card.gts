import { LinkTo } from '@ember/routing';

<template>
  <article class="schedule">
    <div class="schedule-details">
      <h3>
        <LinkTo @route="schedule" @model={{@schedule}}>
          {{@schedule.name}}
        </LinkTo>
      </h3>
    </div>
    <div class="schedule-actions">
      <div>Copy</div>
      <div>Delete</div>
    </div>
  </article>
</template>
