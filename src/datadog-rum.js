import { datadogRum } from '@datadog/browser-rum';


datadogRum.init({
  applicationId: '6dae49a5-5912-48e7-8b5b-6928228edfab',
  clientToken: 'pubc67d58b4365b1db407e3cb94024324f4',
  site: 'datadoghq.com',
  service:'testdv',
  // Specify a version number to identify the deployed version of your application in Datadog 
  // version: '1.0.0',
  sampleRate: 100,
  trackInteractions: true,
  defaultPrivacyLevel: 'mask-user-input'
});
  
export function initRum() {datadogRum.startSessionReplayRecording();}