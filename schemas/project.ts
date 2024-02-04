import { BillIcon } from '@sanity/icons'
import {
  orderRankField,
  orderRankOrdering,
} from '@sanity/orderable-document-list'
import { isUniqueAcrossAllDocuments } from 'lib/isUniqueAcrossAllDocuments'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  icon: BillIcon,
  type: 'document',
  orderings: [orderRankOrdering],
  fieldsets: [
    {
      name: 'misc',
      title: 'Misc',
      options: {
        columns: 3,
      },
    },
  ],
  fields: [
    orderRankField({ type: 'category', newItemPosition: 'before' }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title of the project',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200,
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
        isUnique: isUniqueAcrossAllDocuments,
      },
      description: 'The slug is the url path of the project',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),
    defineField({
      name: 'archive',
      title: 'Archive',
      type: 'boolean',
      description: 'Is located in the archive section of the website',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Tags for the project',
    }),

    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      description: 'Is it a website, a branding, a print, etc.',
    }),
    defineField({
      name: 'project',
      title: 'Project',
      type: 'string',
      fieldset: 'misc',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      fieldset: 'misc',
    }),
    defineField({
      name: 'workingAs',
      title: 'Working as',
      type: 'string',
      fieldset: 'misc',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      archive: 'archive',
      gallery: 'gallery.0.asset',
    },
    prepare({ title, archive, gallery }) {
      return {
        title: title,
        subtitle: `${archive ? 'Archived' : ''}`,
        media: gallery,
      }
    },
  },
})
