import { Stream } from 'xstream';
import { VNode } from '@cycle/dom';
import { DOMSource } from '@cycle/dom/xstream-typings';
import { HTTPSource, RequestOptions } from '@cycle/http';

export interface Sources
{
    DOM : DOMSource;
    HTTP : HTTPSource;
    websocket : Stream<WebsocketData>;
    state : Stream<WebsocketData[]>;
}

export interface Sinks
{
    DOM? : Stream<VNode>;
    HTTP? : Stream<RequestOptions>;
    state? : Stream<WebsocketData>;
}

export type Component = (s : Sources) => Sinks;

export interface Vector {
    x : number;
    y : number;
    z : number;
}

export interface Temperature {
    bmx : number;
    t1 : number;
    t2 : number;
    t3 : number;
}

export interface MagRaw extends Vector {
    r : number;
}

export interface SunRaw {
    pads : [number, number, number, number];
}

export interface WebsocketData {
    time : Date;
    accel : Vector;
    gyro : Vector;
    magVector : Vector;
    sunVector : Vector;
    temp : Temperature;
    magRaw? : MagRaw;
    sunRaw? : SunRaw;
}