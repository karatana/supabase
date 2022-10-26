import { Project } from 'types'
import { ProductMenuGroup } from 'components/ui/ProductMenu/ProductMenu.types'

export const generateReportsMenu = (project?: Project): ProductMenuGroup[] => {
  const ref = project?.ref ?? 'default'

  return [
    {
      title: 'Reports',
      items: [
        {
          name: 'Custom reports',
          key: '',
          url: `/project/${ref}/reports`,
          items: [],
        },
        {
          name: 'API',
          key: 'api-usage',
          url: `/project/${ref}/reports/api-usage`,
          items: [],
        },
        {
          name: 'Database',
          key: 'database',
          url: `/project/${ref}/reports/database`,
          items: [],
        },
      ],
    },
  ]
}
