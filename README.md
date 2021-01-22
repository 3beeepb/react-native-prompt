# react-native-prompt [![npm version](https://badge.fury.io/js/%403beeepb%2Freact-native-prompt.svg)](https://badge.fury.io/js/%403beeepb%2Freact-native-prompt) ![NPM](https://img.shields.io/npm/l/@3beeepb/react-native-prompt) ![](https://img.shields.io/badge/platforms-android%20%7C%20ios-lightgrey)

A cross-platform (iOS / Android) prompt component for React Native.

## Add it to your project

1. Run `npm install @3beeepb/react-native-prompt --save`

2. Import the library

    ```js
    import Prompt from '@3beeepb/react-native-prompt';
    ```

3. Just use it like this:

    ```jsx
    <Prompt
      titleText={'What is your name?'}
      onCancel={() => console.log('cancel')}
      onDone={() => console.log('done')}
    >
        <TextInput />
    </>
    ```

### Properties

| Name |      Description      | Type |
| --- | --- | --- |
| `titleText` |  Title text | string |
| `cancelText` |  Cancel button text | string |
| `doneText` |  Done button text | string |
| `titleTextStyle` |  Title text styles | StyleSheet |
| `cancelTextStyle` |  Cancel button text styles | StyleSheet |
| `doneTextStyle` |  Done button text style | StyleSheet |
| `onCancel` | Will be called when a user press left (Cancel) button. | `() => void` |
| `onDone` | Will be called when a user press right (Done/OK) button. | `() => void` |

## Contribution

Please make sure to run the tests before proposing a PR by running `npm test`.
