declare module 'react-google-recaptcha' {
  import { Component } from 'react';

  interface ReCAPTCHAProps {
    sitekey: string;
    onChange?: (token: string | null) => void;
    onExpired?: () => void;
    onErrored?: () => void;
    ref?: React.Ref<ReCAPTCHA>;
  }

  export default class ReCAPTCHA extends Component<ReCAPTCHAProps> {
    reset(): void;
  }
}
