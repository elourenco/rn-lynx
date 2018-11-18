import SafariView from 'react-native-safari-view';

export default class Browser {
  static show(url) {
    SafariView.isAvailable()
      .then((res) => SafariView.show({ url }));
  }

  static dismiss() {
    SafariView.dismiss();
  }
}
