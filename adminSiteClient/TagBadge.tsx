import React from "react"
import { observer } from "mobx-react"
import { Tag } from "react-tag-autocomplete"

import { Link } from "./Link.js"

export { Tag }

@observer
export class TagBadge extends React.Component<{
    tag: Tag
    onRemove?: () => void
    searchHighlight?: (text: string) => string | JSX.Element
}> {
    render() {
        const { tag, searchHighlight, onRemove } = this.props

        if (onRemove) {
            return (
                <span className="TagBadge" onClick={onRemove}>
                    {tag.name}
                </span>
            )
        } else {
            return (
                <Link className="TagBadge" to={`/tags/${tag.id}`}>
                    {searchHighlight ? searchHighlight(tag.name) : tag.name}
                </Link>
            )
        }
    }
}
