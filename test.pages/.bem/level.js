var BEM = require('bem');

exports.baseLevelPath = require.resolve('../../.bem/levels/bundles.js'); // бандлы - страницы

exports.getConfig = function() {

    return BEM.util.extend(this.__base() || {}, {
        bundleBuildLevels: this.resolvePaths([
            '../../bem-bl/blocks-common',
            '../../bem-bl/blocks-desktop',
            '../../common.blocks',
            //'../../john-lib/blocks/',
            '../../desktop.blocks'
        ])
    });

};
