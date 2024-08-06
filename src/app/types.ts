type VoidFunc = () => void;
type VoidFuncWithParameter = (parameter: string) => Promise<void>;

interface Item {
  name: string;
  [key: string]: any;
}