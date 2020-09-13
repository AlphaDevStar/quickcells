import React from "react";
import { Typography } from "@material-ui/core";
import { NavLayout, ContentContainer } from "../components";

const DummyVIewWithoutDefaultContainer: React.FC = () => (
  <NavLayout disableContentContainer>
    <ContentContainer style={{ maxWidth: "100%" }}>
      <Typography variant="h1">
        Hi Cody ! This is a default component using the header/footer layout
        without the common container. You can use all the space here ;)
      </Typography>
      <Typography variant="h2">
        Click on "Accueil" in the header to see another layout
      </Typography>
    </ContentContainer>
  </NavLayout>
);

export {
  DummyVIewWithoutDefaultContainer as default,
  DummyVIewWithoutDefaultContainer,
};
