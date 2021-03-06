import { Stream } from 'xstream';
import { DOMSource, VNode } from '@cycle/dom';
import { HTTPSource, RequestOptions } from '@cycle/http';

declare var module : any;

export type Sources = {
    DOM : DOMSource;
    HTTP : HTTPSource;
    websocket : Stream<WebsocketData>;
    state : Stream<State>;
    Time : any;
}

export type Sinks = {
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
    pad0 : number;
    pad1 : number;
    pad2 : number;
    pad3 : number;
}

export interface WebsocketData {
    time : Date;
    accel : Vector;
    gyro : Vector;
    magVector : Vector;
    sunVector : Vector;
    temp : Temperature;
    magRaw : MagRaw;
    sunRaw : SunRaw;
}

export interface State {
    domains: [number, number][];
    values: [Date, number][][];
}
