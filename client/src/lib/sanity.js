import sanityClient from '@sanity/client'

export default sanityClient({
// Find your project ID and dataset in `sanity.json` in your studio project
    projectId: '3ephgmi3',
    dataset: 'todo',
    token: 'skbdJolSNnBON7Punxz90nsFwrueClNaMwRV9M5oC1yOqUqAPZd7DyK57AuPNppff8Wlm2HIjqKgh5QM8qpNcmk0Dg9BBgUMB1Z8CVgDMF7qWBxTzlPPjuCSHIWbIhACUEueIaUYpO4d1jud1Ae5G7SjZLIktLFg9KwBuHqxXBpKVoQaSrMH',
    useCdn: true
    // useCdn == true gives fast, cheap responses using a globally distributed cache.
    // Set this to false if your application require the freshest possible
    // data always (potentially slightly slower and a bit more expensive).
})
