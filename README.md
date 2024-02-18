# Beta Function / natural logarithm of the Beta function

> Evaluates the [beta function](http://en.wikipedia.org/wiki/Beta_function)
> and
> the natural logarithm of the beta function.

The [Beta function](https://en.wikipedia.org/wiki/Beta_function),
 also called the Euler integral, is defined as

```math
\operatorname{Beta}(x,y) = \int_0^1t^{x-1}(1-t)^{y-1}\,\mathrm{d}t
```

It is related to the [Gamma function](https://en.wikipedia.org/wiki/Gamma_function)
 via the following equation

```math
\operatorname{Beta}(x, y) = \dfrac{\Gamma(x)\,\Gamma(y)}{\Gamma(x + y)}
```
and
```math
\ln \operatorname{Beta}(x,y)= \ln \Gamma(x) + \ln \Gamma(y) - \ln \Gamma(x+y)
```

This package supports both CommonJs and ES Modules.


## Installation

``` bash
$ npm install @toshiara/special-beta
```


## Usage

``` javascript
// for CommonJs
const { beta, betaln } = require('@toshiara/special-beta');

// for ES Modules
import { beta, betaln } from '@toshiara/special-beta';
```

### beta(x, y)

Evaluates the beta function.

```javascript
beta(1.2, 2.4);
// returns 0.3068371659652535

beta(0.1, 0.3);
// returns 12.8305985363213
```

### betaln(x, y)

Evaluates the beta function.

```javascript
betaln(1, 2);
// returns -0.6931471805599453

betaln(1.2, 2.4);
// returns -1.181438076130887
```


## License

[MIT license](http://opensource.org/licenses/MIT).

