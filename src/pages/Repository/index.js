import React from 'react';
import propTypes from 'prop-types';
import WebView from 'react-native-webview';

export default function Repository(props) {
  const { navigation } = props;
  const { html_url } = navigation.getParam('repo');

  return <WebView source={{ uri: html_url }} style={{ flex: 1 }} />;
}

Repository.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('repo').full_name,
});

Repository.propTypes = {
  navigation: propTypes.shape({
    getParam: propTypes.shape({
      html_url: propTypes.string,
    }),
  }).isRequired,
};
