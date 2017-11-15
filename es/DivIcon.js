var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOMServer from 'react-dom/server';
import DG from '2gis-maps';
import MapComponent from './MapComponent';

var DivIcon = (_temp = _class = function (_MapComponent) {
    _inherits(DivIcon, _MapComponent);

    function DivIcon() {
        _classCallCheck(this, DivIcon);

        return _possibleConstructorReturn(this, _MapComponent.apply(this, arguments));
    }

    DivIcon.prototype.componentDidMount = function componentDidMount() {
        var iconHtml = '';
        if (this.props.children) {
            iconHtml = ReactDOMServer.renderToString(React.createElement(
                'div',
                { style: {
                        padding: 0,
                        margin: 0,
                        display: 'inline'
                    } },
                this.props.children
            ));
        } else {
            iconHtml = this.props.dangerouslySetInnerHTML;
        }

        var icon = DG.divIcon({
            iconSize: this.props.iconSize,
            html: iconHtml
        });

        this.props.element.setIcon(icon);
    };

    return DivIcon;
}(MapComponent), _class.propsTypes = {
    iconSize: PropTypes.array,
    dangerouslySetInnerHTML: PropTypes.string
}, _class.defaultProps = {
    dangerouslySetInnerHTML: ''
}, _temp);
export { DivIcon as default };