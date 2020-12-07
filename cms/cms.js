import CMS from 'netlify-cms'
import QuizComponentPreview from './components/QuizComponentPreview.jsx'

console.log('Bluestar CMS')
CMS.registerPreviewTemplate('quiz', QuizComponentPreview)
CMS.registerPreviewStyle('/cms/tailwind.min.css')
CMS.registerPreviewStyle('/cms/QuizComponentPreview.postcss')
