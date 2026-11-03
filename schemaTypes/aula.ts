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
      validation: (Rule) => Rule.required().error('O título é obrigatório.'),
    }),
    defineField({
      name: 'descricao',
      title: 'Descrição Curta',
      type: 'text',
      rows: 3,
      description: 'Uma frase ou parágrafo curto explicando o que é este material.',
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
        layout: 'radio',
      },
      validation: (Rule) => Rule.required().error('Escolha a categoria.'),
    }),
    defineField({
      name: 'links',
      title: 'Materiais e Links',
      description: 'Adicione links da web ou faça upload de arquivos (PDF, imagens, etc).',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'linkItem',
          fields: [
            defineField({
              name: 'titulo',
              title: 'Nome do Botão (ex: Baixar PDF, Assistir no YouTube)',
              type: 'string',
              validation: (Rule) => Rule.required().error('O nome do botão é obrigatório.'),
            }),
            defineField({
              name: 'tipo',
              title: 'Como o aluno vai acessar?',
              type: 'string',
              options: {
                list: [
                  { title: 'Link da Internet (YouTube, Drive, etc)', value: 'url' },
                  { title: 'Arquivo para Download (Upload)', value: 'arquivo' },
                ],
                layout: 'radio',
              },
              initialValue: 'url',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'url',
              title: 'Link (URL)',
              type: 'url',
              hidden: ({ parent }) => parent?.tipo !== 'url',
              validation: (Rule) =>
                Rule.custom((value, context) => {
                  const parent = context.parent as { tipo?: string }
                  if (parent?.tipo === 'url' && !value) {
                    return 'O link é obrigatório quando a opção "Link da Internet" está selecionada.'
                  }
                  return true
                }),
            }),
            defineField({
              name: 'arquivo',
              title: 'Upload do Arquivo',
              type: 'file',
              hidden: ({ parent }) => parent?.tipo !== 'arquivo',
              validation: (Rule) =>
                Rule.custom((value, context) => {
                  const parent = context.parent as { tipo?: string }
                  if (parent?.tipo === 'arquivo' && !value) {
                    return 'O upload do arquivo é obrigatório quando a opção "Arquivo para Download" está selecionada.'
                  }
                  return true
                }),
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'quiz',
      title: 'Quiz Interativo (Opcional)',
      description: 'Preencha para criar um card de desafio (apenas para Challenges).',
      type: 'object',
      hidden: ({ document }) => document?.categoria !== 'challenges',
      fields: [
        defineField({
          name: 'pergunta',
          title: 'Pergunta',
          type: 'string',
        }),
        defineField({
          name: 'opcoes',
          title: 'Opções de Resposta',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'texto',
                  title: 'Texto da Opção',
                  type: 'string',
                }),
                defineField({
                  name: 'correta',
                  title: 'Esta é a resposta correta?',
                  type: 'boolean',
                  initialValue: false,
                }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'capa',
      title: 'Imagem de Capa (Opcional)',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
})