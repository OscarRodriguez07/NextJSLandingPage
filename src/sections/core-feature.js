/** @jsx jsx */
import { jsx, Container, Box, Image } from "theme-ui";
import TextFeature from "components/text-feature";

import shapePattern from "assets/shape-pattern2.png";
const data = [
  {
    id: "Columbia",
    subTitle: "",
    title: "Columbia",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada felis erat. Nullam ac mi non nisl aliquet placerat. Nullam eget nulla non sem rhoncus imperdiet non non nulla.",
    url:
      "https://upload.wikimedia.org/wikipedia/commons/2/26/Space_Shuttle_Columbia_lands_following_STS-62_on_18_March_1994._%28cropped%29.jpg",
  },
  {
    id: "Challenger",
    subTitle: "",
    title: "Challenger",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada felis erat. Nullam ac mi non nisl aliquet placerat. Nullam eget nulla non sem rhoncus imperdiet non non nulla.",
    url:
      "https://www.nasa.gov/sites/default/files/thumbnails/image/61a-s-0139.jpg",
  },
  {
    id: "Discovery",
    subTitle: "",
    title: "Discovery",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada felis erat. Nullam ac mi non nisl aliquet placerat. Nullam eget nulla non sem rhoncus imperdiet non non nulla.",
    url:
      "https://upload.wikimedia.org/wikipedia/commons/1/1d/STS-133_Space_Shuttle_Discovery_after_undocking_3_%28cropped%29.jpg",
  },
  {
    id: "Atlantis",
    subTitle: "",
    title: "Atlantis",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada felis erat. Nullam ac mi non nisl aliquet placerat. Nullam eget nulla non sem rhoncus imperdiet non non nulla.",
    url:
      "https://upload.wikimedia.org/wikipedia/commons/0/0e/STS132_Atlantis_undocking2_%28cropped%29.jpg",
  },
  {
    id: "Endevour",
    subTitle: "",
    title: "Endevour",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada felis erat. Nullam ac mi non nisl aliquet placerat. Nullam eget nulla non sem rhoncus imperdiet non non nulla.",
    url:
      "https://upload.wikimedia.org/wikipedia/commons/6/65/STS-123_Dextre%26Kibo_ELM-PS_in_orbit_%28cropped%29.jpg",
  },
  // subTitle: "Core features",
  // title: "Smart Jackpots that you may love this anytime & anywhere",
  // description:
  //   "Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever.",
  // btnName: "Get Started",
  // btnURL: "#",
];
export default function CoreFeature() {
  return data.map((item) => (
    <section sx={{ variant: "section.coreFeature" }} id={item.id}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeature
            subTitle={item.subTitle}
            title={item.title}
            description={item.description}
            btnName={""}
            btnURL={""}
          />
        </Box>
        <Box sx={styles.thumbnail}>
          <Image src={item.url} alt="Thumbnail" />
        </Box>
      </Container>
    </section>
  ));
}

const styles = {
  containerBox: {
    mt: 110,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: ["wrap", null, null, "nowrap"],
    pb: [0, 7, 0, null, 7],
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, "30px", 0],
    textAlign: ["center", null, null, "left"],
    width: ["100%", "80%", null, 340, 400, 430, null, 485],
    pb: ["50px", "60px", null, 0],
    mx: ["auto", null, null, 0],
    ".description": {
      pr: [0, null, 6, 7, 6],
    },
  },
  thumbnail: {
    display: "inline-flex",
    position: "relative",

    mr: "auto",
    ml: ["auto", null, null, null, 7],
    "> img": {
      position: "relative",

      zIndex: 1,
      "max-height": "430px",
    },
  },
  shapeBox: {
    position: "absolute",
    bottom: -65,
    right: -165,
    zIndex: -1,
    display: ["none", "inline-block", "none", null, "inline-block"],
  },
};
