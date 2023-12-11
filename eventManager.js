/**
 * Registrador de tickets de eventos
 * 
 * Definir la clase EventManager, el cual tendrá un arreglo de eventos que iniciará vacío
La clase debe contar con una variable privada de la clase “perGain” del 30%
La clase debe contar con una variable privada de la clase “totalGain”, que sumará las ganancias de las ventas
Debe contar con el método “createEvent(data)” que recibirá los siguientes parámetros:
id (numérico y auto-incremental)
name
place
price (si no se da: 10 por defecto)
capacity (si no se da: 50 por defecto)
date (si no se da: hoy por defecto)
Debe contar con el método “readEvents()” para devolver todos los eventos.
Debe contar con el método “readEventById(id)” para devolver el evento buscado.
Debe contar con el método “soldTicket(x,id)” para vender x cantidad de entradas del evento.
(al vender no olvidar disminuir la cantidad de cantidad de capacity y aumentar totalGain).
Debe contar con el método “getGain()” para devolver la ganancia hasta el momento.
 */

class EventMannager{
    static #events = []
    static #perGain = 0.3 //Variable privada de la clase, es declarada con un #
    static #totalGain = 0
    constructor(data){
        this.id = EventMannager.#events.length === 0 ? 1 : EventMannager.#events[EventMannager.#events.length-1].id+1 //Genera id auto incremental
        this.name = data.name
        this.place = data.place   
        this.price = data.price || 10
        this.capacity = data.capacity || 50   
        this.date = data.date || new Date()
        EventMannager.#events.push(this)  
    }
    create(data){
        const event = {
            id : EventMannager.#events.length === 0 ? 1 : EventMannager.#events[EventMannager.#events.length-1].id+1,
            name : data.name,
            place : data.place,   
            price : data.price || 10,
            capacity : data.capacity || 50,   
            date : data.date || new Date(), 
        }
        EventMannager.#events.push(event)
    }
    read(){
        return EventMannager.#events
    }
    readById(id){
        return EventMannager.#events.find(each => each.id === Number(id))
    }
    soldTicket(quantity,eventid){
        const event = this.readById(eventid)
        event.capacity = event.capacity - quantity
        EventMannager.#totalGain = EventMannager.#totalGain + quantity * event.price * EventMannager.#perGain
        return true
    }
    getGain(){
        return EventMannager.#totalGain
    }
}

const eventos = new EventMannager(
    {
        name : "La Renga",
        place : "Pompeya"
    });
    eventos.create({
        name : "La Renga",
        place : "Pompeya"
    });
    eventos.create({
        name : "Los Redondos",
        place : "La Bombonera"
    });
    eventos.create({
        name : "Fear lees",
        place : "Estadio Unico Rio de la Plata"
    });

    console.log(eventos.read())

    console.log(eventos.readById(2))

eventos.soldTicket(5,2)

console.log(eventos.read())

console.log(eventos.getGain())

