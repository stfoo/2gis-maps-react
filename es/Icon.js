var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DG from '2gis-maps';
import MapComponent from './MapComponent';

var Icon = (_temp = _class = function (_MapComponent) {
    _inherits(Icon, _MapComponent);

    function Icon() {
        _classCallCheck(this, Icon);

        return _possibleConstructorReturn(this, _MapComponent.apply(this, arguments));
    }

    Icon.prototype.componentDidMount = function componentDidMount() {
        this.setIcon();
    };

    Icon.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
        if (prevProps.iconUrl != this.props.iconUrl || prevProps.iconSize != this.props.iconSize) {
            this.setIcon();
        }
        this.props.element._bringToFront();
    };

    Icon.prototype.setIcon = function setIcon() {
        this.props.element.setIcon(DG.icon({
            iconUrl: this.props.iconUrl,
            iconSize: this.props.iconSize
        }));
    };

    return Icon;
}(MapComponent), _class.propsTypes = {
    iconUrl: PropTypes.string,
    iconSize: PropTypes.array
}, _temp);
export { Icon as default };