import styled from "styled-components";

export default function FooterBar(props) {
  const { title, posterURL, day, time } = props;

  return (
    <FooterContainer>
      <img src={posterURL} alt={title} />
      <h1>
        <span>{title}</span>
        {day !== undefined && (
          <span>
            <br></br>
            {day} - {time}
          </span>
        )}
      </h1>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  width: 100%;
  height: 117px;
  padding: 0 10px;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  background-color: #DFE6ED;
  border-top: 1px solid #9EADBA;
  z-index: 2;

  img {
    height: 89px;
    width: 64px;
    margin-right: 14px;
    border: 8px solid #FFFFFF;
    border-radius: 2px;
  }

  h1 {
    height: auto;
    font-size: 26px;
    font-weight: 400;
    line-height: 30px;
    text-align: left;
    color: #293845;
  }
`;
