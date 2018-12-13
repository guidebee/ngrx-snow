export interface ServiceCatalogue {
  id: number;
  text: string;
  icon: string;
}

export const serviceCatalogues: ServiceCatalogue[] = [
  { id: 0, text: 'Visualisation,Data Analysis', icon: 'chart-line' },
  { id: 1, text: 'Analytics,AI', icon: 'robot' },
  { id: 2, text: 'Mobile', icon: 'mobile' },
  { id: 3, text: 'GIS', icon: 'globe' },
  { id: 4, text: 'Application', icon: 'atlas' },
  { id: 5, text: 'Integration', icon: 'cog' },
  { id: 6, text: 'Data', icon: 'database' },
  { id: 7, text: 'Industrial Systems', icon: 'atom' },
  { id: 8, text: 'IIoT', icon: 'swatchbook' }
];
