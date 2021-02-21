import { Tree } from './tree';

export class LabeledOption<T> {
  label: string;
  value: T;

  static fromTree(list: Tree[]): LabeledOption<Tree>[] {
    return list.map(item => ({label: item.name, value: item}));
  }
}
