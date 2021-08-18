import React from 'react'
import styled from 'styled-components/native'

const SectionTitle = ({title}) => {
    return(
        <GroupTitle>{title}</GroupTitle>
    )
}

SectionTitle.defaultProps = {
    title : "Untitled!"
}

const GroupTitle = styled.Text`
  color:#000000 ;
  font-size: 22px;
  font-weight: 800;
  padding-left: 15px;
  padding-top: 10px;
`;

export default SectionTitle;