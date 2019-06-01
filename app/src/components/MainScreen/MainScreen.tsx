import { Pivot, PivotItem, PivotLinkSize } from 'office-ui-fabric-react/lib/Pivot';
import * as React from 'react';

import { Header } from '../../components/Header/Header';
import { Groups } from '../../containers/Groups/Groups';
import { MyInfo } from '../../containers/MyInfo/MyInfo';
import { SpInfo } from '../../containers/SpInfo/SpInfo';

export const MainScreen: React.StatelessComponent<{}> = () => (
  <div>
    <Header />
    <Pivot linkSize={PivotLinkSize.large}>
      <PivotItem headerText="My Info">
        <MyInfo />
      </PivotItem>
      <PivotItem headerText="MS Graph groups">
        <Groups />
      </PivotItem>
      <PivotItem headerText="SharePoint site info">
        <SpInfo />
      </PivotItem>
    </Pivot>
  </div>
);
