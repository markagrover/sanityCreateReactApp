export default {
    name: 'todo',
    title: 'Todo',
    type: 'document',
    fields: [
        {
            name: 'task',
            title: 'Task',
            type: 'string',
            description: 'Please Enter a Task '
        },
        {
            name: 'desc',
            title: 'Desc',
            type: 'string'
        },
        {
            name: 'completed',
            title: 'Completed',
            type: 'boolean'

        }
    ],
    preview: {
        select: { title: 'task'}
    }

}
