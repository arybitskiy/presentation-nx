import { State1 } from './slides/State1';
import { State2 } from './slides/State2';

import { Issues } from './slides/issues/Issues';
import { HugeJSBundles } from './slides/issues/HugeJSBundles';
import { HugeCSSBundles } from './slides/issues/HugeCSSBundles';
import { EveryAppHasItsOwnBundle } from './slides/issues/EveryAppHasItsOwnBundle';
import { SlowDevelopment } from './slides/issues/SlowDevelopment';
import { ComplicatedBuildConfig } from './slides/issues/ComplicatedBuildConfig';
import { EachRepositoryHasItsOwnConfig } from './slides/issues/EachRepositoryHasItsOwnConfig';
import { NoUnifiedLibrariesAcrossCompany } from './slides/issues/NoUnifiedLibrariesAcrossCompany';
import { NoTrackingForeRepositoriesAndDependencies } from './slides/issues/NoTrackingForeRepositoriesAndDependencies';
import { SlowCI } from './slides/issues/SlowCI';
import { ConstantlyFailingCI } from './slides/issues/ConstantlyFailingCI';

import { Resolution } from './slides/Resolution';
import { SingleRepositroyForConfiguration } from './slides/actions/SingleRepositroyForConfiguration';
import { ConfigEncapsulated } from './slides/actions/ConfigEncapsulated';
import { ConfigPropagation } from './slides/actions/ConfigPropagation';

export const SlidesRegistry = () => {
  return (
    <>
      {/* STATES */}
      <State1 />
      <State2 />
      {/* ISSUES */}
      <Issues />
      <HugeJSBundles />
      <HugeCSSBundles />
      <EveryAppHasItsOwnBundle />
      <SlowDevelopment />
      <ComplicatedBuildConfig />
      <EachRepositoryHasItsOwnConfig />
      <NoUnifiedLibrariesAcrossCompany />
      <NoTrackingForeRepositoriesAndDependencies />
      <SlowCI />
      <ConstantlyFailingCI />
      {/* ACTIONS */}
      <Resolution />
      <SingleRepositroyForConfiguration />
      <ConfigEncapsulated />
      <ConfigPropagation />
    </>
  );
};
