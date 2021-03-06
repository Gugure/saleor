import { storiesOf } from "@storybook/react";
import * as React from "react";

import { pageListProps } from "../../../fixtures";
import ProductTypeListPage from "../../../productTypes/components/ProductTypeListPage";
import { productTypes } from "../../../productTypes/fixtures";
import Decorator from "../../Decorator";

storiesOf("Views / Product types / Product types list", module)
  .addDecorator(Decorator)
  .add("default", () => (
    <ProductTypeListPage
      onBack={() => undefined}
      productTypes={productTypes}
      {...pageListProps.default}
    />
  ))
  .add("loading", () => (
    <ProductTypeListPage
      onBack={() => undefined}
      productTypes={undefined}
      {...pageListProps.loading}
    />
  ));
