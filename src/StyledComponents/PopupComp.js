import Popup from "reactjs-popup";
import styled from "styled-components";

const PopupComp = styled(Popup)`
    // use your custom style for ".popup-overlay"
  &.registration-popup-overlay {
    
  }
  // use your custom style for ".popup-content"
  &-content {
    backdrop-filter: blur(4px);
  }
`
export default PopupComp
