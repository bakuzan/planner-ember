import Pretender from 'pretender';

function makeJSONAPIResponse<T extends Record<string, unknown>>(
  resource: string,
  data: T
) {
  const { id = '', ...attributes } = data;

  return {
    id: `${id as string}`,
    type: resource,
    attributes,
  };
}

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

  return new Pretender(function () {
    this.get('/api/schedules', () => {
      return [
        200,
        { 'Content-Type': 'application/json' },
        JSON.stringify({
          data: schedules.map((s) => makeJSONAPIResponse('schedule', s)),
        }),
      ];
    });

    this.get('/api/schedules/:id', (request) => {
      const id = Number(request.params.id);
      const schedule = schedules.find((x) => x.id === id);

      return [
        200,
        { 'Content-Type': 'application/json' },
        JSON.stringify(
          schedule
            ? { data: makeJSONAPIResponse('schedule', schedule) }
            : { errors: [`Could not find Schedule(Id: ${id})`] }
        ),
      ];
    });
  });
}
