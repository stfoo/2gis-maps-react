var _class, _temp2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import DG from '2gis-maps';
import MapComponent from './MapComponent';

var Marker = (_temp2 = _class = function (_MapComponent) {
    _inherits(Marker, _MapComponent);

    function Marker() {
        var _temp, _this, _ret;

        _classCallCheck(this, Marker);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _MapComponent.call.apply(_MapComponent, [this].concat(args))), _this), _this.state = {
            dgElement: null,
            childrenForRender: [],
            pos: _this.props.pos || null
        }, _this.dragging = function (e) {
            _this.setState({
                dgElement: _this.state.dgElement,
                childrenForRender: _this.state.childrenForRender,
                pos: e.latlng
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    Marker.prototype.componentDidMount = function componentDidMount() {
        var _this2 = this;

        var dgElement = DG.marker(this.props.pos, {
            draggable: this.props.draggable,
            clickable: this.props.clickable
        });

        if (this.props.label) {
            dgElement.bindLabel(this.props.label);
        }

        this.setState({
            dgElement: dgElement
        }, function () {
            // For dragging Marker.
            if (_this2.props.draggable) {
                _this2.draggingSwitchTo(true);
            }
        });

        this.bindEvents(dgElement);

        // todo: fix it after fix https://github.com/2gis/mapsapi/issues/332
        if (this.props.staticLabel) {
            this.props.element.addLayer(dgElement);

            dgElement.bindLabel(this.props.staticLabel, { 'static': true });
        } else {
            this.props.element.addLayer(dgElement);
        }
    };

    Marker.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
        var dgElement = this.state.dgElement;


        this.updatePos(prevProps);

        this.updateLabel(prevProps);

        // Update static label.
        if (this.checkPropsChange('staticLabel', prevProps)) {
            dgElement.bindLabel(this.props.staticLabel, { 'static': true });
        }

        // Update draggable.
        if (this.checkPropsChange('draggable', prevProps)) {
            this.draggingSwitchTo(this.props.draggable);
        }

        this.updateEvents(dgElement, prevProps);
    };

    Marker.prototype.draggingSwitchTo = function draggingSwitchTo(isEnable) {
        var dgElement = this.state.dgElement;


        if (isEnable) {
            dgElement.on('drag', this.dragging);
            dgElement.dragging.enable();
        } else {
            dgElement.off('drag', this.dragging);
            dgElement.dragging.disable();
            dgElement.setLatLng(this.state.pos);
        }
    };

    return Marker;
}(MapComponent), _class.propsTypes = {
    pos: PropTypes.array,
    label: PropTypes.string,
    staticLabel: PropTypes.string,
    draggable: PropTypes.bool,
    clickable: PropTypes.bool
}, _class.defaultProps = {
    draggable: false,
    clickable: true,
    label: false,
    staticLabel: false
}, _temp2);
export { Marker as default };