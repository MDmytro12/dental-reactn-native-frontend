import React from 'react'
import  Badge  from './Badge.js'

const SectionTitle = ({title}) => {
    return(
        <Badge>{title}</Badge>
    )
}

SectionTitle.defaultProps = {
    title : "Untitled!"
}

export default SectionTitle;