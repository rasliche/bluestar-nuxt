/* global CMS */
;(function () {
  CMS.registerEditorComponent({
    // Internal id of the component
    id: 'image_caption',
    // Visible label
    label: 'Image with Caption',
    // Fields the user need to fill out when adding an instance of the component
    fields: [
      {
        name: 'image',
        widget: 'image',
        label: 'Image',
      },
      {
        name: 'caption',
        widget: 'string',
        label: 'Caption',
      },
      {
        name: 'credit',
        widget: 'string',
        label: 'Credit',
      },
    ],
    // Pattern to identify a block as being an instance of this component
    pattern: /^<div class="image-caption my-8 rounded-md"><div class="rounded-md overflow-hidden"><img src="(.*)" \/><\/div><p class="text-sm text-center">(.*)&nbsp;<span class="font-semibold">(.*)<\/span><\/p><\/div>/,
    // Function to extract data elements from the regexp match
    fromBlock(match) {
      return {
        image: match[1],
        caption: match[2],
        credit: match[3],
      }
    },
    // Function to create a text block from an instance of this component
    toBlock(obj) {
      return `<div class="image-caption my-8 rounded-md"><div class="rounded-md overflow-hidden"><img src="${obj.image}" /></div><p class="text-sm text-center">${obj.caption}&nbsp;<span class="font-semibold">${obj.credit}</span></p></div>`
    },
    // Preview output for this component. Can either be a string or a React component
    // (component gives better render performance)
    toPreview(obj) {
      return `
        <div class="image-caption my-8 rounded-md">
          <div class="rounded-md overflow-hidden">
            <img src="${obj.image}" class="mx-auto"/>
          </div>
          <p class="text-sm text-center">
            ${obj.caption}&nbsp;
            <span class="font-semibold">${obj.credit}</span>
          </p>
        </div>`
    },
  })
  CMS.registerEditorComponent({
    // Internal id of the component
    id: 'video_caption',
    // Visible label
    label: 'Video with Caption',
    // Fields the user need to fill out when adding an instance of the component
    fields: [
      {
        name: 'video',
        widget: 'string',
        label: 'Video URL',
      },
      {
        name: 'caption',
        widget: 'string',
        label: 'Caption',
      },
      {
        name: 'credit',
        widget: 'string',
        label: 'Credit',
      },
    ],
    // Pattern to identify a block as being an instance of this component
    pattern: /^<div class="video-caption my-8 rounded-md"><video controls class="w-auto h-auto"><source src="(.*)"\/><\/video><p class="text-sm text-center">(.*)&nbsp;<span class="font-semibold">(.*)<\/span><\/p><\/div>/,
    // Function to extract data elements from the regexp match
    fromBlock(match) {
      return {
        video: match[1],
        caption: match[2],
        credit: match[3],
      }
    },
    // Function to create a text block from an instance of this component
    toBlock(obj) {
      return `<div class="video-caption my-8 rounded-md"><video controls class="w-auto h-auto"><source src="${obj.video}"/></video><p class="text-sm text-center">${obj.caption}&nbsp;<span class="font-semibold">${obj.credit}</span></p></div>`
    },
    // Preview output for this component. Can either be a string or a React component
    // (component gives better render performance)
    toPreview(obj) {
      return `
        <div class="video-caption my-8 rounded-md">
          <video controls class="w-auto h-auto">
            <source
              src="${obj.video}"
            />
          </video>
          <p class="text-sm text-center">
            ${obj.caption}&nbsp;
            <span class="font-semibold">${obj.credit}</span>
          </p>
        </div>`
    },
  })
})()
