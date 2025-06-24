import prompt from 'react-native-prompt-android'; //paquete instalaado para propmt de android

interface Options {
  title: string;
  subtitle: string;
  buttons: PromptButtons[];
  promptType?:
    | 'secure-text'
    | 'plain-text'
    | 'numeric'
    | 'email-address'
    | 'phone-pad'
    | 'default';
  placeholder?: string;
  defaultValue?: string;
}

interface PromptButtons {
  text: string;
  onPress: () => void;
  style?: 'cancel' | 'destructive' | 'default';
}
export const showPrompt = ({
  title,
  subtitle,
  buttons,
  promptType = 'default',
  placeholder,
  defaultValue,
}: Options) =>
  prompt(title, subtitle, buttons, {
    type: promptType,
    cancelable: false,
    defaultValue: defaultValue,
    placeholder: placeholder,
  });
