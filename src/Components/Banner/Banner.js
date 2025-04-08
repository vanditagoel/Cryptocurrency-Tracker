import { Container, Typography, styled } from "@mui/material";
import Carousel from "./Carousel"; // Make sure this path is correct

// Styled components
const BannerContainer = styled('div')({
  position: 'relative',
  height: '100vh',
  width: '100%',
  overflow: 'hidden',
});

const VideoBackground = styled('video')({
  position: 'absolute',
  top: 0,
  left: 0,
  minWidth: '100%',
  minHeight: '100%',
  objectFit: 'cover',
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
      <VideoBackground autoPlay muted loop playsInline>
        <source src="/crypto-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </VideoBackground>

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
