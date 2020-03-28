import styled from 'styled-components';
import detailsIllustration from 'assets/illustrations/details.svg';

export const Wrapper = styled.div`
{/*background-image: url(${detailsIllustration});*/}
  background-size: contain;
  background-position: left top;
  background-repeat: no-repeat;
`;

export const SkillsWrapper = styled.div`
{/*padding: 1rem 0;*/}
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100vh;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Details = styled.div`
  flex: 1;
  padding-left: 1rem;

  @media (max-width: 960px) {
    padding-left: unset;
    width: 100%;
  }

  a:visited {
    color: white;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 66pt;
    color: #212121;
  }

  h3 {
    color: #212121;
    font-size: 25pt;
    margin-bottom: 2rem;
  }

  p {
    margin-bottom: 2.5rem;
    font-size: 15pt;
    font-weight: normal;
    line-height: 1.3;
    color: #707070;
  }
`;

export const Thumbnail = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  img {
    width: 75%;
  }
`;
