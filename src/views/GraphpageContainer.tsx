import React from "react";
import { Typography } from "@material-ui/core";
import { NavLayout } from "../components";

const GraphpageContainer: React.FC = () => (
  <NavLayout disableContentContainer={true}>
      <section>
          <img src="/images/background-images/packages-content.svg" />
      </section>
  </NavLayout>
);

export {
  GraphpageContainer as default,
  GraphpageContainer,
};
