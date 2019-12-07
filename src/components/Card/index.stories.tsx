import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Card } from ".";

storiesOf("Card", module).add("default", () => (
  <Card title="Hello World!" onClick={action("deleted")}></Card>
));
