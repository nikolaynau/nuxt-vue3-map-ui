import type { ModuleOptions } from './types';

export const libraryName = 'vue-map-ui';

export const rootComponentName = 'VMap';

export const runtimeDir = './runtime';

const allComponents = ['VMap', 'VMapTileLayer', 'VMapOsmTileLayer'];

const allImports: string[] = ['useMap', 'useLayer'];

export const defaults: ModuleOptions = {
  components: allComponents,
  imports: allImports,
  autoImports: true,
  leafletStyles: true,
  libraryStyles: true,
  normalizeStyles: true
};
