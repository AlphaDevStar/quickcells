import React from "react";
import { Typography } from "@material-ui/core";
import { NavLayout } from "../components";

const DummyVIewWithDefaultContainer: React.FC = () => (
  <NavLayout>
    <Typography variant="h1">
      Hi Cody ! This is a default component using the header/footer layout with
      the common container (you can change it if needed of course).
    </Typography>
    <Typography variant="h2">
      Click on "Contact" in the header to see another layout
    </Typography>
  </NavLayout>
);

export {
  DummyVIewWithDefaultContainer as default,
  DummyVIewWithDefaultContainer,
};
