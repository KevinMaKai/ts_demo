// declare function jQuery(selector: string): any;
// declare function jQuery(domReadyCallback: () => any): any;

declare namespace jQuery1{
    function ajax(url:string,settings?:any):void;
    const version:number;
    class Event{
        blur(eventType:EventType):void
    }
    enum EventType{
        CustomClick
    }
    namespace fn {
        function extend(Object: any):void;
    }
}

declare namespace jQuery2.fn{
    function extend(object:any):void;
}