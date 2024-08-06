interface Item {
  name: string;
  [key: string]: any;
}

type VoidFunc = () => void;
type VoidFuncWithParameter = (parameter: string) => Promise<void>;