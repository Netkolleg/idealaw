export const civilServices = [
  { path: 'dissolution-of-marriage', name: 'Расторжение брака', info: '' },
  { path: 'collection-of-alimony', name: 'Взыскание алиментов', info: '' },
  { path: 'recalculation-of-alimony', name: 'Перерасчет алиментов', info: '' },
  {
    path: 'procedure-for-determining-childs-residence',
    name: 'Поряддок определения места жительства ребенка',
    info: ''
  },
  {
    path: 'procedure-for-determining-communication-with-child',
    name: 'Порядок определение общения с ребенком',
    info: ''
  },
  { path: 'inheritance-disputes', name: 'Наследственные споры', info: '' },
  {
    path: 'participation-in-court-proceedings',
    name: 'Участие в судебных разбирательствах',
    info: ''
  },
  {
    path: 'participation-in-traffic-accident-cases',
    name: 'Участие в делах, связанных с ДТП',
    info: ''
  },
  {
    path: 'appeal-of-court-decision-in-higher-instances',
    name: 'Обжалование решения суда во второй и высших инстанциях суда',
    info: ''
  },
  { path: 'economic-cases', name: 'Экономические дела', info: '' },
  { path: 'administrative-cases', name: 'Административные дела', info: '' },
  { path: 'misdemeanor-cases', name: 'Дела о проступках', info: '' },
  {
    path: 'participation-in-traffic-accident-cases',
    name: 'Участие в делах, связанных с ДТП',
    info: ''
  }
]

export const criminalServices = [
  {
    path: 'protection-of-rights-and-interests-regardless-of-case-severity',
    name: 'Защита прав и интересов независимо от тяжести дела',
    info: ''
  },
  {
    path: 'participation-and-defense-in-court-proceedings',
    name: 'Участие и защита в судебных процессах',
    info: ''
  },
  {
    path: 'participation-in-pre-trial-proceedings',
    name: 'Участие в досудебном производстве',
    info: ''
  }
]

export const allServices = {
  civil: {
    title: 'Гражданские',
    name: 'civil',
    services: civilServices
  },
  criminal: {
    title: 'Уголовные',
    name: 'criminal',
    services: criminalServices
  }
}
