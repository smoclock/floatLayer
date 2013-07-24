/*
combined files : 

gallery/floatLayer/1.0/index

*/
/**
 * @fileoverview 
 * @author 子仲<smoclock@gmail.com>
 * @module floatLayer
 **/
KISSY.add('gallery/floatLayer/1.0/index',function (S, Node,Base) {
    var EMPTY = '';
    var $ = Node.all;
    /**
     * 
     * @class FloatLayer
     * @constructor
     * @extends Base
     */
    function FloatLayer(comConfig) {
        var self = this;
        //调用父类构造函数
        FloatLayer.superclass.constructor.call(self, comConfig);
    }
    S.extend(FloatLayer, Base, /** @lends FloatLayer.prototype*/{

    }, {ATTRS : /** @lends FloatLayer*/{

    }});
    return FloatLayer;
}, {requires:['node', 'base']});




