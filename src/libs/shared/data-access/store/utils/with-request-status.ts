import {computed} from '@angular/core';
import {signalStoreFeature, withComputed, withState} from '@ngrx/signals';

export type RequestStatus = 'idle' | 'fetching' | 'success' | {error: unknown};
export type RequestStatusState = {requestStatus: RequestStatus};

export function setFetching(): RequestStatusState {
  return {requestStatus: 'fetching'};
}

export function setSuccess(): RequestStatusState {
  return {requestStatus: 'success'};
}

export function setError(error: unknown): RequestStatusState {
  return {requestStatus: {error}};
}

export function withRequestStatus() {
  return signalStoreFeature(
    withState<RequestStatusState>({requestStatus: 'idle'}),
    withComputed(({requestStatus}) => ({
      isFetching: computed(() => requestStatus() === 'fetching'),
      isSuccess: computed(() => requestStatus() === 'success'),
      isError: computed(() => typeof requestStatus === 'object'),
      error: computed(() => {
        const status = requestStatus();

        return typeof status === 'object' ? status.error : null;
      }),
    })),
  );
}
