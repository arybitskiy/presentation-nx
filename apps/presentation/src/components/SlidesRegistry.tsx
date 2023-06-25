import { HugeJSBundles } from './slides/issues/HugeJSBundles';
import { HugeCSSBundles } from './slides/issues/HugeCSSBundles';
import { EveryAppHasItsOwnBundle } from './slides/issues/EveryAppHasItsOwnBundle';
import { SlowDevelopment } from './slides/issues/SlowDevelopment';

export const SlidesRegistry = () => {
  return (
    <>
      <HugeJSBundles />
      <HugeCSSBundles />
      <EveryAppHasItsOwnBundle />
      <SlowDevelopment />
    </>
  );
};
