[![MIT Badge](http://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/christabor/powerRanger/master/LICENSE)
[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/christabor/powerranger/trend.png)](https://bitdeli.com/free "Bitdeli Badge")
![Donation badge](https://img.shields.io/gratipay/christabor.svg)


# POWER **input** RANGER!
Tired of **BORING** number inputs that are hard to see when the numbers are too long? Tired of numbers that are too small inside the box? Add some **POWER** to your inputs with **POWER [input] RANGER!** Works great for max/min number inputs, part of the **SWEET** html5 spec.

### How to use:
Play around by adding and removing any number of items from each input box. For example, try adding 1, 99, 999, or even something over 9,000! Get crazy!
```
// make sure to cache your dom elements!
var inputs = $('#demo-section').find('input');
inputs.powerRangeIt();
```

### Options

1. **scale_factor: 12** | subtracted from total font size -- adjust to your liking

2. **cutoff_length: 7** | number of letters before resizing stops

3. **cutoff_size: 20** | default font size of non-resized letters

### Support
Tested in **Firefox 22**, **Chrome 28.0.1500.95** and **Safari 6.0.5 (8536.30.1)**

## demo: http://dxdstudio.com/labs/powerRanger/
