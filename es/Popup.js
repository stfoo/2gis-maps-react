var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOMServer from 'react-dom/server';
import DG from '2gis-maps';
import MapComponent from './MapComponent';

var Popup = (_temp = _class = function (_MapComponent) {
    _inherits(Popup, _MapComponent);

    function Popup() {
        _classCallCheck(this, Popup);

        return _possibleConstructorReturn(this, _MapComponent.apply(this, arguments));
    }

    Popup.prototype.componentDidMount = function componentDidMount() {
        var popupHtml = this.renderChildren();

        var element = this.props.element;


        var dgElement = null;

        // Popup options.
        var _props = this.props,
            maxWidth = _props.maxWidth,
            minWidth = _props.minWidth,
            maxHeight = _props.maxHeight,
            sprawling = _props.sprawling,
            className = _props.className;


        var options = {
            maxWidth: maxWidth, minWidth: minWidth, maxHeight: maxHeight, sprawling: sprawling, className: className
        };

        if (this.insideMap()) {
            dgElement = DG.popup(options).setLatLng(this.props.pos).setContent(popupHtml).openOn(element);
        } else {
            if (element.getPopup()) {
                element.setPopupContent(popupHtml);
            } else {
                element.bindPopup(popupHtml, options);
            }

            dgElement = element.getPopup();
        }
    };

    Popup.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
        var element = this.props.element;


        if (prevProps.children != this.props.children) {
            var popupHtml = this.renderChildren();

            if (this.insideMap()) {
                element.getPopup().setContent(popupHtml);
            } else {
                element.setPopupContent(popupHtml);
            }
        }

        this.updatePos(prevProps);

        if (element.getPopup) {
            this.updateEvents(element.getPopup());
        }
    };

    Popup.prototype.componentWillUnmount = function componentWillUnmount() {
        this.props.element.unbindPopup();
    };

    Popup.prototype.renderChildren = function renderChildren() {
        return ReactDOMServer.renderToString(React.createElement(
            'div',
            { style: {
                    padding: 0,
                    margin: 0,
                    display: 'inline'
                } },
            this.props.children
        ));
    };

    return Popup;
}(MapComponent), _class.propsTypes = {
    pos: PropTypes.array,
    maxWidth: PropTypes.number,
    minWidth: PropTypes.number,
    maxHeight: PropTypes.number,
    sprawling: PropTypes.bool,
    className: PropTypes.string
}, _class.defaultProps = {
    maxWidth: 300,
    minWidth: 50,
    maxHeight: null,
    sprawling: false,
    className: ''
}, _temp);
export { Popup as default };