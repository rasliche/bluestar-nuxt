/* global CMS, SERVER_URL */
;(function () {
  console.log('BluestarCMS Events Loading!')
  CMS.registerEventListener({
    name: 'prePublish',
    handler: ({ entry /*, author */ }) => {
      // console.log({ author, data: entry.get('data').get('uuid') })
      fetch(SERVER_URL + '/quiz/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          uuid: entry.get('data').get('uuid'),
          minimumScore: entry.get('data').get('minimumScore')
        }),
      })
    },
  })
})()
