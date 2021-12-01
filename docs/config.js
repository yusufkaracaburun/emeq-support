window.$docsify = {
  name: "Emeq Handleiding",
  repo: "",
  coverpage: false,
  basePath: '/',
  // coverpage: '_layout/_coverpage.md',
  loadSidebar: '_layout/_sidebar.md',
  loadNavbar: '_layout/_navbar.md',
  notFoundPage: '_layout/_404.md',
  maxDepth: 2,
  subMaxLevel: 2,
  auto2top: true,
  relativePath: false,
  logo: '_media/favicon.png',
  themeColor: '#3F51B5',
  mergeNavbar: true,
  executeScript: true,
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
