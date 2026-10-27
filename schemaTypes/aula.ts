import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'aula',
  title: 'Aulas e Materiais',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Título da Aula',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (Link da aula)',
      type: 'slug',
      options: { source: 'titulo' },
    }),
    defineField({
      name: 'categoria',
      title: 'Categoria',
      type: 'string',
      options: {
        list: [
          { title: 'English Club', value: 'english-club' },
          { title: 'Challenges', value: 'challenges' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'conteudo',
      title: 'Conteúdo da Aula',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'linkMaterial',
      title: 'Link do Material (YouTube, PDF, etc)',
      type: 'url',
      description: 'Cole o link do vídeo do YouTube ou do arquivo PDF.',
      validation: (Rule) => Rule.uri({ scheme: ['http', 'https'] }),
    }),
    defineField({
      name: 'capa',
      title: 'Imagem de Capa',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
})