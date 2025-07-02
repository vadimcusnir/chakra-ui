import { defineDocumentType, makeSource } from 'contentlayer/source-files'

const File = defineDocumentType(() => ({
  name: 'File',
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: 'string', required: true },
    etapa: { type: 'string', required: true },
    componenta: { type: 'string', required: true },
    taguri: { type: 'list', of: { type: 'string' } },
    durata: { type: 'string' },
    descriere: { type: 'string' },
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [File],
})
