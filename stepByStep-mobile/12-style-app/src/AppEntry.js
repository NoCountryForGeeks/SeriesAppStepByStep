import { KeepAwake, registerRootComponent } from 'expo';
import { App } from './index';

if (__DEV__) {
  KeepAwake.activate();
}

registerRootComponent(App);