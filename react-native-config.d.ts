declare module 'react-native-config' {
    export interface NativeConfig {
        HOSTNAME?: string;
        APP_CONFIG?: string;
    }
    
    export const Config: NativeConfig
    export default Config
  }