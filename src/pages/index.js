import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";
import FeatureThumb from "assets/core-feature.png";
import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "../sections/banner";
import KeyFeature from "../sections/key-feature";
import ServiceSection from "../sections/service-section";
import Feature from "../sections/feature";
import CoreFeature from "../sections/core-feature";
import WorkFlow from "../sections/workflow";
import Package from "../sections/package";
import TeamSection from "../sections/team-section";
import TestimonialCard from "../sections/testimonial";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="NextJS Landing Page" />
        <Banner />
        <CoreFeature />
        {/* {data.map((item) => (
          <section id={item.id}>
            <CoreFeature
              subTitle={item.subTitle}
              title={item.title}
              description={item.description}
              btnName={item.btnName}
              btnURL={""}
              url={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/S83-35803_%28cropped%29.jpg/800px-S83-35803_%28cropped%29.jpg"
              }
            />
          </section>
        ))} */}
        {/* <section id={"Columbia"}>
          <CoreFeature
            subTitle={data.subTitle}
            title={data.title}
            description={data.description}
            btnName={data.btnName}
            btnURL={""}
          />
        </section>
        <section id={"Challenger"}>
          <CoreFeature
            subTitle={data.subTitle}
            title={data.title}
            description={data.description}
            btnName={data.btnName}
          />
        </section>

        <CoreFeature
          subTitle={data.subTitle}
          title={data.title}
          description={data.description}
          btnName={data.btnName}
          id={"Discovery"}
        />
        <CoreFeature
          subTitle={data.subTitle}
          title={data.title}
          description={data.description}
          btnName={data.btnName}
          id={"Atlantis"}
        />
        <CoreFeature
          subTitle={data.subTitle}
          title={data.title}
          description={data.description}
          btnName={data.btnName}
          id={"Endevour"}
        /> */}
      </Layout>
    </ThemeProvider>
  );
}
