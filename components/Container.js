import styled from 'styled-components';

const StyledDiv = styled.div`
  @media (max-width: 1000px) {
    // background-color: blue;
  }

  @media (max-width: 600px) {
    // background-color: green;
  }
`

function Container() {
  return <StyledDiv></StyledDiv>
}

export default Container;


// The breaking points are as follows:
// - Desktop over 1000px
// - Tablet (ipad Air) between 600px and 1000px
// - Mobile (iphone XR) under 600px
