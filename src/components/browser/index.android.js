import { CustomTabs } from 'react-native-custom-tabs';
import Theme from '@infra/styles/Theme';


const options = {
  toolbarColor: Theme.Colors.darkTurquoise,
  enableUrlBarHiding: true,
  showPageTitle: true,
  enableDefaultShare: true,
  forceCloseOnRedirection: true
};

export default class Browser {
  static show(url) {
    CustomTabs.openURL(url, options)
  }

  static hide() {}
}
