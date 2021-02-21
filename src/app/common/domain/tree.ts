import { getRandomInteger } from '../common';

export class Tree {

  name: string;
  height: number;
  age: number;

  private static names = [
    'el cactus',
    'el abrelatas',
    'los zapatos de tacón alto',
    'el armadillo',
    'la gorra',
    'la sartén',
    'el mono',
    'sea biscuit',
    'woody',
    'alder',
    'ash',
    'aspen',
    'basswood',
    'birch',
    'buckeye',
  ];

  static someTrees: Tree[] = Tree.names
    .map(name => {
      const height = getRandomInteger(25);
      return ({
        name,
        height,
        age: height * getRandomInteger(10),
      });
    });

}
