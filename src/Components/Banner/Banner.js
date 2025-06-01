import { Container, Typography, styled } from "@mui/material";
import Carousel from "./Carousel"; // Make sure this path is correct

// Styled components
const BannerContainer = styled('div')({
  position: 'relative',
  height: '60vh',
  width: '100%',
  overflow: 'hidden',
});

const IframeBackground = styled('iframe')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  border: 'none',
  zIndex: 0,
});

const Overlay = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 1,
});

const BannerContent = styled(Container)({
  position: 'relative',
  zIndex: 2,
  height: 400,
  display: "flex",
  flexDirection: "column",
  paddingTop: 25,
  justifyContent: "space-around",
  color: "white",
});

const Tagline = styled('div')({
  display: "flex",
  height: "40%",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
});

const Title = styled(Typography)({
  fontWeight: "bold",
  marginBottom: 15,
  fontFamily: "Montserrat",
});

const Subtitle = styled(Typography)({
  color: "lightgray",
  textTransform: "capitalize",
  fontFamily: "Montserrat",
});

function Banner() {
  return (
    <BannerContainer>
      <IframeBackground
        src="https://my.spline.design/coin-pJoH1vEP5ohI6qi7yWoq705N/"
        allow="autoplay; fullscreen"
        allowFullScreen
        tabIndex={-1}
        aria-hidden="true"
      />
      <Overlay />

      <BannerContent>
        <Tagline>
          <Title variant="h2">Vola Track</Title>
          <Subtitle variant="subtitle2">
            Get all the Info regarding your favorite Crypto Currency
          </Subtitle>
        </Tagline>
        <Carousel />
      </BannerContent>
    </BannerContainer>
  );
}

export default Banner;
