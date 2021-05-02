interface Question {
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
  
interface Option {
    key: string;
    value: string
}
  

