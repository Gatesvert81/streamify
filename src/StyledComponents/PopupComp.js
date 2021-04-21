import Popup from "reactjs-popup";
import styled from "styled-components";

const PopupComp = styled(Popup)`
    // use your custom style for ".popup-overlay"
  &-overlay {
    backdrop-filter: blur(3px);
    /* background: blue; */
  }
  // use your custom style for ".popup-content"
  &-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`
export default PopupComp
