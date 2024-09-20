import { Rule } from "sanity";
export const products = {
  name: "product",
  type: "document",
  title: "Products",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
    },
    {
      name: "discription",
      title: "Discription",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              title: "Alt",
              type: "string",
            },
          ],
        },
      ],
    },

    {
      name: "logo",
      title: "Logo",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    },

    {
      name: "categories",
      title: "Category",
      type: "reference",
      to: {
        type: "category",
      },
    },
  ],
};
