import { Theme } from 'react-native-paper/lib/typescript/types';

export interface Question {
    id: string;
    order: number;
    type: string;
    title: string;
    value: any;
    required?: boolean;
    validator?: Function;
    validatorMsg?: string;
    options?: Option[];
}
  
export interface Option {
    key: string;
    value: string
}
