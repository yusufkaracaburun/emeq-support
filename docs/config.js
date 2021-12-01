window.$docsify = {
  name: "Emeq Handleiding",
  repo: "",
  coverpage: false,
  basePath: 'https://help.emeq.nl',
  // coverpage: '_coverpage.md',
  loadSidebar: '_sidebar.md',
  loadNavbar: '_navbar.md',
  notFoundPage: '404.md',
  maxDepth: 2,
  subMaxLevel: 2,
  auto2top: true,
  relativePath: false,
  logo: '_media/favicon.png',
  themeColor: '#3F51B5',
  mergeNavbar: true,
  executeScript: true,
  routerMode: 'history',
  pagination: {
    crossChapter: true,
  },
  tabs: {
    persist    : true,
    sync       : true,
    theme      : 'material',
    tabComments: true,
    tabHeadings: true
  },
  search: {
    paths: 'auto',
    placeholder: 'Wat zoekt u?',
    noData: 'Geen zoekresultaten!',
  },
}
