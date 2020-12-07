// import the default document actions
import defaultResolve, { DuplicateAction } from 'part:@sanity/base/document-actions'

// import {PromoteProjectOnTwitter} from './PromoteProjectOnTwitter'

export default function resolveDocumentActions(props) {
    // If the document is of the type “siteSettings”, return the without DuplicateAction
  if (props.type === "siteSettings") {
      return defaultResolve(props).map( Action =>
        Action === DuplicateAction ? null : Action
        )
    }
    
    // Show default actions on documents not of type project
    return defaultResolve(props)
}