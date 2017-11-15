var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component, Children, cloneElement } from 'react';

var MapComponent = function (_Component) {
    _inherits(MapComponent, _Component);

    function MapComponent() {
        _classCallCheck(this, MapComponent);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    MapComponent.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.state && this.state.dgElement) {
            this.state.dgElement.remove();
        }
    };

    MapComponent.prototype.render = function render() {
        var _this2 = this;

        var childrenForRender = [];

        if (this.state && this.state.dgElement && this.props.children) {
            childrenForRender = Children.map(this.props.children, function (child) {
                return cloneElement(child, {
                    element: _this2.state.dgElement
                });
            });
        }

        return React.createElement(
            'noscript',
            null,
            childrenForRender
        );
    };

    MapComponent.prototype.checkPropsChange = function checkPropsChange(propsName, prevProps) {
        var _this3 = this;

        if (typeof propsName == 'string') {
            return prevProps[propsName] !== this.props[propsName];
        } else if ((typeof propsName === 'undefined' ? 'undefined' : _typeof(propsName)) == 'object') {
            return propsName.some(function (name) {
                return prevProps[name] !== _this3.props[name];
            });
        }
    };

    MapComponent.prototype.updateLabel = function updateLabel(prevProps) {
        if (this.checkPropsChange('label', prevProps)) {
            if (this.props.label) {
                this.state.dgElement.bindLabel(this.props.label);
            } else {
                this.state.dgElement.unbindLabel();
            }
        }
    };

    MapComponent.prototype.updatePos = function updatePos(prevProps) {
        if (this.checkPropsChange('pos', prevProps)) {
            this.state.dgElement.setLatLng(this.props.pos);
        }
    };

    MapComponent.prototype.updatePoints = function updatePoints(prevProps) {
        if (this.checkPropsChange('points', prevProps)) {
            this.state.dgElement.setLatLngs(this.props.points);
        }
    };

    MapComponent.prototype.updateStyle = function updateStyle(prevProps) {
        if (this.checkPropsChange('style', prevProps)) {
            this.state.dgElement.setStyle(this.props.style);
        }
    };

    MapComponent.prototype.insideMap = function insideMap() {
        return !!this.props.element.options.zoom;
    };

    MapComponent.prototype.isFunction = function isFunction(variable) {
        return typeof variable === 'function';
    };

    MapComponent.prototype.bindEvents = function bindEvents(dgElement) {
        for (var prop in this.props) {
            if (prop.slice(0, 2) === 'on' && this.isFunction(this.props[prop])) {
                dgElement.on(prop.slice(2).toLowerCase(), this.props[prop]);
            }
        }
    };

    MapComponent.prototype.updateEvents = function updateEvents(dgElement, prevProps) {
        for (var prop in this.props) {
            if (prop.slice(0, 2) === 'on') {
                var dgPropName = prop.slice(2).toLowerCase();

                if (!prevProps[prop] && this.isFunction(this.props[prop])) {
                    dgElement.on(dgPropName, this.props[prop]);
                }

                if (this.props[prop] !== prevProps[prop] && this.isFunction(this.props[prop])) {
                    dgElement.off(dgPropName, prevProps[prop]);
                    dgElement.on(dgPropName, this.props[prop]);
                }

                if (!this.props[prop] && this.isFunction(prevProps[prop])) {
                    dgElement.off(dgPropName, prevProps[prop]);
                }
            }
        }
    };

    return MapComponent;
}(Component);

export { MapComponent as default };