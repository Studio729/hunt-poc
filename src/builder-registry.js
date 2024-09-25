import { Builder, withChildren } from "@builder.io/react"
import BlogArticle from "./blog-article"
import Container from "./components/container/container"
import Counter from "./components/Counter/Counter"
import Heading from "./components/heading/heading"
import LinkButton from "./components/linkbutton/linkbutton"
import Section from "./components/section/section"
import ButtonTemplate from "./components/button/button-template"

Builder.register("editor.settings", {
  styleStrictMode: false,
  allowOverridingTokens: true,
  designTokens: {
    colors: [
      {
        name: "Brand Green",
        value: "var(--brand-green, hsl(158.36, 100%, 47.84%))",
      },
      {
        name: "Brand Blue",
        value: "var(--brand-blue, hsl(215.15999, 96.86%, 49.8%))",
      },
      {
        name: "Brand Cyan",
        value: "var(--brand-cyan, hsl(183.46, 99.05%, 41.18%))",
      },
      {
        name: "Brand Black",
        value: "var(--brand-black, hsl(210, 2.86%, 13.73%))",
      },
      {
        name: "Brand White",
        value: "var(--brand-white-foreground, hsl(204, 33.33%, 97.06%))",
      },
      { name: "Black", value: "#000" },
      { name: "White", value: "#fff" },
      {
        name: "Success",
        value: "var(--success, hsl(100.1399, 58.65%, 46.47%))",
      },
      { name: "Warning", value: "var(--warning, hsl(52, 95.24%, 50.59%))" },
      { name: "Danger", value: "var(--danger, hsl(2.98, 100%, 68.43%))" },
    ],
    spacing: [
      { name: "None", value: "0px" },
      { name: "Timy", value: "var(--nextui-spacing-tiny)" },
      { name: "Small", value: "var(--nextui-spacing-small)" },
      { name: "Medium", value: "var(--nextui-spacing-medium)" },
      { name: "Large", value: "var(--nextui-spacing-large)" },
      { name: "X Large", value: "var(--nextui-spacing-xlarge)" },
      { name: "2X Large", value: "var(--nextui-spacing-xxlarge)" },
    ],
    border: [
      { name: "None", value: "0px" },
      { name: "Small", value: "var(--border-small)" },
      { name: "Medium", value: "var(--border-medium)" },
      { name: "Large", value: "var(--border-large)" },
    ],
  },
})

Builder.registerComponent(Counter, {
  name: "Counter",
})
const ContainerWithChildren = withChildren(Container)

Builder.registerComponent(ContainerWithChildren, {
  name: "Container",
  inputs: [
    {
      name: "Size",
      enum: ["Small", "Medium", "Large", "X Large", "2X Large"],
      defaultValue: "Large",
    },
  ],
})

Builder.registerComponent(ButtonTemplate, {
  name: "Button",
  inputs: [
    { name: "Text", defaultValue: "Button Text" },
    {
      name: "Size",
      enum: ["sm", "md", "lg"],
      defaultValue: "md",
    },
    {
      name: "Width",
      enum: ["full", "fit"],
      defaultValue: "fit",
    },
    {
      name: "Variant",
      enum: ["primary", "secondary", "huntressblue"],
      defaultValue: "primary",
    },
  ],
})

Builder.registerComponent(LinkButton, {
  name: "Link Button",
  inputs: [
    { name: "Text", defaultValue: "Link Button Text" },
    { name: "href", defaultValue: "" },
    { name: "showArrow", type: "boolean", defaultValue: true },
    {
      name: "Color",
      enum: ["Primary", "Secondary", "Huntress Blue", "Success", "Warning", "Danger"],
      defaultValue: "Primary",
    },
  ],
})
const SectionWithChildren = withChildren(Section)

Builder.registerComponent(SectionWithChildren, {
  name: "Section",
  inputs: [{ name: "Size", enum: ["1", "2", "3", "4", "5", "6", "7", "8", "9"] }],
  defaultValue: "3",
})

Builder.registerComponent(Heading, {
  name: "Heading",
  inputs: [
    { name: "Text", defaultValue: "Heading Text" },
    { name: "Size", enum: ["1", "2", "3", "4", "5", "6", "7", "8", "9"] },
  ],
  defaultValue: "8",
})

Builder.registerComponent(BlogArticle, {
  name: "BlogArticle",
})
