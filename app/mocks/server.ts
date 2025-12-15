import Pretender from 'pretender';

import { jsonApiResource, jsonApiDocument } from 'planner-ember/utils/jsonapi';

export function startMockServer() {
  const schedules = [
    {
      id: 1,
      name: 'Test Schedule',
      description:
        'A test schedule that is hard-coded so I can build up a UI to start with.',
    },
    {
      id: 2,
      name: 'Another Schedule',
      description:
        'Another schedule that is hard-coded so I can build up a UI to start with.',
    },
    {
      id: 3,
      name: 'Third Schedule',
      description:
        'Yet a third schedule that is hard-coded so I can build up a UI to start with.',
    },
  ];

  const timeBlocks = [
    { id: 1, start: '00:00', end: '05:45', scheduleId: null, categoryId: 10 },
    { id: 2, start: '05:45', end: '06:00', scheduleId: null, categoryId: 11 },
    { id: 3, start: '06:00', end: '06:40', scheduleId: null, categoryId: 1 },
    { id: 4, start: '06:40', end: '07:10', scheduleId: null, categoryId: 11 },
    { id: 5, start: '07:10', end: '07:40', scheduleId: null, categoryId: 2 },
    { id: 6, start: '07:40', end: '09:00', scheduleId: null, categoryId: 3 },
    { id: 7, start: '09:00', end: '10:00', scheduleId: null, categoryId: 4 },
    { id: 8, start: '10:00', end: '10:15', scheduleId: null, categoryId: 8 },
    { id: 9, start: '10:15', end: '10:40', scheduleId: null, categoryId: 5 },
    { id: 10, start: '10:40', end: '11:20', scheduleId: null, categoryId: 7 },
    { id: 11, start: '11:20', end: '11:45', scheduleId: null, categoryId: 11 },
    { id: 12, start: '11:45', end: '12:00', scheduleId: null, categoryId: 8 },
    { id: 13, start: '12:00', end: '12:20', scheduleId: null, categoryId: 11 },
    { id: 14, start: '12:20', end: '12:45', scheduleId: null, categoryId: 2 },
    { id: 15, start: '12:45', end: '14:15', scheduleId: null, categoryId: 3 },
    { id: 16, start: '14:15', end: '15:15', scheduleId: null, categoryId: 11 },
    { id: 17, start: '15:15', end: '17:00', scheduleId: null, categoryId: 12 },
    { id: 18, start: '17:00', end: '17:15', scheduleId: null, categoryId: 8 },
    { id: 19, start: '17:15', end: '17:45', scheduleId: null, categoryId: 11 },
    { id: 20, start: '17:45', end: '19:45', scheduleId: null, categoryId: 13 },
    { id: 21, start: '19:45', end: '21:00', scheduleId: null, categoryId: 6 },
    { id: 22, start: '21:00', end: '21:15', scheduleId: null, categoryId: 8 },
    { id: 23, start: '21:15', end: '21:40', scheduleId: null, categoryId: 11 },
    { id: 24, start: '21:40', end: '23:59', scheduleId: null, categoryId: 10 },
  ];

  const categories = [
    { id: 1, name: 'Cartoon', colour: '#FF0000' },
    { id: 2, name: 'Anime', colour: '#ff8500' },
    { id: 3, name: 'Live-Action', colour: '#ffff00' },
    { id: 4, name: 'Manga', colour: '#0000ff' },
    { id: 5, name: 'Comics', colour: '#00AAFF' },
    { id: 6, name: 'Reading', colour: '#70cdfc' },
    { id: 7, name: 'Reviewing', colour: '#a1a1a1' },
    { id: 8, name: 'Exercise', colour: '#66023C' },
    { id: 9, name: 'Socialising', colour: '#00ff00' },
    { id: 10, name: 'Sleep', colour: '#ff009d' },
    { id: 11, name: 'Miscellaneous', colour: '#1f1f1f' },
    { id: 12, name: 'Programming', colour: '#008100' },
    { id: 13, name: 'Gaming', colour: '#90fe90' },
  ];

  return new Pretender(function () {
    this.get('/api/schedules', () => {
      return [
        200,
        { 'Content-Type': 'application/json' },
        JSON.stringify({
          data: schedules.map((s) => jsonApiResource('schedule', s)),
        }),
      ];
    });

    this.get('/api/schedules/:id', (request) => {
      const id = Number(request.params.id);
      const schedule = schedules.find((x) => x.id === id)!;

      const scheduleResource = jsonApiResource('schedule', schedule, {
        'time-blocks': {
          data: timeBlocks.map((tb) => ({
            id: String(tb.id),
            type: 'time-block',
          })),
          links: {},
        },
      });

      const timeBlockResources = timeBlocks.map((tb) =>
        jsonApiResource(
          'time-block',
          { id: tb.id, start: tb.start, end: tb.end },
          {
            category: {
              data: tb.categoryId
                ? { id: String(tb.categoryId), type: 'category' }
                : null,
              links: {},
            },
          }
        )
      );

      const categoryResources = categories
        .filter((c) => timeBlocks.some((tb) => tb.categoryId === c.id))
        .map((c) => jsonApiResource('category', c));

      return [
        200,
        { 'Content-Type': 'application/json' },
        JSON.stringify(
          jsonApiDocument(scheduleResource, [
            ...timeBlockResources,
            ...categoryResources,
          ])
        ),
      ];
    });
  });
}
