import { IonPage } from '@ionic/react';
import React, { Suspense } from 'react';
import { RouteComponentProps } from 'react-router';
import { NetworkErrorBoundary } from 'rest-hooks';
import NetworkErrorFallback from '../../components/NetworkErrorFallback';
import SuspenseFallback from '../../components/SuspenseFallback';
import CommitteeDetailInner from './CommitteeDetailInner';

import './committeeDetail.css';

type CommitteeDetail = RouteComponentProps<{
  id: string;
}>;

const CommitteeDetail: React.FC<CommitteeDetail> = ({
  match: {
    params: { id },
  },
}) => {
  return (
    <IonPage>
      <NetworkErrorBoundary fallbackComponent={NetworkErrorFallback}>
        <Suspense fallback={<SuspenseFallback />}>
          <CommitteeDetailInner id={id} />
        </Suspense>
      </NetworkErrorBoundary>
    </IonPage>
  );
};

export default CommitteeDetail;
