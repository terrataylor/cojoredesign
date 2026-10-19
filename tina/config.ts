import { defineConfig, type Template, type TinaField } from 'tinacms'

const branch =
  process.env.NEXT_PUBLIC_TINA_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || 'main'

// Tina rewrites the whole file on save and drops keys the schema doesn't list,
// so non-editable content is modeled with hidden fields to preserve it.
const hidden = { component: 'hidden' } as const

const text = (name: string, label: string, extra: Partial<TinaField> = {}): TinaField =>
  ({ type: 'string', name, label, ...extra }) as TinaField

const longText = (name: string, label: string, extra: Partial<TinaField> = {}): TinaField =>
  text(name, label, { ui: { component: 'textarea' }, ...extra } as Partial<TinaField>)

const hiddenText = (name: string): TinaField => ({ type: 'string', name, ui: hidden }) as TinaField

const hiddenObject = (name: string, fields: TinaField[]): TinaField =>
  ({ type: 'object', name, ui: hidden, fields }) as TinaField

const imageObject = (name: string, label: string, description?: string): TinaField =>
  ({
    type: 'object',
    name,
    label,
    description,
    fields: [
      { type: 'image', name: 'src', label: 'Photo', required: true },
      text('alt', 'Description for screen readers', { required: true } as Partial<TinaField>),
    ],
  }) as TinaField

const textList = (name: string, label: string, description?: string): TinaField =>
  ({ type: 'string', name, label, description, list: true }) as TinaField

const heading = (label = 'Heading'): TinaField => text('heading', label)

const myla: Template['fields'] = [
  {
    type: 'string',
    name: 'transportStatus',
    label: 'Transport launch status',
    description: 'Set to "Live" to remove the Coming Soon badge and note from MyLa Transport.',
    options: [
      { value: 'coming-soon', label: 'Coming soon' },
      { value: 'live', label: 'Live' },
    ],
    required: true,
  },
  {
    type: 'object',
    name: 'visibility',
    label: 'Show or hide sections',
    description: 'Turn on sections that are hidden by default to match the approved design.',
    fields: [
      { type: 'boolean', name: 'details', label: 'Location, amenities and rental terms' },
      { type: 'boolean', name: 'hosts', label: 'Meet Your Hosts' },
      { type: 'boolean', name: 'faq', label: 'Frequently Asked Questions' },
      { type: 'boolean', name: 'phoneField', label: 'Phone field on the stay inquiry form' },
      { type: 'boolean', name: 'questionsField', label: 'Questions field on the stay inquiry form' },
      { type: 'boolean', name: 'goodsOnlyNote', label: '"Goods only" note in Transport' },
      { type: 'boolean', name: 'footerCopyright', label: 'Copyright line in the footer' },
    ],
  },
  hiddenObject('brand', [
    hiddenText('name'),
    hiddenObject('logo', [hiddenText('src'), hiddenText('alt')]),
    hiddenObject('staysMascot', [hiddenText('src'), hiddenText('alt')]),
    hiddenObject('transportMascot', [hiddenText('src'), hiddenText('alt')]),
  ]),
  hiddenObject('meta', [hiddenText('title'), hiddenText('description')]),
  hiddenObject('homeFeature', [
    hiddenText('heading'),
    hiddenText('subheading'),
    hiddenObject('staysCard', [hiddenText('title'), hiddenText('text'), hiddenText('cta')]),
    hiddenObject('transportCard', [hiddenText('title'), hiddenText('text'), hiddenText('cta')]),
    hiddenText('note'),
  ]),
  {
    type: 'object',
    name: 'hero',
    label: 'Page text: top of page',
    fields: [
      text('headline', 'Headline', { description: 'Each sentence starts on its own line.' } as Partial<TinaField>),
      text('intro', 'Intro'),
      text('staysButton', 'Stays button label'),
      text('transportButton', 'Transport button label'),
    ],
  },
  {
    type: 'object',
    name: 'stays',
    label: 'MyLa Stays',
    fields: [
      text('eyebrow', 'Small label above the headline'),
      text('headline', 'Headline'),
      longText('description', 'Description'),
      {
        type: 'object',
        name: 'gallery',
        label: 'Photos',
        description: 'The first photo is shown large next to the headline. Drag to reorder.',
        list: true,
        ui: { itemProps: (item: { alt?: string }) => ({ label: item?.alt || 'Photo' }) },
        fields: [
          { type: 'image', name: 'src', label: 'Photo', required: true },
          text('alt', 'Description for screen readers', { required: true } as Partial<TinaField>),
        ],
      } as TinaField,
      {
        type: 'object',
        name: 'awayFromHome',
        label: 'Furnished Finder card',
        fields: [heading(), longText('text', 'Text')],
      },
      {
        type: 'object',
        name: 'furnishedFinder',
        label: 'Furnished Finder link',
        fields: [text('label', 'Link text'), text('url', 'Listing URL')],
      },
      {
        type: 'object',
        name: 'location',
        label: 'Location',
        fields: [heading(), longText('text', 'Text')],
      },
      {
        type: 'object',
        name: 'amenities',
        label: 'Amenities',
        fields: [heading(), textList('items', 'Amenities')],
      },
      {
        type: 'object',
        name: 'terms',
        label: 'Rental terms',
        fields: [heading(), textList('items', 'Terms')],
      },
      {
        type: 'object',
        name: 'hosts',
        label: 'Meet Your Hosts',
        fields: [heading(), longText('text', 'Intro')],
      },
      text('faqHeading', 'FAQ heading'),
      {
        type: 'object',
        name: 'faqs',
        label: 'FAQs',
        list: true,
        ui: { itemProps: (item: { question?: string }) => ({ label: item?.question || 'Question' }) },
        fields: [text('question', 'Question'), longText('answer', 'Answer')],
      } as TinaField,
      hiddenObject('form', [
        hiddenText('heading'),
        hiddenText('subheading'),
        hiddenText('submitLabel'),
        hiddenText('note'),
        hiddenText('successMessage'),
        hiddenText('errorMessage'),
      ]),
    ],
  },
  {
    type: 'object',
    name: 'transport',
    label: 'MyLa Transport',
    fields: [
      text('badge', 'Coming Soon badge text'),
      text('heading', 'Heading'),
      text('description', 'Description'),
      longText('supportingText', 'Supporting text'),
      text('goodsOnlyNote', '"Goods only" note'),
      imageObject('vanImage', 'Van photo'),
      hiddenObject('form', [
        hiddenText('heading'),
        hiddenText('submitLabel'),
        hiddenText('comingSoonNote'),
        hiddenText('successMessage'),
        hiddenText('errorMessage'),
      ]),
    ],
  },
  hiddenObject('footer', [hiddenText('backLabel')]),
]

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: 'myla',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [
      {
        name: 'myla',
        label: 'MyLa page',
        path: 'site/content',
        format: 'json',
        match: { include: 'myla' },
        ui: {
          allowedActions: { create: false, delete: false },
          router: () => '/myla/',
        },
        fields: myla,
      },
    ],
  },
})
