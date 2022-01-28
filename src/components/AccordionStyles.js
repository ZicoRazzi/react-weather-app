import styled from "styled-components";

const AccordionStyles = styled.div`
  width: 100%;
  color: #fff;
  font-weight: bold;
  .accordion_title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.3);
    width: 100%;
    transition: background-color 0.6s ease;
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
  }
  .accordion_title span {
    text-shadow: 2px 2px rgba(50, 50, 70, 0.5);
    font-size: 20px;
  }
  .forecast_icon {
    display: block;
    width: 50px;
    height: 50px;
  }
  .accordion_title:hover,
  .active {
    background-color: rgba(255, 255, 255, 0.7)
  }
  .accordion_content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.3);
    padding: 10px 10px 10px 30px;
  }
  .accordion_content span {
    text-shadow: 2px 2px rgba(50, 50, 70, 0.5);
    font-size: 18px;
  }
  .accordion_item {
    overflow: hidden;
    transition: max-height .3s ease;
    height: auto;
    /* max-height: 9999px; */
  }
  .accordion_item.collapsed {
    max-height: 0;
    transition: max-height .5s ease;
  }
  @media only screen and (max-width: 321px) {
   
    
  }
`;

export default AccordionStyles;
