/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['open-sans, sans-serif']='<script src=\"http://use.edgefonts.net/open-sans:n7,i7,n8,i8,i4,n3,i3,n4,n6,i6:all.js\"></script>';

var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'Symbol_1',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'Text2',
                type: 'text',
                rect: ['0px', '278px','320px','57px','auto', 'auto'],
                text: "Tap Record to see settings swipe",
                align: "center",
                font: ['open-sans, sans-serif', 18, "rgba(255,255,255,1)", "300", "none", "normal"]
            },
            {
                id: 'Text2Copy',
                type: 'text',
                rect: ['6px', '385px','320px','57px','auto', 'auto'],
                text: "Tap Resolution To See<br> Adjust Setting",
                align: "center",
                font: ['open-sans, sans-serif', 18, "rgba(255,255,255,1)", "300", "none", "normal"]
            }],
            symbolInstances: [
            {
                id: 'Symbol_1',
                symbolName: 'Symbol_1',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_Text2Copy}": [
                ["style", "top", '385px'],
                ["style", "text-align", 'center'],
                ["style", "font-size", '18px'],
                ["style", "left", '6px'],
                ["style", "width", '320px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '568px'],
                ["style", "width", '320px']
            ],
            "${_Text3Copy11}": [
                ["style", "top", '1099px'],
                ["style", "font-size", '18px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '20px'],
                ["style", "font-weight", '500'],
                ["style", "left", '673px'],
                ["style", "width", '68px']
            ],
            "${_Text2}": [
                ["style", "top", '278px'],
                ["style", "text-align", 'center'],
                ["style", "width", '320px'],
                ["style", "left", '0px'],
                ["style", "font-size", '18px']
            ],
            "${_Symbol_1}": [
                ["transform", "scaleX", '0.5'],
                ["transform", "scaleY", '0.5'],
                ["style", "left", '-234px'],
                ["style", "top", '-284px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2500,
            autoPlay: true,
            timeline: [
                { id: "eid1721", tween: [ "transform", "${_Symbol_1}", "scaleX", '0.5', { fromValue: '0.5'}], position: 0, duration: 0, easing: "easeInOutBack" },
                { id: "eid1723", tween: [ "style", "${_Symbol_1}", "left", '-234px', { fromValue: '-234px'}], position: 0, duration: 0, easing: "easeInOutBack" },
                { id: "eid1724", tween: [ "style", "${_Symbol_1}", "top", '-284px', { fromValue: '-284px'}], position: 0, duration: 0, easing: "easeInOutBack" },
                { id: "eid1722", tween: [ "transform", "${_Symbol_1}", "scaleY", '0.5', { fromValue: '0.5'}], position: 0, duration: 0, easing: "easeInOutBack" }            ]
        }
    }
},
"mode": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'rect',
                    id: 'RectangleCopy4',
                    stroke: [1, 'rgba(255,255,255,1.00)', 'solid'],
                    rect: ['0px', '0px', '144px', '88px', 'auto', 'auto'],
                    fill: ['rgba(23,27,32,1.00)']
                },
                {
                    rect: ['48px', '63px', '50px', '20px', 'auto', 'auto'],
                    font: ['open-sans, sans-serif', 18, 'rgba(255,255,255,1.00)', '500', 'none', 'normal'],
                    id: 'Text3Copy7',
                    text: 'Mode',
                    align: 'left',
                    type: 'text'
                },
                {
                    id: 'videoCopy2',
                    type: 'image',
                    rect: ['42px', '15px', '61px', '37px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/video.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text3Copy7}": [
                ["style", "top", '63px'],
                ["style", "width", '50px'],
                ["style", "height", '20px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '500'],
                ["style", "left", '48px'],
                ["style", "font-size", '18px']
            ],
            "${_RectangleCopy4}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(23,27,32,1.00)'],
                ["style", "border-width", '1px'],
                ["color", "border-color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '88px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '0px'],
                ["style", "width", '144px']
            ],
            "${_videoCopy2}": [
                ["style", "left", '42px'],
                ["style", "top", '15px']
            ],
            "${symbolSelector}": [
                ["style", "height", '90px'],
                ["style", "width", '146px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"Resolution": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '144px', '88px', 'auto', 'auto'],
                    id: 'RectangleCopy',
                    stroke: [1, 'rgba(255,255,255,1.00)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(23,27,32,1.00)']
                },
                {
                    rect: ['28px', '62px', '90px', '20px', 'auto', 'auto'],
                    font: ['open-sans, sans-serif', 18, 'rgba(255,255,255,1.00)', '500', 'none', 'normal'],
                    id: 'Resolution',
                    text: 'Resolution',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['11px', '13px', '124px', '39px', 'auto', 'auto'],
                    font: ['open-sans, sans-serif', 34, 'rgba(255,255,255,1.00)', '300', 'none', 'normal'],
                    id: 'Text3Copy2',
                    text: '1080p S',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['161px', '-2px', '79px', '39px', 'auto', 'auto'],
                    font: ['open-sans, sans-serif', 34, 'rgba(255,255,255,1.00)', '300', 'none', 'normal'],
                    align: 'left',
                    id: 'Text3Copy14',
                    opacity: 0.2,
                    text: '720p',
                    type: 'text'
                },
                {
                    rect: ['266px', '-2px', '105px', '39px', 'auto', 'auto'],
                    font: ['open-sans, sans-serif', 34, 'rgba(255,255,255,1.00)', '300', 'none', 'normal'],
                    align: 'left',
                    id: 'Text3Copy15',
                    opacity: 0.2,
                    text: '720p S',
                    type: 'text'
                },
                {
                    rect: ['397px', '-2px', '105px', '39px', 'auto', 'auto'],
                    font: ['open-sans, sans-serif', 34, 'rgba(255,255,255,1.00)', '300', 'none', 'normal'],
                    align: 'left',
                    id: 'Text3Copy16',
                    opacity: 0.2,
                    text: 'WVGA',
                    type: 'text'
                },
                {
                    rect: ['-113px', '-2px', '124px', '39px', 'auto', 'auto'],
                    font: ['open-sans, sans-serif', 34, 'rgba(255,255,255,1.00)', '300', 'none', 'normal'],
                    align: 'left',
                    id: 'Text3Copy12',
                    opacity: 0.2,
                    text: '1080p',
                    type: 'text'
                },
                {
                    rect: ['-237px', '-2px', '124px', '39px', 'auto', 'auto'],
                    font: ['open-sans, sans-serif', 34, 'rgba(255,255,255,1.00)', '300', 'none', 'normal'],
                    align: 'left',
                    id: 'Text3Copy13',
                    opacity: 0.2,
                    text: '1440p',
                    type: 'text'
                },
                {
                    rect: ['-127px', '-12px', '0px', '58px', 'auto', 'auto'],
                    stroke: [1, 'rgb(255, 255, 255)', 'solid'],
                    id: 'Rectangle3',
                    opacity: 0.2,
                    type: 'rect',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    rect: ['-381px', '4px', '146px', '39px', 'auto', 'auto'],
                    font: ['open-sans, sans-serif', 28, 'rgba(255,255,255,1.00)', '300', 'none', 'normal'],
                    align: 'left',
                    id: 'Text3Copy18',
                    opacity: 0.2,
                    text: '2.7K 17:9',
                    type: 'text'
                },
                {
                    rect: ['-598px', '4px', '105px', '39px', 'auto', 'auto'],
                    font: ['open-sans, sans-serif', 28, 'rgba(255,255,255,1.00)', '300', 'none', 'normal'],
                    align: 'left',
                    id: 'Text3Copy21',
                    opacity: 0.2,
                    text: '4K 17:9',
                    type: 'text'
                },
                {
                    rect: ['-251px', '-12px', '0px', '58px', 'auto', 'auto'],
                    stroke: [1, 'rgb(255, 255, 255)', 'solid'],
                    id: 'Rectangle3Copy6',
                    opacity: 0.2,
                    type: 'rect',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    rect: ['-669px', '-2px', '42px', '39px', 'auto', 'auto'],
                    font: ['open-sans, sans-serif', 34, 'rgba(255,255,255,1.00)', '300', 'none', 'normal'],
                    align: 'left',
                    id: 'Text3Copy19',
                    opacity: 0.2,
                    text: '4K',
                    type: 'text'
                },
                {
                    rect: ['-397px', '-12px', '0px', '58px', 'auto', 'auto'],
                    stroke: [1, 'rgb(255, 255, 255)', 'solid'],
                    id: 'Rectangle3Copy7',
                    opacity: 0.2,
                    type: 'rect',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    rect: ['-493px', '-12px', '0px', '58px', 'auto', 'auto'],
                    stroke: [1, 'rgb(255, 255, 255)', 'solid'],
                    id: 'Rectangle3Copy8',
                    opacity: 0.2,
                    type: 'rect',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    rect: ['-615px', '-12px', '0px', '58px', 'auto', 'auto'],
                    stroke: [1, 'rgb(255, 255, 255)', 'solid'],
                    id: 'Rectangle3Copy9',
                    opacity: 0.2,
                    type: 'rect',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    rect: ['-476px', '-2px', '42px', '39px', 'auto', 'auto'],
                    font: ['open-sans, sans-serif', 34, 'rgba(255,255,255,1.00)', '300', 'none', 'normal'],
                    align: 'left',
                    id: 'Text3Copy22',
                    opacity: 0.2,
                    text: '2.7K',
                    type: 'text'
                },
                {
                    rect: ['-3px', '-12px', '0px', '58px', 'auto', 'auto'],
                    stroke: [1, 'rgb(255, 255, 255)', 'solid'],
                    id: 'Rectangle3Copy',
                    opacity: 0.2,
                    type: 'rect',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    rect: ['148px', '-12px', '0px', '58px', 'auto', 'auto'],
                    stroke: [1, 'rgb(255, 255, 255)', 'solid'],
                    id: 'Rectangle3Copy2',
                    opacity: 0.2,
                    type: 'rect',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    rect: ['252px', '-12px', '0px', '58px', 'auto', 'auto'],
                    stroke: [1, 'rgb(255, 255, 255)', 'solid'],
                    id: 'Rectangle3Copy3',
                    opacity: 0.2,
                    type: 'rect',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    rect: ['384px', '-12px', '0px', '58px', 'auto', 'auto'],
                    stroke: [1, 'rgb(255, 255, 255)', 'solid'],
                    id: 'Rectangle3Copy5',
                    opacity: 0.2,
                    type: 'rect',
                    fill: ['rgba(255,255,255,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle3Copy8}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "top", '-12px'],
                ["transform", "scaleY", '0'],
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '0.2'],
                ["style", "left", '-493px'],
                ["style", "width", '0px']
            ],
            "${_Text3Copy21}": [
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '-598px'],
                ["style", "font-size", '28px'],
                ["style", "top", '4px'],
                ["transform", "scaleY", '0'],
                ["style", "height", '39px'],
                ["style", "width", '105px'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '0.20000000298023224']
            ],
            "${_Text3Copy17}": [
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '266px'],
                ["style", "font-size", '34px'],
                ["style", "top", '-7px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '39px'],
                ["style", "opacity", '0.2'],
                ["transform", "scaleX", '1'],
                ["style", "width", '105px']
            ],
            "${_Rectangle3Copy2}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "top", '-12px'],
                ["transform", "scaleY", '0'],
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '0.2'],
                ["style", "left", '148px'],
                ["style", "width", '0px']
            ],
            "${_Text3Copy18}": [
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '-381px'],
                ["style", "font-size", '28px'],
                ["style", "top", '4px'],
                ["transform", "scaleY", '0'],
                ["style", "height", '39px'],
                ["style", "opacity", '0.20000000298023224'],
                ["transform", "scaleX", '0'],
                ["style", "width", '146px']
            ],
            "${_Text3Copy15}": [
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '266px'],
                ["style", "font-size", '34px'],
                ["style", "top", '-2px'],
                ["transform", "scaleY", '0'],
                ["style", "height", '39px'],
                ["style", "width", '118px'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '0.2']
            ],
            "${_Text3Copy12}": [
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '-113px'],
                ["style", "font-size", '34px'],
                ["style", "top", '-2px'],
                ["transform", "scaleY", '0'],
                ["style", "height", '39px'],
                ["transform", "scaleX", '0'],
                ["style", "width", '124px'],
                ["style", "opacity", '0.2']
            ],
            "${_RectangleCopy}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(23,27,32,1.00)'],
                ["style", "left", '0px'],
                ["color", "border-color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '88px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '1px'],
                ["style", "width", '144px']
            ],
            "${symbolSelector}": [
                ["style", "height", '90px'],
                ["style", "width", '146px']
            ],
            "${_Rectangle3Copy6}": [
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["transform", "scaleY", '0'],
                ["style", "top", '-12px'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '0.20000000298023224'],
                ["style", "left", '-251px'],
                ["style", "width", '0px']
            ],
            "${_Rectangle3Copy7}": [
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '0.2'],
                ["style", "left", '-397px'],
                ["style", "width", '0px'],
                ["style", "top", '-12px'],
                ["transform", "scaleY", '0'],
                ["color", "border-color", 'rgba(255,255,255,0.00)'],
                ["color", "background-color", 'rgba(255,255,255,1.00)']
            ],
            "${_Rectangle3Copy3}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "top", '-12px'],
                ["transform", "scaleY", '0'],
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '0.2'],
                ["style", "left", '252px'],
                ["style", "width", '0px']
            ],
            "${_Text3Copy2}": [
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '11px'],
                ["style", "font-size", '34px'],
                ["style", "top", '13px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '39px'],
                ["style", "width", '135px'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1']
            ],
            "${_Rectangle3}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "top", '-12px'],
                ["transform", "scaleY", '0'],
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '0.20000000298023224'],
                ["style", "left", '-127px'],
                ["style", "width", '0px']
            ],
            "${_Resolution}": [
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '500'],
                ["style", "left", '28px'],
                ["style", "width", '90px'],
                ["style", "top", '62px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '20px'],
                ["style", "font-size", '18px'],
                ["transform", "scaleX", '1']
            ],
            "${_Text3Copy14}": [
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '161px'],
                ["style", "font-size", '34px'],
                ["style", "top", '-2px'],
                ["transform", "scaleY", '0'],
                ["style", "height", '39px'],
                ["transform", "scaleX", '0'],
                ["style", "width", '79px'],
                ["style", "opacity", '0.2']
            ],
            "${_Rectangle3Copy}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "top", '-12px'],
                ["transform", "scaleY", '0'],
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '0.2'],
                ["style", "left", '-3px'],
                ["style", "width", '0px']
            ],
            "${_Text3Copy22}": [
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '-476px'],
                ["style", "font-size", '34px'],
                ["style", "top", '-2px'],
                ["transform", "scaleY", '0'],
                ["style", "height", '39px'],
                ["style", "opacity", '0.20000000298023224'],
                ["transform", "scaleX", '0'],
                ["style", "width", '42px']
            ],
            "${_Rectangle3Copy5}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "top", '-12px'],
                ["transform", "scaleY", '0'],
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '0.2'],
                ["style", "left", '384px'],
                ["style", "width", '0px']
            ],
            "${_Text3Copy16}": [
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '397px'],
                ["style", "font-size", '34px'],
                ["style", "top", '-2px'],
                ["transform", "scaleY", '0'],
                ["style", "height", '39px'],
                ["transform", "scaleX", '0'],
                ["style", "width", '105px'],
                ["style", "opacity", '0.2']
            ],
            "${_Text3Copy13}": [
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '-237px'],
                ["style", "font-size", '34px'],
                ["style", "top", '-2px'],
                ["transform", "scaleY", '0'],
                ["style", "height", '39px'],
                ["style", "width", '124px'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '0.20000000298023224']
            ],
            "${_Text3Copy19}": [
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '-669px'],
                ["style", "font-size", '34px'],
                ["style", "top", '-2px'],
                ["transform", "scaleY", '0'],
                ["style", "height", '39px'],
                ["style", "width", '42px'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '0.2']
            ],
            "${_Rectangle3Copy9}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "top", '-12px'],
                ["transform", "scaleY", '0'],
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '0.2'],
                ["style", "left", '-615px'],
                ["style", "width", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3000,
            autoPlay: true,
            timeline: [
                { id: "eid387", tween: [ "style", "${_Text3Copy16}", "left", '910px', { fromValue: '397px'}], position: 1000, duration: 1500, easing: "easeInOutBack" },
                { id: "eid497", tween: [ "style", "${_Text3Copy2}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0, easing: "easeInOutBack" },
                { id: "eid500", tween: [ "style", "${_Text3Copy2}", "opacity", '0.2', { fromValue: '1'}], position: 1549, duration: 128, easing: "easeInOutBack" },
                { id: "eid460", tween: [ "style", "${_Text3Copy2}", "top", '-3px', { fromValue: '13px'}], position: 167, duration: 167, easing: "easeInOutSine" },
                { id: "eid105", tween: [ "style", "${_RectangleCopy}", "left", '-237px', { fromValue: '0px'}], position: 0, duration: 333, easing: "easeInOutSine" },
                { id: "eid999", tween: [ "style", "${_RectangleCopy}", "left", '-237px', { fromValue: '-237px'}], position: 333, duration: 167, easing: "easeInOutSine" },
                { id: "eid371", tween: [ "style", "${_Text3Copy12}", "left", '400px', { fromValue: '-113px'}], position: 1000, duration: 1500, easing: "easeInOutBack" },
                { id: "eid373", tween: [ "style", "${_Text3Copy14}", "left", '674px', { fromValue: '161px'}], position: 1000, duration: 1500, easing: "easeInOutBack" },
                { id: "eid443", tween: [ "style", "${_Text3Copy18}", "opacity", '1', { fromValue: '0.20000000298023224'}], position: 1750, duration: 86, easing: "easeInOutBack" },
                { id: "eid448", tween: [ "style", "${_Text3Copy18}", "opacity", '0.2', { fromValue: '1'}], position: 1836, duration: 135, easing: "easeInOutBack" },
                { id: "eid250", tween: [ "transform", "${_Text3Copy12}", "scaleX", '1', { fromValue: '0'}], position: 167, duration: 167, easing: "easeInOutSine" },
                { id: "eid201", tween: [ "style", "${_Text3Copy22}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid3458", tween: [ "style", "${_Text3Copy22}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid3459", tween: [ "style", "${_Text3Copy22}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid3460", tween: [ "style", "${_Text3Copy22}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid3461", tween: [ "style", "${_Text3Copy22}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid383", tween: [ "style", "${_Rectangle3Copy2}", "left", '661px', { fromValue: '148px'}], position: 1000, duration: 1500, easing: "easeInOutBack" },
                { id: "eid393", tween: [ "style", "${_Rectangle3Copy}", "left", '510px', { fromValue: '-3px'}], position: 1000, duration: 1500, easing: "easeInOutBack" },
                { id: "eid375", tween: [ "style", "${_Text3Copy21}", "left", '-85px', { fromValue: '-598px'}], position: 1000, duration: 1500, easing: "easeInOutBack" },
                { id: "eid275", tween: [ "transform", "${_Text3Copy18}", "scaleY", '1', { fromValue: '0'}], position: 167, duration: 167, easing: "easeInOutSine" },
                { id: "eid381", tween: [ "style", "${_Text3Copy15}", "left", '779px', { fromValue: '266px'}], position: 1000, duration: 1500, easing: "easeInOutBack" },
                { id: "eid254", tween: [ "transform", "${_Text3Copy21}", "scaleX", '1', { fromValue: '0'}], position: 167, duration: 167, easing: "easeInOutSine" },
                { id: "eid420", tween: [ "style", "${_Text3Copy12}", "opacity", '0.2', { fromValue: '0.2'}], position: 1000, duration: 0, easing: "easeInOutBack" },
                { id: "eid426", tween: [ "style", "${_Text3Copy12}", "opacity", '1', { fromValue: '0.20000000298023224'}], position: 1549, duration: 128, easing: "easeInOutBack" },
                { id: "eid466", tween: [ "style", "${_Text3Copy12}", "opacity", '0.2', { fromValue: '1'}], position: 1677, duration: 73, easing: "easeInOutBack" },
                { id: "eid242", tween: [ "transform", "${_Rectangle3Copy6}", "scaleX", '1', { fromValue: '0'}], position: 167, duration: 167, easing: "easeInOutSine" },
                { id: "eid259", tween: [ "transform", "${_Rectangle3}", "scaleY", '1', { fromValue: '0'}], position: 167, duration: 167, easing: "easeInOutSine" },
                { id: "eid377", tween: [ "style", "${_Rectangle3Copy8}", "left", '20px', { fromValue: '-493px'}], position: 1000, duration: 1500, easing: "easeInOutBack" },
                { id: "eid236", tween: [ "transform", "${_Text3Copy19}", "scaleX", '1', { fromValue: '0'}], position: 167, duration: 167, easing: "easeInOutSine" },
                { id: "eid273", tween: [ "transform", "${_Rectangle3Copy}", "scaleY", '1', { fromValue: '0'}], position: 167, duration: 167, easing: "easeInOutSine" },
                { id: "eid200", tween: [ "style", "${_Rectangle3Copy}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid3462", tween: [ "style", "${_Rectangle3Copy}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid3463", tween: [ "style", "${_Rectangle3Copy}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid3464", tween: [ "style", "${_Rectangle3Copy}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid3465", tween: [ "style", "${_Rectangle3Copy}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid461", tween: [ "transform", "${_Text3Copy2}", "scaleX", '1', { fromValue: '1'}], position: 0, duration: 0, easing: "easeInOutBack" },
                { id: "eid357", tween: [ "style", "${_Text3Copy19}", "left", '-156px', { fromValue: '-669px'}], position: 1000, duration: 1500, easing: "easeInOutBack" },
                { id: "eid106", tween: [ "style", "${_RectangleCopy}", "top", '-30px', { fromValue: '0px'}], position: 0, duration: 500, easing: "easeInOutSine" },
                { id: "eid274", tween: [ "transform", "${_Text3Copy18}", "scaleX", '1', { fromValue: '0'}], position: 167, duration: 167, easing: "easeInOutSine" },
                { id: "eid255", tween: [ "transform", "${_Text3Copy21}", "scaleY", '1', { fromValue: '0'}], position: 167, duration: 167, easing: "easeInOutSine" },
                { id: "eid3241", tween: [ "style", "${_Text3Copy15}", "width", '118px', { fromValue: '118px'}], position: 1677, duration: 0 },
                { id: "eid389", tween: [ "style", "${_Rectangle3Copy9}", "left", '-102px', { fromValue: '-615px'}], position: 1000, duration: 1500, easing: "easeInOutBack" },
                { id: "eid451", tween: [ "style", "${_Text3Copy21}", "opacity", '0.70241362086641', { fromValue: '0.20000000298023224'}], position: 1970, duration: 180, easing: "easeInOutBack" },
                { id: "eid457", tween: [ "style", "${_Text3Copy21}", "opacity", '0.2', { fromValue: '0.7024139761924744'}], position: 2151, duration: 349, easing: "easeInOutBack" },
                { id: "eid238", tween: [ "transform", "${_Rectangle3Copy5}", "scaleX", '1', { fromValue: '0'}], position: 167, duration: 167, easing: "easeInOutSine" },
                { id: "eid262", tween: [ "transform", "${_Rectangle3Copy2}", "scaleX", '1', { fromValue: '0'}], position: 167, duration: 167, easing: "easeInOutSine" },
                { id: "eid245", tween: [ "transform", "${_Text3Copy22}", "scaleY", '1', { fromValue: '0'}], position: 167, duration: 167, easing: "easeInOutSine" },
                { id: "eid367", tween: [ "style", "${_Text3Copy13}", "left", '276px', { fromValue: '-237px'}], position: 1000, duration: 1500, easing: "easeInOutBack" },
                { id: "eid438", tween: [ "style", "${_Rectangle3Copy5}", "opacity", '0.2', { fromValue: '0.2'}], position: 1750, duration: 0, easing: "easeInOutBack" },
                { id: "eid439", tween: [ "style", "${_Rectangle3Copy5}", "opacity", '0.2', { fromValue: '0.2'}], position: 1836, duration: 0, easing: "easeInOutBack" },
                { id: "eid260", tween: [ "transform", "${_Text3Copy15}", "scaleX", '1', { fromValue: '0'}], position: 167, duration: 167, easing: "easeInOutSine" },
                { id: "eid243", tween: [ "transform", "${_Rectangle3Copy6}", "scaleY", '1', { fromValue: '0'}], position: 167, duration: 167, easing: "easeInOutSine" },
                { id: "eid462", tween: [ "transform", "${_Text3Copy2}", "scaleY", '1', { fromValue: '1'}], position: 0, duration: 0, easing: "easeInOutBack" },
                { id: "eid102", tween: [ "style", "${_RectangleCopy}", "width", '735px', { fromValue: '144px'}], position: 0, duration: 333, easing: "easeInOutSine" },
                { id: "eid1000", tween: [ "style", "${_RectangleCopy}", "width", '720px', { fromValue: '735px'}], position: 333, duration: 167, easing: "easeInOutSine" },
                { id: "eid197", tween: [ "style", "${_Rectangle3Copy5}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid3466", tween: [ "style", "${_Rectangle3Copy5}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid3467", tween: [ "style", "${_Rectangle3Copy5}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid3468", tween: [ "style", "${_Rectangle3Copy5}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid3469", tween: [ "style", "${_Rectangle3Copy5}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid251", tween: [ "transform", "${_Text3Copy12}", "scaleY", '1', { fromValue: '0'}], position: 167, duration: 167, easing: "easeInOutSine" },
                { id: "eid379", tween: [ "style", "${_Rectangle3}", "left", '386px', { fromValue: '-127px'}], position: 1000, duration: 1500, easing: "easeInOutBack" },
                { id: "eid246", tween: [ "transform", "${_Text3Copy13}", "scaleX", '1', { fromValue: '0'}], position: 167, duration: 167, easing: "easeInOutSine" },
                { id: "eid3166", tween: [ "style", "${_Text3Copy2}", "width", '135px', { fromValue: '135px'}], position: 0, duration: 0 },
                { id: "eid237", tween: [ "transform", "${_Text3Copy19}", "scaleY", '1', { fromValue: '0'}], position: 167, duration: 167, easing: "easeInOutSine" },
                { id: "eid214", tween: [ "style", "${_Text3Copy14}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid3470", tween: [ "style", "${_Text3Copy14}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid3471", tween: [ "style", "${_Text3Copy14}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid3472", tween: [ "style", "${_Text3Copy14}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid3473", tween: [ "style", "${_Text3Copy14}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid266", tween: [ "transform", "${_Text3Copy16}", "scaleX", '1', { fromValue: '0'}], position: 167, duration: 167, easing: "easeInOutSine" },
                { id: "eid261", tween: [ "transform", "${_Text3Copy15}", "scaleY", '1', { fromValue: '0'}], position: 167, duration: 167, easing: "easeInOutSine" },
                { id: "eid257", tween: [ "transform", "${_Rectangle3Copy8}", "scaleY", '1', { fromValue: '0'}], position: 167, duration: 167, easing: "easeInOutSine" },
                { id: "eid363", tween: [ "style", "${_Rectangle3Copy6}", "left", '262px', { fromValue: '-251px'}], position: 1000, duration: 1500, easing: "easeInOutBack" },
                { id: "eid263", tween: [ "transform", "${_Rectangle3Copy2}", "scaleY", '1', { fromValue: '0'}], position: 167, duration: 167, easing: "easeInOutSine" },
                { id: "eid211", tween: [ "style", "${_Text3Copy12}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid3474", tween: [ "style", "${_Text3Copy12}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid3475", tween: [ "style", "${_Text3Copy12}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid3476", tween: [ "style", "${_Text3Copy12}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid3477", tween: [ "style", "${_Text3Copy12}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid269", tween: [ "transform", "${_Rectangle3Copy9}", "scaleY", '1', { fromValue: '0'}], position: 167, duration: 167, easing: "easeInOutSine" },
                { id: "eid247", tween: [ "transform", "${_Text3Copy13}", "scaleY", '1', { fromValue: '0'}], position: 167, duration: 167, easing: "easeInOutSine" },
                { id: "eid209", tween: [ "style", "${_Rectangle3}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid3478", tween: [ "style", "${_Rectangle3}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid3479", tween: [ "style", "${_Rectangle3}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid3480", tween: [ "style", "${_Rectangle3}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid3481", tween: [ "style", "${_Rectangle3}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid253", tween: [ "transform", "${_Text3Copy14}", "scaleY", '1', { fromValue: '0'}], position: 167, duration: 167, easing: "easeInOutSine" },
                { id: "eid208", tween: [ "style", "${_Text3Copy18}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid3482", tween: [ "style", "${_Text3Copy18}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid3483", tween: [ "style", "${_Text3Copy18}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid3484", tween: [ "style", "${_Text3Copy18}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid3485", tween: [ "style", "${_Text3Copy18}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid272", tween: [ "transform", "${_Rectangle3Copy}", "scaleX", '1', { fromValue: '0'}], position: 167, duration: 167, easing: "easeInOutSine" },
                { id: "eid241", tween: [ "transform", "${_Rectangle3Copy3}", "scaleY", '1', { fromValue: '0'}], position: 167, duration: 167, easing: "easeInOutSine" },
                { id: "eid100", tween: [ "style", "${_RectangleCopy}", "height", '118px', { fromValue: '88px'}], position: 0, duration: 500, easing: "easeInOutSine" },
                { id: "eid202", tween: [ "style", "${_Rectangle3Copy9}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid3486", tween: [ "style", "${_Rectangle3Copy9}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid3487", tween: [ "style", "${_Rectangle3Copy9}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid3488", tween: [ "style", "${_Rectangle3Copy9}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid3489", tween: [ "style", "${_Rectangle3Copy9}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid365", tween: [ "style", "${_Text3Copy22}", "left", '37px', { fromValue: '-476px'}], position: 1000, duration: 1500, easing: "easeInOutBack" },
                { id: "eid203", tween: [ "style", "${_Rectangle3Copy8}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid3490", tween: [ "style", "${_Rectangle3Copy8}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid3491", tween: [ "style", "${_Rectangle3Copy8}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid3492", tween: [ "style", "${_Rectangle3Copy8}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid3493", tween: [ "style", "${_Rectangle3Copy8}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid391", tween: [ "style", "${_Rectangle3Copy7}", "left", '116px', { fromValue: '-397px'}], position: 1000, duration: 1500, easing: "easeInOutBack" },
                { id: "eid204", tween: [ "style", "${_Rectangle3Copy7}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid3494", tween: [ "style", "${_Rectangle3Copy7}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid3495", tween: [ "style", "${_Rectangle3Copy7}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid3496", tween: [ "style", "${_Rectangle3Copy7}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid3497", tween: [ "style", "${_Rectangle3Copy7}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid205", tween: [ "style", "${_Text3Copy19}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid3498", tween: [ "style", "${_Text3Copy19}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid3499", tween: [ "style", "${_Text3Copy19}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid3500", tween: [ "style", "${_Text3Copy19}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid3501", tween: [ "style", "${_Text3Copy19}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid206", tween: [ "style", "${_Rectangle3Copy6}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid3502", tween: [ "style", "${_Rectangle3Copy6}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid3503", tween: [ "style", "${_Rectangle3Copy6}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid3504", tween: [ "style", "${_Rectangle3Copy6}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid3505", tween: [ "style", "${_Rectangle3Copy6}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid207", tween: [ "style", "${_Text3Copy21}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid3506", tween: [ "style", "${_Text3Copy21}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid3507", tween: [ "style", "${_Text3Copy21}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid3508", tween: [ "style", "${_Text3Copy21}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid3509", tween: [ "style", "${_Text3Copy21}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid270", tween: [ "transform", "${_Rectangle3Copy7}", "scaleX", '1', { fromValue: '0'}], position: 167, duration: 167, easing: "easeInOutSine" },
                { id: "eid199", tween: [ "style", "${_Rectangle3Copy2}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid3510", tween: [ "style", "${_Rectangle3Copy2}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid3511", tween: [ "style", "${_Rectangle3Copy2}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid3512", tween: [ "style", "${_Rectangle3Copy2}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid3513", tween: [ "style", "${_Rectangle3Copy2}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid210", tween: [ "style", "${_Text3Copy13}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid3514", tween: [ "style", "${_Text3Copy13}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid3515", tween: [ "style", "${_Text3Copy13}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid3516", tween: [ "style", "${_Text3Copy13}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid3517", tween: [ "style", "${_Text3Copy13}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid395", tween: [ "style", "${_Text3Copy18}", "left", '132px', { fromValue: '-381px'}], position: 1000, duration: 1500, easing: "easeInOutBack" },
                { id: "eid256", tween: [ "transform", "${_Rectangle3Copy8}", "scaleX", '1', { fromValue: '0'}], position: 167, duration: 167, easing: "easeInOutSine" },
                { id: "eid252", tween: [ "transform", "${_Text3Copy14}", "scaleX", '1', { fromValue: '0'}], position: 167, duration: 167, easing: "easeInOutSine" },
                { id: "eid271", tween: [ "transform", "${_Rectangle3Copy7}", "scaleY", '1', { fromValue: '0'}], position: 167, duration: 167, easing: "easeInOutSine" },
                { id: "eid258", tween: [ "transform", "${_Rectangle3}", "scaleX", '1', { fromValue: '0'}], position: 167, duration: 167, easing: "easeInOutSine" },
                { id: "eid111", tween: [ "style", "${_Text3Copy2}", "left", '11px', { fromValue: '11px'}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid385", tween: [ "style", "${_Text3Copy2}", "left", '524px', { fromValue: '11px'}], position: 1000, duration: 1500, easing: "easeInOutBack" },
                { id: "eid244", tween: [ "transform", "${_Text3Copy22}", "scaleX", '1', { fromValue: '0'}], position: 167, duration: 167, easing: "easeInOutSine" },
                { id: "eid361", tween: [ "style", "${_Rectangle3Copy3}", "left", '765px', { fromValue: '252px'}], position: 1000, duration: 1500, easing: "easeInOutBack" },
                { id: "eid213", tween: [ "style", "${_Text3Copy15}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid3518", tween: [ "style", "${_Text3Copy15}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid3519", tween: [ "style", "${_Text3Copy15}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid3520", tween: [ "style", "${_Text3Copy15}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid3521", tween: [ "style", "${_Text3Copy15}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid212", tween: [ "style", "${_Text3Copy16}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid3522", tween: [ "style", "${_Text3Copy16}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid3523", tween: [ "style", "${_Text3Copy16}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid3524", tween: [ "style", "${_Text3Copy16}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid3525", tween: [ "style", "${_Text3Copy16}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid239", tween: [ "transform", "${_Rectangle3Copy5}", "scaleY", '1', { fromValue: '0'}], position: 167, duration: 167, easing: "easeInOutSine" },
                { id: "eid392", tween: [ "style", "${_Rectangle3Copy7}", "top", '-14px', { fromValue: '-12px'}], position: 1000, duration: 1500, easing: "easeInOutBack" },
                { id: "eid446", tween: [ "style", "${_Text3Copy22}", "opacity", '1', { fromValue: '0.20000000298023224'}], position: 1836, duration: 135, easing: "easeInOutBack" },
                { id: "eid453", tween: [ "style", "${_Text3Copy22}", "opacity", '0.80236915650407', { fromValue: '1'}], position: 1970, duration: 180, easing: "easeInOutBack" },
                { id: "eid455", tween: [ "style", "${_Text3Copy22}", "opacity", '1', { fromValue: '0.8023689985275269'}], position: 2151, duration: 349, easing: "easeInOutBack" },
                { id: "eid198", tween: [ "style", "${_Rectangle3Copy3}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid3526", tween: [ "style", "${_Rectangle3Copy3}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid3527", tween: [ "style", "${_Rectangle3Copy3}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid3528", tween: [ "style", "${_Rectangle3Copy3}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid3529", tween: [ "style", "${_Rectangle3Copy3}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 167, duration: 0, easing: "easeInOutBack" },
                { id: "eid268", tween: [ "transform", "${_Rectangle3Copy9}", "scaleX", '1', { fromValue: '0'}], position: 167, duration: 167, easing: "easeInOutSine" },
                { id: "eid359", tween: [ "style", "${_Rectangle3Copy5}", "left", '897px', { fromValue: '384px'}], position: 1000, duration: 1500, easing: "easeInOutBack" },
                { id: "eid267", tween: [ "transform", "${_Text3Copy16}", "scaleY", '1', { fromValue: '0'}], position: 167, duration: 167, easing: "easeInOutSine" },
                { id: "eid240", tween: [ "transform", "${_Rectangle3Copy3}", "scaleX", '1', { fromValue: '0'}], position: 167, duration: 167, easing: "easeInOutSine" },
                { id: "eid433", tween: [ "style", "${_Text3Copy13}", "opacity", '1', { fromValue: '0.20000000298023224'}], position: 1677, duration: 73, easing: "easeInOutBack" },
                { id: "eid468", tween: [ "style", "${_Text3Copy13}", "opacity", '0.2', { fromValue: '1'}], position: 1750, duration: 86, easing: "easeInOutBack" }            ]
        }
    }
},
"Framerate": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'rect',
                    id: 'RectangleCopy2',
                    stroke: [1, 'rgba(255,255,255,1.00)', 'solid'],
                    rect: ['0px', '0px', '144px', '88px', 'auto', 'auto'],
                    fill: ['rgba(23,27,32,1.00)']
                },
                {
                    rect: ['29px', '63px', '90px', '20px', 'auto', 'auto'],
                    font: ['open-sans, sans-serif', 18, 'rgba(255,255,255,1.00)', '500', 'none', 'normal'],
                    id: 'Text3Copy4',
                    text: 'Framerate',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['54px', '13px', '37px', '39px', 'auto', 'auto'],
                    font: ['open-sans, sans-serif', 34, 'rgba(255,255,255,1.00)', '300', 'none', 'normal'],
                    id: 'Text3Copy3',
                    text: '30',
                    align: 'left',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text3Copy4}": [
                ["style", "top", '63px'],
                ["style", "font-size", '18px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '20px'],
                ["style", "font-weight", '500'],
                ["style", "left", '29px'],
                ["style", "width", '90px']
            ],
            "${_RectangleCopy2}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(23,27,32,1.00)'],
                ["style", "left", '0px'],
                ["style", "border-style", 'solid'],
                ["style", "height", '88px'],
                ["color", "border-color", 'rgba(255,255,255,1.00)'],
                ["style", "border-width", '1px'],
                ["style", "width", '144px']
            ],
            "${_Text3Copy3}": [
                ["style", "top", '13px'],
                ["style", "width", '37px'],
                ["style", "height", '39px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '54px'],
                ["style", "font-size", '34px']
            ],
            "${symbolSelector}": [
                ["style", "height", '90px'],
                ["style", "width", '146px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"Fov": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'rect',
                    id: 'RectangleCopy3',
                    stroke: [1, 'rgba(255,255,255,1.00)', 'solid'],
                    rect: ['0px', '0px', '144px', '88px', 'auto', 'auto'],
                    fill: ['rgba(23,27,32,1.00)']
                },
                {
                    rect: ['18px', '63px', '111px', '20px', 'auto', 'auto'],
                    font: ['open-sans, sans-serif', 18, 'rgba(255,255,255,1.00)', '500', 'none', 'normal'],
                    id: 'Text3Copy6',
                    text: 'Field of View',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['7px', '14px', '133px', '39px', 'auto', 'auto'],
                    font: ['open-sans, sans-serif', 28, 'rgba(255,255,255,1.00)', '300', 'none', 'normal'],
                    id: 'Text3Copy5',
                    text: 'Ultra Wide',
                    align: 'left',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text3Copy6}": [
                ["style", "top", '63px'],
                ["style", "width", '111px'],
                ["style", "height", '20px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '500'],
                ["style", "left", '18px'],
                ["style", "font-size", '18px']
            ],
            "${_RectangleCopy3}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(23,27,32,1.00)'],
                ["style", "border-width", '1px'],
                ["color", "border-color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '88px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '0px'],
                ["style", "width", '144px']
            ],
            "${_Text3Copy5}": [
                ["style", "top", '14px'],
                ["style", "font-size", '28px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '39px'],
                ["style", "font-weight", '300'],
                ["style", "left", '7px'],
                ["style", "width", '133px']
            ],
            "${symbolSelector}": [
                ["style", "height", '90px'],
                ["style", "width", '146px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"protune": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '144px', '88px', 'auto', 'auto'],
                    id: 'RectangleCopy6',
                    stroke: [1, 'rgba(255,255,255,1.00)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(23,27,32,1.00)']
                },
                {
                    type: 'text',
                    rect: ['39px', '63px', '68px', '20px', 'auto', 'auto'],
                    id: 'Text3Copy10',
                    text: 'Protune',
                    align: 'left',
                    font: ['open-sans, sans-serif', 18, 'rgba(255,255,255,1.00)', '500', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['43px', '15px', '59px', '39px', 'auto', 'auto'],
                    id: 'Text3Copy9',
                    text: 'OFF',
                    align: 'left',
                    font: ['open-sans, sans-serif', 34, 'rgba(255,255,255,1.00)', '300', 'none', 'normal']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text3Copy9}": [
                ["style", "top", '15px'],
                ["style", "font-size", '34px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '39px'],
                ["style", "font-weight", '300'],
                ["style", "left", '43px'],
                ["style", "width", '59px']
            ],
            "${symbolSelector}": [
                ["style", "height", '90px'],
                ["style", "width", '146px']
            ],
            "${_RectangleCopy6}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(23,27,32,1.00)'],
                ["style", "border-width", '1px'],
                ["color", "border-color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '88px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '0px'],
                ["style", "width", '144px']
            ],
            "${_Text3Copy10}": [
                ["style", "top", '63px'],
                ["style", "width", '68px'],
                ["style", "height", '20px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '500'],
                ["style", "left", '39px'],
                ["style", "font-size", '18px']
            ],
            "${_Symbol_1}": [
                ["style", "opacity", '']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
                { id: "eid2805", tween: [ "style", "${_Symbol_1}", "opacity", '', { fromValue: '0'}], position: 0, duration: 0, easing: "easeInOutSine" }            ]
        }
    }
},
"settings": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'rect',
                    id: 'RectangleCopy5',
                    stroke: [1, 'rgba(255,255,255,1.00)', 'solid'],
                    rect: ['0px', '0px', '144px', '88px', 'auto', 'auto'],
                    fill: ['rgba(23,27,32,1.00)']
                },
                {
                    rect: ['39px', '63px', '68px', '20px', 'auto', 'auto'],
                    font: ['open-sans, sans-serif', 18, 'rgba(255,255,255,1.00)', '500', 'none', 'normal'],
                    id: 'Text3Copy8',
                    text: 'Settings',
                    align: 'left',
                    type: 'text'
                },
                {
                    id: 'cog',
                    type: 'image',
                    rect: ['51px', '13px', '44px', '45px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cog.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text3Copy8}": [
                ["style", "top", '63px'],
                ["style", "font-size", '18px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '20px'],
                ["style", "font-weight", '500'],
                ["style", "left", '39px'],
                ["style", "width", '68px']
            ],
            "${_RectangleCopy5}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(23,27,32,1.00)'],
                ["style", "left", '0px'],
                ["style", "border-style", 'solid'],
                ["style", "height", '88px'],
                ["color", "border-color", 'rgba(255,255,255,1.00)'],
                ["style", "border-width", '1px'],
                ["style", "width", '144px']
            ],
            "${_cog}": [
                ["style", "left", '51px'],
                ["style", "top", '13px']
            ],
            "${symbolSelector}": [
                ["style", "height", '90px'],
                ["style", "width", '146px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"Symbol_1": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'Videobg',
                    type: 'image',
                    rect: ['0px', '0px', '641px', '1136px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Videobg.png', '0px', '0px']
                },
                {
                    id: 'mode',
                    type: 'rect',
                    rect: ['10px', '1036px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'Framerate2',
                    type: 'rect',
                    rect: ['322px', '1036px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'protune',
                    type: 'rect',
                    rect: ['634px', '1036px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'Fov',
                    type: 'rect',
                    rect: ['478px', '1036px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'settings',
                    type: 'rect',
                    rect: ['790px', '1036px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['240px', '616px', '155px', '150px', 'auto', 'auto'],
                    type: 'rect',
                    id: 'Rectangle2',
                    stroke: [1, 'rgb(255, 255, 255)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,0.00)']
                },
                {
                    id: 'Resolution2',
                    type: 'rect',
                    cursor: ['pointer'],
                    rect: ['166px', '1036px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'settings',
                symbolName: 'settings',
                autoPlay: {

               }
            },
            {
                id: 'Framerate2',
                symbolName: 'Framerate',
                autoPlay: {

               }
            },
            {
                id: 'Fov',
                symbolName: 'Fov',
                autoPlay: {

               }
            },
            {
                id: 'mode',
                symbolName: 'mode',
                autoPlay: {

               }
            },
            {
                id: 'Resolution2',
                symbolName: 'Resolution',
                autoPlay: {

               }
            },
            {
                id: 'protune',
                symbolName: 'protune',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_Resolution2}": [
                ["style", "top", '1036px'],
                ["style", "left", '166px'],
                ["style", "cursor", 'pointer']
            ],
            "${_mode}": [
                ["style", "left", '10px'],
                ["style", "top", '1036px']
            ],
            "${_Fov}": [
                ["style", "left", '478px'],
                ["style", "top", '1036px']
            ],
            "${_Framerate2}": [
                ["style", "left", '322px'],
                ["style", "top", '1036px']
            ],
            "${symbolSelector}": [
                ["style", "height", '1136px'],
                ["style", "width", '936px']
            ],
            "${_protune}": [
                ["style", "left", '634px'],
                ["style", "top", '1036px']
            ],
            "${_Videobg}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Rectangle2}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "top", '616px'],
                ["style", "border-style", 'none'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '240px']
            ],
            "${_settings}": [
                ["style", "left", '790px'],
                ["style", "top", '1036px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2500,
            autoPlay: true,
            timeline: [
                { id: "eid50", tween: [ "style", "${_settings}", "left", '484px', { fromValue: '790px'}], position: 0, duration: 1000, easing: "easeInOutBack" },
                { id: "eid74", tween: [ "style", "${_settings}", "left", '790px', { fromValue: '484px'}], position: 1500, duration: 1000, easing: "easeInOutBack" },
                { id: "eid49", tween: [ "style", "${_Fov}", "left", '172px', { fromValue: '478px'}], position: 0, duration: 1000, easing: "easeInOutBack" },
                { id: "eid73", tween: [ "style", "${_Fov}", "left", '478px', { fromValue: '172px'}], position: 1500, duration: 1000, easing: "easeInOutBack" },
                { id: "eid51", tween: [ "style", "${_mode}", "left", '-296px', { fromValue: '10px'}], position: 0, duration: 1000, easing: "easeInOutBack" },
                { id: "eid75", tween: [ "style", "${_mode}", "left", '10px', { fromValue: '-296px'}], position: 1500, duration: 1000, easing: "easeInOutBack" },
                { id: "eid43", tween: [ "style", "${_mode}", "top", '1036px', { fromValue: '1036px'}], position: 0, duration: 0 },
                { id: "eid53", tween: [ "style", "${_protune}", "left", '328px', { fromValue: '634px'}], position: 0, duration: 1000, easing: "easeInOutBack" },
                { id: "eid76", tween: [ "style", "${_protune}", "left", '634px', { fromValue: '328px'}], position: 1500, duration: 1000, easing: "easeInOutBack" },
                { id: "eid46", tween: [ "style", "${_protune}", "top", '1036px', { fromValue: '1036px'}], position: 0, duration: 0 },
                { id: "eid54", tween: [ "style", "${_Framerate2}", "left", '16px', { fromValue: '322px'}], position: 0, duration: 1000, easing: "easeInOutBack" },
                { id: "eid77", tween: [ "style", "${_Framerate2}", "left", '322px', { fromValue: '16px'}], position: 1500, duration: 1000, easing: "easeInOutBack" },
                { id: "eid47", tween: [ "style", "${_Framerate2}", "top", '1036px', { fromValue: '1036px'}], position: 0, duration: 0 },
                { id: "eid48", tween: [ "style", "${_Resolution2}", "top", '1036px', { fromValue: '1036px'}], position: 0, duration: 0 },
                { id: "eid52", tween: [ "style", "${_Resolution2}", "left", '-140px', { fromValue: '166px'}], position: 0, duration: 1000, easing: "easeInOutBack" },
                { id: "eid78", tween: [ "style", "${_Resolution2}", "left", '166px', { fromValue: '-140px'}], position: 1500, duration: 1000, easing: "easeInOutBack" },
                { id: "eid44", tween: [ "style", "${_settings}", "top", '1036px', { fromValue: '1036px'}], position: 0, duration: 0 },
                { id: "eid45", tween: [ "style", "${_Fov}", "top", '1036px', { fromValue: '1036px'}], position: 0, duration: 0 },
                { id: "eid502", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_Resolution2}', [] ], ""], position: 0 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-264160235");
